"use client"

export default function VoiceAssistant(){

  const start = ()=>{

    const recognition = new window.webkitSpeechRecognition()

    recognition.onresult = async (event)=>{

      const text = event.results[0][0].transcript

      const res = await fetch("http://localhost:8000/assistant",{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({query:text})
      })

      const data = await res.json()

      alert(data.response)

      const speech = new SpeechSynthesisUtterance(data.response)
      speechSynthesis.speak(speech)
    }

    recognition.start()
  }

  return(
    <button
    onClick={start}
    style={{
      position:"fixed",
      bottom:30,
      right:30,
      padding:25,
      borderRadius:50,
      fontSize:22,
      background:"#0b63ce",
      color:"white"
    }}>
      🎤 Ask
    </button>
  )
}