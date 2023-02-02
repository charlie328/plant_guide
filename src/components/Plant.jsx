import Image from './Image'

const Plant = (props) => {
  return (
    <div className='plant'>
      <Image image={props.image} />
      <div className='copyBox'>
        <h2>{props.name}</h2>
        <h3>{props.scientificName}</h3>
        <p>Origin: {props.origin}</p>
        <p>Light: {props.lightReq}</p>
        <p>Watering: {props.waterReq}</p>
        <p>Notes: {props.notes}</p>
      </div>
    </div>
  )
}

export default Plant