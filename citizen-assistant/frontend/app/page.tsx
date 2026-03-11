"use client"

import ServiceCard from "../components/ServiceCard"
import VoiceAssistant from "../components/VoiceAssistant"

const services = [
  "Passport Application",
  "Aadhaar Update",
  "Driving License",
  "Birth Certificate",
  "Income Certificate",
  "PAN Card"
]

export default function Home() {

  return (
    <div style={{padding:40}}>

      <input
        placeholder="Search government service..."
        style={{
          width:"100%",
          padding:20,
          fontSize:24
        }}
      />

      <div style={{marginTop:40,display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:20}}>
        {services.map((s)=>(
          <ServiceCard key={s} name={s}/>
        ))}
      </div>

      <VoiceAssistant />

    </div>
  )
}