import { React, useState} from 'react'
import Navbar from '../components/Navbar'
import EditProfileModal from '../components/EditProfileModal';
import { FaUser } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { BiLike } from "react-icons/bi";

const ProfilePage = () => {
    const [showComment, setShowComment] = useState(true);
    const [showPost, setShowPost] = useState(false);
    const [edit, setEdit] = useState(false);
  return (
    <>
    <Navbar></Navbar>
    <div className='flex justify-center mt-10'>
        <div className='bg-white w-275 p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
            <div className='flex justify-around items-center '>
                <div>
                    <FaUser className='border-1 rounded-[100%] text-[128px] p-5'/>
                </div>
                <div className='flex flex-col -ml-30'>
                    <h2 className='text-[30px] font-semibold mb-5'>Tommy</h2>
                    <div className='flex gap-20 font-semibold'>
                        <div className='text-[24px] text-center mr-20'>
                            <p>2</p>
                            <p>Comments</p>
                        </div>
                        <div className='text-[24px] text-center font-semibold'>
                            <p>0</p>
                            <p>like</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => setEdit(true)} className='bg-[#DE0000] text-white text-[20px] font-semibold px-6 py-2 rounded-lg cursor-pointer'>Edit</button>
            </div>
        </div>
    </div>

    {edit && <EditProfileModal edit={setEdit}></EditProfileModal>}

    <div className='flex justify-center my-10'>
        <div className='bg-white w-275 p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
            <div className='flex justify-center gap-20 text-[24px] font-bold mb-10'>
                <button onClick={() => {setShowComment(true); setShowPost(false);}} className={`${showComment ? "border-b-4" : "border-none"} cursor-pointer`}>Comment</button>
                <button onClick={() => {setShowComment(false); setShowPost(true);}} className={`${showPost ? "border-b-4" : "border-none"} cursor-pointer`}>Food Post</button>
            </div>
            {/* Comment #1 */}
           {showComment && 
           <>
           <div>
                <div className='flex items-center gap-4'>
                    <div className='border-1 rounded-[100%] p-2'>
                        <FaUser className='text-[28px]'/>
                    </div>
                    <p className='text-[24px] font-bold'>To***</p>
                </div>
                <div className='flex gap-1 mt-2'>
                    <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                    <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                    <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                    <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                    <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                    <p className='text-[#A9A9A9] ml-2'>02/01/2025</p>
                </div>
                <p className='text-[24px] my-3'>Content.................................................................................</p>
                <div className='flex items-center text-[24px] gap-2'>
                    <BiLike className='cursor-pointer'/>
                    <p>0 like</p>
                </div>
            </div>
            <hr className='my-5 border-1'/>

            {/* Comment #2 */}
            <div>
                <div className='flex items-center gap-4'>
                    <div className='border-1 rounded-[100%] p-2'>
                        <FaUser className='text-[28px]'/>
                    </div>
                    <p className='text-[24px] font-bold'>To***</p>
                </div>
                <div className='flex gap-1 mt-2'>
                    <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                    <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                    <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                    <IoIosStar className='bg-[#A9A9A9] text-white text-[24px] p-1 rounded-sm'/>
                    <IoIosStar className='bg-[#A9A9A9] text-white text-[24px] p-1 rounded-sm'/>
                    <p className='text-[#A9A9A9] ml-2'>02/01/2025</p>
                </div>
                <p className='text-[24px] my-3'>Content.................................................................................</p>
                <div className='flex items-center text-[24px] gap-2'>
                    <BiLike className='cursor-pointer'/>
                    <p>0 like</p>
                </div>
            </div>
            </>
            }
        </div>
    </div>
    </>
  )
}

export default ProfilePage