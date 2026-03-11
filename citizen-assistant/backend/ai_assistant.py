from rag_engine import retrieve_service

def answer_query(query):

    service = retrieve_service(query)

    if not service:
        return "Sorry, I could not find that service."

    response = f"""
Service: {service['name']}

Documents Required:
{",".join(service['documents'])}

Timeline: {service['timeline']}

Fees: {service['fees']}

Visit: {service['website']}
"""

    return response