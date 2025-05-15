import { useState } from 'react'

const FilterModal = () => {
    const [checkAll, setCheckAll] = useState(false)
    const foodCategories = [
    'Fast food', 'Seafoods', 'Noodles', 'Desserts', 'Burgers', 'Steaks',
    'Dietary Food', 'Buffets', 'Hot Pots', 'Grilled', 'Pizzas', 'Bakeries',
    'Vegetarian food', 'Thai Food', 'Chinese Food', 'Japanese Food', 'Korean Food', 'French Food',
    ];
  return (
    <>
    <div className='fixed inset-0 z-40 bg-[rgba(0,0,0,0.50)] flex justify-center items-center'>
        <div className='flex justify-center'>
            <div className='bg-white w-175 p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
                <h1 className='text-[36px] font-bold underline'>Filters</h1>
                <div>
                    {/* Rating */}
                    <h2 className='text-[24px] font-bold my-3'>Rating</h2>
                    <div className='flex justify-evenly items-center gap-5'>
                        <label className='flex items-center gap-3 cursor-pointer'>
                            <input type="checkbox" checked={checkAll} className='accent-[#DE0000] checked:border-0 h-5 w-5 border-2 rounded-sm cursor-pointer'/>
                            <span className='text-[20px] font-semibold'>3.5+</span>
                        </label>
                        <label className='flex items-center gap-3 cursor-pointer'>
                            <input type="checkbox" checked={checkAll} className='accent-[#DE0000] checked:border-0 h-5 w-5 border-2 rounded-sm cursor-pointer'/>
                            <span className='text-[20px] font-semibold'>4.0+</span>
                        </label>
                        <label className='flex items-center gap-3 cursor-pointer'>
                            <input type="checkbox" checked={checkAll} className='accent-[#DE0000] checked:border-0 h-5 w-5 border-2 rounded-sm cursor-pointer'/>
                            <span className='text-[20px] font-semibold'>4.5+</span>
                        </label>
                    </div>
                    {/* Category */}
                    <h2 className='text-[24px] font-bold my-3'>Category</h2>
                    <div className='grid grid-cols-3 gap-3'>
                        {foodCategories.map((food, index) => (
                            <label key={index} className='flex items-center gap-3 cursor-pointer'>
                                <input type="checkbox" checked={checkAll} className='accent-[#DE0000] checked:border-0 h-5 w-5 border-2 rounded-sm cursor-pointer'/>
                                <span className='text-[20px] font-semibold'>{food}</span>
                            </label>
                        ))}
                    </div>
                    {/* Price */}
                    <h2 className='text-[24px] font-bold my-3'>Price</h2>
                    <div className='flex items-center gap-5'>
                        <label className='flex items-center gap-3 cursor-pointer'>
                            <input type="checkbox" checked={checkAll} className='accent-[#DE0000] checked:border-0 h-5 w-5 border-2 rounded-sm cursor-pointer'/>
                            <span className='text-[20px] font-semibold'>&lt; 100 Baht</span>
                        </label>
                        <label className='flex items-center gap-3 cursor-pointer'>
                            <input type="checkbox" checked={checkAll} className='accent-[#DE0000] checked:border-0 h-5 w-5 border-2 rounded-sm cursor-pointer'/>
                            <span className='text-[20px] font-semibold'>101-250 Baht</span>
                        </label>
                        <label className='flex items-center gap-3 cursor-pointer'>
                            <input type="checkbox" checked={checkAll} className='accent-[#DE0000] checked:border-0 h-5 w-5 border-2 rounded-sm cursor-pointer'/>
                            <span className='text-[20px] font-semibold'>251-500 Baht</span>
                        </label>
                        <label className='flex items-center gap-3 cursor-pointer'>
                            <input type="checkbox" checked={checkAll} className='accent-[#DE0000] checked:border-0 h-5 w-5 border-2 rounded-sm cursor-pointer'/>
                            <span className='text-[20px] font-semibold'>500+ Baht</span>
                        </label>
                    </div>
                </div>
                <div className='flex justify-evenly mt-5'>
                    <button onClick={() => checkAll ? setCheckAll(false) : setCheckAll(true)} className='text-[20px] font-semibold bg-black text-white px-25 py-1 rounded-lg cursor-pointer'>{checkAll ? "Clear" : "Fill All"}</button>
                    <button className='text-[20px] font-semibold bg-[#DE0000] text-white px-25 py-1 rounded-lg cursor-pointer'>Search</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default FilterModal