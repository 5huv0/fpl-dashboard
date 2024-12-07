import React from 'react'
import { Link } from 'react-router-dom'

export default function Footter() {
  return (
    <footer className='bg-blue-700 py-10 px-10 flex flex-row gap-40 justify-around'>
        <div>
            <p>
                contact with me through this email
            </p>
            <p>xyz@gmail.com</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
        </div>
        <div className='flex flex-col gap-4'>
            <Link to='#'>
                Leagues
            </Link>

            <Link to='#'>
                Leagues
            </Link>

            <Link to='#'>
                Leagues
            </Link>

            <Link to='#'>
                Leagues
            </Link>
        </div>
    </footer>
  )
}
