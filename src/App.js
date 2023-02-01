import './App.css'
import plants from './plants.json'
import Nav from './components/Nav'
import Main from './components/Main'

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Main plants={plants} />
    </div>
  )
}

export default App
