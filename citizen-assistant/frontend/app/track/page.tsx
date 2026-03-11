"use client"

import { useState } from "react"

export default function TrackPage(){

  const [id,setId] = useState("")
  const [status,setStatus] = useState(null)

  const track = async ()=>{

    const res = await fetch("http://localhost:8000/track",{
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({application_id:id})
    })

    const data = await res.json()

    setStatus(data)
  }

  return(

    <div style={{padding:40}}>

      <h1 style={{fontSize:36}}>Track Application</h1>

      <input
        placeholder="Enter Application ID"
        value={id}
        onChange={(e)=>setId(e.target.value)}
        style={{
          padding:20,
          fontSize:22,
          width:"100%",
          marginTop:20
        }}
      />

      <button
        onClick={track}
        style={{
          marginTop:20,
          padding:20,
          fontSize:24,
          background:"#0b63ce",
          color:"white"
        }}
      >
        Track Status
      </button>

      {status && (

        <div style={{marginTop:40,fontSize:22}}>

          <p>Status: {status.status}</p>
          <p>Stage: {status.stage}</p>
          <p>Last Updated: {status.updated}</p>

        </div>

      )}

    </div>

  )
}