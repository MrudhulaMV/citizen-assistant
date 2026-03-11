export default function OfficeCard({office}){

  return(
    <div style={{background:"white",padding:20,borderRadius:10}}>

      <h3>{office.name}</h3>
      <p>{office.address}</p>

      <a href={office.map} target="_blank">
        Open in Google Maps
      </a>

    </div>
  )
}