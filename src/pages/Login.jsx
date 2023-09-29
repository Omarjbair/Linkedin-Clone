
import { useDispatch } from "react-redux";
import { getUserInfo } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {userInfo} = useSelector((state) => state.auth);
    
    useEffect(()=> {
        if(userInfo){ 
            navigate('/home');
        }
    },[userInfo,navigate]);
    
    return (
    <div className="w-[90%] mx-auto z-[350]">
        <nav className="flex w-full  justify-between items-center my-6">
            <a href="./index.html">
                <img className="w-32" src="./images/login-logo.svg" alt="Linkedin-Logo"/>
            </a>
            <div className="flex gap-2 items-center max-md:gap-[2px]">
                <a className="text-[rgba(0,0,0,0.6)] rounded-lg px-4 py-2 hover:bg-[rgba(0,0,0,0.08)] hover:text-[rgba(0,0,0,0.9)] duration-300 font-semibold whitespace-nowrap cursor-pointer " >Join now</a>
                <a className="text-[#0a66c2] border-2 border-[#0a66c2] hover:bg-[rgba(112,181,249,0.15)] first-line: py-2 px-5 rounded-3xl font-semibold  duration-300  whitespace-nowrap cursor-pointer ">Sign in</a>
            </div>
        </nav>
        <section className="flex justify-between mt-[50px] max-md:flex-col max-md:items-center max-md:gap-10">
            <div className="w-1/2 flex flex-col mt-[150px] gap-4 items-center  max-md:w-full max-lg:mt-[20px] max-md:mt-[0]">
                <h1 className=" text-[40px] text-center text-[#2977c9] font-bold  ">Welcome to your professional community</h1>
                <div className=" mt-6">
                    <button onClick={() => dispatch(getUserInfo())} className="flex gap-4 w-[300px] border-[2px] border-[rgba] text-[rgba(0,0,0,0.6)] px-10 py-2 rounded-full max-md:w-full justify-center items-center hover:bg-[rgba(207,207,207,0.25)] hover:text-[rgba(0,0,0,0.75)] duration-300 border-gray-300 ">
                        <img src="images/google.svg"/>
                        <span>Sign in with Google</span>
                    </button>
                </div>
            </div>
            <div className="w-1/2 max-md:w-full">
                <img className='w-[100%]' src="./images/login-hero.svg" alt="googleLogo"/>
            </div>
        </section>
    </div>
    );
};

export default Login;
