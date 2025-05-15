import React from 'react'
import Navbar from '../components/Navbar'
import { NavLink } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import Fastfood from '../img/Fastfood.png'
import Seafood from '../img/Seafood.png'
import Dessert from '../img/Dessert.png'
import Noodle from '../img/Noodle.png'

const MainPage = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className='flex justify-center mt-10'>
        <div className='bg-white w-275 p-5 pb-20 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
            <h1 className='text-[36px] font-bold underline mb-10'>Popular menu</h1>
            <div className='flex justify-evenly mb-10'>
                {/* Post#1 */}
                <div className='w-60 p-2 rounded-lg bg-white drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)] cursor-pointer'>
                    <img src="" alt={"dsa"} />
                    <div className='flex justify-between items-center h-5'>
                        <h1 className='text-[24px] font-semibold'>Name</h1>
                        <div className='flex items-center gap-1 bg-[#DE0000] px-2 rounded-md'>
                            <p className='text-white text-[14px] font-semibold'>4.0</p>
                            <IoIosStar className='text-white text-[14px]'/>
                        </div>
                    </div>
                    <h2 className='text-[#A9A9A9] mb-10'>Category</h2>
                    <p className='font-bold'>1234 views</p>
                </div>
                {/* Post#2 */}
                <div className='w-60 p-2 rounded-lg bg-white drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)] cursor-pointer'>
                    <img src="" alt={"dsa"} />
                    <div className='flex justify-between items-center h-5'>
                        <h1 className='text-[24px] font-semibold'>Name</h1>
                        <div className='flex items-center gap-1 bg-[#DE0000] px-2 rounded-md'>
                            <p className='text-white text-[14px] font-semibold'>4.0</p>
                            <IoIosStar className='text-white text-[14px]'/>
                        </div>
                    </div>
                    <h2 className='text-[#A9A9A9] mb-10'>Category</h2>
                    <p className='font-bold'>1234 views</p>
                </div>
                {/* Post#3 */}
                <div className='w-60 p-2 rounded-lg bg-white drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)] cursor-pointer'>
                    <img src="" alt={"dsa"} />
                    <div className='flex justify-between items-center h-5'>
                        <h1 className='text-[24px] font-semibold'>Name</h1>
                        <div className='flex items-center gap-1 bg-[#DE0000] px-2 rounded-md'>
                            <p className='text-white text-[14px] font-semibold'>4.0</p>
                            <IoIosStar className='text-white text-[14px]'/>
                        </div>
                    </div>
                    <h2 className='text-[#A9A9A9] mb-10'>Category</h2>
                    <p className='font-bold'>1234 views</p>
                </div>
                {/* Post#4 */}
                <div className='w-60 p-2 rounded-lg bg-white drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)] cursor-pointer'>
                    <img src="" alt={"dsa"} />
                    <div className='flex justify-between items-center h-5'>
                        <h1 className='text-[24px] font-semibold'>Name</h1>
                        <div className='flex items-center gap-1 bg-[#DE0000] px-2 rounded-md'>
                            <p className='text-white text-[14px] font-semibold'>4.0</p>
                            <IoIosStar className='text-white text-[14px]'/>
                        </div>
                    </div>
                    <h2 className='text-[#A9A9A9] mb-10'>Category</h2>
                    <p className='font-bold'>1234 views</p>
                </div>
            </div>
            <div className='flex justify-center'>
                <NavLink to={"/search"} className='bg-[#F3F3F3] w-[95%] text-center font-bold py-2 rounded-lg cursor-pointer hover:bg-[#E2E2E2]'>See more</NavLink>
            </div>
        </div>
    </div>

    <div className='flex justify-center my-10'>
        <div className='bg-white w-275 p-5 pb-20 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
            <div className='flex justify-between items-center'>
                <h1 className='text-[36px] font-bold underline mb-10'>Category</h1>
                <button className='text-[#DE0000] text-[18px] font-bold cursor-pointer hover:underline'>See more</button>
            </div>
            <div className='flex justify-center gap-15'>
                {/* Category#1 */}
                <div className='cursor-pointer'>
                    <img src={Fastfood} alt="fastfood" className='rounded-md brightness-75 w-50 h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[20px] text-white font-bold -mt-8 relative'>Fast Food</p>
                </div>
                {/* Category#2 */}
                <div className='cursor-pointer'>
                    <img src={Seafood} alt="seafood" className='rounded-md brightness-75 w-50 h-50 object-cover hover:brightness-50'/>
                    <p className='text-center text-[20px] text-white font-bold -mt-8 relative'>Seafodd</p>
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
            <div>
                {/* Category#5 */}
                <div>
                    <img src="" alt="" />
                    <p></p>
                </div>
                {/* Category#6 */}
                <div>
                    <img src="" alt="" />
                    <p></p>
                </div>
                {/* Category#7 */}
                <div>
                    <img src="" alt="" />
                    <p></p>
                </div>
                {/* Category#8 */}
                <div>
                    <img src="" alt="" />
                    <p></p>
                </div>
            </div>
            <div>
                {/* Category#9 */}
                <div>
                    <img src="" alt="" />
                    <p></p>
                </div>
                {/* Category#10 */}
                <div>
                    <img src="" alt="" />
                    <p></p>
                </div>
                {/* Category#11 */}
                <div>
                    <img src="" alt="" />
                    <p></p>
                </div>
                {/* Category#12 */}
                <div>
                    <img src="" alt="" />
                    <p></p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MainPage