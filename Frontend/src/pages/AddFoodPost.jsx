import { React, useState } from 'react'
import Navbar from '../components/Navbar'
import { FaPlus } from "react-icons/fa";
import { IoMdRemove } from "react-icons/io";

const AddFoodPost = () => {
    const [categoryList, setCategoryList] = useState([{category: ""}])
    const categories = [
    'Fast food', 'Seafoods', 'Noodles', 'Desserts', 'Burgers', 'Steaks',
    'Dietary Food', 'Buffets', 'Hot Pots', 'Grilled', 'Pizzas', 'Bakeries',
    'Vegetarian food', 'Thai Food', 'Chinese Food', 'Japanese Food', 'Korean Food', 'French Food',
    ];

    function handleAddCategory() {
        setCategoryList([...categoryList, {category: ""}]);
    }

    function handleRemoveCategory(index) {
        const list = [...categoryList];
        list.splice(index, 1);
        setCategoryList(list);
        console.log(index);
    }
  return (
    <>
    <Navbar></Navbar>
    <div className='flex justify-center mt-10'>
        <div className='bg-white w-275 p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
            <h1 className='text-[36px] font-bold underline mb-10'>Food Information</h1>
            <div className='ml-20'>
                <label>
                    <p className='text-[32px] mb-2'><span className='text-[#DE0000]'>*</span> Food</p>
                    <input type="text" className='border-1 border-[#D9D9D9] p-2 text-[18px] rounded-lg w-150 mb-5 hover:border-black' placeholder='Type your food name'/>
                </label>
                <label>
                    <p className='text-[32px] mb-2'><span className='text-[#DE0000]'>*</span> Category</p>
                    {categoryList.map((category, index) => (
                        <div key={index}>
                            <select className='border-1 border-[#D9D9D9] p-2 text-[18px] rounded-lg w-150 mb-5 hover:border-black'>
                                <option value=""></option>
                                {categories.map((food, indexFood) => (
                                    <option key={indexFood} value={food}>{food}</option>
                                ))}
                            </select>
                            {categoryList.length > 1 && <button onClick={() => handleRemoveCategory(index)} className='ml-4 bg-[#D9D9D9] p-1 rounded-[100%] cursor-pointer hover:bg-[#A9A9A9]'><IoMdRemove /></button>}
                        </div>
                    ))}
                    {/* <p className='text-[32px] mb-2'><span className='text-[#DE0000]'>*</span> Category</p>
                    <select className='border-1 border-[#D9D9D9] p-2 text-[18px] rounded-lg w-150 mb-5 hover:border-black'>
                        <option value="-">-</option>
                        {categories.map((food, indexFood) => (
                            <option key={indexFood} value={food}>{food}</option>
                        ))}
                    </select> */}
                    
                </label>
                <br />
                <button onClick={handleAddCategory} className='flex items-center gap-2 text-[#DE0000] border-b-2 font-semibold -mt-5 mb-5 cursor-pointer'><FaPlus className='text-[14px]'/> Add Category</button>
                <label>
                    <p className='text-[32px] mb-2'><span className='text-[#DE0000]'>*</span> Price</p>
                    <div className='flex gap-3'>
                        <input type="text" className='border-1 border-[#D9D9D9] p-2 text-[18px] rounded-lg w-150 mb-5 hover:border-black' placeholder='Type your food price'/>
                        <p className='text-[30px]'>Baht</p>
                    </div>
                </label>
            </div>
        </div>
    </div>

    <div className='flex justify-center mt-10'>
        <div className='bg-white w-275 p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
            <h1 className='text-[36px] font-bold underline mb-10'>Location</h1>
            <div className='ml-20'>
                <label>
                    <p className='text-[32px] mb-2'><span className='text-[#DE0000]'>*</span> Location</p>
                    <input type="text" className='border-1 border-[#D9D9D9] p-2 text-[18px] rounded-lg w-150 mb-5 hover:border-black' placeholder='Type your food location'/>
                </label>
            </div>
        </div>
    </div>

    <div className='flex flex-col items-center justify-center my-10'>
        <div className='bg-white w-275 p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
            <h1 className='text-[36px] font-bold underline mb-10'>Phone Number</h1>
            <div className='ml-20'>
                <label>
                    <p className='text-[32px] mb-2'>Mobile Number</p>
                    <input type="text" className='border-1 border-[#D9D9D9] p-2 text-[18px] rounded-lg w-150 mb-5 hover:border-black' placeholder='Type your mobile number (i.e: 082-xxx-xxxx)'/>
                </label>
                <label>
                    <p className='text-[32px] mb-2'>Restaurant Number</p>
                    <input type="text" className='border-1 border-[#D9D9D9] p-2 text-[18px] rounded-lg w-150 mb-5 hover:border-black' placeholder='Type your restaurant number (i.e: 02-xxx-xxxx)'/>
                </label>
            </div>
        </div>
        <button className='bg-[#DE0000] text-white text-[20px] font-semibold ml-250 mt-10 px-6 py-2 rounded-lg cursor-pointer'>Confirm</button>
    </div>
    </>
  )
}

export default AddFoodPost