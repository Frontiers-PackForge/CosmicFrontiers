import os
from collections import Counter
from urllib.parse import urlparse

from utils import get_display_version, load_json, sha256_file


def validate_release(root_dir, expected_version):
    manifest = load_json(os.path.join(root_dir, "manifest.json"))
    config = load_json(os.path.join(root_dir, "server-mods-config.json"))
    errors = []

    if manifest.get("manifestType") != "minecraftModpack":
        errors.append("manifestType must be minecraftModpack")
    if manifest.get("manifestVersion") != 1:
        errors.append("manifestVersion must be 1")
    if manifest.get("overrides") != "overrides":
        errors.append("manifest overrides directory must be 'overrides'")

    files = manifest.get("files")
    if not isinstance(files, list) or not files:
        errors.append("manifest files must be a non-empty list")
        files = []

    project_ids = []
    for index, entry in enumerate(files):
        project_id = entry.get("projectID")
        file_id = entry.get("fileID")
        if not isinstance(project_id, int) or project_id <= 0:
            errors.append(f"manifest file {index} has an invalid projectID")
        else:
            project_ids.append(project_id)
        if not isinstance(file_id, int) or file_id <= 0:
            errors.append(f"manifest file {index} has an invalid fileID")
        if not isinstance(entry.get("required"), bool):
            errors.append(f"manifest file {index} must declare required as a boolean")

    duplicate_projects = sorted(
        project_id for project_id, count in Counter(project_ids).items() if count > 1
    )
    if duplicate_projects:
        errors.append(f"manifest contains duplicate project IDs: {duplicate_projects}")

    for required in config.get("required_manifest_projects", []):
        if required.get("id") not in project_ids:
            errors.append(
                f"required manifest project {required.get('name', required.get('id'))} ({required.get('id')}) is missing"
            )

    minecraft = manifest.get("minecraft", {})
    game_version = minecraft.get("version")
    loaders = minecraft.get("modLoaders", [])
    primary_loaders = [loader for loader in loaders if loader.get("primary")]
    if len(primary_loaders) != 1:
        errors.append("manifest must contain exactly one primary mod loader")
        loader_id = ""
    else:
        loader_id = primary_loaders[0].get("id", "")
    if not loader_id.startswith("neoforge-"):
        errors.append(f"primary mod loader must be NeoForge, found {loader_id!r}")
    loader_version = loader_id.removeprefix("neoforge-")
    if not game_version:
        errors.append("manifest is missing the Minecraft version")
    if not loader_version:
        errors.append("manifest is missing the NeoForge version")

    version_parts = expected_version.rsplit("+", 1)
    if len(version_parts) != 2 or not version_parts[0] or not version_parts[1]:
        errors.append("release version must end with +<minecraft-version>")
    elif game_version and version_parts[1] != game_version:
        errors.append(
            f"release version targets Minecraft {version_parts[1]!r}, but the manifest targets {game_version!r}"
        )
    if any(character in expected_version for character in '<>:"/\\|?*'):
        errors.append("release version contains characters that are invalid in an archive filename")

    declared_overrides = config.get("override_mods", [])
    declared_names = [entry.get("filename") for entry in declared_overrides]
    duplicate_overrides = sorted(
        name for name, count in Counter(declared_names).items() if name and count > 1
    )
    if duplicate_overrides:
        errors.append(f"override_mods contains duplicate filenames: {duplicate_overrides}")

    override_dir = os.path.join(root_dir, "overrides", "mods")
    actual_overrides = set()
    if os.path.isdir(override_dir):
        actual_overrides = {
            filename
            for filename in os.listdir(override_dir)
            if filename.lower().endswith(".jar")
        }
    declared_set = {name for name in declared_names if name}
    undeclared = sorted(actual_overrides - declared_set)
    missing = sorted(declared_set - actual_overrides)
    if undeclared:
        errors.append(f"undeclared override jars: {undeclared}")
    if missing:
        errors.append(f"declared override jars are missing: {missing}")

    for entry in declared_overrides:
        filename = entry.get("filename")
        if not filename or not filename.lower().endswith(".jar"):
            errors.append("every override_mods entry must contain a jar filename")
            continue
        if not isinstance(entry.get("server"), bool):
            errors.append(f"override jar {filename} must declare server as a boolean")
        expected_hash = entry.get("sha256")
        if expected_hash:
            path = os.path.join(override_dir, filename)
            if os.path.isfile(path) and sha256_file(path).lower() != expected_hash.lower():
                errors.append(f"override jar {filename} does not match its declared SHA-256")

    manual_ids = [entry.get("id") for entry in config.get("manual_download", [])]
    invalid_manual = [project_id for project_id in manual_ids if not isinstance(project_id, int)]
    if invalid_manual:
        errors.append("every manual_download entry must contain an integer id")
    missing_manual = sorted(
        project_id
        for project_id in manual_ids
        if isinstance(project_id, int) and project_id not in project_ids
    )
    if missing_manual:
        errors.append(f"manual_download contains projects absent from the manifest: {missing_manual}")

    manifest_file_ids = {
        entry.get("projectID"): entry.get("fileID") for entry in files
    }
    download_mirrors = config.get("download_mirrors", [])
    mirror_ids = [entry.get("id") for entry in download_mirrors]
    duplicate_mirrors = sorted(
        project_id
        for project_id, count in Counter(mirror_ids).items()
        if isinstance(project_id, int) and count > 1
    )
    if duplicate_mirrors:
        errors.append(f"download_mirrors contains duplicate project IDs: {duplicate_mirrors}")

    for entry in download_mirrors:
        project_id = entry.get("id")
        file_id = entry.get("file_id")
        filename = entry.get("filename")
        url = entry.get("url")
        sha512 = entry.get("sha512")
        if not isinstance(project_id, int) or not isinstance(file_id, int):
            errors.append("every download_mirrors entry must contain integer id and file_id values")
            continue
        if project_id not in manifest_file_ids:
            errors.append(f"download mirror project {project_id} is absent from the manifest")
        elif manifest_file_ids[project_id] != file_id:
            errors.append(
                f"download mirror project {project_id} targets file {file_id}, but the manifest uses {manifest_file_ids[project_id]}"
            )
        if not isinstance(filename, str) or not filename.lower().endswith(".jar"):
            errors.append(f"download mirror project {project_id} must declare a jar filename")
        parsed_url = urlparse(url) if isinstance(url, str) else None
        if not parsed_url or parsed_url.scheme != "https" or not parsed_url.netloc:
            errors.append(f"download mirror project {project_id} must declare an HTTPS URL")
        if (
            not isinstance(sha512, str)
            or len(sha512) != 128
            or any(character not in "0123456789abcdefABCDEF" for character in sha512)
        ):
            errors.append(f"download mirror project {project_id} must declare a SHA-512 hash")

    for entry in config.get("server_only", []):
        if not isinstance(entry.get("id"), int) or not isinstance(entry.get("file_id"), int):
            errors.append("every server_only entry must contain integer id and file_id values")

    if errors:
        formatted = "\n".join(f"  - {error}" for error in errors)
        raise RuntimeError(f"Release validation failed:\n{formatted}")

    display_version = get_display_version(expected_version)
    return {
        "game_version": game_version,
        "loader": "neoforge",
        "loader_version": loader_version,
        "display_version": display_version,
        "client_archive": f"Cosmic Frontiers {display_version}.zip",
        "server_archive": f"Cosmic Frontiers {display_version} Server Files.zip",
        "curseforge_version_type": (
            "alpha" if "nightly" in expected_version.lower() else "release"
        ),
    }
