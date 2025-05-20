import { React, useState } from 'react'
import Navbar from '../components/Navbar'
import CommentBox from '../components/CommentBox';
import UploadImage from '../components/UploadImage';
import { NavLink } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BiLike } from "react-icons/bi";

const FoodPostPage = () => {
    const [showComment, setShowComment] = useState(false);
    const [showUpload, setShowUpload] = useState(false);

  return (
    <>
    <Navbar></Navbar>
    <div className='text-[36px] ml-10 mt-5 max-sm:ml-2 '>
        <NavLink to={"/search"}><IoMdArrowBack /></NavLink>
    </div>
    <div className='bg-white h-80 mt-5  max-sm:h-50 max-sm:-mt-10'>
        <div></div>
    </div>
    <div className='flex justify-center mt-10'>
        <div className='bg-white w-275 max-sm:w-100 p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
            <div className='flex justify-between items-center'>
                <h1 className='text-[36px] font-semibold max-sm:text-[26px]'>Name</h1>
                <button onClick={() => setShowComment(true)} className='bg-[#DE0000] text-white text-[20px] font-semibold px-8 max-sm:px-5 py-1 max-sm:text-[16px] rounded-lg cursor-pointer'>Review</button>
            </div>
            <p className='text-[#A9A9A9] text-[24px] max-sm:text-[20px]'>Category</p>
            <p className='text-[#A9A9A9] text-[24px] max-sm:text-[20px]'>Price</p>
            <div className='flex items-center gap-2'>
                <div className='flex justify-center items-center gap-1 bg-[#DE0000] px-2 rounded-sm'>
                    <p className='text-white text-[20px] max-sm:text-[18px] font-semibold'>4.0</p>
                    <IoIosStar className='text-white text-[20px]'/>
                </div>
                <p className='text-[#A9A9A9] text-[16px]'>2 reviews</p>
            </div>
            <hr className='my-5 border-1'/>
            <button onClick={() => setShowUpload(true)} className='flex justify-center items-center gap-2 max-sm:w-30 text-[20px] text-white bg-black px-8 max-sm:px-2 py-1 rounded-lg cursor-pointer'><FaPlus /> Image</button>
        </div>
    </div>

    {showUpload && <UploadImage showUpload={setShowUpload}></UploadImage>}

    <div className='flex mx-3 justify-center mt-10'>
        <div className='bg-white w-275 p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
            <div className='flex items-center gap-5 text-[30px] max-sm:text-[24px] mb-4'>
                <FaLocationDot/>
                <h1>Location</h1>
            </div>
            <div className='flex items-center gap-5 text-[30px] max-sm:text-[24px]'>
                <FaPhoneAlt/>
                <h1>Phone number</h1>
            </div>
        </div>
    </div>

    {showComment && <CommentBox showComment={setShowComment}></CommentBox>}

    <div className='flex justify-center mt-10 mb-20'>
        <div className='bg-white w-275 max-sm:w-100 p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
            <h1 className='text-[36px] max-sm:text-[26px] font-bold'>Comment</h1>
            <div className='flex justify-center items-center text-[#DE0000] text-[48px] gap-x-4'>
                <h1 className='font-bold'>4.0</h1>
                <IoIosStar/>
            </div>
            {/* Comment #1 */}
            <div>
                <div className='flex items-center gap-4'>
                    <div className='border-1 rounded-[100%] p-2'>
                        <FaUser className='text-[28px]'/>
                    </div>
                    <p className='text-[24px] font-bold max-sm:text-[20px]'>To***</p>
                </div>
                <div className='flex gap-1 mt-2'>
                    <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                    <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                    <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                    <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                    <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                    <p className='text-[#A9A9A9] ml-2'>02/01/2025</p>
                </div>
                <p className='text-[24px] my-3 break-words max-sm:text-[20px]'>Content...........................................................................................................................................................................................</p>
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
                    <p className='text-[24px] max-sm:text-[20px] font-bold'>Ji***</p>
                </div>
                <div className='flex gap-1 mt-2 '>
                    <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                    <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                    <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                    <IoIosStar className='bg-[#A9A9A9] text-white text-[24px] p-1 rounded-sm'/>
                    <IoIosStar className='bg-[#A9A9A9] text-white text-[24px] p-1 rounded-sm'/>
                    <p className='text-[#A9A9A9] ml-2'>02/01/2025</p>
                </div>
                <p className='text-[24px] my-3 break-words max-sm:text-[20px]'>Content..........................................................................................................................................................................................</p>
                <div className='flex items-center text-[24px] gap-2'>
                    <BiLike className='cursor-pointer'/>
                    <p>0 like</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default FoodPostPage