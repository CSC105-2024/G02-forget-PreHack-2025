import { React, useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import CommentBox from '../components/CommentBox';
import UploadImage from '../components/UploadImage';
import * as color from '../components/ChangeColorStar'
// Router
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
// Icon
import { IoMdArrowBack } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";
// API
import * as apiPost from "../api/foodPost"
import * as apiCategory from "../api/category"
import * as apiComment from "../api/comment"
import * as apiPeople from '../api/people';

const FoodPostPage = () => {
    const [showComment, setShowComment] = useState(false);
    const [showUpload, setShowUpload] = useState(false);
    const [openMenuId, setOpenMenuId] = useState(null);
    const [edit, setEdit] = useState(null);
    const [contentEdit, setContentEdit] = useState("");
    const [ratingEdit, setRatingEdit] = useState(0);
    const [showResponse, setShowResponse] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [commentIdDelete, setCommentIdDelete] = useState();
    const [openMenuPost, setOpenMenuPost] = useState(false);
    const [confirmDelete2, setConfirmDelete2] = useState(false);

    // Get userId from localStorage and assign to userAccount (variable)
    const userAccount = parseInt(localStorage.getItem("userAccount"));

    // foodPostId from URL
    const foodPostId = useParams();

    // Store data when API getDetailPost is sent
    const [postId, setPostId] = useState();
    const [postUser, setPostUser] = useState()
    const [name, setName] = useState("");
    const [categories, setCategories] = useState([]);
    const [categoriesId, setCategoriesId] = useState([]);
    const [price, setPrice] = useState();
    const [location, setLocation] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [resNumber, setResNumber] = useState("");
    const [image, setImage] = useState("");
    const [rating, setRating] = useState();
    const [view, setView] = useState();

    // Backend => API getDetailPost
    const getDetailPost = async (foodPostId) => {        
        const data = await apiPost.getDetailPost(foodPostId);
        if (data.data.success) {
            setPostId(data.data.data.id);
            setPostUser(data.data.data.userId);
            setName(data.data.data.name);
            setPrice(data.data.data.price);
            setLocation(data.data.data.location);
            setPhoneNumber(data.data.data.phoneNumber);
            setResNumber(data.data.data.resNumber); 
            setImage(data.data.data.image);    
            
            const allCategories = data.data.data.category.map(item => item.category);
            setCategories(prev => {
                const unique = allCategories.filter(item => !prev.includes(item));
                return [...prev, ...unique];
            })
            const allCategoriesId = data.data.data.category.map(item => item.id);
            setCategoriesId(prev => {
                const unique = allCategoriesId.filter(item => !prev.includes(item));
                return [...prev, ...unique];
            })
        }
    }

    // Backend => API deletePost
    const deletePost = async (id) => {
        await apiPost.deletePost(id);
    }

    // Store data when API getCommentFromPost is sent
    const [comments, setComments] = useState([]);

    // Backend => API getCommentFromPost
    const getCommentFromPost = async (foodPostId) => {
        const data = await apiComment.getCommentFromPost(foodPostId);
        if (data.data.success) {
            setComments(data.data.data);
            setView(data.data.data.length);
            let overall = 0;
            for (let i = 0; i < data.data.data.length; i++) {           
                overall += data.data.data[i].rating;           
            }
            setRating((overall/data.data.data.length).toFixed(1));
        }
    }

    //Backend => API editComment
    const editComment = async (id, rating, content, day, month, year) => {
        await apiComment.editComment(id, rating, content, day, month, year);
    }

    // Backend => API deleteComment
    const deleteComment = async (id, userId) => {
        await apiComment.deleteComment(id, userId);
    }

    // Backend => API createPeople
    const createPeople = async (userId, commentId, like) => {
        const data = await apiPeople.createPeople(userId, commentId);
        if (data.data.success) {
            editLike(commentId, like + 1);
            // window.location.reload();
        }
    }

    // Backend => API deletePeople
    const deletePeople = async (id, commentId, like) => {
        const data = await apiPeople.deletePeople(id);
        if (data.data.success) {
            editLike(commentId, like - 1);
            // window.location.reload();
        }
    }

    // Backend => API editLike
    const editLike = async (id, like) => {
        await apiComment.editLike(id, like);
    }

    // Backend - API isAlreadyLike
    const isAlreadyLike = async (userId, commentId, like) => {
        const data = await apiPeople.isAlreadyLike(userId, commentId);
        if (data.data.data === null) {
            createPeople(userAccount, commentId, like);
        } else if (data.data.success) {
            deletePeople(data.data.data.id, commentId, like);
        }
    }

    // Render information & comments in this post
    useEffect(() => {
        getDetailPost(foodPostId.foodPostId);
        getCommentFromPost(foodPostId.foodPostId); 
    }, [foodPostId])

    // Render when comments have something changed
    useEffect(() => {
        getCommentFromPost(foodPostId.foodPostId); 
    }, [comments])

    // Click to open comment box
    function reviewPost() {
        if (localStorage.getItem("isLogin")) {
            setShowComment(true);
        }
    }
    // Send the data to edit page
    function sendDataToEdit() {
        const foodPostData = {
            id: foodPostId.foodPostId,
            name: name,
            category: categories,
            categoryId: categoriesId,
            price: price,
            location: location,
            phoneNumber: phoneNumber,
            resNumber: resNumber,
        }
        // JSON.stringify is a javascript method that converts a JavaScript object or value into a JSON-formatted string.
        localStorage.setItem("foodPostData", JSON.stringify(foodPostData))
        
    }
    // Click to add like
    function addLike(id, like) {
        isAlreadyLike(userAccount, id, like)
    }
    // Edit content in comment box of user comment
    function editContent(content, id, rating) {
        setEdit(edit === id ? null : id);
        setContentEdit(content);
        setOpenMenuId(null);
    }
    // Submit the comment to API editComment
    function handleSubmit(id) {
        const date = new Date();
        if (ratingEdit == 0) {
            setShowResponse(true);
        } else {
            editComment(id, ratingEdit, contentEdit, date.getDate(), date.getMonth() + 1, date.getFullYear());
            setEdit(null);
            setShowResponse(false);
        }
    }
    // Open Confirm modal
    function confirmModal(id) {
        setCommentIdDelete(id)
        setOpenMenuId(null);
        setConfirmDelete(true);
    }
    // Submit the comment id to API deleteComment
    function handleDeleteComment() {
        deleteComment(commentIdDelete, userAccount);
        setConfirmDelete(false);
    }

    const navigate = new useNavigate()

    // Submit the comment id to API deletePost
    function handleDeletePost() {
        deletePost(postId);
        setConfirmDelete2(false);
        navigate("/search");
    }
    
  return (
    <>
    <Navbar></Navbar>
    <div className='text-[36px] ml-10 mt-5 w-9 max-sm:ml-2 '>
        <NavLink to={"/search"}><IoMdArrowBack /></NavLink>
    </div>

    <div className='bg-white h-80 mt-5 max-sm:h-50 max-sm:-mt-10'>
        <div className='h-[100%] flex justify-center'>
            <img src={image} alt="" className="h-[100%] w-[50%] object-cover" />
        </div>
    </div>

    <div className='flex justify-center mt-10'>
        <div className='bg-white w-275 max-sm:w-100 p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
            <div className='flex justify-between items-center'>
                <h1 className='text-[36px] font-semibold max-sm:text-[26px]'>{name}</h1>
                <a href={localStorage.getItem("isLogin") ? "#commentBox" : ""} onClick={reviewPost} className='bg-[#DE0000] text-white text-[20px] font-semibold px-8 max-sm:px-5 py-1 max-sm:text-[16px] rounded-lg cursor-pointer'>Review</a>
            </div>
            {categories.map((category, index) => (
                <p key={category + index} className='text-[#A9A9A9] text-[24px] max-sm:text-[20px]'>{category}</p>
            ))}
            <p className='text-[#A9A9A9] text-[24px] max-sm:text-[20px]'>{price} Baht</p>
            <div className='flex items-center gap-2'>
                <div className='flex justify-center items-center gap-1 bg-[#DE0000] px-2 rounded-sm'>
                    <p className='text-white text-[20px] max-sm:text-[18px] font-semibold'>{isNaN(rating) ? "0.0" : rating}</p>
                    <IoIosStar className='text-white text-[20px]'/>
                </div>
                <p className='text-[#A9A9A9] text-[16px]'>{view} {view > 1 ? "reviews" : "review"}</p>
            </div>
            <hr className='my-5 border-1'/>
            <div className='flex justify-between items-center'>
                <button onClick={() => setShowUpload(true)} className='flex justify-center items-center gap-2 max-sm:w-30 text-[20px] text-white bg-black px-8 max-sm:px-2 py-1 rounded-lg cursor-pointer'><FaPlus /> Image</button>
                {postUser === userAccount && <HiDotsVertical onClick={() => openMenuPost ? setOpenMenuPost(false) : setOpenMenuPost(true)} className={`p-1 text-[24px] ${openMenuPost && !confirmDelete2 ? "bg-[#D9D9D9]" : "bg-none"} rounded-[100%] cursor-pointer hover:bg-[#D9D9D9]`}/>}
            </div>
            {(openMenuPost && !confirmDelete2) &&
            <div className='flex justify-end'>
                <div className='absolute flex flex-col items-center justify-center w-30 h-20 bg-white drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
                    <Link to={"/editFoodPost"} onClick={sendDataToEdit} className='w-[100%] text-center py-2 cursor-pointer hover:bg-[#D9D9D9]'>Edit</Link>
                    <button onClick={() => setConfirmDelete2(true)} className='w-[100%] text-center bg-none py-2 cursor-pointer hover:bg-[#D9D9D9]'>Delete</button>
                </div>
            </div>
            }
        </div>
    </div>

    {showUpload && <UploadImage showUpload={setShowUpload} postId={postId}></UploadImage>}
    
    <div id='commentBox' className={`flex mx-3 justify-center ${openMenuPost ? "mt-20" : "mt-10"}`}>
        <div className='bg-white w-275 p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
            <div className='flex items-center gap-5 text-[30px] max-sm:text-[24px] mb-4'>
                <FaLocationDot/>
                <h1>: {location}</h1>
            </div>
            {(phoneNumber !== "" || resNumber !== "") &&
            <div className='flex items-center gap-5 text-[30px] max-sm:text-[24px]'>
                <FaPhoneAlt />
                {phoneNumber !== "" && <h1>: {phoneNumber}</h1> }
                {resNumber !== "" && <h1>: {resNumber}</h1>}
            </div>
            }
        </div>
    </div>

    {showComment && <CommentBox showComment={setShowComment} foodPostId={foodPostId.foodPostId}></CommentBox>}

    <div className='flex justify-center mt-10 mb-20'>
        <div className='bg-white w-275 max-sm:w-100 p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
            <h1 className='text-[36px] max-sm:text-[26px] font-bold'>Comment</h1>
            <div className='flex justify-center items-center text-[#DE0000] text-[48px] gap-x-4'>
                <h1 className='font-bold'>{isNaN(rating) ? "0.0" : rating}</h1>
                <IoIosStar/>
            </div>
            {comments.map((comment, index) => (
            <>
            <div key={index}>
                <div className='flex items-center gap-4'>
                    <div className='border-1 rounded-[100%] p-2'>
                        <FaUser className='text-[28px]'/>
                    </div>
                    <p className='text-[24px] font-bold max-sm:text-[20px]'>{comment.user.username.substring(0,3) + "*****"}</p>
                    {postUser === userAccount && <p className='text-[#A9A9A9]'>(YOU)</p>}
                </div>
                <div className='flex gap-1 mt-2 '>
                    {comment.rating == 1 &&
                        <>
                        <IoIosStar className='bg-[#E0CA2F] text-white text-[24px] p-1 rounded-sm'/>
                        <IoIosStar className='bg-[#A9A9A9] text-white text-[24px] p-1 rounded-sm'/>
                        <IoIosStar className='bg-[#A9A9A9] text-white text-[24px] p-1 rounded-sm'/>
                        <IoIosStar className='bg-[#A9A9A9] text-white text-[24px] p-1 rounded-sm'/>
                        <IoIosStar className='bg-[#A9A9A9] text-white text-[24px] p-1 rounded-sm'/>
                        </>
                    }
                    {comment.rating == 2 &&
                        <>
                        <IoIosStar className='bg-[#E1A401] text-white text-[24px] p-1 rounded-sm'/>
                        <IoIosStar className='bg-[#E1A401] text-white text-[24px] p-1 rounded-sm'/>
                        <IoIosStar className='bg-[#A9A9A9] text-white text-[24px] p-1 rounded-sm'/>
                        <IoIosStar className='bg-[#A9A9A9] text-white text-[24px] p-1 rounded-sm'/>
                        <IoIosStar className='bg-[#A9A9A9] text-white text-[24px] p-1 rounded-sm'/>
                        </>
                    }
                    {comment.rating == 3 &&
                        <>
                        <IoIosStar className='bg-[#E07B00] text-white text-[24px] p-1 rounded-sm'/>
                        <IoIosStar className='bg-[#E07B00] text-white text-[24px] p-1 rounded-sm'/>
                        <IoIosStar className='bg-[#E07B00] text-white text-[24px] p-1 rounded-sm'/>
                        <IoIosStar className='bg-[#A9A9A9] text-white text-[24px] p-1 rounded-sm'/>
                        <IoIosStar className='bg-[#A9A9A9] text-white text-[24px] p-1 rounded-sm'/>
                        </>
                    }
                    {comment.rating == 4 &&
                        <>
                        <IoIosStar className='bg-[#E13E01] text-white text-[24px] p-1 rounded-sm'/>
                        <IoIosStar className='bg-[#E13E01] text-white text-[24px] p-1 rounded-sm'/>
                        <IoIosStar className='bg-[#E13E01] text-white text-[24px] p-1 rounded-sm'/>
                        <IoIosStar className='bg-[#E13E01] text-white text-[24px] p-1 rounded-sm'/>
                        <IoIosStar className='bg-[#A9A9A9] text-white text-[24px] p-1 rounded-sm'/>
                        </>
                    }
                    {comment.rating == 5 &&
                        <>
                        <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                        <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                        <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                        <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                        <IoIosStar className='bg-[#DE0000] text-white text-[24px] p-1 rounded-sm'/>
                        </>
                    }
                    <p className='text-[#A9A9A9] ml-2'>{comment.day}/{comment.month}/{comment.year}</p>
                </div>
                {edit === comment.id ?
                <>
                <div className='w-[80%]'>
                    <textarea value={contentEdit} onChange={(e) => setContentEdit(e.target.value)} className='border-1 border-[#D9D9D9] w-[100%] p-2 my-5 rounded-lg resize-none h-20 hover:border-black'></textarea>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2'>
                            <IoIosStar onClick={() => color.oneStar(setRatingEdit)} id='star1' className='bg-[#A9A9A9] text-white text-[30px] p-1 rounded-sm cursor-pointer'/>
                            <IoIosStar onClick={() => color.twoStar(setRatingEdit)} id='star2' className='bg-[#A9A9A9] text-white text-[30px] p-1 rounded-sm cursor-pointer'/>
                            <IoIosStar onClick={() => color.threeStar(setRatingEdit)} id='star3' className='bg-[#A9A9A9] text-white text-[30px] p-1 rounded-sm cursor-pointer'/>
                            <IoIosStar onClick={() => color.fourStar(setRatingEdit)} id='star4' className='bg-[#A9A9A9] text-white text-[30px] p-1 rounded-sm cursor-pointer'/>
                            <IoIosStar onClick={() => color.fiveStar(setRatingEdit)} id='star5' className='bg-[#A9A9A9] text-white text-[30px] p-1 rounded-sm cursor-pointer'/>
                        </div>
                        {showResponse && <p className='text-[#DE0000] text-[20px] font-semibold'>Rate your comment !!!</p>}
                        <div className='flex gap-5'>
                            <button onClick={() => setEdit(null)} className='text-[16px] font-semibold bg-black text-white rounded-lg px-7 py-2 cursor-pointer'>Cancel</button>
                            <button onClick={() => handleSubmit(comment.id)} className='text-[16px] font-semibold bg-[#DE0000] text-white rounded-lg px-7 py-2 cursor-pointer'>Confirm</button>
                        </div>
                    </div>
                </div>
                </>
                : <p className='text-[24px] my-3 break-words max-sm:text-[20px]'>{comment.content}</p>
                }
                <div className='flex justify-between items-center'>
                    <div className='flex items-center text-[24px] gap-2'>
                        {comment.people.some(person => person.userId === userAccount) ? (
                            <BiSolidLike onClick={() => addLike(comment.id, comment.like)} className='cursor-pointer text-blue-600'/>
                        ) : (
                            <BiLike onClick={() => addLike(comment.id, comment.like)} className='cursor-pointer text-blue-600'/>
                        )}
                        <p>{comment.like} {comment.like > 1 ? "likes" : "like"}</p>
                    </div>
                    {comment.userId === userAccount && <HiDotsVertical onClick={() => setOpenMenuId(openMenuId === comment.id ? null : comment.id)} className={`p-1 text-[24px] rounded-[100%] ${openMenuId === comment.id ? "bg-[#D9D9D9]" : "bg-none"} cursor-pointer hover:bg-[#D9D9D9]`}/>}
                </div>
                {openMenuId === comment.id &&
                <div className='flex justify-end'>
                    <div className='absolute flex flex-col items-center justify-center w-30 h-20 bg-white drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
                        <button onClick={() => editContent(comment.content, comment.id, comment.rating)} className='w-[100%] text-center py-2 cursor-pointer hover:bg-[#D9D9D9]'>Edit</button>
                        <button onClick={() => confirmModal(comment.id)} className='w-[100%] text-center py-2 cursor-pointer hover:bg-[#D9D9D9]'>Delete</button>
                    </div>
                </div>
                }
            </div>
            <hr className='my-5 border-1'/>
            </>
            ))}
        </div>
    </div>
    {confirmDelete &&
    <>
    <div className='fixed inset-0 z-40 bg-[rgba(0,0,0,0.50)] flex justify-center items-center'>
        <div className='flex justify-center'>
            <div className='bg-white w-175 p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
                <h1 className='text-[24px] font-semibold'>Are you sure that you want to delete this comment ?</h1>
                <p className='text-[16px] font-semibold text-[#DE0000]'>(If you click "delete", this comment will not turn back again.)</p>
                <div className='flex justify-end gap-5 mt-5'>
                    <button onClick={() => setConfirmDelete(false)} className='text-[16px] font-semibold bg-black text-white rounded-lg px-7 py-2 cursor-pointer'>Cancel</button>
                    <button onClick={handleDeleteComment} className='text-[16px] font-semibold bg-[#DE0000] text-white rounded-lg px-7 py-2 cursor-pointer'>Delete</button>
                </div>
            </div>
        </div>
    </div>
    </>
    }
    {confirmDelete2 &&
    <>
    <div className='fixed inset-0 z-40 bg-[rgba(0,0,0,0.50)] flex justify-center items-center'>
        <div className='flex justify-center'>
            <div className='bg-white w-175 p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
                <h1 className='text-[24px] font-semibold'>Are you sure that you want to delete this post ?</h1>
                <p className='text-[16px] font-semibold text-[#DE0000]'>(If you click "delete", this post will not turn back again.)</p>
                <div className='flex justify-end gap-5 mt-5'>
                    <button onClick={() => {setConfirmDelete2(false); setOpenMenuPost(false)}} className='text-[16px] font-semibold bg-black text-white rounded-lg px-7 py-2 cursor-pointer'>Cancel</button>
                    <button onClick={handleDeletePost} className='text-[16px] font-semibold bg-[#DE0000] text-white rounded-lg px-7 py-2 cursor-pointer'>Delete</button>
                </div>
            </div>
        </div>
    </div>
    </>
    }
    </>
  )
}

export default FoodPostPage