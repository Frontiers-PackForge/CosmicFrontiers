#!/bin/sh
set -eu

MINECRAFT_VERSION={{MINECRAFT_VERSION}}
NEOFORGE_VERSION={{NEOFORGE_VERSION}}

cd "$(dirname "$0")"
INSTALLER="neoforge-$NEOFORGE_VERSION-installer.jar"
NEOFORGE_URL="https://maven.neoforged.net/releases/net/neoforged/neoforge/$NEOFORGE_VERSION/neoforge-$NEOFORGE_VERSION-installer.jar"
ARGS_FILE="libraries/net/neoforged/neoforge/$NEOFORGE_VERSION/unix_args.txt"

if [ -z "${CC_JAVA:-}" ] && [ -f java_path.txt ]; then
    IFS= read -r CC_JAVA < java_path.txt || true
fi
if [ -z "${CC_JAVA:-}" ] && [ -n "${JAVA_HOME:-}" ]; then
    CC_JAVA="$JAVA_HOME/bin/java"
fi
CC_JAVA=${CC_JAVA:-java}

if ! command -v "$CC_JAVA" >/dev/null 2>&1 && [ ! -x "$CC_JAVA" ]; then
    printf "Minecraft %s requires Java 21 or newer, but Java could not be started.\n" "$MINECRAFT_VERSION"
    echo "Edit java_path.txt and place the full path to a Java 21 or newer executable on its first line."
    exit 1
fi

JAVA_FULL=$("$CC_JAVA" -version 2>&1 | awk -F '"' '/version/ {print $2; exit}')
JAVA_MAJOR=$(printf "%s" "$JAVA_FULL" | cut -d. -f1)
if [ "$JAVA_MAJOR" = "1" ]; then
    JAVA_MAJOR=$(printf "%s" "$JAVA_FULL" | cut -d. -f2)
fi
case "$JAVA_MAJOR" in
    ''|*[!0-9]*)
        printf "Unable to determine the Java version reported by %s.\n" "$CC_JAVA"
        exit 1
        ;;
esac
if [ "$JAVA_MAJOR" -lt 21 ]; then
    printf "Minecraft %s requires Java 21 or newer, but Java %s was found.\n" "$MINECRAFT_VERSION" "$JAVA_MAJOR"
    echo "Edit java_path.txt and place the full path to a Java 21 or newer executable on its first line."
    exit 1
fi

if [ ! -f "$ARGS_FILE" ]; then
    printf "NeoForge %s is not installed. Installing the manifest-pinned version now.\n" "$NEOFORGE_VERSION"
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
    if [ ! -f "$ARGS_FILE" ]; then
        echo "NeoForge installation completed without creating the expected launch arguments."
        exit 1
    fi
fi

if [ ! -f server.properties ]; then
    printf "allow-flight=true\nmotd=Cosmic Frontiers\nmax-tick-time=180000\n" > server.properties
fi

if [ "${CC_INSTALL_ONLY:-false}" = "true" ]; then
    echo "Installation complete."
    exit 0
fi

while true; do
    if "$CC_JAVA" @user_jvm_args.txt @"$ARGS_FILE" nogui "$@"; then
        EXIT_CODE=0
    else
        EXIT_CODE=$?
    fi
    if [ "${CC_RESTART:-false}" != "true" ]; then
        exit "$EXIT_CODE"
    fi
    echo "Restarting automatically in 10 seconds. Press Ctrl+C to cancel."
    sleep 10
done
