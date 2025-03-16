// import React from 'react'

export default function Search() {
  return (
    <div className="flex flex-col justify-center gap-5 items-center m-3">
        <label htmlFor="" className="font-bold text-5xl font-mono">Search Players</label>
        <div className="flex justify-center align-middle">
            <input type="text" placeholder="Search Players" className="p-3 text-center w-60 border-none outline-none rounded-s-lg"/>
            <button className="bg-gray-700 rounded-r-lg hover:bg-red-600">
                <img src="../../../../public/images/search-logo.png" alt="" className="size-10 p-1"/>
            </button>
        </div>
        
    </div>
  )
}
