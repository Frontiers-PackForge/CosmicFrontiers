#!/bin/sh
set -eu

MINECRAFT_VERSION={{MINECRAFT_VERSION}}
NEOFORGE_VERSION={{NEOFORGE_VERSION}}
CC_JAVA=${CC_JAVA:-java}
INSTALLER="neoforge-$NEOFORGE_VERSION-installer.jar"
NEOFORGE_URL="https://maven.neoforged.net/releases/net/neoforged/neoforge/$NEOFORGE_VERSION/neoforge-$NEOFORGE_VERSION-installer.jar"
ARGS_FILE="libraries/net/neoforged/neoforge/$NEOFORGE_VERSION/unix_args.txt"

if ! command -v "$CC_JAVA" >/dev/null 2>&1; then
    printf "Minecraft %s requires Java 21 or newer, but Java was not found.\n" "$MINECRAFT_VERSION"
    exit 1
fi

JAVA_FULL=$($CC_JAVA -version 2>&1 | awk -F '"' '/version/ {print $2; exit}')
JAVA_MAJOR=$(printf "%s" "$JAVA_FULL" | cut -d. -f1)
if [ -z "$JAVA_MAJOR" ] || [ "$JAVA_MAJOR" -lt 21 ]; then
    printf "Minecraft %s requires Java 21 or newer, but Java %s was found.\n" "$MINECRAFT_VERSION" "${JAVA_MAJOR:-unknown}"
    exit 1
fi

cd "$(dirname "$0")"
if [ ! -f "$ARGS_FILE" ]; then
    printf "NeoForge %s is not installed. Installing now.\n" "$NEOFORGE_VERSION"
    if [ ! -f "$INSTALLER" ]; then
        if command -v curl >/dev/null 2>&1; then
            curl -fLo "$INSTALLER" "$NEOFORGE_URL"
        elif command -v wget >/dev/null 2>&1; then
            wget -O "$INSTALLER" "$NEOFORGE_URL"
        else
            echo "Neither curl nor wget is installed."
            exit 1
        fi
    fi
    "$CC_JAVA" -jar "$INSTALLER" --installServer
fi

if [ ! -f server.properties ]; then
    printf "allow-flight=true\nmotd=Cosmic Frontiers\nmax-tick-time=180000\n" > server.properties
fi

if [ "${CC_INSTALL_ONLY:-false}" = "true" ]; then
    echo "Installation complete."
    exit 0
fi

while true; do
    if "$CC_JAVA" @user_jvm_args.txt @"$ARGS_FILE" nogui; then
        EXIT_CODE=0
    else
        EXIT_CODE=$?
    fi
    if [ "${CC_RESTART:-true}" = "false" ]; then
        exit "$EXIT_CODE"
    fi
    echo "Restarting automatically in 10 seconds. Press Ctrl+C to cancel."
    sleep 10
done
