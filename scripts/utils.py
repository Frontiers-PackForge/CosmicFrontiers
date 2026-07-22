import hashlib
import json
import os
import shutil
import zipfile


def copy_any(src, dst):
    if os.path.isdir(src):
        shutil.copytree(src, dst, dirs_exist_ok=True)
    elif os.path.isfile(src):
        shutil.copy2(src, dst)


def load_json(path):
    with open(path, "r", encoding="utf-8") as file:
        return json.load(file)


def save_json(obj, path):
    with open(path, "w", encoding="utf-8") as file:
        json.dump(obj, file, indent=2)
        file.write("\n")


def apply_release_version(manifest, version):
    manifest["name"] = f"Cosmic Frontiers {version}"
    manifest["version"] = version
    return manifest


def get_display_version(version):
    display = version.split("+", 1)[0]
    marker = "nightly"
    index = display.lower().find(marker)
    if index >= 0:
        display = f"{display[:index]}Nightly{display[index + len(marker):]}"
    return display


def sha256_file(path):
    digest = hashlib.sha256()
    with open(path, "rb") as file:
        for chunk in iter(lambda: file.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def zip_directory(source_dir, destination):
    with zipfile.ZipFile(destination, "w", zipfile.ZIP_DEFLATED) as archive:
        for root, dirs, files in os.walk(source_dir):
            dirs.sort()
            files.sort()
            for filename in files:
                source = os.path.join(root, filename)
                relative = os.path.relpath(source, source_dir)
                archive.write(source, relative)
