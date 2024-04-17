
import './App.css'
import Logo from './components/Logo'
import NavBar from './components/NavBar'
import ContenedorItem from './components/ContenedorItem'

function App() {

  return (
    <div>
      <div className='contenedorHeader'>
        <Logo />
        <NavBar />
      </div>
      <div className='contenedorItem'>
      <ContenedorItem saludo />
      </div>
    </div >
  )
}

export default App
