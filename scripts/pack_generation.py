import os
import shutil

from utils import apply_release_version, copy_any, load_json, save_json, zip_directory

MODPACK_DIRECTORY = "modpack"


def generate_modpack_zip(version, archive_name):
    base_dir = os.path.dirname(os.path.abspath(__file__))
    root_dir = os.path.abspath(os.path.join(base_dir, ".."))
    modpack_dir = os.path.join(root_dir, MODPACK_DIRECTORY)

    if os.path.exists(modpack_dir):
        shutil.rmtree(modpack_dir)
    os.makedirs(modpack_dir)

    for name in ("overrides", "manifest.json", "modlist.html"):
        source = os.path.join(root_dir, name)
        if not os.path.exists(source):
            raise RuntimeError(f"Required pack input is missing: {name}")
        copy_any(source, os.path.join(modpack_dir, name))

    manifest_path = os.path.join(modpack_dir, "manifest.json")
    manifest = apply_release_version(load_json(manifest_path), version)
    save_json(manifest, manifest_path)

    zip_path = os.path.join(root_dir, archive_name)
    zip_directory(modpack_dir, zip_path)
    print(f"Modpack zipped at: {zip_path}")
    return zip_path
