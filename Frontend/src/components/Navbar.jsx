import { React, useState, useEffect, use } from 'react'
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import * as apiUser from '../api/user';

const Navbar = () => {
    const [login, setLogin] = useState(false);
    const [username, setUsername] = useState("");
    const [dropDown, setDropDown] = useState(false);
    // Get userId from localStorage and assign to userAccount (variable)
    const userAccount = parseInt(localStorage.getItem("userAccount"));

    // Backend => API getInfoUser
    const getInfoUser = async (id) => {
        try {
            const data = await apiUser.getInfoUser(id);
            if (data.data.success) {
                setUsername(data.data.data.username);
                setLogin(true);
            }
        } catch (e) {
            console.log(e);
        } 
    }

    useEffect(() => {
        getInfoUser(userAccount);
    }, [])

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
            <NavLink className='flex items-center max-sm:ml-2 max-sm:mr-2 ml-5 mr-5'>
                <input type="text" placeholder='Type your food' className='border-1 border-[#D9D9D9] max-sm:rounded-[50px] max-sm:h-[30px] rounded-2xl py-2 px-3 lg:w-150 max-sm:text-[15px] text-[20px] hover:border-black'/>
                <FaSearch className='text-[15px] lg:text-[24px] -ml-5 cursor-pointer'/>
            </NavLink>
            {!login &&
            <>
            <NavLink to={"/login"} className='flex items-center gap-3 border-1 border-[#D9D9D9] py-1 px-1 lg:py-2 lg:px-6 rounded-2xl ml-2 mr-1 lg:mr-10 hover:border-black cursor-pointer'>
                <FaUser className='border-1 rounded-[100%] max-sm:text-[30px] text-[48px] p-1'/>
                <p className='text-[24px] font-bold'>login</p>
            </NavLink>
            </>
            }
            {login &&
            <>
            {!dropDown &&
            <div onClick={() => setDropDown(true)} className='flex items-center gap-3 border-1 border-[#D9D9D9] py-2 px-6 rounded-2xl mr-10 hover:border-black cursor-pointer'>
                <FaUser className='border-1 rounded-[100%] text-[48px] p-1'/>
                <p className='text-[24px] font-bold'>{username}</p>
            </div>
            }
            {dropDown &&
            <>
            <div className='relative w-60 h-75 bg-white top-30 right-10 rounded-xl drop-shadow-[0_5px_2px_rgba(0,0,0,0.25)]'>
                <div className='flex flex-col items-center mt-7'>
                    <div onClick={() => setDropDown(false)} className='flex justify-center items-center gap-4 cursor-pointer'>
                        <FaUser className='border-1 rounded-[100%] text-[48px] p-1'/>
                        <p className='text-[24px] font-bold'>{username}</p>
                    </div>
                    <NavLink to={"/profile"} className='bg-[#DE0000] text-white px-6 py-2 mt-5 text-[18px] font-semibold rounded-xl cursor-pointer'>Go to Profile</NavLink>
                    <NavLink to={"/addFoodPost"} className='flex justify-center items-center w-[100%] py-3 mt-5 gap-2 cursor-pointer hover:bg-[#D9D9D9]'><FaPlus />Add food post</NavLink>
                    <button className='flex justify-center items-center w-[100%] py-3 gap-2 cursor-pointer hover:bg-[#D9D9D9]'><FiLogOut /> Log out</button>
                </div>
            </div>
            </> 
            }
            </>
            }
        </nav>
    </header>
    </>
  )
}

export default Navbar