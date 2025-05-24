import { React, useState } from 'react'
import { FaUser } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";

const EditProfileModal = ({edit, username, email, password}) => {
    const [hide, setHide] = useState(true);
    const [editUsername, setEditUsername] = useState("");
    const blind = "*************";

  return (
    <>
    <div className='fixed inset-0 z-40 bg-[rgba(0,0,0,0.50)] flex justify-center items-center'>
        <div className='flex justify-center'>
            <div className='bg-white w-175 p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)] max-sm:w-90 max-sm:h-175 max-sm:mx-4'>
                <div className='flex justify-center items-center gap-20 max-sm:flex-col max-sm:gap-5'>
                    <FaUser className='border-1 rounded-[100%] text-[128px] p-5 max-sm:text-[128px] max-sm:p-5'/>
                    <div className='max-sm:w-full max-sm:mt-4'>
                        <label className='text-[20px] font-semibold max-sm:text-base'>Email</label> <br />
                        <input type="text" value={email} className='border-1 border-[#D9D9D9] rounded-lg px-2 py-1 w-75 mt-2 mb-5 max-sm:w-full' readOnly/> <br />
                        <label className='text-[20px] font-semibold max-sm:text-base'>Username</label> <br />
                        <input type="text" onChange={(e) => setEditUsername(e.target.value)} className='border-1 border-[#D9D9D9] rounded-lg px-2 py-1 w-75 mt-2 mb-5 hover:border-black max-sm:w-full' /> <br />
                        <label className='text-[20px] font-semibold max-sm:text-base'>Password</label> <br />
                        <div className='flex items-center'>
                            <input type="text" value={hide ? blind : password} className='border-1 border-[#D9D9D9] rounded-lg px-2 py-1 w-75 mt-2 mb-5 max-sm:w-full' readOnly/> <br />
                            {hide && <LuEyeClosed onClick={() => setHide(false)} className='-ml-8 -mt-3 text-[20px] cursor-pointer'/>}
                            {!hide && <LuEye onClick={() => setHide(true)} className='-ml-8 -mt-3 text-[20px] cursor-pointer'/>}
                        </div>
                        <div className='flex justify-center gap-5 mt-5 max-sm:gap-2 max-sm:mt-50 max-sm:ml-35'>
                            <button onClick={() => edit(false)} className='text-[18px] font-semibold bg-black text-white rounded-lg px-7 py-2 cursor-pointer max-sm:text-base max-sm:px-4 max-sm:'>Cancel</button>
                            <button className='text-[18px] font-semibold bg-[#DE0000] text-white rounded-lg px-7 py-2 cursor-pointer max-sm:text-base max-sm:px-4'>Confirm</button>
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