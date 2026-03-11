import Link from "next/link"

export default function ServiceCard({name}){

  return(
    <Link href={`/services/${name}`}>
      <div style={{
        padding:30,
        background:"white",
        borderRadius:10,
        cursor:"pointer",
        fontSize:22
      }}>
        {name}
      </div>
    </Link>
  )
}