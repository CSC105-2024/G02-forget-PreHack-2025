import { React, useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import EditProfileModal from '../components/EditProfileModal';
import * as color from '../components/ChangeColorStar'
// Router
import { Link } from "react-router-dom";
// Icon
import { FaUser } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
// API
import * as apiPost from "../api/foodPost"
import * as apiCategory from "../api/category"
import * as apiComment from "../api/comment"
import * as apiPeople from '../api/people';
import * as apiUser from '../api/user';

const ProfilePage = () => {
    const [showComment, setShowComment] = useState(true);
    const [showPost, setShowPost] = useState(false);
    const [edit, setEdit] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [openMenuId, setOpenMenuId] = useState(null);
    const [editComment, setEditComment] = useState(null);
    const [contentEdit, setContentEdit] = useState("");
    const [ratingEdit, setRatingEdit] = useState(0);
    const [showResponse, setShowResponse] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [commentIdDelete, setCommentIdDelete] = useState();

    // Get userId from localStorage and assign to userAccount (variable)
    const userAccount = parseInt(localStorage.getItem("userAccount"));

    // Store data when API getCommentFromPost is sent
    const [rating, setRating] = useState([]);

    // Store data when API getPostFromUser is sent
    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState({});

    // Backend => API getPostFromUser
    const getPostFromUser = async (userId) => {
        const data = await apiPost.getPostFromUser(userId);
        if (data.data.success) {
            setPosts(data.data.data);
            for (let i = 0; i < data.data.data.length; i++) {
                await getCategoryFromPost(data.data.data[i].id);
                await getCommentFromPost(data.data.data[i].id)
            }
        }
    }

    // Backend => API getCategoryFromPost
    const getCategoryFromPost = async (foodPostId) => {
        const data = await apiCategory.getCategoryFromPost(foodPostId);
        if (data.data.success) {
            for (let i = 0; i < data.data.data.length; i++) {
                // Set categories of post in categoryOfPost(variable)
                const categoryOfPost = data.data.data.map(item => item.category);
                // And Store in categories(useState) and use foodPostId to seacrh the data
                // Ex: Suppose we already have 3 posts
                // In console => 1: ['Category1']
                //               2: ['Category1', 'Category2']
                //               3: ['Category1']
                setCategories(prev => ({
                    ...prev,
                    [foodPostId]: categoryOfPost
                }))
            }
        }
    }

    // Backend => API getCommentFromPost
    const getCommentFromPost = async (foodPostId) => {
        const data = await apiComment.getCommentFromPost(foodPostId);
        if (data.data.success) {
            setComments(data.data.data);
            let overall = 0;
            for (let i = 0; i < data.data.data.length; i++) {           
                overall += data.data.data[i].rating;           
            }
            const rawRating = overall / data.data.data.length;
            const ratingValue = isNaN(rawRating)
                ? '0.0'
                : (rawRating).toFixed(1);
            setRating(prev => {
                const filtered = prev.filter(r => r.foodPostId !== foodPostId);
                return [
                    ...filtered, // No dupicated
                {
                foodPostId,
                rating: ratingValue
                }
                ];
            });    
        }
    }

    useEffect(() => {
        console.log(rating);
        
    },[rating])

    // Store data when API getCommentFromPost is sent
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState();

    // Backend => API getCommentFromPost
    const getCommentFromUser = async (userId) => {
        const data = await apiComment.getCommentFromUser(userId);
        if (data.data.success) {
            setComments(data.data.data);
            let overallLike = 0;
            for (let i = 0; i < data.data.data.length; i++) {           
                overallLike += data.data.data[i].like;           
            }
            setLikes(overallLike);
        }
    }

    //Backend => API editComment
    const editCommentAPI = async (id, rating, content, day, month, year) => {
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
    
    // Render when comments have something changed
    useEffect(() => {
        getCommentFromUser(userAccount); 
    }, [comments])

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

    // Render information of user
    useEffect(() => {
        getInfoUser(userAccount);
        getCommentFromUser(userAccount)
        getPostFromUser(userAccount)
    }, [])

    // Click to add like
    function addLike(id, like) {
        isAlreadyLike(userAccount, id, like)
    }
    // Edit content in comment box of user comment
    function editContent(content, id, rating) {
        setEditComment(edit === id ? null : id);
        setContentEdit(content);
        setOpenMenuId(null);
    }
    // Submit the comment to API editComment
    function handleSubmit(id) {
        const date = new Date();
        if (ratingEdit == 0) {
            setShowResponse(true);
        } else {
            editCommentAPI(id, ratingEdit, contentEdit, date.getDate(), date.getMonth() + 1, date.getFullYear());
            setEditComment(null);
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
                    <h2 className='text-[30px] font-semibold mb-5'>{username}</h2>
                    <div className='flex gap-20 font-semibold'>
                        <div className='text-[24px] text-center mr-20'>
                            <p>{comments.length}</p>
                            <p>{comments.length > 1 ? "Comments" : "Comment"}</p>
                        </div>
                        <div className='text-[24px] text-center font-semibold'>
                            <p>{likes}</p>
                            <p>{likes > 1 ? "likes" : "like"}</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => setEdit(true)} className='bg-[#DE0000] text-white text-[20px] font-semibold px-6 py-2 rounded-lg cursor-pointer'>Edit</button>
            </div>
        </div>
    </div>

    {edit && <EditProfileModal edit={setEdit} username={username} email={email} password={password} ></EditProfileModal>}

    <div className='flex justify-center my-10'>
        <div className='bg-white w-275 p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
            <div className='flex justify-center gap-20 text-[24px] font-bold mb-10'>
                <button onClick={() => {setShowComment(true); setShowPost(false);}} className={`${showComment ? "border-b-4" : "border-none"} cursor-pointer`}>Comment</button>
                <button onClick={() => {setShowComment(false); setShowPost(true);}} className={`${showPost ? "border-b-4" : "border-none"} cursor-pointer`}>Food Post</button>
            </div>
           {showComment && 
           <>
           {comments.map((comment, index) => (
            <>
            <div key={index}>
                <div className='flex items-center gap-4'>
                    <div className='border-1 rounded-[100%] p-2'>
                        <FaUser className='text-[28px]'/>
                    </div>
                    <p className='text-[24px] font-bold max-sm:text-[20px]'>{comment.user.username.substring(0,3) + "*****"}</p>
                    <Link to={`/foodPost/${comment.foodPost.id}`} className='text-[#A9A9A9] cursor-pointer hover:underline'>@{comment.foodPost.location}</Link>
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
                {editComment === comment.id ?
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
                            <button onClick={() => setEditComment(null)} className='text-[16px] font-semibold bg-black text-white rounded-lg px-7 py-2 cursor-pointer'>Cancel</button>
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
            </>
            }
            {showPost && 
            <>
            {posts.map((post) => (
            <>    
            <Link to={`/foodPost/${post.id}`} key={post.id} className='flex justify-center mt-10 cursor-pointer'>
                <div className='flex gap-5 bg-white w-275 p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
                    <div className=''>
                        <img src={post.image} alt="" className='w-60 h-50 bg-[#D9D9D9] rounded-lg'/>
                    </div>
                    <div className=''>
                        <h1 className='text-[36px] font-semibold'>{post.name}</h1>
                        <div className='flex justify-center items-center w-15 gap-1 bg-[#DE0000] px-2 rounded-sm'>
                            <p className='text-white text-[16px] font-semibold'>{rating.find(r => r.foodPostId === post.id)?.rating ?? "N/A"}</p>
                            <IoIosStar className='text-white text-[14px]'/>
                        </div>
                        <p className='text-[#A9A9A9] text-[20px]'>{post.comment.length} {post.comment.length > 1 ? "views" : "view"}</p>
                        <div className='flex items-center gap-3'>
                            <FaLocationDot className='text-[20px]'/>
                            <p className='font-semibold text-[20px]'>{post.location}</p>
                        </div>
                        <div className='flex gap-5 mt-5'>
                            {(categories[post.id] || []).map((category, index) => (
                                <div key={index} className=''>
                                    <p className='border-2 text-center px-2 py-1 rounded-lg text-[18px] font-semibold'>{category}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
            </>
            ))}
            </>
            }
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
    </>
  )
}

export default ProfilePage