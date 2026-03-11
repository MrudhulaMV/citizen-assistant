from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from ai_assistant import answer_query
from ocr import read_document

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.post("/assistant")
async def assistant(data: dict):

    query = data["query"]

    response = answer_query(query)

    return {"response": response}


@app.post("/ocr")
async def ocr(file: UploadFile):

    content = await file.read()

    text = read_document(content)

    return {"text": text}
@app.post("/track")
async def track(data: dict):

    return {
        "status": "Under Review",
        "stage": "Document Verification",
        "updated": "2 hours ago"
    }