import { React, useState, useEffect } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import NavbarNoSearchingBar from '../components/NavbarNoSearchingBar';
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { z } from "zod";
import * as apiUser from '../api/user'

const LoginPage = () => {
    const [hide, setHide] = useState(true);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "" 
    });
    const [errors, setErrors] = useState({});
    const [errorText, setErrorText] = useState();
    // Check valid form is correct
    const userSchema = z.object({
        email: z.string().email("Email is wrong"),
        password: z.string().min(4, "Wrong passwrod")
    });
    // Backend => API loginUser
    const login = async (email, password) => {
        try {
        const data = await apiUser.loginUser(email);
        if (data.data.success && data.data.data.password == password) {
            // Collect userId in localStorage
            localStorage.setItem("userAccount", data.data.data.id);
            
            // Navigate to home page
            navigate("/home");
        } else {
            // set error in localStorage when data is not correct
            localStorage.setItem("error", "Email or password is wrong");
            window.location.reload();
        }
        } catch (e) {
            console.log(e);
        } 
    }
    // When click submit form it will run here and check inputs are email and password
    const handleSubmit = (e) => {
        e.preventDefault();
        const result = userSchema.safeParse(formData);
        if (result.success) {
        console.log("Validation successful:", result.data);
        // API
        login(formData.email, formData.password);
        } else {
        console.log("Validation errors:", result.error.errors);
        setErrorText("")
        const errorMap = {};
        result.error.errors.forEach((err) => {
            errorMap[err.path[0]] = err.message;
        });
        setErrors(errorMap);
        }
    };

    useEffect(() => {
        const savedError = localStorage.getItem("error");
        if (savedError) {
            setErrorText(savedError);
            localStorage.removeItem("error");
        }
    }, []);


    
  return (
    <>
    <NavbarNoSearchingBar></NavbarNoSearchingBar>
    <div className='flex justify-center mt-10'>
        <div className='bg-white flex flex-col items-center w-125 p-5 pb-30 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)] max-sm:w-97'>
            <h1 className='text-[36px] font-bold mb-5'>Login</h1>
            <div className=''>
                <form onSubmit={handleSubmit}>
                    <label className='text-[20px] max-sm:ml-3'>Email</label> <br />
                    {errorText && <span className='text-red-600'>{errorText}</span>}
                    {errors.email && <span className='text-red-600'>{errors.email}</span>}
                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder='Enter your email' className='text-[18px] border-1 border-[#D9D9D9] rounded-lg px-3 py-1 my-2 w-[100%] hover:border-black max-sm:ml-2'/> <br />
                    <label className='text-[20px]'>Password</label> <br />
                    {errors.password && <span className='text-red-600'>{errors.password}</span>}
                    <div className='flex items-center'>
                        <input type={hide ? "password" : "text"} value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder='Enter your Password' className='text-[18px] border-1 border-[#D9D9D9] rounded-lg px-3 py-1 mt-2 w-[100%] hover:border-black max-sm:ml-2'/>
                        {hide && <LuEyeClosed onClick={() => setHide(false)} className='-ml-8 text-[20px] cursor-pointer'/>}
                        {!hide && <LuEye onClick={() => setHide(true)} className='-ml-8 text-[20px] cursor-pointer'/>}
                    </div>
                    <div className='flex justify-center my-7'>
                        <button type='submit' className='text-[20px] text-white font-bold bg-[#DE0000] w-100 max-sm:w-85 py-2 rounded-xl cursor-pointer hover:bg-[#C70000] max-sm:ml-2'>Login</button>
                    </div>
                </form>
            </div>
                <p className='font-bold text-[18px]'>Don't have an account? <NavLink to={"/register"} className='font-normal underline cursor-pointer'>Register here</NavLink></p>
            <div>
            </div>
        </div>
    </div>
    </>
  )
}

export default LoginPage