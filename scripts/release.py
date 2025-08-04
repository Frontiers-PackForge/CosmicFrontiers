# release.py

import os
from pack_generation import generate_modpack_zip
from server_generation import generate_serverpack_zip

def main():
    version = os.environ.get('RELEASE_VERSION')
    prerelease = os.environ.get('RELEASE_PRERELEASE')
    print(f"Release script running. Version: {version}, Pre-release: {prerelease}")
    generate_modpack_zip(version)
    generate_serverpack_zip(version)

if __name__ == "__main__":
    main()
