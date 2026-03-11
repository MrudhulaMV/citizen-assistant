export default function FlowChart({steps}){

  return(
    <div>

      {steps.map((s,i)=>(
        <div key={i} style={{margin:10}}>
          {i+1}. {s}
        </div>
      ))}

    </div>
  )
}