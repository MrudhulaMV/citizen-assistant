import json

def load_services():

    with open("../database/services.json") as f:
        return json.load(f)