import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='bg-slate-500 w-full bottom-0 flex justify-around'>
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
            <NavLink
                to="/rizzgen"
                className=' text-black  rounded-xl hover:underline'
                >
                Top of the Week
                </NavLink>
                <NavLink
                to="/favourites"
                className=' text-black  rounded-xl hover:underline'
                >
                Top of the season
                </NavLink>
                <NavLink
                to="/addrizz"
                className=' text-black  rounded-xl hover:underline'
                >
                PL Table
                </NavLink>
                <NavLink
                to="/features"
                className=' text-black  rounded-xl hover:underline'
                >
                 League Table
                </NavLink>
                <NavLink
                to="/contacts"
                className=' text-black rounded-xl hover:underline'
                >
                Contacts
            </NavLink>
        </div>
      </div>
    </div>
  )
}
