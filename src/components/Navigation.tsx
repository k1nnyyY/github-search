import React from 'react'
import {Link} from 'react-router-dom'

export function Navigation() {
  return (
    <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
      <Link to='/' className="font-bold pr-4">Github Search</Link>

      <span className='pr-14'>
        <Link to="/favourites">Favourites</Link>
      </span>
    </nav>
  )
}