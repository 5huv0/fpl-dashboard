import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='bg-red-600 flex flex-row justify-between'>
       <div className='flex gap-6'>
            <Link to="/">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXJFgaMD84uTvZG3La1pjYzKtvwy7oI-Nn6g&s" alt="" className='size-20'/>
            </Link>
            <p className='font-bold text-3xl text-yellow-300'>
                FPL-LEAGUES
            </p>
       </div>

       <div className='flex gap-4 '>

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
             About
        </NavLink>

       </div>
    </nav>
  )
}
