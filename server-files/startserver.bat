@echo off
set MINECRAFT_VERSION={{MINECRAFT_VERSION}}
set FORGE_VERSION={{FORGE_VERSION}}
:: To use a specific Java runtime, set an environment variable named CC_JAVA to the full path of java.exe.
:: To disable automatic restarts, set an environment variable named CC_RESTART to false.
:: To install the pack without starting the server, set an environment variable named CC_INSTALL_ONLY to true.

set INSTALLER="%~dp0forge-%MINECRAFT_VERSION%-%FORGE_VERSION%-installer.jar"
set FORGE_URL="https://maven.minecraftforge.net/net/minecraftforge/forge/%MINECRAFT_VERSION%-%FORGE_VERSION%/forge-%MINECRAFT_VERSION%-%FORGE_VERSION%-installer.jar"

:JAVA
if not defined CC_JAVA (
    set CC_JAVA=java
)

"%CC_JAVA%" -version 1>nul 2>nul || (
   echo Minecraft %MINECRAFT_VERSION% requires Java 17 - Java not found
   pause
   exit /b 1
)

:FORGE
setlocal
cd /D "%~dp0"
if not exist "libraries" (
    echo Forge not installed, installing now.
    if not exist %INSTALLER% (
        echo No Forge installer found, downloading from %FORGE_URL%
        bitsadmin.exe /rawreturn /nowrap /transfer forgeinstaller /download /priority FOREGROUND %FORGE_URL% %INSTALLER%
    )
    
    echo Running Forge installer.
    "%CC_JAVA%" -jar %INSTALLER% -installServer
)

if not exist "server.properties" (
    (
        echo allow-flight=true
        echo motd=Cosmic Frontiers
        echo max-tick-time=180000
    )> "server.properties"
)

if "%CC_INSTALL_ONLY%" == "true" (
    echo INSTALL_ONLY: complete
    goto:EOF
)

for /f tokens^=2-5^ delims^=.-_^" %%j in ('"%CC_JAVA%" -fullversion 2^>^&1') do set "jver=%%j"
if not %jver% geq 17  (
    echo Minecraft 1.20.1 requires Java 17 - found Java %jver%
    pause
    exit /b 1
) 

:START
"%CC_JAVA%" @user_jvm_args.txt @libraries/net/minecraftforge/forge/1.20.1-%FORGE_VERSION%/win_args.txt nogui

if "%CC_RESTART%" == "false" ( 
    goto:EOF 
)

echo Restarting automatically in 10 seconds (press Ctrl + C to cancel)
timeout /t 10 /nobreak > NUL
goto:START
