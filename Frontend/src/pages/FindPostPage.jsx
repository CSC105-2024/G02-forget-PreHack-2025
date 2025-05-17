import { useState } from 'react'
import NavbarNoSearchingBar from '../components/NavbarNoSearchingBar'
import FilterModal from '../components/FilterModal';
import { NavLink } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const FindPostPage = () => {
    const [showFilter, setShowModal] = useState(false);

  return (
    <>
    <NavbarNoSearchingBar></NavbarNoSearchingBar>
    <div className='text-[36px] ml-10 mt-5'>
        <NavLink to={"/home"}><IoMdArrowBack /></NavLink>
    </div>
    <div className='flex justify-center gap-10'>
        <NavLink className='flex items-center'>
            <input type="text" placeholder='Type your food' className='border-1 border-[#D9D9D9] bg-white rounded-2xl py-2 px-3 w-150 text-[20px] hover:border-black'/>
            <FaSearch className='text-[24px] -ml-10 cursor-pointer'/>
        </NavLink>
        <div>
            <button onClick={() => setShowModal(true)}><FiFilter className='w-13 h-13 p-2 bg-white border-1 border-[#D9D9D9] rounded-[100%] cursor-pointer hover:border-black'/></button>
        </div>
    </div>

    {showFilter && <FilterModal filter={setShowModal}></FilterModal>}

    <div className='flex justify-center mt-10 cursor-pointer'>
        <div className='flex gap-5 bg-white w-275 p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
           <div className=''>
                <img src="" alt="" />
                <div className='w-60 h-50 bg-[#D9D9D9] rounded-lg'></div>
           </div>
           <div className=''>
                <h1 className='text-[36px] font-semibold'>Name</h1>
                <div className='flex justify-center items-center w-15 gap-1 bg-[#DE0000] px-2 rounded-sm'>
                    <p className='text-white text-[16px] font-semibold'>4.0</p>
                    <IoIosStar className='text-white text-[14px]'/>
                </div>
                <p className='text-[#A9A9A9] text-[20px]'>2 reviews</p>
                <div className='flex items-center gap-3'>
                    <FaLocationDot className='text-[20px]'/>
                    <p className='font-semibold text-[20px]'>Location</p>
                </div>
                <div className='flex gap-5 mt-5'>
                    <p className='border-2 text-center px-2 py-1 rounded-lg text-[18px] font-semibold'>Category</p>
                    <p className='border-2 text-center px-2 py-1 rounded-lg text-[18px] font-semibold'>Category</p>
                </div>
           </div>
        </div>
    </div>
    </>
  )
}

export default FindPostPage