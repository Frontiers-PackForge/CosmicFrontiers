import os
import shutil
import zipfile
import json
from bs4 import BeautifulSoup

SERVERPACK_DIRECTORY = "serverpack"


def generate_serverpack_zip(version=None):
    base_dir = os.path.dirname(os.path.abspath(__file__))
    root_dir = os.path.abspath(os.path.join(base_dir, '..'))
    serverpack_dir = os.path.join(root_dir, SERVERPACK_DIRECTORY)

    # Clean up previous serverpack dir if exists
    if os.path.exists(serverpack_dir):
        shutil.rmtree(serverpack_dir)
    os.makedirs(serverpack_dir)

    # Copy overrides (if needed, adjust as per your serverpack structure)
    overrides_src = os.path.join(root_dir, 'overrides')
    overrides_dst = os.path.join(serverpack_dir, 'overrides')
    if os.path.exists(overrides_src):
        shutil.copytree(overrides_src, overrides_dst)

    # Copy server-files content into serverpack directory
    server_files_src = os.path.join(root_dir, 'server-files')
    if os.path.exists(server_files_src):
        for item in os.listdir(server_files_src):
            s = os.path.join(server_files_src, item)
            d = os.path.join(serverpack_dir, item)
            if os.path.isdir(s):
                shutil.copytree(s, d, dirs_exist_ok=True)
            else:
                shutil.copy2(s, d)

    # Copy manifest.json (if needed for serverpack)
    generate_filtered_manifest(root_dir, serverpack_dir)

    # Generate filtered modlist.html for serverpack
    generate_filtered_modlist(root_dir, serverpack_dir)

    # Replace MINECRAFT_VERSION and FORGE_VERSION in startserver.bat and startserver.sh
    update_server_scripts_with_versions(serverpack_dir)

    # Zip the directory (only include the contents, not the root folder)
    zip_name = f'Cosmic.Frontier.Server.{version}.zip' if version else f'Cosmic.Frontier.Server.zip'
    zip_path = os.path.join(root_dir, zip_name)
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(serverpack_dir):
            for file in files:
                abs_path = os.path.join(root, file)
                rel_path = os.path.relpath(abs_path, serverpack_dir)  # relative to serverpack_dir, not including serverpack_dir itself
                zipf.write(abs_path, rel_path)
    print(f'Serverpack zipped at: {zip_path}')


def generate_filtered_modlist(root_dir, serverpack_dir):
    modlist_path = os.path.join(root_dir, 'modlist.html')
    blacklist_path = os.path.join(root_dir, 'server-mod-blacklist.json')
    output_path = os.path.join(serverpack_dir, 'modlist.html')

    # Load blacklist IDs as strings
    with open(blacklist_path, 'r', encoding='utf-8') as f:
        blacklist = json.load(f)
    blacklist_ids = {str(entry['id']) for entry in blacklist}

    # Parse modlist.html
    with open(modlist_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    # Filter <li> elements
    filtered_lis = []
    for li in soup.find_all('li'):
        a = li.find('a', href=True)
        if a and any(black_id in a['href'] for black_id in blacklist_ids):
            continue  # skip blacklisted
        filtered_lis.append(li)

    # Create new soup with filtered <li>s
    new_soup = BeautifulSoup('<ul></ul>', 'html.parser')
    ul = new_soup.ul
    for li in filtered_lis:
        ul.append(li)

    # Write filtered modlist.html
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(str(new_soup))
    print(f'Filtered modlist.html generated at: {output_path}')


def generate_filtered_manifest(root_dir, serverpack_dir):
    manifest_path = os.path.join(root_dir, 'manifest.json')
    blacklist_path = os.path.join(root_dir, 'server-mod-blacklist.json')
    output_path = os.path.join(serverpack_dir, 'manifest.json')

    # Load blacklist IDs as strings
    with open(blacklist_path, 'r', encoding='utf-8') as f:
        blacklist = json.load(f)
    blacklist_ids = {str(entry['id']) for entry in blacklist}

    # Load manifest.json
    with open(manifest_path, 'r', encoding='utf-8') as f:
        manifest = json.load(f)

    # Filter files array (CurseForge manifest structure)
    if 'files' in manifest and isinstance(manifest['files'], list):
        filtered_files = [obj for obj in manifest['files'] if str(obj.get('projectID')) not in blacklist_ids]
        manifest['files'] = filtered_files

    # Write filtered manifest.json
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(manifest, f, indent=2)
    print(f'Filtered manifest.json generated at: {output_path}')


def update_server_scripts_with_versions(serverpack_dir):
    import re
    manifest_path = os.path.join(serverpack_dir, 'manifest.json')
    with open(manifest_path, 'r', encoding='utf-8') as f:
        manifest = json.load(f)
    # Parse Minecraft version
    mc_version = manifest.get('minecraft', {}).get('version', None)
    # Parse Forge version (modLoaders is a list of dicts with id like 'forge-47.2.20')
    forge_version = None
    for loader in manifest.get('minecraft', {}).get('modLoaders', []):
        if loader.get('id', '').startswith('forge-'):
            forge_version = loader['id'].split('-')[1]
            break

    # Replace in startserver.bat
    bat_path = os.path.join(serverpack_dir, 'startserver.bat')
    if os.path.exists(bat_path):
        with open(bat_path, 'r', encoding='utf-8') as f:
            content = f.read()
        if mc_version:
            content = re.sub(r'set MINECRAFT_VERSION=\{\{MINECRAFT_VERSION\}\}', f'set MINECRAFT_VERSION={mc_version}', content)
        if forge_version:
            content = re.sub(r'set FORGE_VERSION=\{\{FORGE_VERSION\}\}', f'set FORGE_VERSION={forge_version}', content)
        with open(bat_path, 'w', encoding='utf-8') as f:
            f.write(content)

    # Replace in startserver.sh
    sh_path = os.path.join(serverpack_dir, 'startserver.sh')
    if os.path.exists(sh_path):
        with open(sh_path, 'r', encoding='utf-8') as f:
            content = f.read()
        if mc_version:
            content = re.sub(r'MINECRAFT_VERSION=\{\{MINECRAFT_VERSION\}\}', f'MINECRAFT_VERSION={mc_version}', content)
        if forge_version:
            content = re.sub(r'FORGE_VERSION=\{\{FORGE_VERSION\}\}', f'FORGE_VERSION={forge_version}', content)
        with open(sh_path, 'w', encoding='utf-8') as f:
            f.write(content)
