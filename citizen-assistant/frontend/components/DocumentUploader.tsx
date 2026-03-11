"use client"

import {useState} from "react"

export default function DocumentUploader(){

  const [text,setText] = useState("")

  const upload = async(e)=>{

    const file = e.target.files[0]

    const form = new FormData()

    form.append("file",file)

    const res = await fetch("http://localhost:8000/ocr",{
      method:"POST",
      body:form
    })

    const data = await res.json()

    setText(data.text)
  }

  return(
    <div>

      <input type="file" onChange={upload}/>

      <p>{text}</p>

    </div>
  )
}