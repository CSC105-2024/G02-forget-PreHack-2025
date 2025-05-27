import { React, useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { NavLink, Link } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import * as apiUser from '../api/user';
// Image for select categories
import Fastfood from '../img/Fastfood.png'
import Seafood from '../img/Seafood.png'
import Dessert from '../img/Dessert.png'
import Noodle from '../img/Noodle.png'
import footer from '../components/Footer'
//top4
import FriedChickenCurry from '../img/FriedChickenCurry.png'
import MalaGrilledPorkNeck from '../img/MalaGrilledPorkNeck.png'
import CrispyPorkSalad from '../img/CrispyPorkSalad.png'
import DryNoodle from '../img/DryNoodle.png'

import Burger from '../img/Burger.png'
import Buffet from '../img/Buffet.png'
import Bakery from '../img/Bakery.png'
import ChineseFood from '../img/Chinese_Food.png'
import DietaryFood from '../img/Dietary_Food.png'
import FrenchFood from '../img/French_Food.png'
import Grilled from '../img/Grilled.png'
import HotPot from '../img/Hot_Pot.png'
import JapaneseFood from '../img/Japanese_Food.png'
import KoreanFood from '../img/Korean_Food.png'
import Pizza from '../img/Pizza.png'
import Steak from '../img/Steak.png'
import ThaiFood from '../img/Thai_Food.png'
import VegetarianFood from '../img/Vegetarian_Food.png'
// Router
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer';
// API
import * as apiPost from "../api/foodPost"
import * as apiCategory from "../api/category"
import * as apiComment from "../api/comment"

export let sendCategoryFromHome = [];
export const setSendCategoryFromHome = (category) => {
    sendCategoryFromHome = category;
}

const MainPage = () => {
    const [seeMore, setSeeMore] = useState(false)

    // Store data when API is sent
    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState({});
    
    // Backend => API getAllPost
    const getAllPost = async () => {
        const data = await apiPost.getAllPost();
        if (data.data.success) {
            setPosts(data.data.data);
            for (let i = 0; i < data.data.data.length; i++) {
                await getCategoryFromPost(data.data.data[i].id);
                await getCommentFromPost(data.data.data[i].id)
            }
        }
    }

    // Store data when API getCommentFromPost is sent
    const [rating, setRating] = useState([]);

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
    
    // Render all posts
    useEffect(() => {
        getAllPost();
    }, [])

    const [topPosts, setTopPosts] = useState([]);

    useEffect(() => {
    if (posts.length > 0) {
        const sortedTop = [...posts]
        .sort((a, b) => b.comment.length - a.comment.length)
        .slice(0, 4);
        setTopPosts(sortedTop);
    }
    }, [posts]);


    function turnSeeMore() {
        if (seeMore) {
            setSeeMore(false);
        } else {
            setSeeMore(true);
        }
    }

    const navigate = new useNavigate();

    function selectCategory(categorySelect) {
        setSendCategoryFromHome([categorySelect])
        navigate(`/search`);
    }
    
  return (
    <>
    <Navbar></Navbar>
    <div className='flex justify-center mt-10'>
        <div className='bg-white w-275 mx-3 p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
            <h1 className='text-[24px] lg:text-[36px] font-bold underline mb-4 lg:mb-10'>Popular menu</h1>
            <div className='grid justify-evenly grid-cols-2 lg:grid-cols-4 gap-5 mb-10'>
                {topPosts.map((post) => (
                <>
                <Link to={`/foodPost/${post.id}`} className='w-[100%] lg:w-60 rounded-lg max-sm:h-45 bg-white drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)] cursor-pointer'>
                    <img className='flex h-25 lg:h-[200px] w-[100%] object-cover rounded-t-lg hover:brightness-70' src={post.image} />
                    <div className='flex mt-2 p-2 justify-between items-center h-5'>
                        <h1 className={`text-[22px] max-sm:text-[18px] font-semibold`}>{post.name.length > 16 ? post.name.substring(0,12) + "..." : post.name}</h1>
                        <div className='flex items-center gap-1 bg-[#DE0000] px-1 lg:px-2 rounded-md'>
                            <p className='text-white text-[10px] lg:text-[14px] font-semibold'>{rating.find(r => r.foodPostId === post.id)?.rating ?? "N/A"}</p>
                            <IoIosStar className='text-white text-[10px]'/>
                        </div>
                    </div>
                    <div className='grid grid-cols-2'>
                        {(categories[post.id] || []).map((category, index) => (
                        <p key={index} className='max-sm:text-[12px] text-[#A9A9A9] ml-2'>{category}</p>
                        ))}
                    </div>
                    <p className='flex items-end max-sm:h-8 max-sm:text-[12px] ml-2 font-bold'>{post.comment.length} {post.comment.length > 1 ? "reviews" : "review"}</p>
                </Link>
                </>
                ))}
            </div>
            <div className='flex justify-center'>
                <NavLink to={"/search"} className='bg-[#F3F3F3] w-[95%] text-center font-bold py-1 lg:py-2 rounded-lg cursor-pointer hover:bg-[#E2E2E2]'>See more</NavLink>
            </div>
        </div>
    </div>

    <div className='flex justify-center my-10'>
        <div className='bg-white max-sm:mx-3 w-275 p-3 lg:p-5 pb-5 lg:pb-20 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
            <div className='flex justify-between items-center'>
                <h1 className='text-[36px] font-bold underline'>Category</h1>
                <button onClick={turnSeeMore} className='text-[#DE0000] text-[18px] font-bold cursor-pointer hover:underline'>See more</button>
            </div>
            <div className='flex justify-center gap-3 lg:gap-15 lg:-mb-7 mt-4'>
                {/* Category#1 */}
                <div onClick={() => selectCategory("Fast Food")} className='cursor-pointer'>
                    <img src={Fastfood} alt="fastfood" className='rounded-md brightness-75 w-50 h-21 lg:h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[15px] lg:text-[20px] text-white font-bold -mt-8 relative'>Fast Food</p>
                </div>
                {/* Category#2 */}
                <div onClick={() => selectCategory("Seafoods")} className='cursor-pointer'>
                    <img src={Seafood} alt="seafood" className='rounded-md brightness-75 w-50 h-21 lg:h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[15px] lg:text-[20px] text-white font-bold -mt-8 relative'>Seafood</p>
                </div>
                {/* Category#3 */}
                <div onClick={() => selectCategory("Desserts")} className='cursor-pointer'>
                    <img src={Dessert} alt="dessert" className='rounded-md brightness-75 w-50 h-21 lg:h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[15px] lg:text-[20px] text-white font-bold -mt-8 relative'>Dessert</p>
                </div>
                {/* Category#4 */}
                <div onClick={() => selectCategory("Noodles")} className='cursor-pointer'>
                    <img src={Noodle} alt="Noodle" className='rounded-md brightness-75 w-50 h-21 lg:h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[15px] lg:text-[20px] text-white font-bold -mt-8 relative'>Noodle</p>
                </div>
            </div>
           {seeMore &&
            <>
            <div className='flex justify-center gap-3 lg:gap-15 mt-10 -mb-2 max-sm:mt-5'>
                {/* Category#5 */}
                <div onClick={() => selectCategory("Burgers")} className='cursor-pointer'>
                    <img src={Burger} alt="burger" className='rounded-md brightness-75 w-50 h-21 lg:h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[15px] lg:text-[20px] text-white font-bold -mt-8 relative'>Burger</p>
                </div>
                {/* Category#6 */}
                <div onClick={() => selectCategory("Steaks")} className='cursor-pointer'>
                    <img src={Steak} alt="steak" className='rounded-md brightness-75 w-50 h-21 lg:h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[15px] lg:text-[20px] text-white font-bold -mt-8 relative'>Steak</p>
                </div>
                {/* Category#7 */}
                <div onClick={() => selectCategory("Dietary Food")} className='cursor-pointer'>
                    <img src={DietaryFood} alt="dietary_food" className='rounded-md brightness-75 w-50 h-21 lg:h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[15px] lg:text-[20px] text-white font-bold -mt-12 lg:-mt-8 relative'>Dietary Food</p>
                </div>
                {/* Category#8 */}
                <div onClick={() => selectCategory("Buffets")} className='cursor-pointer'>
                    <img src={Buffet} alt="buffet" className='rounded-md brightness-75 w-50 h-21 lg:h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[15px] lg:text-[20px] text-white font-bold -mt-8 relative'>Buffet</p>
                </div>
            </div>
            <div className='flex justify-center gap-3 lg:gap-15 mt-5'>
                {/* Category#9 */}
                <div onClick={() => selectCategory("Hot Pots")} className='cursor-pointer'>
                    <img src={HotPot} alt="hot_pot" className='rounded-md brightness-75 w-50 h-21 lg:h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[15px] lg:text-[20px] text-white font-bold -mt-8 relative'>Hot Pot</p>
                </div>
                {/* Category#10 */}
                <div onClick={() => selectCategory("Grilled")} className='cursor-pointer'>
                    <img src={Grilled} alt="grilled" className='rounded-md brightness-75 w-50 h-21 lg:h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[15px] lg:text-[20px] text-white font-bold -mt-8 relative'>Grilled</p>
                </div>
                {/* Category#11 */}
                <div onClick={() => selectCategory("Pizzas")} className='cursor-pointer'>
                    <img src={Pizza} alt="pizza" className='rounded-md brightness-75 w-50 h-21 lg:h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[15px] lg:text-[20px] text-white font-bold -mt-8 relative'>Pizza</p>
                </div>
                {/* Category#12 */}
                <div onClick={() => selectCategory("Bakeries")} className='cursor-pointer'>
                    <img src={Bakery} alt="bakery" className='rounded-md brightness-75 w-50 h-21 lg:h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[15px] lg:text-[20px] text-white font-bold -mt-8 relative'>Bakery</p>
                </div>
            </div>
            <div className='flex justify-center gap-3 lg:gap-15 mt-5 -mb-2'>
                {/* Category#13 */}
                <div onClick={() => selectCategory("Vegetarian Food")} className='cursor-pointer'>
                    <img src={VegetarianFood} alt="vegetarian_food" className='rounded-md brightness-75 w-50 h-21 lg:h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[15px] lg:text-[20px] text-white font-bold -mt-12 lg:-mt-8 relative'>Vegetarian Food</p>
                </div>
                {/* Category#14 */}
                <div onClick={() => selectCategory("Thai Food")} className='cursor-pointer'>
                    <img src={ThaiFood} alt="thai_food" className='rounded-md brightness-75 w-50 h-21 lg:h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[15px] lg:text-[20px] text-white font-bold -mt-8 relative'>Thai Food</p>
                </div>
                {/* Category#15 */}
                <div onClick={() => selectCategory("Chinese Food")} className='cursor-pointer'>
                    <img src={ChineseFood} alt="chinese_food" className='rounded-md brightness-75 w-50 h-21 lg:h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[15px] lg:text-[20px] text-white font-bold -mt-12 lg:-mt-8 relative'>Chinese Food</p>
                </div>
                {/* Category#16 */}
                <div onClick={() => selectCategory("Japanese Food")} className='cursor-pointer'>
                    <img src={JapaneseFood} alt="japanese_food" className='rounded-md brightness-75 w-50 h-21 lg:h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[15px] lg:text-[20px] text-white font-bold -mt-12 lg:-mt-8 relative'>Japanese Food</p>
                </div>
            </div>
            <div className='flex justify-center gap-3 lg:gap-15 mt-5'>
                {/* Category#17 */}
                <div onClick={() => selectCategory("Korean Food")} className='cursor-pointer'>
                    <img src={KoreanFood} alt="Korean_food" className='rounded-md brightness-75 w-50 h-21 lg:h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[15px] lg:text-[20px] text-white font-bold -mt-8 relative'>Korean Food</p>
                </div>
                {/* Category#18 */}
                <div onClick={() => selectCategory("French Food")} className='cursor-pointer'>
                    <img src={FrenchFood} alt="French_food" className='rounded-md brightness-75 w-50 h-21 lg:h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[15px] lg:text-[20px] text-white font-bold -mt-8 relative'>French Food</p>
                </div>
            </div>
            </>
            }
        </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default MainPage