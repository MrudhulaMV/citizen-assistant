const BASE_URL = "http://localhost:8000"

export async function askAssistant(query: string) {

  const res = await fetch(`${BASE_URL}/assistant`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  })

  return res.json()
}

export async function uploadDocument(file: File) {

  const formData = new FormData()
  formData.append("file", file)

  const res = await fetch(`${BASE_URL}/ocr`, {
    method: "POST",
    body: formData
  })

  return res.json()
}

export async function trackApplication(applicationId: string) {

  const res = await fetch(`${BASE_URL}/track`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      application_id: applicationId
    })
  })

  return res.json()
}

export async function getServices() {

  const res = await fetch(`${BASE_URL}/services`)

  return res.json()
}