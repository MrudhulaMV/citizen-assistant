"use client"

import { useEffect, useState } from "react"
import FlowChart from "../../../components/FlowChart"
import OfficeCard from "../../../components/OfficeCard"

export default function ServicePage({ params }) {

  const { service } = params

  const [data,setData] = useState(null)

  useEffect(()=>{

    fetch("http://localhost:8000/services")
      .then(res=>res.json())
      .then(services=>{
        const s = services.find(
          (x)=>x.name.toLowerCase() === decodeURIComponent(service).toLowerCase()
        )
        setData(s)
      })

  },[])

  if(!data) return <div style={{padding:40}}>Loading...</div>

  const flowSteps = [
    "Citizen prepares documents",
    "Visit government office or portal",
    "Submit application",
    "Government verification",
    "Approval and certificate issued"
  ]

  return (

    <div style={{padding:40}}>

      <h1 style={{fontSize:36}}>{data.name}</h1>

      <h2 style={{marginTop:30}}>Required Documents</h2>

      <ul>
        {data.documents.map((d,i)=>(
          <li key={i}>{d}</li>
        ))}
      </ul>

      <h2 style={{marginTop:30}}>Timeline</h2>
      <p>{data.timeline}</p>

      <h2 style={{marginTop:30}}>Fees</h2>
      <p>{data.fees}</p>

      <h2 style={{marginTop:30}}>Official Website</h2>

      <a
        href={data.website}
        target="_blank"
        style={{color:"blue"}}
      >
        Visit Government Portal
      </a>

      <h2 style={{marginTop:40}}>Application Flow</h2>

      <FlowChart steps={flowSteps} />

      <h2 style={{marginTop:40}}>Nearby Offices</h2>

      <OfficeCard office={{
        name:"Bangalore One Center",
        address:"MG Road, Bangalore",
        map:"https://maps.google.com"
      }}/>

    </div>

  )
}