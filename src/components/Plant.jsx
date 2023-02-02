import Image from './Image'

const Plant = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.scientificName}</h3>
      <p>Origin: {props.origin}</p>
      <p>Light: {props.lightReq}</p>
      <p>Watering: {props.waterReq}</p>
      <p>Notes: {props.notes}</p>
      <Image image={props.image} />
    </div>
  )
}

export default Plant