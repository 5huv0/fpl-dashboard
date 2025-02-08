
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footter from './components/Footter'

function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footter/>
    </>
  )
}

export default App
