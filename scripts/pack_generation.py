import os
import shutil
import zipfile

MODPACK_DIRECTORY = "modpack"


def generate_modpack_zip(version=None):
    base_dir = os.path.dirname(os.path.abspath(__file__))
    root_dir = os.path.abspath(os.path.join(base_dir, '..'))
    modpack_dir = os.path.join(root_dir, MODPACK_DIRECTORY)

    # Clean up previous modpack dir if exists
    if os.path.exists(modpack_dir):
        shutil.rmtree(modpack_dir)
    os.makedirs(modpack_dir)

    # Copy overrides
    overrides_src = os.path.join(root_dir, 'overrides')
    overrides_dst = os.path.join(modpack_dir, 'overrides')
    if os.path.exists(overrides_src):
        shutil.copytree(overrides_src, overrides_dst)

    # Copy manifest.json
    manifest_src = os.path.join(root_dir, 'manifest.json')
    if os.path.exists(manifest_src):
        shutil.copy2(manifest_src, modpack_dir)

    # Copy modlist.html
    modlist_src = os.path.join(root_dir, 'modlist.html')
    if os.path.exists(modlist_src):
        shutil.copy2(modlist_src, modpack_dir)

    # Zip the directory (only include the contents, not the root folder)
    zip_name = f'Cosmic.Frontier.{version}.zip' if version else f'Cosmic.Frontier.zip'
    zip_path = os.path.join(root_dir, zip_name)
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(modpack_dir):
            for file in files:
                abs_path = os.path.join(root, file)
                rel_path = os.path.relpath(abs_path, modpack_dir)  # relative to modpack_dir, not including modpack_dir itself
                zipf.write(abs_path, rel_path)
    print(f'Modpack zipped at: {zip_path}')
