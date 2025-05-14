import React from 'react'
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
    <header className=''>
        <nav className='flex justify-between items-center h-25 bg-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]'>
            <NavLink to={"/home"} className='text-[36px] font-bold ml-10 cursor-pointer'>
                <h1><span className='text-[#DE0000]'>Abb</span> Sabb</h1>
            </NavLink>
            <NavLink className='flex items-center'>
                <input type="text" placeholder='Type your food' className='border-1 border-[#D9D9D9] rounded-2xl py-2 px-3 w-150 text-[20px]'/>
                <FaSearch className='text-[24px] -ml-10 cursor-pointer'/>
            </NavLink>
            <NavLink to={"/login"} className='flex items-center gap-3 border-1 border-[#D9D9D9] py-2 px-6 rounded-2xl mr-10 hover:border-black cursor-pointer'>
                <FaUser className='border-1 rounded-[100%] text-[48px] p-1'/>
                <p className='text-[24px] font-bold'>Login</p>
            </NavLink>
        </nav>
    </header>
    </>
  )
}

export default Navbar