// import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='flex flex-row justify-between font-mono'>
       <div className='flex gap-6 justify-center items-center'>
            <Link to="/">
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXJFgaMD84uTvZG3La1pjYzKtvwy7oI-Nn6g&s" alt="" className='size-20'/> */}
                <img src="../../public/images/site-logo.jpg" alt="" className='size-16'/>
            </Link>
            <p className='font-bold text-3xl text-white'>
                FPL-LEAGUES
            </p>
       </div>

       <div className='flex gap-4 justify-center items-center'>
            <NavLink to="" className="hover:text-white hover:underline">
                Home
            </NavLink>

            <NavLink to="about" className="hover:text-white hover:underline">
                About
            </NavLink>

            <NavLink to="contact" className="hover:text-white hover:underline">
                Contact
            </NavLink>

            <NavLink to="#" className="hover:text-white px-3 hover:underline">
                FPL Table
            </NavLink>
       </div>
    </nav>
  )
}
