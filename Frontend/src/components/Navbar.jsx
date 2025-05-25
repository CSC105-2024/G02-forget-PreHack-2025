import { React, useState, useEffect } from 'react'
// Router
import { NavLink, useNavigate, Link } from "react-router-dom";
// Icon
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
// API
import * as apiUser from '../api/user';
import * as apiPost from "../api/foodPost"

const Navbar = () => {

    const navigate = useNavigate();

    const [login, setLogin] = useState(false);
    const [username, setUsername] = useState("");
    const [dropDown, setDropDown] = useState(false);

    // Get userId from localStorage and assign to userAccount (variable)
    const userAccount = parseInt(localStorage.getItem("userAccount"));

    // Backend => API getInfoUser
    const getInfoUser = async (id) => {
        try {
            const data = await apiUser.getInfoUser(id);
            if (data.data.success) {
                setUsername(data.data.data.username.substring(0,3) + "....");
                setLogin(true);
            }
        } catch (e) {
            console.log(e);
        } 
    }

    useEffect(() => {
        getInfoUser(userAccount);
    }, [])

    // Store data when API getAllPost is sent
    const [posts, setPosts] = useState([]);

    // Backend => API getAllPost
    const getAllPost = async () => {
        const data = await apiPost.getAllPost();
        if (data.data.success) {
            setPosts(data.data.data);
        }
    }

    // Render all posts
    useEffect(() => {
        getAllPost()  
    }, [])

    // Search bar
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const searchPosts = searchTerm ? 
    posts.filter(post => post.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : posts.slice(0, 5) ;

    function handleLogout() {
        localStorage.removeItem("userAccount");
        localStorage.removeItem("isLogin");
        navigate("/home");
        window.location.reload();
    }

  return (
    <>
    <header className='relative z-20'>
        <nav className='flex justify-between items-center max-sm:h-15 h-25 bg-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.25)]'>
            <NavLink to={"/home"} className='max-sm:text-[20px] text-[36px] font-bold ml-2 lg:ml-10 cursor-pointer'>
                <h1 className='flex flex-row'>
                    <span className='text-[#DE0000]'>Abb&nbsp;</span>
                    <span className='text-[#000000]'>Sapp</span>
                </h1>
            </NavLink>
            <div className='flex items-center max-sm:ml-2 max-sm:mr-2 ml-5 mr-5'>
                <input type="text" onClick={() => setIsSearchOpen(prev => !prev)} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Type your food' className='border-1 border-[#D9D9D9] max-sm:rounded-[50px] max-sm:h-[30px] rounded-2xl py-2 px-3 lg:w-150 max-sm:text-[15px] text-[20px] hover:border-black'/>
                <FaSearch className='text-[15px] lg:text-[24px] -ml-10 cursor-pointer'/>
            </div>
            {!login &&
            <>
            <NavLink to={"/login"} className='flex items-center gap-3 border-1 border-[#D9D9D9] py-2 px-6 rounded-2xl mr-10 hover:border-black cursor-pointer'>
                <FaUser className='border-1 rounded-[100%] text-[48px] p-1'/>
                <p className='text-[24px] font-bold'>Login</p>
            </NavLink>
            </>
            }
            {login &&
            <>
            {!dropDown &&
            <div onClick={() => setDropDown(true)} className='flex items-center gap-3 border-1 border-[#D9D9D9] py-2 px-6 rounded-2xl mr-10 hover:border-black cursor-pointer'>
                <FaUser className='border-1 rounded-[100%] text-[48px] p-1'/>
                <p className='text-[24px] font-bold'>{username}</p>
            </div>
            }
            {dropDown &&
            <>
            <div className='relative w-60 h-75 bg-white top-30 right-10 rounded-xl drop-shadow-[0_5px_2px_rgba(0,0,0,0.25)]'>
                <div className='flex flex-col items-center mt-7'>
                    <div onClick={() => setDropDown(false)} className='flex justify-center items-center gap-4 cursor-pointer'>
                        <FaUser className='border-1 rounded-[100%] text-[48px] p-1'/>
                        <p className='text-[24px] font-bold'>{username}</p>
                    </div>
                    <NavLink to={"/profile"} className='bg-[#DE0000] text-white px-6 py-2 mt-5 text-[18px] font-semibold rounded-xl cursor-pointer'>Go to Profile</NavLink>
                    <NavLink to={"/addFoodPost"} className='flex justify-center items-center w-[100%] py-3 mt-5 gap-2 cursor-pointer hover:bg-[#D9D9D9]'><FaPlus />Add food post</NavLink>
                    <button onClick={handleLogout} className='flex justify-center items-center w-[100%] py-3 gap-2 cursor-pointer hover:bg-[#D9D9D9]'><FiLogOut /> Log out</button>
                </div>
            </div>
            </> 
            }
            </>
            }
        </nav>
    </header>
    <div className='absolute top-20 right-105 z-20 '>
        {isSearchOpen && searchPosts.map((post) => (
        <div className='flex justify-center drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
            <div className='w-175 bg-white hover:bg-[#D9D9D9]'>
                <Link to={`/foodPost/${post.id}`} key={post.id}>
                    <p className='text-[20px] px-3 py-4'>{post.name} <span className='text-[#A9A9A9]'>@{post.location}</span></p>
                </Link>
            </div>
        </div>
        ))}
    </div>
    </>
  )
}

export default Navbar