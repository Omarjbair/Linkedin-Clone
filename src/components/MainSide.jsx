import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SharePost from "./SharePost";
import { useEffect } from "react";
import { getPost } from "../store/articleSlice";
import Posts from './Posts'

const MainSide = () => {
  const [showModel,setShowModel] = useState(false)
  const {userInfo} = useSelector((state) => state.auth);
  const {loading , article} = useSelector((state) => state.article);
  
  const dispatch = useDispatch();

  const clickHandler = () => {
    setShowModel(!showModel);
  }

    useEffect(() => {
        dispatch(getPost());
    },[dispatch]);

  return (
    <div className='w-[60%] max-[960px]:w-[98%]'>
      <div className="bg-white px-4 py-2 rounded-lg  border-[2px] border-[rgba(0,0,0,0.15)]">
        <div className="flex">
          <img className='rounded-full mr-4 w-12' src={userInfo?.photo?userInfo.photo:"/images/user.svg"} />
          <button onClick={clickHandler} disabled={loading} className=" bg-transparent h-[48px] border-[1px] border-[rgba(0,0,0,0.15)]  rounded-full w-full text-left pl-5 text-[rgba(0,0,0,0.7)] hover:bg-[rgba(0,0,0,0.08)] duration-300">Start a post</button>
        </div>
        <div className="flex px-10 pt-6 pb-2 justify-between items-center text-[#70b5f9] max-[1100px]:px-4 max-[1000px]:px-2">
          <button className="flex justify-center items-center gap-1 max-[1000px]:flex-col px-2 py-3 rounded-md hover:bg-[rgba(0,0,0,0.08)] duration-300">
            <img src="/images/photo-icon.svg" alt="" />
            <span className="text-[15px]">Photo</span>
          </button>
          <button className="flex justify-center items-center gap-1 max-[1000px]:flex-col px-2 py-3 rounded-md hover:bg-[rgba(0,0,0,0.08)] duration-300">
            <img src="/images/video-icon.svg" alt="" />
            <span className="text-[15px]">Video</span>
          </button>
          <button className="flex justify-center items-center gap-1 max-[1000px]:flex-col px-2 py-3 rounded-md hover:bg-[rgba(0,0,0,0.08)] duration-300">
            <img src="/images/event-icon.svg" alt="" />
            <span className="text-[15px]">Event</span>
          </button>
          <button className="flex justify-center items-center gap-1 max-[1000px]:flex-col px-2 py-3 rounded-md hover:bg-[rgba(0,0,0,0.08)] duration-300">
            <img src="/images/article-icon.svg" alt="" />
            <span className="text-[15px]">Write article</span>
          </button>
        </div>
      </div>
      <SharePost visible={showModel} hide={clickHandler}/>
      {!article?null:!article.length?
        (<div className="w-full bg-white mt-[20px] text-center py-10 rounded-md border-[2px] border-[rgba(0,0,0,0.15)]">
          <p className="text-[rgba(0,0,0,0.7)]">There is no post to see yet</p>
          <img className="mx-auto" src="/images/wired-outline-112-book-morph.gif"/>
        </div>)
        :(<Posts/>)}
    </div>
  )
}

export default MainSide
