import './App.css'
import data from './data.json'
import Nav from './components/Nav'
import Main from './components/Main'

const App = () => {
  return (
    <div className="App">
      {data.map((data) => (
      <Nav />
      <Main data={data} />
      ))}
    </div>
  )
}

export default App
