@echo off
setlocal EnableExtensions
set "MINECRAFT_VERSION={{MINECRAFT_VERSION}}"
set "NEOFORGE_VERSION={{NEOFORGE_VERSION}}"

cd /D "%~dp0"
set "INSTALLER=neoforge-%NEOFORGE_VERSION%-installer.jar"
set "NEOFORGE_URL=https://maven.neoforged.net/releases/net/neoforged/neoforge/%NEOFORGE_VERSION%/neoforge-%NEOFORGE_VERSION%-installer.jar"
set "ARGS_FILE=libraries\net\neoforged\neoforge\%NEOFORGE_VERSION%\win_args.txt"

if not defined CC_JAVA if exist "java_path.txt" set /p "CC_JAVA="<"java_path.txt"
if not defined CC_JAVA if defined JAVA_HOME set "CC_JAVA=%JAVA_HOME%\bin\java.exe"
if not defined CC_JAVA set "CC_JAVA=java"
set "CC_JAVA=%CC_JAVA:"=%"

set "JAVA_VERSION_FILE=%TEMP%\cosmic-frontiers-java-%RANDOM%-%RANDOM%.txt"
"%CC_JAVA%" -version 1>nul 2>"%JAVA_VERSION_FILE%"
if errorlevel 1 (
    del /Q "%JAVA_VERSION_FILE%" 1>nul 2>nul
    echo Minecraft %MINECRAFT_VERSION% requires Java 21 or newer, but Java could not be started.
    echo Edit java_path.txt and place the full path to a Java 21 or newer java.exe on its first line.
    pause
    exit /b 1
)

set "JAVA_FULL="
for /f "usebackq tokens=3" %%v in ("%JAVA_VERSION_FILE%") do if not defined JAVA_FULL set "JAVA_FULL=%%~v"
del /Q "%JAVA_VERSION_FILE%" 1>nul 2>nul
set "JAVA_MAJOR="
for /f "tokens=1,2 delims=." %%a in ("%JAVA_FULL%") do (
    set "JAVA_MAJOR=%%a"
    if "%%a"=="1" set "JAVA_MAJOR=%%b"
)
if not defined JAVA_MAJOR (
    echo Unable to determine the Java version reported by "%CC_JAVA%".
    pause
    exit /b 1
)
set "JAVA_MAJOR_INVALID="
for /f "delims=0123456789" %%v in ("%JAVA_MAJOR%") do set "JAVA_MAJOR_INVALID=%%v"
if defined JAVA_MAJOR_INVALID (
    echo Unable to determine the Java version reported by "%CC_JAVA%".
    pause
    exit /b 1
)
if %JAVA_MAJOR% LSS 21 (
    echo Minecraft %MINECRAFT_VERSION% requires Java 21 or newer, but Java %JAVA_MAJOR% was found.
    echo Edit java_path.txt and place the full path to a Java 21 or newer java.exe on its first line.
    pause
    exit /b 1
)

if not exist "%ARGS_FILE%" (
    echo NeoForge %NEOFORGE_VERSION% is not installed. Installing the manifest-pinned version now.
    if not exist "%INSTALLER%" (
        echo Downloading %NEOFORGE_URL%
        curl.exe -fL "%NEOFORGE_URL%" -o "%INSTALLER%"
        if errorlevel 1 (
            del /Q "%INSTALLER%" 1>nul 2>nul
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
    if not exist "%ARGS_FILE%" (
        echo NeoForge installation completed without creating the expected launch arguments.
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

if /I "%CC_INSTALL_ONLY%"=="true" (
    echo Installation complete.
    exit /b 0
)

:START
"%CC_JAVA%" @user_jvm_args.txt @"%ARGS_FILE%" nogui %*
set "SERVER_EXIT=%ERRORLEVEL%"
if /I "%CC_RESTART%"=="true" (
    echo Restarting automatically in 10 seconds. Press Ctrl+C to cancel.
    timeout /t 10 /nobreak 1>nul
    goto START
)
echo Server stopped with exit code %SERVER_EXIT%.
pause
exit /b %SERVER_EXIT%
