import Plant from './Plant'

const Main = (props) => {
console.log(props)
  return (
    <div className='main'>
      {props.plants.map((plant) => (

          <Plant 
            key={plant.id}
            name={plant.name}
            scientificName={plant.scientificName}
            origin={plant.origin}
            lightReq={plant.lightReq}
            waterReq={plant.waterReq}
            notes={plant.notes}
            image={plant.image}
          />

      ))}
    </div>
  )
}

export default Main