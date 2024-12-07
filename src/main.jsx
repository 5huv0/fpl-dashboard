import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Footter from './components/Footter.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element={<App/>}>
      <Route path='' element={<Home/>} />
      <Route path='' element={<Navbar/>} />
      <Route path='' element={<About/>} />
      <Route path='' element={<Footter/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
