import react from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
  return (<>
    <section className='flex justify-start items-end bg-[#FFFFFF] h-16 lg:h-20'>
        <p className='text-[36px] lg:text-[48px] ml-5 lg:ml-10 font-bold text-[#DE0000]'>Abb</p>
        <p className='text-[36px] lg:text-[48px] ml-5 font-bold text-[#000000]'>Sabb</p>
    </section >
    <section className='flex justify-start bg-[#FFFFFF] h-12 lg:h-25'>
        <div className='flex flex-row'>
            <div className='ml-5 lg:ml-10'>
                <p className='text-[16px] lg:text-[20px] font-semibold'>Discover and share delicious</p>
                <p className='text-[16px] lg:text-[20px] font-semibold'>Food from anywhere</p>
            </div>
            <div className='absolute right-5 lg:right-10'>
                <p className='max-sm:mt-[50px] ml-10 text-[20px] lg:text-[36px] font-bold'>Contract info</p>
                <p className='ml-10 text-[16px] lg:text-[20px] font-semibold'>tel:0xx-xxx-xxxx</p>
                <p className='ml-10 text-[16px] lg:text-[20px] font-semibold'>Email:Bxxxxxxx@gmail.com</p>
            </div>
        </div>
    </section>
    <section>
        <div className='bg-[#FFFFFF]  h-30 lg:h-40 flex flex-col'>
            <p className='ml-5 lg:ml-10 text-[20px] lg:text-[36px] font-bold'>Explore</p>
            <NavLink to={"/login"} className='w-0 cursor-pointer'>
            <p className='ml-5 lg:ml-10 text-[16px] lg:text-[20px] underline font-semibold'>login</p>
            </NavLink>
            <NavLink to={"/home"} className='w-0 cursor-pointer'>
            <p className='ml-5 lg:ml-10 text-[16px] lg:text-[20px] underline font-semibold'>Home</p>
            </NavLink>
            <NavLink to={"/profile"} className='w-0 cursor-pointer'>
            <p className='ml-5 lg:ml-10 text-[16px] lg:text-[20px] underline font-semibold'>Profile</p>
            </NavLink>
        </div>
    </section>
    <section className='flex bg-[#FFFFFF] h-14 lg:h-20'>
        <div className='bg-[#FFFFFF] h-20 flex flex-col'>
            <p className='ml-5 lg:ml-10 text-[30px] font-bold'>Follow us</p>
            <div className='flex flex-row'>
                <p className='ml-5 lg:ml-10 text-[28px] lg:text-[40px]'><FaFacebook /></p>
                <p className='ml-5 lg:ml-10 text-[28px] lg:text-[40px]'><FaInstagram/></p>
                <p className='ml-5 lg:ml-10 text-[28px] lg:text-[40px]'><FaTwitter/></p>
            </div>
        </div>
    </section>
    <section className='flex justify-center items-end bg-[#FFFFFF] h-10'>
        <p className='ml-10 text-[12px] lg:text-[20px] font-semibold'>© 2070 AbbSabb. All rights reserved.</p>
    </section>
    </>
  )
}
export default Footer;