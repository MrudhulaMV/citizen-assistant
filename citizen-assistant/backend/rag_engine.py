from database import load_services

services = load_services()

def retrieve_service(query):

    query = query.lower()

    for s in services:

        if s["name"].lower() in query:
            return s

    return None