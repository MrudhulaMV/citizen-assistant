"use client"

import { useState } from "react"

export default function AssistantPage(){

  const [query,setQuery] = useState("")
  const [response,setResponse] = useState("")

  const ask = async ()=>{

    const res = await fetch("http://localhost:8000/assistant",{
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({query})
    })

    const data = await res.json()

    setResponse(data.response)

    const speech = new SpeechSynthesisUtterance(data.response)
    speechSynthesis.speak(speech)
  }

  return(

    <div style={{padding:40}}>

      <h1 style={{fontSize:36}}>Citizen Assistant</h1>

      <textarea
        placeholder="Ask about government services..."
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        style={{
          width:"100%",
          height:120,
          fontSize:22,
          marginTop:20,
          padding:20
        }}
      />

      <button
        onClick={ask}
        style={{
          marginTop:20,
          padding:20,
          fontSize:24,
          background:"#0b63ce",
          color:"white"
        }}
      >
        Ask Assistant
      </button>

      <div style={{marginTop:40,fontSize:22}}>
        {response}
      </div>

    </div>

  )
}