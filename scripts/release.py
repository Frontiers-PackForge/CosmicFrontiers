# release.py

import os
from pack_generation import generate_modpack_zip
from server_generation import generate_serverpack_zip

def main():
    version = os.environ.get('RELEASE_VERSION')
    curseforge_api_key = os.environ.get('CURSEFORGE_API_KEY')
    print(f"Release script running. Version: {version}")
    generate_modpack_zip(version)
    generate_serverpack_zip(version, curseforge_api_key=curseforge_api_key)

if __name__ == "__main__":
    main()
