import './App.css'
import data from './data.json'
import Nav from './components/Nav'
import Main from './components/Main'

const App = () => {
  return (
    <div className="App">
      {data.map(() => (
        <>
          <Nav />
          <Main />
        </>
      ))}
    </div>
  )
}

export default App
