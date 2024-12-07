import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='bg-red-600 flex flex-row'>
        <Link to="/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXJFgaMD84uTvZG3La1pjYzKtvwy7oI-Nn6g&s" alt="" className='size-20'/>
        </Link>
    </nav>
  )
}
