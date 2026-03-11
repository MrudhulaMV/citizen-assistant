const GOOGLE_TRANSLATE_API =
  "https://translate.googleapis.com/translate_a/single"

export async function translateText(
  text: string,
  targetLang: "en" | "kn"
) {

  const url =
    `${GOOGLE_TRANSLATE_API}?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`

  const res = await fetch(url)

  const data = await res.json()

  return data[0][0][0]
}

export async function toKannada(text: string) {
  return translateText(text, "kn")
}

export async function toEnglish(text: string) {
  return translateText(text, "en")
}