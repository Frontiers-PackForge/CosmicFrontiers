# release.py

import os
from pack_generation import generate_modpack_zip
from server_generation import generate_serverpack_zip

def main():
    version = os.environ.get('RELEASE_VERSION')
    curseforge_api_key = os.environ.get('CURSEFORGE_API_KEY')
    is_prerelease = os.environ.get('IS_PRERELEASE', 'false').lower() == 'true'
    print(f"Release script running. Version: {version}, Pre-release: {is_prerelease}")
    generate_modpack_zip(version)
    if not is_prerelease:
        generate_serverpack_zip(version, curseforge_api_key=curseforge_api_key)

if __name__ == "__main__":
    main()
