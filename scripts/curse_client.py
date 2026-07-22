import os

import requests

API_URL = "https://api.curseforge.com/v1/mods"
REQUEST_TIMEOUT = 30


def get_api_key():
    api_key = os.environ.get("CURSEFORGE_API_KEY")
    if not api_key:
        raise RuntimeError("CURSEFORGE_API_KEY environment variable not set")
    return api_key


def get_headers(api_key=None):
    return {
        "Accept": "application/json",
        "x-api-key": api_key or get_api_key(),
    }


def get_json(url, api_key=None):
    response = requests.get(url, headers=get_headers(api_key), timeout=REQUEST_TIMEOUT)
    response.raise_for_status()
    return response.json().get("data")


def get_mod_website_url(mod_id, api_key=None):
    data = get_json(f"{API_URL}/{mod_id}", api_key)
    return data.get("links", {}).get("websiteUrl") if data else None


def get_mod_file(project_id, file_id, api_key=None):
    return get_json(f"{API_URL}/{project_id}/files/{file_id}", api_key)


def get_mod_download_url(project_id, file_id, api_key=None):
    file_data = get_mod_file(project_id, file_id, api_key)
    if file_data and file_data.get("downloadUrl"):
        return file_data["downloadUrl"]
    return get_json(f"{API_URL}/{project_id}/files/{file_id}/download-url", api_key)
