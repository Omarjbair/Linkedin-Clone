import { Link } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import { useDispatch, useSelector } from "react-redux";
import {signOut}  from '../store/authSlice';

const Header = () => {
    const {userInfo} = useSelector((state) => state.auth)
    const dispatch = useDispatch();

    return (
    <div className="bg-white z-[1000] sticky top-0">
        <div className="w-[73%] mx-auto max-lg:w-[95%] max-md:[80%]">
            <div className="flex justify-between items-center py-1 max-md:block  max-md:w-2/3 max-md:mx-auto max-sm:w-full">
                <div className="flex justify-center items-center gap-2 z-20">
                    <Link to="/home"><img className="h-full w-10" src="/images/home-logo.svg" alt="Linkedin-logo"/></Link>
                    <div className="flex  bg-[#eef3f8] px-4 py-[6px] justify-center gap-2 items-center rounded-[2px] w-[100%]">
                        <div>
                            <img src="/images/search-icon.svg" alt="Search-icon"/>
                        </div>
                        <input className=" bg-[#eef3f8] text-[14px] color-[rgba(0,0,0,0.9)] outline-none w-[100%] placeholder:text-[14px] placeholder:font-light placeholder:text-[rgba(0,0,0,0.6)]" type="text" placeholder="Search"/>
                    </div>
                </div>
                <nav className="w-2/3 max-md:fixed max-md:bottom-0 max-md:left-[50%]  max-md:translate-x-[-50%] bg-white max-md:w-full max-md:pt-2 max-md:pb-[5px] z-[101]">
                    <ul className="flex justify-center items-center gap-7 max-md:ml-[5%]">
                        <HeaderNav img="nav-home.svg" path="home" title = "Home" classes="active"/>
                        <HeaderNav img="nav-network.svg" path="network" title = "My Network" classes=""/>
                        <HeaderNav img="nav-jobs.svg" path="jobs" title = "Jobs" classes=""/>
                        <HeaderNav img="nav-messaging.svg" path="messaging" title = "Messaging" classes=""/>
                        <HeaderNav img="nav-notifications.svg" path="notifications" title = "Notifications" classes=""/>
                        <li className="relative group">
                            <Link className="flex flex-col justify-center items-center ">
                                <img className='w-6 rounded-full' src={userInfo?.photo?userInfo.photo:"/images/user.svg"} alt=""/>
                                <span className="flex gap-1 justify-center items-center text-[12px] text-[rgba(0,0,0,0.6)]  group-hover:text-[rgba(0,0,0,0.9)] duration-200 max-[500px]:hidden">
                                    Me
                                    <img className="w-3 h-4 max-md:rotate-180" src="/images/down-icon.svg" alt="arrow-icon"/>
                                </span>
                            </Link>
                            <div onClick={() => dispatch(signOut())} className=" absolute left-[-10px] cursor-pointer bottom-[-35px] w-[100px] px-5 py-2 bg-[#fff] z-[-1] hidden group-hover:block transition-all max-md:top-[-40px] max-md:left-[-40px] max-md:h-fit duration-300 signOut">
                                <p className="text-[14px]">Sign Out</p>
                            </div>
                        </li>
                        <li>
                            <div className="group max-[1080px]:hidden">
                                <Link className="flex flex-col justify-center items-center">
                                    <img src="/images/nav-work.svg" alt="nav-icon"/>
                                    <span className="flex gap-1 justify-center items-center text-[12px] text-[rgba(0,0,0,0.6)] group-hover:text-[rgba(0,0,0,0.9)] duration-200">
                                        work
                                        <img className="w-3 h-4" src="/images/down-icon.svg" alt="arrow-icon"/>
                                    </span>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    );
};

export default Header;
