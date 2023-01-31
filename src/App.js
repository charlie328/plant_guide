import './App.css'
import plants from './data.json'
import Nav from './components/Nav'
import Main from './components/Main'

const App = () => {
  return (
    <div className="App">
      {plants.map(() => (
        <>
          <Nav />
          <Main />
        </>
      ))}
    </div>
  )
}

export default App
