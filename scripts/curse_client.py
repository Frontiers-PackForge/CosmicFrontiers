import os
import requests

API_URL = 'https://api.curseforge.com/v1/mods/'

def get_api_key():
    api_key = os.environ.get('CURSEFORGE_API_KEY')
    if not api_key:
        raise RuntimeError('CURSEFORGE_API_KEY environment variable not set.')
    return api_key

def get_headers():
    return {
        'Accept': 'application/json',
        'x-api-key': get_api_key()
    }

def get_mod_website_url(mod_id):
    resp = requests.get(f"{API_URL}{mod_id}", headers=get_headers())
    if resp.status_code != 200:
        return None
    return resp.json().get('data', {}).get('links', {}).get('websiteUrl')

def get_mod_download_url(project_id, file_id):
    resp = requests.get(f"{API_URL}{project_id}/files/{file_id}/download-url", headers=get_headers())
    if resp.status_code != 200:
        return None
    return resp.json().get('data')

