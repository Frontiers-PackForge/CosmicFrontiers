# Configuration
serverPackDir="../server-pack"
modBlacklist="../server-mod-blacklist.json"
overridesDir="../overrides/*"
modListLocation="../modlist.html"
manifestLocation="../manifest.json"
# shellcheck disable=SC2016
API_KEY='$2a$10$DMX85DNCl1O4bd1pHzUyVOXAN5zq1TRDLV3kqOHdX6UC5Sk3dCB52'

# Prepare
mkdir -p $serverPackDir

# Copy required files
cp -r $overridesDir $serverPackDir/
cp ../server.properties $serverPackDir/
cp ../server_starter.conf $serverPackDir/
cp ../start_server.bat $serverPackDir/

# Create server modlist.html
pattern=$(jq -r '.[].id' $modBlacklist | paste -sd'|' -)
grep -Ev "/projects/($pattern)" $modListLocation > $serverPackDir/modlist.html

# Create server manifest.json
pattern=$(jq '[.[].id]' $modBlacklist)
jq --argjson blacklist "$pattern" '.files |= map(select(.projectID as $id | ($blacklist | index($id) | not)))' $manifestLocation > $serverPackDir/manifest.json

# Create Forge Auto Install Settings
mcVersion=$(jq '.minecraft.version' $manifestLocation)
loaderType=$(jq -r '.minecraft.modLoaders[0].id | split("-")[0] | ascii_upcase' $manifestLocation)
loaderVersion=$(jq -r '.minecraft.modLoaders[0].id | split("-")[1]' $manifestLocation)
configPath="${serverPackDir}/forge-auto-install.txt"
{
  echo "minecraftVersion=${mcVersion}"
  echo "loaderType=${loaderType}"
  echo "loaderVersion=${loaderVersion}"
} > $configPath

# Download Mods From CurseForge
CURSEFORGE_API_URL="https://api.curseforge.com/v1/mods/"
CURSEFORGE_API_HEADERS=("--header=Accept: application/json" "--header=x-api-key: ${API_KEY}")
jq -c '.files[] | {projectID,fileID}' $serverPackDir/manifest.json | while read -r mod; do
  MOD_PROJECT_ID=$(echo $mod | jq -r '.projectID')
  MOD_FILE_ID=$(echo $mod | jq -r '.fileID')

  if [[ -z "${MOD_PROJECT_ID}" || -z "${MOD_FILE_ID}" ]]; then
      echo -e "\tERROR: Failed to parse project id or file id for mod '${mod}'"
      exit 1
  fi

  FILE_URL=$(wget -q "${CURSEFORGE_API_HEADERS[@]}" "${CURSEFORGE_API_URL}${MOD_PROJECT_ID}/files/${MOD_FILE_ID}/download-url" -O - | jq -r '.data // empty')

  if [[ -z "${FILE_URL}" ]]; then
      echo -e "\tERROR: No download url found for mod ${MOD_PROJECT_ID} ${MOD_FILE_ID}"
      echo -e "${CURSEFORGE_API_URL}${MOD_PROJECT_ID}/files/${MOD_FILE_ID}/download-url"
      exit 1
  fi

  echo -e "\tDownloading ${FILE_URL}"

  if ! wget -q "${FILE_URL}" -P "${serverPackDir}/mods"; then
      echo -e "\tERROR: Failed to download mod ${MOD_PROJECT_ID} ${MOD_FILE_ID}"
      exit 1
  fi
done