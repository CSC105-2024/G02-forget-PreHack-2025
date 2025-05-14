import React from 'react'
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";


const LoginPage = () => {
  return (
    <>
    {/* Navbar no search bar */}
    <header className=''>
        <nav className='flex justify-between items-center h-25 bg-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]'>
            <NavLink to={"/home"} className='text-[36px] font-bold ml-10 cursor-pointer'>
                <h1><span className='text-[#DE0000]'>Abb</span> Sabb</h1>
            </NavLink>
            <NavLink to={"/login"} className='flex items-center gap-3 border-1 border-[#D9D9D9] py-2 px-6 rounded-2xl mr-10 hover:border-black cursor-pointer'>
                <FaUser className='border-1 rounded-[100%] text-[48px] p-1'/>
                <p className='text-[24px] font-bold'>Login</p>
            </NavLink>
        </nav>
    </header>
    <div className='h-screen'>
        <div className='flex justify-center mt-15'>
            <div className='bg-white flex flex-col items-center w-125 p-5 rounded-lg drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]'>
                <h1 className='text-[36px] font-bold'>Login</h1>
                <div className=''>
                    <form action="">
                        <label className='text-[20px]'>Email</label> <br />
                        <input type="email" placeholder='Enter your email' className='text-[18px] border-1 border-[#D9D9D9] rounded-lg px-3 py-2 my-2 w-100 hover:border-black'/> <br />
                        <label className='text-[20px]'>Password</label> <br />
                        <input type="Password" placeholder='Enter your Password' className='text-[18px] border-1 border-[#D9D9D9] rounded-lg px-3 py-2 mt-2 w-100 hover:border-black'/>
                        <LuEyeClosed />
                        <button type='submit'>Login</button>
                    </form>
                </div>
                <p>Don't have an account? <span>register</span> here</p>
                <div>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default LoginPage