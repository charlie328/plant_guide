import Plant from './Plant'

const Main = (props) => {
console.log(props)
  return (
    <div>
      {props.plants.map((plant) => (

        <Plant 
          key={plant.id}
          name={plant.name}
          scientificName={plant.scientificName}
          origin={plant.origin}
          lightReq={plant.lightReq}
          waterReq={plant.waterReq}
          notes={plant.notes}
        />

      ))}
    </div>
  )
}

export default Main