import React from 'react'
import { FaUser } from "react-icons/fa";

const EditProfileModal = ({edit}) => {
  return (
    <>
    <div className='fixed inset-0 z-40 bg-[rgba(0,0,0,0.50)] flex justify-center items-center'>
        <div className='flex justify-center'>
            <div className='bg-white w-175 p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
                <div className='flex justify-center items-center gap-20'>
                    <FaUser className='border-1 rounded-[100%] text-[128px] p-5'/>
                    <div>
                        <label className='text-[20px] font-semibold'>Email</label> <br />
                        <input type="text" value={"asdgdahfo"} className='border-1 border-[#D9D9D9] rounded-lg px-2 py-1 w-75 mt-2 mb-5' readOnly/> <br />
                        <label className='text-[20px] font-semibold'>Username</label> <br />
                        <input type="text" className='border-1 border-[#D9D9D9] rounded-lg px-2 py-1 w-75 mt-2 mb-5 hover:border-black' /> <br />
                        <label className='text-[20px] font-semibold'>Password</label> <br />
                        <input type="text" value={"**********"} className='border-1 border-[#D9D9D9] rounded-lg px-2 py-1 w-75 mt-2 mb-5' readOnly/> <br />
                        <div className='flex justify-center gap-5 mt-5'>
                            <button onClick={() => edit(false)} className='text-[18px] font-semibold bg-black text-white rounded-lg px-7 py-2 cursor-pointer'>Cancel</button>
                            <button className='text-[18px] font-semibold bg-[#DE0000] text-white rounded-lg px-7 py-2 cursor-pointer'>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default EditProfileModal