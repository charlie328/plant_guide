import Image from './Image'

const Plant = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.scientificName}</p>
      <p>Origin: {props.origin}</p>
      <p>Light: {props.lightReq}</p>
      <p>Watering: {props.waterReq}</p>
      <p>Notes: {props.notes}</p>
      <img src={props.image}/>
    </div>
  )
}

export default Plant