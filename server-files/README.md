# Cosmic Frontiers Server

This server archive is generated from the same manifest and overrides as the client pack.

## Installation

1. Install Java 21 or newer.
2. Add anything listed under Manual Downloads to the `mods` directory.
3. Run `startserver.bat` on Windows or `startserver.sh` on Linux and macOS.
4. The first launch installs NeoForge and creates `eula.txt`.
5. Read the Minecraft EULA, set `eula=true` if you agree, and launch again.

The launch script installs the exact NeoForge version declared by the pack manifest. It does not select the latest or recommended version.
As of writing, the pack currently uses Neoforge Version : 21.1.233
To select Java manually, edit `java_path.txt` and place either `java` or the full path to a Java 21 or newer executable on its first line. Do not add command-line arguments to this file. The `CC_JAVA` environment variable overrides `java_path.txt`, followed by `JAVA_HOME` and then the system `PATH`.

The server launches once by default. Set `CC_RESTART=true` to opt into automatic restarts. Set `CC_INSTALL_ONLY=true` to install NeoForge without starting Minecraft.
