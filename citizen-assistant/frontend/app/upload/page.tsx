"use client"

import DocumentUploader from "../../components/DocumentUploader"

export default function UploadPage(){

  return(

    <div style={{padding:40}}>

      <h1 style={{fontSize:36}}>Upload Documents</h1>

      <p style={{marginTop:20}}>
        Upload your documents to check if they are readable before submission.
      </p>

      <div style={{marginTop:30}}>
        <DocumentUploader />
      </div>

    </div>

  )
}