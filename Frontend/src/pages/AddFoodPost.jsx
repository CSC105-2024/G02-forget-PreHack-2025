import { React, useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { FaPlus } from "react-icons/fa";
import { IoMdRemove } from "react-icons/io";

const AddFoodPost = () => {
    const [posts, setPosts] = useState([]);
    const [food, setFood] = useState("");
    const [categoryList, setCategoryList] = useState([{category: ""}])
    const [price, setPrice] = useState("")
    const [location, setLocation] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [resNumber, setResNumber] = useState("");
    const categories = [
    'Fast food', 'Seafoods', 'Noodles', 'Desserts', 'Burgers', 'Steaks',
    'Dietary Food', 'Buffets', 'Hot Pots', 'Grilled', 'Pizzas', 'Bakeries',
    'Vegetarian food', 'Thai Food', 'Chinese Food', 'Japanese Food', 'Korean Food', 'French Food',
    ];
    // Add category input
    function handleAddCategory() {
        setCategoryList([...categoryList, {category: ""}]);
    }
    // Value in categoryList(useState) have changed
    function handleChangeCategory(i, newValue) {
        const updated = [...categoryList];
        updated[i] = newValue;
        setCategoryList(updated)
    }
    // Remove category input
    function handleRemoveCategory(i) {
        setCategoryList((prev) => prev.filter((category, index) => index !== i))
    }
    // Add data to posts(useState)
    function submitPost() {
        let newPost = {
            id: Date.now(),
            food: food,
            categories: categoryList,
            price: price,
            location: location,
            mobileNumber: mobileNumber,
            resNumber: resNumber
        } 
        // Add newPost in posts(useState)
        setPosts(prev => [...prev, newPost]);

        // Reset data
        setFood("");
        setCategoryList([{category: ""}])
        setPrice("");
        setLocation("");
        setMobileNumber("");
        setResNumber("");
    }
    // Render again when value of posts(useState) have changed
    useEffect(() => {
        console.log(posts);
    }, [posts])
    

  return (
    <>
    <Navbar></Navbar>
    <div className='flex justify-center mt-10'>
        <div className='bg-white w-275 max-sm:w-100 p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
            <h1 className='text-[36px] font-bold underline mb-10 max-sm:text-[30px]'>Food Information</h1>
            <div className='ml-20'>
                <label>
                    <p className='text-[32px] mb-2 max-sm:-ml-18 max-sm:-mt-5 max-sm:text-[24px]'><span className='text-[#DE0000]'>*</span> Food</p>
                    <input type="text" value={food} onChange={(e) => setFood(e.target.value)} className='border-1 border-[#D9D9D9] p-2 text-[18px] rounded-lg w-150 mb-5 hover:border-black max-sm:-ml-18 max-sm:w-85 max-sm:mb-10' placeholder='Type your food name'/>
                </label>
                <label>
                    <p className='text-[32px] mb-2 max-sm:-ml-18 max-sm:-mt-5 max-sm:text-[24px] max-sm:mb-3'><span className='text-[#DE0000]'>*</span> Category</p>
                    {categoryList.map((category, index) => (
                        <div key={index}>
                            <select value={category} onChange={(e) => handleChangeCategory(index, e.target.value)} className='border-1 border-[#D9D9D9] p-2 text-[18px] rounded-lg w-150 mb-5 hover:border-black max-sm:-ml-18 max-sm:w-85'>
                                <option value=""></option>
                                {categories.map((food, indexFood) => (
                                    <option key={indexFood} value={food}>{food}</option>
                                ))}
                            </select>
                            {categoryList.length > 1 && <button onClick={() => handleRemoveCategory(index)} className='ml-4 bg-[#D9D9D9] p-1 rounded-[100%] cursor-pointer hover:bg-[#A9A9A9] '><IoMdRemove /></button>}
                        </div>
                    ))}
                </label>
                <br />
                <button onClick={handleAddCategory} className='flex items-center gap-2 text-[#DE0000] border-b-2 font-semibold -mt-5 mb-5 cursor-pointer max-sm:-ml-18 max-sm:-mt-5 max-sm:mb-10'><FaPlus className='text-[14px]'/> Add Category</button>
                <label>
                    <p className='text-[32px] mb-2 max-sm:-ml-18 max-sm:-mt-5 max-sm:text-[24px]'><span className='text-[#DE0000]'>*</span> Price</p>
                    <div className='flex gap-3'>
                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className='border-1 border-[#D9D9D9] p-2 text-[18px] rounded-lg w-150 mb-5 hover:border-black max-sm:-ml-18' placeholder='Type your food price'/>
                        <p className='text-[30px] max-sm:text-[26px] '>Baht</p>
                    </div>
                </label>
            </div>
        </div>
    </div>

    <div className='flex justify-center mt-10'>
        <div className='bg-white w-275 max-sm:w-100 p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
            <h1 className='text-[36px] font-bold underline mb-10 max-sm:text-[30px] '>Location</h1>
            <div className='ml-20'>
                <label>
                    <p className='text-[32px] mb-2 max-sm:-ml-18 max-sm:-mt-5 max-sm:text-[24px]'><span className='text-[#DE0000]'>*</span> Location</p>
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className='border-1 border-[#D9D9D9] p-2 text-[18px] rounded-lg w-150 mb-5 hover:border-black max-sm:-ml-18 max-sm:w-85' placeholder='Type your food location'/>
                </label>
            </div>
        </div>
    </div>

    <div className='flex flex-col items-center justify-center my-10'>
        <div className='bg-white w-275 max-sm:w-100 p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
            <h1 className='text-[36px] font-bold underline mb-10 max-sm:text-[30px]'>Phone Number</h1>
            <div className='ml-20'>
                <label>
                    <p className='text-[32px] mb-2 max-sm:-ml-18 max-sm:-mt-5 max-sm:text-[24px]'>Mobile Number</p>
                    <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' className='border-1 border-[#D9D9D9] p-2 text-[18px] rounded-lg w-150 mb-5 hover:border-black max-sm:-ml-18 max-sm:w-85 max-sm:mb-10' placeholder='Type your mobile number (i.e: 082-xxx-xxxx)'/>
                </label>
                <label>
                    <p className='text-[32px] mb-2 max-sm:-ml-18 max-sm:-mt-5 max-sm:text-[24px]'>Restaurant Number</p>
                    <input type="text" value={resNumber} onChange={(e) => setResNumber(e.target.value)} pattern='[0-9]{2}-[0-9]{3}-[0-9]{4}' className='border-1 border-[#D9D9D9] p-2 text-[18px] rounded-lg w-150 mb-5 hover:border-black max-sm:-ml-18 max-sm:w-85 max-sm:mb-10' placeholder='Type your restaurant number (i.e: 02-xxx-xxxx)'/>
                </label>
            </div>
        </div>
        <button onClick={submitPost} className='bg-[#DE0000] text-white text-[20px] font-semibold ml-250 mt-10 px-6 py-2 rounded-lg cursor-pointer max-sm:ml-65'>Confirm</button>
    </div>
    </>
  )
}

export default AddFoodPost