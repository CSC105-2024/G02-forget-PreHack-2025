import { React, useState, useEffect } from 'react'
import { IoIosStar } from "react-icons/io";
import * as color from './ChangeColorStar'
import * as apiComment from '../api/comment';

const CommentBox = ({showComment, foodPostId}) => {

    const [showResponse, setShowResponse] = useState(false);

    // Store data for send these variables to API
    const [rating, setRating] = useState(0);
    const [content, setContent] = useState("");

    // Get userId from localStorage and assign to userAccount (variable)
    const userAccount = parseInt(localStorage.getItem("userAccount"));

    // Backend => API createComment
    const createComment = async (rating, content, day, month, year, foodPostId, userId) => {
        await apiComment.createComment(rating, content, day, month, year, parseInt(foodPostId), parseInt(userId));
    }

    // Send data to API createComment
    function handleSubmit() {
        const date = new Date();
        if (rating == 0) {
            setShowResponse(true);
        } else {
            createComment(rating, content, date.getDate(), date.getMonth() + 1, date.getFullYear(), foodPostId, userAccount);
            showComment(false);
            setShowResponse(false);
            window.location.reload();
        }
    }

  return (
    <>
    <div className='flex justify-center mt-10'>
        <div className='bg-white w-275 p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
            <div className='flex flex-col items-center'>
                <div className='flex gap-3 mt-2'>
                    <IoIosStar onClick={() => color.oneStar(setRating)} id='star1' className='bg-[#A9A9A9] text-white text-[54px] p-1 rounded-sm cursor-pointer'/>
                    <IoIosStar onClick={() => color.twoStar(setRating)} id='star2' className='bg-[#A9A9A9] text-white text-[54px] p-1 rounded-sm cursor-pointer'/>
                    <IoIosStar onClick={() => color.threeStar(setRating)} id='star3' className='bg-[#A9A9A9] text-white text-[54px] p-1 rounded-sm cursor-pointer'/>
                    <IoIosStar onClick={() => color.fourStar(setRating)} id='star4' className='bg-[#A9A9A9] text-white text-[54px] p-1 rounded-sm cursor-pointer'/>
                    <IoIosStar onClick={() => color.fiveStar(setRating)} id='star5' className='bg-[#A9A9A9] text-white text-[54px] p-1 rounded-sm cursor-pointer'/>
                </div>
                {showResponse && <p className='text-[#DE0000] text-[20px] font-semibold mt-5'>Rate your comment !!!</p>}
            </div>
            <hr  className='my-5 border-1'/>
            <h1 className='text-[36px]'>Comment</h1>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} className='border-1 border-[#D9D9D9] w-[100%] p-2 rounded-lg resize-none h-25 hover:border-black' ></textarea>
            <div className='flex justify-end mt-5 gap-5'>
                <button onClick={() => showComment(false)} className='text-[20px] font-semibold bg-black text-white rounded-lg px-7 py-2 cursor-pointer'>Cancel</button>
                <button onClick={handleSubmit} className='text-[20px] font-semibold bg-[#DE0000] text-white rounded-lg px-7 py-2 cursor-pointer'>Confirm</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default CommentBox