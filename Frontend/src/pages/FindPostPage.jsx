import { use, useEffect, useState } from 'react'
import NavbarNoSearchingBar from '../components/NavbarNoSearchingBar'
import FilterModal from '../components/FilterModal';
import { sendFilterRating, sendFilterCategory, sendFilterPrice } from '../components/FilterModal';
import PaginationList from '../components/PaginationList';
import PaginationListForFilter from '../components/PaginationListForFilter';
// Router
import { NavLink, Link } from "react-router-dom";
// Icon
import { IoMdArrowBack } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { ImCross } from "react-icons/im";
// API
import * as apiPost from "../api/foodPost"
import * as apiCategory from "../api/category"
import * as apiComment from "../api/comment"

const FindPostPage = () => {
    const [showFilter, setShowFilter] = useState(false);
    const [ratingList, setRatingList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [priceList, setPriceList] = useState([]);

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
    // Remove ratings of filter under search bar
    function removeFilterRating(i) {
        setRatingList((prev) => prev.filter((rating, index) => index !== i));      
    }
    // Remove categories of filter under search bar
    function removeFilterCategory(i) {
        setCategoryList((prev) => prev.filter((categroy, index) => index !== i));
    }
    // Remove prices of filter under search bar
    function removeFilterPrice(i) {
        setPriceList((prev) => prev.filter((price, index) => index !== i));
    }
    // Render when value ratingList(useState) have changed
    useEffect(() => {
        setRatingList(sendFilterRating)
    }, [sendFilterRating])
    // Render when value categoryList(useState) have changed
    useEffect(() => {
        setCategoryList(sendFilterCategory)
    }, [sendFilterCategory])
    // Render when value priceList(useState) have changed
    useEffect(() => {
        setPriceList(sendFilterPrice)
    }, [sendFilterPrice])

    // Search bar
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const searchPosts = searchTerm ? 
    posts.filter(post => post.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : posts.slice(0, 5) ;

    // Filter
    const [filterPosts, setFilterPosts] = useState(posts);
    const [usingFilter, setUsingFilter] = useState(false);
    // Function get posts from filter
    const applyFilters = () => {
        const filteredPosts = posts.filter((post) => {
            const foundRating = rating.find((r) => r.foodPostId === post.id);
            const postRating = parseFloat(foundRating?.rating || "0.0");

            const matchRating =
                ratingList.length === 0 ||
                ratingList.some((r) => 
                    postRating >= parseFloat(r));

            const matchCategory =
                categoryList.length === 0 ||
                categoryList.some((item) => post.category.map(c => c.category).includes(item));           

            const matchPrice =
                priceList.length === 0 || checkPriceMatch(post.price, priceList);
            
            return matchRating && matchCategory && matchPrice;
        });   
        setFilterPosts(filteredPosts);
    }
    // Function check price
    function checkPriceMatch(postPrice, filterPrices) {
        return filterPrices.some((range) => {
            if (range === '< 100 Baht') return postPrice < 100;
            if (range === '101-250 Baht') return postPrice >= 101 && postPrice <= 250;
            if (range === '251-500 baht') return postPrice >= 251 && postPrice <= 500;
            if (range === '500 Baht') return postPrice > 500;
            return false;
        });
    }
    useEffect(() => {
        const storedCategory = localStorage.getItem("category");
        if (storedCategory && !categoryList.includes(storedCategory)) {
            setCategoryList([storedCategory]);        
        }
    }, []);

    // Render when ratingList, categoryList, priceList have something changed
    useEffect(() => {
        if (ratingList.length === 0 && categoryList.length === 0 && priceList.length === 0) {
            setFilterPosts([]);
            setUsingFilter(false);
            console.log(1);
                    
        } else {
            applyFilters();
            setUsingFilter(true);     
        }
    }, [ratingList, categoryList, priceList]);

  return (
    <>
    <NavbarNoSearchingBar></NavbarNoSearchingBar>
    <div className='text-[36px] ml-10 mt-5 w-9'>
        <NavLink to={"/home"}><IoMdArrowBack /></NavLink>
    </div>
    <div className='flex justify-center items-center gap-10'>
        <div>
            <div className='flex items-center justify-center gap-15'>
                <div className='flex items-center'>
                    <input type="text" onClick={() => setIsSearchOpen(prev => !prev)} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Type your food' className='border-1 border-[#D9D9D9] bg-white rounded-2xl py-2 px-3 w-150 text-[20px] hover:border-black'/>
                    <FaSearch className='text-[24px] -ml-10 cursor-pointer'/>
                </div>
                <div>
                    <button onClick={() => setShowFilter(true)}><FiFilter className='w-13 h-13 p-2 bg-white border-1 border-[#D9D9D9] rounded-[100%] cursor-pointer hover:border-black'/></button>
                </div>
            </div>
            <div className='mt-2 drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
                {isSearchOpen && searchPosts.map((post) => (
                <div className='flex justify-center'>
                    <div className='w-175 bg-white hover:bg-[#D9D9D9]'>
                        <Link to={`/foodPost/${post.id}`} key={post.id}>
                            <p className='text-[20px] px-3 py-4'>{post.name} <span className='text-[#A9A9A9]'>@{post.location}</span></p>
                        </Link>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>

    {showFilter && <FilterModal filter={setShowFilter} usingFilter={setUsingFilter}></FilterModal>}

    <div className='flex justify-center mt-10'>
        <div className='grid grid-cols-6 gap-3 w-275'>
            {ratingList.map((rating, index) => (
                <div onClick={() => removeFilterRating(index)} key={index} className='flex justify-center gap-3 items-center py-1 px-2 border-1 rounded-xl bg-[#D9D9D9] cursor-pointer'>
                    <ImCross className='text-[12px]'/>
                    <p>{rating}</p>
                </div>
            ))}
            {categoryList.map((category, index) => (
                <div onClick={() => removeFilterCategory(index)} key={index} className='flex justify-center gap-3 items-center py-1 px-2 border-1 rounded-xl bg-[#D9D9D9] cursor-pointer'>
                    <ImCross className='text-[12px]'/>
                    <p>{category}</p>
                </div>
            ))}
            {priceList.map((price, index) => (
                <div onClick={() => removeFilterPrice(index)} key={index} className='flex justify-center gap-3 items-center py-1 px-2 border-1 rounded-xl bg-[#D9D9D9] cursor-pointer'>
                    <ImCross className='text-[12px]'/>
                    <p>{price}</p>
                </div>
            ))}
        </div>
    </div>
    {!usingFilter ? <PaginationList posts={posts} rating={rating} categories={categories}></PaginationList> :
    <PaginationListForFilter filterPosts={filterPosts} rating={rating} categories={categories}></PaginationListForFilter>
    }        
    </>
  )
}

export default FindPostPage