# Configuration
serverPackDir="../server-pack"
modBlacklist="../server-mod-blacklist.json"
overridesDir="../overrides/*"
modListLocation="../modlist.html"
manifestLocation="../manifest.json"
# shellcheck disable=SC2016
#CURSEFORGE_API_KEY='{{CURSEFORGE_CURSEFORGE_API_KEY}}'

# Prepare
mkdir -p $serverPackDir

# Copy required files
cp -r $overridesDir $serverPackDir/
cp -r ../server-files/* $serverPackDir/

# Create server modlist.html
pattern=$(jq -r '.[].id' $modBlacklist | paste -sd'|' -)
grep -Ev "/projects/($pattern)" $modListLocation > $serverPackDir/modlist.html

# Create server manifest.json
pattern=$(jq '[.[].id]' $modBlacklist)
jq --argjson blacklist "$pattern" '.files |= map(select(.projectID as $id | ($blacklist | index($id) | not)))' $manifestLocation > $serverPackDir/manifest.json

# Download Mods From CurseForge
CURSEFORGE_API_URL="https://api.curseforge.com/v1/mods/"
CURSEFORGE_API_HEADERS=("--header=Accept: application/json" "--header=x-api-key: ${CURSEFORGE_API_KEY}")
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

# Update the README file to include the mods to manually download
jq -c '.[] | select(.thirdPartyLock == true) | .id' $modBlacklist | while read -r modId; do
  FILE_ID=$(jq -c '.files[] | select(.projectID == '${modId}') | .fileID' $manifestLocation)

  MOD_URL=$(wget -q "${CURSEFORGE_API_HEADERS[@]}" "${CURSEFORGE_API_URL}${modId}" -O - | jq -r '.data.links.websiteUrl // empty')
  FILE_URL="${MOD_URL}/download/${FILE_ID}"

  echo -e "- ${FILE_URL}" >> $serverPackDir/README.md
done


# Set forge version
mcVersion=$(jq -r '.minecraft.version' $manifestLocation)
forgeVersion=$(jq -r '.minecraft.modLoaders[0].id | split("-")[1]' $manifestLocation)
sed -i "s/{{MINECRAFT_VERSION}}/$mcVersion/g" $serverPackDir/startserver.bat
sed -i "s/{{MINECRAFT_VERSION}}/$mcVersion/g" $serverPackDir/startserver.sh
sed -i "s/{{FORGE_VERSION}}/$forgeVersion/g" $serverPackDir/startserver.bat
sed -i "s/{{FORGE_VERSION}}/$forgeVersion/g" $serverPackDir/startserver.sh

