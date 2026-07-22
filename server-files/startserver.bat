@echo off
setlocal EnableExtensions
set "MINECRAFT_VERSION={{MINECRAFT_VERSION}}"
set "NEOFORGE_VERSION={{NEOFORGE_VERSION}}"
set "INSTALLER=%~dp0neoforge-%NEOFORGE_VERSION%-installer.jar"
set "NEOFORGE_URL=https://maven.neoforged.net/releases/net/neoforged/neoforge/%NEOFORGE_VERSION%/neoforge-%NEOFORGE_VERSION%-installer.jar"
set "ARGS_FILE=%~dp0libraries\net\neoforged\neoforge\%NEOFORGE_VERSION%\win_args.txt"

if not defined CC_JAVA set "CC_JAVA=java"
"%CC_JAVA%" -version 1>nul 2>nul || (
    echo Minecraft %MINECRAFT_VERSION% requires Java 21 or newer, but Java was not found.
    pause
    exit /b 1
)

for /f tokens^=2^ delims^=^" %%v in ('"%CC_JAVA%" -version 2^>^&1 ^| findstr /i "version"') do set "JAVA_FULL=%%v"
for /f "tokens=1 delims=." %%v in ("%JAVA_FULL%") do set "JAVA_MAJOR=%%v"
if not defined JAVA_MAJOR (
    echo Unable to determine the Java version.
    pause
    exit /b 1
)
if %JAVA_MAJOR% LSS 21 (
    echo Minecraft %MINECRAFT_VERSION% requires Java 21 or newer, but Java %JAVA_MAJOR% was found.
    pause
    exit /b 1
)

cd /D "%~dp0"
if not exist "%ARGS_FILE%" (
    echo NeoForge %NEOFORGE_VERSION% is not installed. Installing now.
    if not exist "%INSTALLER%" (
        echo Downloading %NEOFORGE_URL%
        curl.exe -fL "%NEOFORGE_URL%" -o "%INSTALLER%"
        if errorlevel 1 (
            echo Failed to download the NeoForge installer.
            pause
            exit /b 1
        )
    )
    "%CC_JAVA%" -jar "%INSTALLER%" --installServer
    if errorlevel 1 (
        echo NeoForge installation failed.
        pause
        exit /b 1
    )
)

if not exist "server.properties" (
    (
        echo allow-flight=true
        echo motd=Cosmic Frontiers
        echo max-tick-time=180000
    ) > "server.properties"
)

if /I "%CC_INSTALL_ONLY%" == "true" (
    echo Installation complete.
    exit /b 0
)

:START
"%CC_JAVA%" @user_jvm_args.txt @"%ARGS_FILE%" nogui
if /I "%CC_RESTART%" == "false" exit /b %ERRORLEVEL%
echo Restarting automatically in 10 seconds. Press Ctrl+C to cancel.
timeout /t 10 /nobreak >nul
goto START
