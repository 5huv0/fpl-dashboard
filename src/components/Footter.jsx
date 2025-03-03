// import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='w-full bottom-0 flex justify-around'>
      <div className='flex flex-col items-start'>
        <p className='font-bold font-mono text-black text-4xl p-3'>
            FPL Leagues
        </p>
        <p className='font-thin font-mono text-black text-xs p-3'>
            All Right Reserve @5huv0
        </p>
      </div>
      <div>
        <div className='flex flex-col font-bold font-mono p-3 m-2'> {/* This is buttons section */}
            <Link
                to="/rizzgen"
                className=' text-black hover:bg-white text-center rounded-xl '
                >
                Top of the Week
                </Link>
                <Link
                to="/favourites"
                className=' text-black  hover:bg-white text-center  rounded-xl '
                >
                Top of the season
                </Link>
                <Link
                to="/addrizz"
                className=' text-black  hover:bg-white text-center rounded-xl '
                >
                PL Table
                </Link>
                <Link
                to="/features"
                className=' text-black  hover:bg-white text-center rounded-xl '
                >
                 League Table
                </Link>
                <Link
                to="/contacts"
                className=' text-black  hover:bg-white text-center rounded-xl '
                >
                Contacts
            </Link>
        </div>
      </div>
    </div>
  )
}
