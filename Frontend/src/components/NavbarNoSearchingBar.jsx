import React from 'react'
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const NavbarNoSearchingBar = () => {
  return (
    <>
    <header className=''>
            <nav className='flex justify-between items-center max-sm:h-15 h-25 w-screen bg-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.25)]'>
                <NavLink to={"/home"} className='max-sm:text-[20px] text-[36px] font-bold ml-2 lg:ml-10 cursor-pointer'>
                    <h1 className='flex flex-row'>
                        <span className='text-[#DE0000]'>Abb&nbsp;</span>
                        <span className='text-[#000000]'>Sapp</span>
                    </h1>
                </NavLink>
                <NavLink to={"/login"} className='flex items-center gap-3 border-1 border-[#D9D9D9] py-1 px-1 lg:py-2 lg:px-6 rounded-2xl ml-2 mr-1 lg:mr-10 hover:border-black cursor-pointer'>
                    <FaUser className='border-1 rounded-[100%] max-sm:text-[30px] text-[48px] p-1'/>
                    <p className=' text-[20px] lg:text-[24px] font-bold'>Login</p>
                </NavLink>
            </nav>
        </header>
    </>
  )
}

export default NavbarNoSearchingBar