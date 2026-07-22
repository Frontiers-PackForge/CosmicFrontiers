import os

from pack_generation import generate_modpack_zip
from server_generation import generate_serverpack_zip
from validation import validate_release


def env_bool(name, default=False):
    value = os.environ.get(name)
    if value is None:
        return default
    return value.lower() in {"1", "true", "yes", "on"}


def write_action_outputs(metadata):
    output_path = os.environ.get("GITHUB_OUTPUT")
    if not output_path:
        return
    with open(output_path, "a", encoding="utf-8") as output:
        for key, value in metadata.items():
            output.write(f"{key}={value}\n")


def main():
    version = os.environ.get("RELEASE_VERSION", "").strip()
    if not version:
        raise RuntimeError("RELEASE_VERSION must be set")

    root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
    build_server_pack = env_bool("BUILD_SERVER_PACK", True)
    skip_mod_downloads = env_bool("SKIP_MOD_DOWNLOADS")
    metadata = validate_release(root_dir, version)
    metadata["release_version"] = version
    write_action_outputs(metadata)

    print(
        f"Release {version}: Minecraft {metadata['game_version']}, "
        f"NeoForge {metadata['loader_version']}, "
        f"CurseForge {metadata['curseforge_version_type']}, "
        f"server pack {build_server_pack}"
    )
    generate_modpack_zip(version, metadata["client_archive"])
    if build_server_pack:
        generate_serverpack_zip(
            version,
            metadata["server_archive"],
            curseforge_api_key=os.environ.get("CURSEFORGE_API_KEY"),
            download_mods=not skip_mod_downloads,
        )


if __name__ == "__main__":
    main()
