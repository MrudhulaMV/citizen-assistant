import { askAssistant } from "./api"

export async function queryAI(query: string) {

  const data = await askAssistant(query)

  return data.response
}

export function speakText(text: string) {

  if (!("speechSynthesis" in window)) return

  const speech = new SpeechSynthesisUtterance(text)

  speech.lang = "en-IN"

  speech.rate = 1
  speech.pitch = 1

  window.speechSynthesis.speak(speech)
}

export function listenVoice(): Promise<string> {

  return new Promise((resolve, reject) => {

    const recognition =
      new (window as any).webkitSpeechRecognition()

    recognition.lang = "en-IN"
    recognition.continuous = false
    recognition.interimResults = false

    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript
      resolve(text)
    }

    recognition.onerror = (err: any) => reject(err)

    recognition.start()
  })
}