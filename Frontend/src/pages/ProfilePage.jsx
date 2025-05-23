import { React, useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import EditProfileModal from '../components/EditProfileModal';
import { FaUser } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import * as apiUser from '../api/user';

const ProfilePage = () => {
    const [showComment, setShowComment] = useState(true);
    const [showPost, setShowPost] = useState(false);
    const [edit, setEdit] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Get userId from localStorage and assign to userAccount (variable)
    const userAccount = parseInt(localStorage.getItem("userAccount"));

    // Backend => API getInfoUser
    const getInfoUser = async (id) => {
        try {
            const data = await apiUser.getInfoUser(id);
            if (data.data.success) {
                setUsername(data.data.data.username);
                setEmail(data.data.data.email)
                setPassword(data.data.data.password)
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
    <Navbar></Navbar>
    <div className='flex justify-center mt-10 max-sm:mt-5'>
        <div className='bg-white w-275 max-sm:w-100  p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
            <div className='flex justify-around items-center '>
                <div>
                    <FaUser className='border-1 rounded-[100%] text-[128px] p-5 max-sm:text-[70px]'/>
                </div>
                <div className='flex flex-col -ml-30'>
                    <h2 className='text-[30px] font-bold mb-5 max-sm:ml-31 max-sm:text-[20px]'>{username}</h2>
                    <div className='flex gap-20 font-semibold'>
                        <div className='text-[24px] text-center mr-20 max-sm:ml-27 max-sm:-mt-5 max-sm:text-[20px]'>
                            <p>2</p>
                            <p>Comments</p>
                        </div>
                        <div className='text-[24px] text-center font-semibold max-sm:-ml-35 max-sm:text-[20px] max-sm:-mt-5'>
                            <p>0</p>
                            <p>like</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => setEdit(true)} className='bg-[#DE0000] text-white text-[20px] font-semibold px-6 py-2 rounded-lg cursor-pointer'>Edit</button>
            </div>
        </div>
    </div>
    {edit && <EditProfileModal edit={setEdit} username={username} email={email} password={password} ></EditProfileModal>}

    <div className='flex justify-center my-10'>
        <div className='bg-white w-275 max-sm:w-100 p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
            <div className='flex justify-center gap-20 text-[24px] font-bold mb-10 max-sm:text-[20px]'>
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
                    <p className='text-[24px] max-sm:text-[20px] font-bold'>To***</p>
                </div>
                <div className='flex gap-1 mt-2'>
                    <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                    <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                    <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                    <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                    <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                    <p className='text-[#A9A9A9] ml-2'>02/01/2025</p>
                </div>
                <p className='text-[24px] my-3 break-words max-sm:text-[20px]'>Content.................................................................................</p>
                <div className='flex items-center text-[24px] gap-2'>
                    <BiLike className='cursor-pointer max-sm:text-[20px]'/>
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
                    <p className='text-[24px] max-sm:text-[20px] font-bold'>To***</p>
                </div>
                <div className='flex gap-1 mt-2'>
                    <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                    <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                    <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                    <IoIosStar className='bg-[#A9A9A9] text-white text-[24px] p-1 rounded-sm'/>
                    <IoIosStar className='bg-[#A9A9A9] text-white text-[24px] p-1 rounded-sm'/>
                    <p className='text-[#A9A9A9] ml-2'>02/01/2025</p>
                </div>
                <p className='text-[24px] my-3 break-words max-sm:text-[20px]'>Content.................................................................................</p>
                <div className='flex items-center text-[24px] gap-2 max-sm:text-[20px]'>
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