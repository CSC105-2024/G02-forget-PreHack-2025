import { React, useState } from 'react'
import Navbar from '../components/Navbar'
import { NavLink } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
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
import Footer from '../components/Footer';


const MainPage = () => {
    const [seeMore, setSeeMore] = useState(false)

    function turnSeeMore() {
        if (seeMore) {
            setSeeMore(false);
        } else {
            setSeeMore(true);
        }
    }

  return (
    <>
    <Navbar></Navbar>
    <div className='flex justify-center mt-10'>
        <div className='bg-white w-275 mx-3 p-5 pb-20 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
            <h1 className='text-[24px] lg:text-[36px] font-bold underline mb-4 lg:mb-10'>Popular menu</h1>
            <div className='grid justify-evenly grid-cols-2 lg:grid-cols-4 gap-5 mb-10'>
                {/* Post#1 */}
                <div className='w-[100%] lg:w-60 rounded-lg max-sm:h-45 bg-white drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)] cursor-pointer'>
                    <img className='flex h-25 lg:h-[200px] w-[250px] object-cover rounded-t-lg hover:brightness-70' src={FriedChickenCurry} alt={"dsa"} />
                    <div className='flex mt-2 p-2 justify-between items-center h-5'>
                        <h1 className='text-[18px] lg:text-[24px] font-semibold'>Name</h1>
                        <div className='flex items-center gap-1 bg-[#DE0000] px-1 lg:px-2 rounded-md'>
                            <p className='text-white text-[10px] lg:text-[14px] font-semibold'>4.0</p>
                            <IoIosStar className='text-white text-[10px]'/>
                        </div>
                    </div>
                    <h2 className='max-sm:text-[12px] text-[#A9A9A9] ml-2 lg:mb-10'>Category</h2>
                    <p className='flex items-end max-sm:h-8 max-sm:text-[12px] ml-2 font-bold'>1234 views</p>
                </div>
                {/* Post#2 */}
                <div className='w-[100%] lg:w-60 rounded-lg max-sm:h-45 bg-white drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)] cursor-pointer'>
                    <img className='flex h-25 lg:h-[200px] w-[250px] object-cover rounded-t-lg hover:brightness-70' src={DryNoodle} alt={"dsa"} />
                    <div className='flex mt-2 p-2 justify-between items-center h-5'>
                        <h1 className='text-[18px] lg:text-[24px] font-semibold'>Name</h1>
                        <div className='flex items-center gap-1 bg-[#DE0000] px-1 lg:px-2 rounded-md'>
                            <p className='text-white text-[10px] lg:text-[14px] font-semibold'>4.0</p>
                            <IoIosStar className='text-white text-[10px]'/>
                        </div>
                    </div>
                    <h2 className='max-sm:text-[12px] text-[#A9A9A9] ml-2 lg:mb-10'>Category</h2>
                    <p className='flex items-end max-sm:h-8 max-sm:text-[12px] ml-2 font-bold'>1234 views</p>
                </div>
                {/* Post#3 */}
                <div className='w-[100%] lg:w-60 rounded-lg max-sm:h-45 bg-white drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)] cursor-pointer'>
                    <img className='flex h-25 lg:h-[200px] w-[250px] object-cover rounded-t-lg hover:brightness-70' src={CrispyPorkSalad} alt={"dsa"} />
                    <div className='flex mt-2 p-2 justify-between items-center h-5'>
                        <h1 className='text-[18px] lg:text-[24px] font-semibold'>Name</h1>
                        <div className='flex items-center gap-1 bg-[#DE0000] px-1 lg:px-2 rounded-md'>
                            <p className='text-white text-[10px] lg:text-[14px] font-semibold'>4.0</p>
                            <IoIosStar className='text-white text-[10px]'/>
                        </div>
                    </div>
                    <h2 className='max-sm:text-[12px] text-[#A9A9A9] ml-2 lg:mb-10'>Category</h2>
                    <p className='flex items-end max-sm:h-8 max-sm:text-[12px] ml-2 font-bold'>1234 views</p>
                </div>
                {/* Post#4 */}
                <div className='w-[100%] lg:w-60 rounded-lg max-sm:h-45 bg-white drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)] cursor-pointer'>
                    <img className='flex h-25 lg:h-[200px] w-[250px] object-cover rounded-t-lg hover:brightness-70' src={MalaGrilledPorkNeck} alt={"dsa"} />
                    <div className='flex mt-2 p-2 justify-between items-center h-5'>
                        <h1 className='text-[18px] lg:text-[24px] font-semibold'>Name</h1>
                        <div className='flex items-center gap-1 bg-[#DE0000] px-1 lg:px-2 rounded-md'>
                            <p className='text-white text-[10px] lg:text-[14px] font-semibold'>4.0</p>
                            <IoIosStar className='text-white text-[10px]'/>
                        </div>
                    </div>
                    <h2 className='max-sm:text-[12px] text-[#A9A9A9] ml-2 lg:mb-10'>Category</h2>
                    <p className='flex items-end max-sm:h-8 max-sm:text-[12px] ml-2 font-bold'>1234 views</p>
                </div>
            </div>
            <div className='flex justify-center'>
                <NavLink to={"/search"} className='bg-[#F3F3F3] w-[95%] text-center font-bold py-1 lg:py-2 rounded-lg cursor-pointer hover:bg-[#E2E2E2]'>See more</NavLink>
            </div>
        </div>
    </div>

    <div className='flex justify-center my-10'>
        <div className='bg-white w-275 p-5 pb-20 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
            <div className='flex justify-between items-center'>
                <h1 className='text-[36px] font-bold underline mb-10'>Category</h1>
                <button onClick={turnSeeMore} className='text-[#DE0000] text-[18px] font-bold cursor-pointer hover:underline'>See more</button>
            </div>
            <div className='flex justify-center gap-15 -mb-5'>
                {/* Category#1 */}
                <div className='cursor-pointer'>
                    <img src={Fastfood} alt="fastfood" className='rounded-md brightness-75 w-50 h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[20px] text-white font-bold -mt-8 relative'>Fast Food</p>
                </div>
                {/* Category#2 */}
                <div className='cursor-pointer'>
                    <img src={Seafood} alt="seafood" className='rounded-md brightness-75 w-50 h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[20px] text-white font-bold -mt-8 relative'>Seafood</p>
                </div>
                {/* Category#3 */}
                <div className='cursor-pointer'>
                    <img src={Dessert} alt="dessert" className='rounded-md brightness-75 w-50 h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[20px] text-white font-bold -mt-8 relative'>Dessert</p>
                </div>
                {/* Category#4 */}
                <div className='cursor-pointer'>
                    <img src={Noodle} alt="Noodle" className='rounded-md brightness-75 w-50 h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[20px] text-white font-bold -mt-8 relative'>Noodle</p>
                </div>
            </div>
           {seeMore &&
            <>
            <div className='flex justify-center gap-15 mt-10'>
                {/* Category#5 */}
                <div className='cursor-pointer'>
                    <img src={Burger} alt="burger" className='rounded-md brightness-75 w-50 h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[20px] text-white font-bold -mt-8 relative'>Burger</p>
                </div>
                {/* Category#6 */}
                <div className='cursor-pointer'>
                    <img src={Steak} alt="steak" className='rounded-md brightness-75 w-50 h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[20px] text-white font-bold -mt-8 relative'>Steak</p>
                </div>
                {/* Category#7 */}
                <div className='cursor-pointer'>
                    <img src={DietaryFood} alt="dietary_food" className='rounded-md brightness-75 w-50 h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[20px] text-white font-bold -mt-8 relative'>Dietary Food</p>
                </div>
                {/* Category#8 */}
                <div className='cursor-pointer'>
                    <img src={Buffet} alt="buffet" className='rounded-md brightness-75 w-50 h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[20px] text-white font-bold -mt-8 relative'>Buffet</p>
                </div>
            </div>
            <div className='flex justify-center gap-15 mt-5'>
                {/* Category#9 */}
                <div className='cursor-pointer'>
                    <img src={HotPot} alt="hot_pot" className='rounded-md brightness-75 w-50 h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[20px] text-white font-bold -mt-8 relative'>Hot Pot</p>
                </div>
                {/* Category#10 */}
                <div className='cursor-pointer'>
                    <img src={Grilled} alt="grilled" className='rounded-md brightness-75 w-50 h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[20px] text-white font-bold -mt-8 relative'>Grilled</p>
                </div>
                {/* Category#11 */}
                <div className='cursor-pointer'>
                    <img src={Pizza} alt="pizza" className='rounded-md brightness-75 w-50 h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[20px] text-white font-bold -mt-8 relative'>Pizza</p>
                </div>
                {/* Category#12 */}
                <div className='cursor-pointer'>
                    <img src={Bakery} alt="bakery" className='rounded-md brightness-75 w-50 h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[20px] text-white font-bold -mt-8 relative'>Bakery</p>
                </div>
            </div>
            <div className='flex justify-center gap-15 mt-5'>
                {/* Category#13 */}
                <div className='cursor-pointer'>
                    <img src={VegetarianFood} alt="vegetarian_food" className='rounded-md brightness-75 w-50 h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[20px] text-white font-bold -mt-8 relative'>Vegetarian Food</p>
                </div>
                {/* Category#14 */}
                <div className='cursor-pointer'>
                    <img src={ThaiFood} alt="thai_food" className='rounded-md brightness-75 w-50 h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[20px] text-white font-bold -mt-8 relative'>Thai Food</p>
                </div>
                {/* Category#15 */}
                <div className='cursor-pointer'>
                    <img src={ChineseFood} alt="chinese_food" className='rounded-md brightness-75 w-50 h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[20px] text-white font-bold -mt-8 relative'>Chinese Food</p>
                </div>
                {/* Category#16 */}
                <div className='cursor-pointer'>
                    <img src={JapaneseFood} alt="japanese_food" className='rounded-md brightness-75 w-50 h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[20px] text-white font-bold -mt-8 relative'>Japanese Food</p>
                </div>
            </div>
            <div className='flex justify-center gap-15 mt-5'>
                {/* Category#17 */}
                <div className='cursor-pointer'>
                    <img src={KoreanFood} alt="Korean_food" className='rounded-md brightness-75 w-50 h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[20px] text-white font-bold -mt-8 relative'>Korean Food</p>
                </div>
                {/* Category#18 */}
                <div className='cursor-pointer'>
                    <img src={FrenchFood} alt="French_food" className='rounded-md brightness-75 w-50 h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[20px] text-white font-bold -mt-8 relative'>French Food</p>
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