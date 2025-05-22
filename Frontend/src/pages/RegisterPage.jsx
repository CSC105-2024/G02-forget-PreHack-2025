import React from 'react'
import NavbarNoSearchingBar from '../components/NavbarNoSearchingBar'
import { NavLink } from "react-router-dom";
import { LuEyeClosed } from "react-icons/lu";

const RegisterPage = () => {
  return (
    <>
    <NavbarNoSearchingBar></NavbarNoSearchingBar>
    <div className='flex justify-center mt-10'>
        <div className='bg-white flex flex-col items-center w-125 p-5 pb-20 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)] max-sm:w-97'>
            <h1 className='text-[36px] font-bold mb-5'>Register</h1>
            <div className=''>
                <form className ='flex flex-col item-'action="">
                    <div>
                    <label className='text-[20px] max-sm:ml-3'>Username</label> <br />
                    <input type="email" placeholder='Enter your username' className='text-[18px] border-1 border-[#D9D9D9] rounded-lg px-3 py-1 my-2 w-100 max-sm:ml-2 hover:border-black max-sm:w-85'/> <br />
                    </div>
                    <div>
                    <label className='text-[20px] max-sm:ml-3'>Email</label> <br />
                    <input type="email" placeholder='Enter your email' className='text-[18px] border-1 border-[#D9D9D9] rounded-lg px-3 py-1 my-2 w-100 max-sm:ml-2 hover:border-black max-sm:w-85'/> <br />
                    </div>
                    <div>
                    <label className='text-[20px] max-sm:ml-3'>Password</label> <br />
                    <div className='flex items-center'>
                        <input type="Password" placeholder='Enter your Password' className='text-[18px] border-1 border-[#D9D9D9] rounded-lg px-3 py-1 my-2 w-100 max-sm:ml-2 hover:border-black max-sm:w-85'/>
                        <LuEyeClosed className='-ml-8 text-[20px] cursor-pointer'/>
                    </div>
                    </div>
                    <div>
                    <label className='text-[20px] max-sm:ml-3'> Confirm Password</label> <br />
                    <div className='flex items-center'>
                        <input type="Password" placeholder='Enter your Password' className='text-[18px] border-1 border-[#D9D9D9] rounded-lg px-3 py-1 my-2 w-100 max-sm:ml-2 hover:border-black max-sm:w-85 '/>
                        <LuEyeClosed className='-ml-8 text-[20px] cursor-pointer'/>
                    </div>
                    </div>
                    <div className='flex justify-center my-7'>
                        <button type='submit' className='text-[20px] text-white font-bold bg-[#DE0000] w-100  max-sm:w-85 py-2 rounded-xl cursor-pointer hover:bg-[#C70000]'>Register</button>
                    </div>
                </form>
                </div>
                    <p className='font-bold text-[18px]'>Already have an account? <NavLink to={"/login"} className='font-normal underline cursor-pointer'>Click here</NavLink></p>
                <div>
            </div>
        </div>
    </div>
    </>
  )
}

export default RegisterPage