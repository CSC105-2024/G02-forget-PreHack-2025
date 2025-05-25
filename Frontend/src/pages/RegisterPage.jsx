import { React, useState, useEffect } from 'react'
import NavbarNoSearchingBar from '../components/NavbarNoSearchingBar'
// Router
import { NavLink, useNavigate } from "react-router-dom";
// Icon
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
// Zod
import { z } from "zod";
// API
import * as apiUser from "../api/user";

const RegisterPage = () => {

    const [hidePassword, setHidePassword] = useState(true);
    const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
    const [success, setSuccess] = useState(false);

    const [formData, setFormData] = useState({
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        });

    const userSchema = z.object({
        username: z.string().min(5),
        email: z.string().email(),
        password: z.string().min(4),
        confirmPassword: z.string().min(4),
    });

    // Backend => API createUser
    const createUser = async (username, email, password) => {
        await apiUser.createUser(username, email, password);
    }

    const [errors, setErrors] = useState({});
    const [errorText, setErrorText] = useState();

    // Delay function
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const navigate = new useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const result = userSchema.safeParse(formData);
        setErrors({});
        if (formData.password !== formData.confirmPassword) {
            setErrorText("Your password and confirm password are not the same")
        }
        if (result.success && formData.password === formData.confirmPassword) {
            console.log("Validation successful:", result.data);
            // API
            createUser(formData.username, formData.email, formData.password);

            setSuccess(true);
            await delay(1000);
            navigate("/login")
        } else {
            console.log("Validation errors:", result.error.errors);
            setErrorText("")
            const errorMap = {};
            result.error.errors.forEach((err) => {
                errorMap[err.path[0]] = err.message;
        });
        setErrors(errorMap);
        }
    }

  return (
    <>
    <NavbarNoSearchingBar></NavbarNoSearchingBar>
    <div className='flex justify-center my-10'>
        <div className='bg-white flex flex-col items-center w-125 p-5 pb-15 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)] max-sm:w-97'>
            <h1 className='text-[36px] font-bold mb-5'>Register</h1>
            <div className=''>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <label className='text-[20px] -my-5 max-sm:ml-3'>Username</label> <br />
                    {errors.username && <span className='text-red-600'>{errors.username}</span>}
                    <input type="text" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} required placeholder='Enter your username' className='text-[18px] border-1 border-[#D9D9D9] rounded-lg px-3 py-1 my-2 w-100 max-sm:ml-2 hover:border-black max-sm:w-85'/> <br />
                    <label className='text-[20px] -my-5 max-sm:ml-3'>Email</label> <br />
                    {errors.email && <span className='text-red-600'>{errors.email}</span>}
                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required placeholder='Enter your email' className='text-[18px] border-1 border-[#D9D9D9] rounded-lg px-3 py-1 my-2 w-100 max-sm:ml-2 hover:border-black max-sm:w-85'/> <br />
                    <label className='text-[20px] -my-5 max-sm:ml-3'>Password</label> <br />
                    {errorText && <span className='text-red-600'>{errorText}</span>}
                    <div className='flex items-center'>
                        <input type={hidePassword ? "password" : "text"} value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required placeholder='Enter your Password' className='text-[18px] border-1 border-[#D9D9D9] rounded-lg px-3 py-1 mt-2 w-100 hover:border-black max-sm:ml-2'/>
                        {hidePassword && <LuEyeClosed onClick={() => setHidePassword(false)} className='-ml-8 text-[20px] cursor-pointer'/>}
                        {!hidePassword && <LuEye onClick={() => setHidePassword(true)} className='-ml-8 text-[20px] cursor-pointer'/>}
                    </div>
                    <label className='text-[20px] mt-5 -mb-5 max-sm:ml-3'>Confirm password</label> <br />
                    <div className='flex items-center'>
                        <input type={hideConfirmPassword ? "password" : "text"} value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} required placeholder='Enter your Password' className='text-[18px] border-1 border-[#D9D9D9] rounded-lg px-3 py-1 mt-2 w-100 hover:border-black max-sm:ml-2'/>
                        {hideConfirmPassword && <LuEyeClosed onClick={() => setHideConfirmPassword(false)} className='-ml-8 text-[20px] cursor-pointer'/>}
                        {!hideConfirmPassword && <LuEye onClick={() => setHideConfirmPassword(true)} className='-ml-8 text-[20px] cursor-pointer'/>}
                    </div>
                    <div className='flex justify-center my-7'>
                        <button type='submit'className='text-[20px] text-white font-bold bg-[#DE0000] w-100  max-sm:w-85 py-2 rounded-xl cursor-pointer hover:bg-[#C70000]'>Register</button>
                    </div>
                </form>
                </div>
                    <p className='font-bold text-[18px]'>Already have an account? <NavLink to={"/login"} className='font-normal underline cursor-pointer'>Click here</NavLink></p>
                <div>
            </div>
        </div>
    </div>
    {success &&
    <>
    <div className='fixed inset-0 flex justify-center items-end mb-10'>
        <div className='flex justify-center'>
            <div className='bg-green-400 w-75 p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
                <p className='text-center font-bold'>Register completed</p>
            </div>
        </div>
    </div>
    </>
    }
    </>
  )
}

export default RegisterPage