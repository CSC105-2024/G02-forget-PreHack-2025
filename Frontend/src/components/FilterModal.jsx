import { useState } from 'react'
import { ImCross } from "react-icons/im";

export let sendFilterRating = [];
export let sendFilterCategory = [];
export let sendFilterPrice = [];
export const setSendFilterRating = (rating) => {
    sendFilterRating = rating;
}
export const setSendFilterCategory = (category) => {
    sendFilterCategory = category;
}
export const setSendFilterPrice = (price) => {
    sendFilterPrice = price;
}

const FilterModal = ({filter}) => {
    const [ratingList, setRatingList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [priceList, setPriceList] = useState([]);
    const [isFillAll, setIsFillAll] = useState(true)

    const ratings = ['3.5+', '4.0+', '4.5+'];
    const categories = [
    'Fast food', 'Seafoods', 'Noodles', 'Desserts', 'Burgers', 'Steaks',
    'Dietary Food', 'Buffets', 'Hot Pots', 'Grilled', 'Pizzas', 'Bakeries',
    'Vegetarian food', 'Thai Food', 'Chinese Food', 'Japanese Food', 'Korean Food', 'French Food',
    ];
    const prices = ['< 100 Baht', '101-250 Baht', '251-500 baht', '500 Baht'];

    function handleChangeRating(e, newValue) {
        if (e.target.checked) {
            setRatingList((prev) => [... prev, newValue]);
        } else {
            setRatingList((prev) => prev.filter((value) => value !== newValue));
        }
    }

    function handleChangeCategory(e, newValue) {
        if (e.target.checked) {
            setCategoryList((prev) => [... prev, newValue]);
        } else {
            setCategoryList((prev) => prev.filter((value) => value !== newValue));
        }
    }

    function handleChangePrice(e, newValue) {
        if (e.target.checked) {
            setPriceList((prev) => [... prev, newValue]);
        } else {
            setPriceList((prev) => prev.filter((value) => value !== newValue));
        }
    }

    function fillAll() {
        setRatingList(ratings);
        setCategoryList(categories);
        setPriceList(prices);
        setIsFillAll(false);
    }

    function clearAll() {
        setRatingList([]);
        setCategoryList([]);
        setPriceList([]);
        setIsFillAll(true);
    }

    function search() {
        setSendFilterRating(ratingList);
        setSendFilterCategory(categoryList);
        setSendFilterPrice(priceList);
        filter(false);
    }

  return (
    <>
    <div className='fixed inset-0 z-40 bg-[rgba(0,0,0,0.50)] flex justify-center items-center'>
        <div className='flex justify-center'>
            <div className='bg-white w-175 p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-[36px] font-bold underline'>Filters</h1>
                    <ImCross onClick={() => filter(false)} className='text-[24px] mr-6 cursor-pointer'/>
                </div>
                <div>
                    {/* Rating */}
                    <h2 className='text-[24px] font-bold my-3'>Rating</h2>
                    <div className='grid grid-cols-3 gap-3'>
                        {ratings.map((rating, index) => (
                            <label key={index} className='flex items-center gap-3 cursor-pointer'>
                                <input type="checkbox" value={rating} checked={ratingList.includes(rating)} onChange={(e) => handleChangeRating(e, e.target.value)} className='accent-[#DE0000] checked:border-0 h-5 w-5 border-2 rounded-sm cursor-pointer'/>
                                <span className='text-[20px] font-semibold'>{rating}</span>
                            </label>
                        ))}
                    </div>
                    {/* Category */}
                    <h2 className='text-[24px] font-bold my-3'>Category</h2>
                    <div className='grid grid-cols-3 gap-3'>
                        {categories.map((food, index) => (
                            <label key={index} className='flex items-center gap-3 cursor-pointer'>
                                <input type="checkbox" value={food} checked={categoryList.includes(food)} onChange={(e) => handleChangeCategory(e, e.target.value)} className='accent-[#DE0000] checked:border-0 h-5 w-5 border-2 rounded-sm cursor-pointer'/>
                                <span className='text-[20px] font-semibold'>{food}</span>
                            </label>
                        ))}
                    </div>
                    {/* Price */}
                    <h2 className='text-[24px] font-bold my-3'>Price</h2>
                    <div className='grid grid-cols-4 gap-3'>
                        {prices.map((price, index) => (
                            <label key={index} className='flex items-center gap-3 cursor-pointer'>
                                <input type="checkbox" value={price} checked={priceList.includes(price)} onChange={(e) => handleChangePrice(e, e.target.value)} className='accent-[#DE0000] checked:border-0 h-5 w-5 border-2 rounded-sm cursor-pointer'/>
                                <span className='text-[20px] font-semibold'>{price}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div className='flex justify-evenly mt-5'>
                    <button onClick={isFillAll ? fillAll : clearAll} className='text-[20px] font-semibold bg-black text-white px-25 py-1 rounded-lg cursor-pointer'>{isFillAll ? "Fill All" : "Clear All"}</button>
                    <button onClick={search} className='text-[20px] font-semibold bg-[#DE0000] text-white px-25 py-1 rounded-lg cursor-pointer'>Search</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default FilterModal