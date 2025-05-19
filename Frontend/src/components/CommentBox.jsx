import React from 'react'
import { IoIosStar } from "react-icons/io";

const CommentBox = ({showComment}) => {
  return (
    <>
    <div className='flex justify-center mt-10'>
        <div className='bg-white w-275 p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
            <div className='flex justify-center'>
                <div className='flex gap-3 mt-2'>
                    <IoIosStar className='bg-[#A9A9A9] text-white text-[54px] p-1 rounded-sm'/>
                    <IoIosStar className='bg-[#A9A9A9] text-white text-[54px] p-1 rounded-sm'/>
                    <IoIosStar className='bg-[#A9A9A9] text-white text-[54px] p-1 rounded-sm'/>
                    <IoIosStar className='bg-[#A9A9A9] text-white text-[54px] p-1 rounded-sm'/>
                    <IoIosStar className='bg-[#A9A9A9] text-white text-[54px] p-1 rounded-sm'/>
                </div>
            </div>
            <hr  className='my-5 border-1'/>
            <h1 className='text-[36px]'>Comment</h1>
            <textarea className='border-1 border-[#D9D9D9] w-[100%] p-2 rounded-lg resize-none h-25 hover:border-black' ></textarea>
            <div className='flex justify-end mt-5 gap-5'>
                <button onClick={() => showComment(false)} className='text-[20px] font-semibold bg-black text-white rounded-lg px-7 py-2 cursor-pointer'>Cancel</button>
                <button className='text-[20px] font-semibold bg-[#DE0000] text-white rounded-lg px-7 py-2 cursor-pointer'>Confirm</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default CommentBox