import React from 'react'
import { Link } from 'react-router-dom'
import {FaFire, FaFilm, FaTape, FaSearch} from 'react-icons/fa'
const Navbar = () => {
  return (
   <nav className='fixed z-50 bottom-0 flex justify-around bg-slate-900 text-white px-3 w-full  '>
        <Link to={'/'} className='flex items-center flex-col justify-center py-4 text-lg active:bg-slate-400 transition-all  px-8'><FaFire/>Trending</Link>
        <Link to={'/movies'} className='flex items-center flex-col justify-center py-4 text-lg active:bg-slate-400 transition-all  px-8'><FaFilm/>Movies</Link>
        <Link to={'/series'} className='flex items-center flex-col justify-center py-4 text-lg active:bg-slate-400 transition-all  px-8'><FaTape/>Series</Link>
        <Link to={'/search'} className='flex items-center flex-col justify-center py-4 text-lg active:bg-slate-400 transition-all px-8'><FaSearch/>Search</Link>
   </nav>
  )
}

export default Navbar