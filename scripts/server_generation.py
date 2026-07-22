import hashlib
import os
import shutil
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed
from urllib.parse import urlparse

import requests
from bs4 import BeautifulSoup

sys.path.append(os.path.dirname(__file__))

from curse_client import get_mod_download_url, get_mod_file
from utils import apply_release_version, copy_any, load_json, save_json, zip_directory

SERVERPACK_DIRECTORY = "serverpack"
MAX_CONCURRENT_DOWNLOADS = 8
DOWNLOAD_TIMEOUT = (30, 300)


def generate_serverpack_zip(
    version, archive_name, curseforge_api_key=None, download_mods=True
):
    base_dir = os.path.dirname(os.path.abspath(__file__))
    root_dir = os.path.abspath(os.path.join(base_dir, ".."))
    serverpack_dir = os.path.join(root_dir, SERVERPACK_DIRECTORY)

    if os.path.exists(serverpack_dir):
        shutil.rmtree(serverpack_dir)
    os.makedirs(serverpack_dir)

    overrides_src = os.path.join(root_dir, "overrides")
    if not os.path.isdir(overrides_src):
        raise RuntimeError("Required pack input is missing: overrides")
    for name in os.listdir(overrides_src):
        copy_any(os.path.join(overrides_src, name), os.path.join(serverpack_dir, name))
    apply_override_mod_policy(root_dir, serverpack_dir)

    server_files_src = os.path.join(root_dir, "server-files")
    if not os.path.isdir(server_files_src):
        raise RuntimeError("Required pack input is missing: server-files")
    for name in os.listdir(server_files_src):
        copy_any(os.path.join(server_files_src, name), os.path.join(serverpack_dir, name))

    generate_filtered_manifest(root_dir, serverpack_dir, version)
    generate_filtered_modlist(root_dir, serverpack_dir, curseforge_api_key)
    update_server_scripts_with_versions(serverpack_dir)
    if download_mods:
        download_mods_from_curseforge(serverpack_dir, curseforge_api_key)
    update_readme(root_dir, serverpack_dir, curseforge_api_key)

    zip_path = os.path.join(root_dir, archive_name)
    zip_directory(serverpack_dir, zip_path)
    print(f"Server pack zipped at: {zip_path}")
    return zip_path


def apply_override_mod_policy(root_dir, serverpack_dir):
    config = load_json(os.path.join(root_dir, "server-mods-config.json"))
    mods_dir = os.path.join(serverpack_dir, "mods")
    for entry in config.get("override_mods", []):
        if entry["server"]:
            continue
        path = os.path.join(mods_dir, entry["filename"])
        if os.path.isfile(path):
            os.remove(path)


def project_id_from_url(url):
    parts = [part for part in urlparse(url).path.split("/") if part]
    if "projects" not in parts:
        return None
    index = parts.index("projects") + 1
    if index >= len(parts) or not parts[index].isdigit():
        return None
    return int(parts[index])


def generate_filtered_modlist(root_dir, serverpack_dir, api_key=None):
    modlist_path = os.path.join(root_dir, "modlist.html")
    output_path = os.path.join(serverpack_dir, "modlist.html")
    config = load_json(os.path.join(root_dir, "server-mods-config.json"))
    blacklist_ids = {entry["id"] for entry in config.get("blacklist", [])}

    with open(modlist_path, "r", encoding="utf-8") as file:
        soup = BeautifulSoup(file, "html.parser")

    filtered = []
    for item in soup.find_all("li"):
        link = item.find("a", href=True)
        if link and project_id_from_url(link["href"]) in blacklist_ids:
            continue
        filtered.append(item)

    for mod in config.get("server_only", []):
        mod_url = f"https://www.curseforge.com/projects/{mod['id']}"
        item = soup.new_tag("li")
        link = soup.new_tag("a", href=mod_url)
        link.string = mod["name"]
        item.append(link)
        filtered.append(item)

    output = BeautifulSoup("<ul></ul>", "html.parser")
    for item in filtered:
        output.ul.append(item)
    with open(output_path, "w", encoding="utf-8") as file:
        file.write(str(output))
    print(f"Filtered modlist generated at: {output_path}")


def generate_filtered_manifest(root_dir, serverpack_dir, version):
    manifest = apply_release_version(
        load_json(os.path.join(root_dir, "manifest.json")), version
    )
    config = load_json(os.path.join(root_dir, "server-mods-config.json"))
    blacklist_ids = {entry["id"] for entry in config.get("blacklist", [])}
    files = [
        entry for entry in manifest["files"] if entry.get("projectID") not in blacklist_ids
    ]
    present_ids = {entry.get("projectID") for entry in files}
    for mod in config.get("server_only", []):
        if mod["id"] in present_ids:
            continue
        files.append(
            {
                "projectID": mod["id"],
                "fileID": mod["file_id"],
                "required": True,
            }
        )
    manifest["files"] = files
    output_path = os.path.join(serverpack_dir, "manifest.json")
    save_json(manifest, output_path)
    print(f"Filtered manifest generated at: {output_path}")


def update_server_scripts_with_versions(serverpack_dir):
    manifest = load_json(os.path.join(serverpack_dir, "manifest.json"))
    game_version = manifest["minecraft"]["version"]
    primary = next(
        loader for loader in manifest["minecraft"]["modLoaders"] if loader.get("primary")
    )
    loader_id = primary["id"]
    if not loader_id.startswith("neoforge-"):
        raise RuntimeError(f"Unsupported server loader: {loader_id}")
    loader_version = loader_id.removeprefix("neoforge-")
    replacements = {
        "{{MINECRAFT_VERSION}}": game_version,
        "{{NEOFORGE_VERSION}}": loader_version,
    }

    for filename in ("startserver.bat", "startserver.sh"):
        path = os.path.join(serverpack_dir, filename)
        with open(path, "r", encoding="utf-8") as file:
            content = file.read()
        for token, value in replacements.items():
            content = content.replace(token, value)
        if "{{" in content or "}}" in content:
            raise RuntimeError(f"Unresolved template value in {filename}")
        with open(path, "w", encoding="utf-8", newline="") as file:
            file.write(content)


def expected_hash(file_data):
    for entry in file_data.get("hashes", []):
        if entry.get("algo") == 1:
            return "sha1", entry.get("value")
    for entry in file_data.get("hashes", []):
        if entry.get("algo") == 2:
            return "md5", entry.get("value")
    return None, None


def hash_file(path, algorithm):
    digest = hashlib.new(algorithm)
    with open(path, "rb") as file:
        for chunk in iter(lambda: file.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def download_mods_from_curseforge(serverpack_dir, curseforge_api_key=None):
    if not curseforge_api_key:
        raise RuntimeError("CURSEFORGE_API_KEY must be provided to build the server pack")

    manifest = load_json(os.path.join(serverpack_dir, "manifest.json"))
    root_dir = os.path.dirname(serverpack_dir)
    config = load_json(os.path.join(root_dir, "server-mods-config.json"))
    manual_ids = {entry["id"] for entry in config.get("manual_download", [])}
    server_only = {entry["id"]: entry for entry in config.get("server_only", [])}
    mods_dir = os.path.join(serverpack_dir, "mods")
    os.makedirs(mods_dir, exist_ok=True)

    def download(entry):
        project_id = entry["projectID"]
        if not entry.get("required", True):
            print(f"Skipping optional mod {project_id}")
            return
        if project_id in manual_ids:
            print(f"Skipping manual download mod {project_id}")
            return

        file_id = server_only.get(project_id, {}).get("file_id", entry["fileID"])
        file_data = get_mod_file(project_id, file_id, curseforge_api_key)
        if not file_data:
            raise RuntimeError(f"CurseForge returned no metadata for {project_id}/{file_id}")
        filename = file_data.get("fileName")
        if not filename:
            raise RuntimeError(f"CurseForge returned no filename for {project_id}/{file_id}")
        destination = os.path.join(mods_dir, filename)
        algorithm, digest = expected_hash(file_data)
        if os.path.isfile(destination):
            if algorithm and hash_file(destination, algorithm).lower() == digest.lower():
                print(f"Using packaged override {filename}")
                return
            raise RuntimeError(f"Existing server mod conflicts with CurseForge file {filename}")

        download_url = file_data.get("downloadUrl") or get_mod_download_url(
            project_id, file_id, curseforge_api_key
        )
        if not download_url:
            raise RuntimeError(
                f"No CurseForge download URL for {project_id}/{file_id}; declare it in manual_download and provide an override jar"
            )

        temporary = f"{destination}.part"
        print(f"Downloading {filename}")
        response = requests.get(download_url, stream=True, timeout=DOWNLOAD_TIMEOUT)
        response.raise_for_status()
        with open(temporary, "wb") as output:
            for chunk in response.iter_content(chunk_size=1024 * 1024):
                if chunk:
                    output.write(chunk)
        if algorithm and hash_file(temporary, algorithm).lower() != digest.lower():
            os.remove(temporary)
            raise RuntimeError(f"Downloaded file failed its CurseForge hash check: {filename}")
        os.replace(temporary, destination)

    files = manifest.get("files", [])
    workers = min(MAX_CONCURRENT_DOWNLOADS, max(1, len(files)))
    with ThreadPoolExecutor(max_workers=workers) as executor:
        futures = [executor.submit(download, entry) for entry in files]
        for future in as_completed(futures):
            future.result()


def update_readme(root_dir, serverpack_dir, api_key=None):
    config = load_json(os.path.join(root_dir, "server-mods-config.json"))
    manifest = load_json(os.path.join(serverpack_dir, "manifest.json"))
    root_manifest = load_json(os.path.join(root_dir, "manifest.json"))
    root_ids = {entry["projectID"] for entry in root_manifest.get("files", [])}
    manifest_files = {entry["projectID"]: entry for entry in manifest.get("files", [])}

    manual_links = []
    for mod in config.get("manual_download", []):
        if mod["id"] not in root_ids:
            continue
        link = mod.get("url")
        if not link:
            file_entry = manifest_files.get(mod["id"])
            if file_entry:
                link = f"https://www.curseforge.com/projects/{mod['id']}/download/{file_entry['fileID']}"
        if link:
            manual_links.append(f"- {mod['name']}: {link}\n")

    optional_links = []
    for entry in manifest.get("files", []):
        if entry.get("required", True):
            continue
        optional_links.append(
            f"- https://www.curseforge.com/projects/{entry['projectID']}/download/{entry['fileID']}\n"
        )

    server_only_links = []
    for mod in config.get("server_only", []):
        server_only_links.append(
            f"- {mod['name']}: https://www.curseforge.com/projects/{mod['id']}\n"
        )

    readme_path = os.path.join(serverpack_dir, "README.md")
    with open(readme_path, "a", encoding="utf-8") as readme:
        if manual_links:
            readme.write("\n## Manual Downloads\n")
            readme.writelines(manual_links)
        if optional_links:
            readme.write("\n## Optional Mods\n")
            readme.writelines(optional_links)
        if server_only_links:
            readme.write("\n## Server Only Mods\n")
            readme.writelines(server_only_links)
    print(f"README updated at: {readme_path}")
