
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footter from './components/Footter'
// import fplLogo from '../public/images/fpl-logo-3'

function App() {

  return (
    <>
    <div className='bg-[url(/public/images/fpl-logo-1.jpg)]'>
      <Navbar/>
      <Outlet/>
      <Footter/>
    </div>
      
    </>
  )
}

export default App
