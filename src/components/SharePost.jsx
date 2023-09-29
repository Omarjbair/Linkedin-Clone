import { useState } from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { Fragment } from "react";
import { Timestamp } from 'firebase/firestore'
import { useDispatch } from "react-redux";
import { sharePost } from "../store/articleSlice";

const SharePost = ({visible,hide}) => {
    const {userInfo} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [postText,setPostText] = useState("");
    const [assets,setAssets] = useState({
        photo : false,
        video : false, 
    });
    const [postImage,setPostImage] = useState("");
    const [videoLink,setVideoLink] = useState("");

    const postBtnStyles = {
        cursor: "pointer",
        background : "#0a66c2",
        color: "white",
    };

    const reset = () => {
        setVideoLink("");
        setPostImage("");
        setAssets({
            photo : false,
            video : false,
        });
        setPostText("");
        hide();
    };

    const imageChangeHandler =(e) => {
        const image = e.target.files[0];
        if(image === "" || image == undefined){
            alert(`Not an image , the file if ${typeof image}`);
            return;
        }
        else{
            setPostImage(image);
        }
    };

    const uploadPostHandler = (e) => {
        e.preventDefault();
        const t = new Date(Timestamp.now().seconds);
        console.log(t);
        if(e.target !== e.currentTarget)
            return;
        const payload = {
            image: postImage,
            video: videoLink,
            user : userInfo,
            description: postText,
            timeStamp : Timestamp.now(),
        };
        reset();
        dispatch(sharePost(payload));
    };

    return (
        <Fragment>
            <div onClick={reset} className="model w-full h-full top-[50%] left-[50%] translate-x-[-50%]  z-[1400] translate-y-[-50%] bg-[rgba(0,0,0,0.8)] fixed " style={{display: visible?'block':'none'}}></div>
            <div className ='bg-white rounded-md py-4 fixed w-[40%] max-xl:w-[60%] max-lg:w-[70%]  z-[1500] max-md:w-[80%] max-sm:w-[90%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'  style={{display: visible?'block':'none'}}>
                <div className="flex justify-between items-center border-b-[1px] border-[rgba(0,0,0,0.15)] px-4 pb-4">
                    <h2>Create new post</h2>
                    <div onClick={reset} className="cursor-pointer p-2 hover:bg-[rgba(0,0,0,0.08)] rounded-full duration-300"><img src="/images/close-icon.svg"/></div>
                </div>
                <div className="flex justify-start items-center gap-4 px-8 py-4">
                    <img className= 'rounded-full w-12' src= {userInfo?.photo?userInfo.photo:"/images/user.svg"} />
                    <p className="font-semibold">{userInfo?userInfo?.displayName:'user'}</p>
                </div>
                <div className="px-8">
                    <textarea value={postText} onChange={(e) => setPostText(e.target.value)} className=" outline-none resize-none min-h-[100px] text-[16px] leading-1 w-full py-4" placeholder="What do you want to talk about?" autoFocus={true}/>
                    {assets.photo?
                        (<div>
                            <input className='hidden ' type="file" id='file'  name="image" onChange={imageChangeHandler}/>
                            <p className="text-center cursor-pointer mb-12">
                                <label className=" cursor-pointer" htmlFor="file">Select an image to share or drag and drop it</label>
                            </p>
                        </div>)
                        :assets.video?
                        (<div className="flex justify-center items-center">
                            <input className="rounded-sm h-[30px] w-[80%] mb-12 border-[2px] py-2 px-3 placeholder:text-[15px] border-black" type="text" value={videoLink} onChange={(e) => setVideoLink(e.target.value)} placeholder="Please input a video link"></input>
                        </div>):null}
                        {postImage && assets.photo?(<div className="w-full "><img className="object-cover bg-center max-h-[350px] w-full" src={URL.createObjectURL(postImage)}/></div>):null}
                        {videoLink && assets.video?(<ReactPlayer width="100%" url={videoLink} />):null}
                </div>
                <div className="pr-8 pl-4 flex justify-between items-center mt-5">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <img className="hover:bg-[rgba(0,0,0,0.08)] cursor-pointer p-2 rounded-full duration-300" onClick={() => setAssets({photo:true,video:false})} src="/images/share-image.svg"/>
                            <img className="hover:bg-[rgba(0,0,0,0.08)] cursor-pointer p-2 rounded-full duration-300" onClick={() => setAssets({photo:false,video:true})} src="/images/share-video.svg"/>
                        </div>
                        <div className="flex items-center gap-2 pl-5 border-l-[1px] border-[rgba(0,0,0,0.15)] ">
                            <div className="hover:bg-[rgba(0,0,0,0.08)] flex gap-2 px-3 py-2 rounded-full duration-300 cursor-pointer">
                                <img src="/images/share-comment.svg"/>
                                <p className="text-[15px] text-[rgba(0,0,0,0.6)]">Anyone</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={uploadPostHandler} disabled={!postText} style={postImage||postText||videoLink?postBtnStyles:null}  className='px-4 py-1 cursor-not-allowed bg-[rgba(0,0,0,0.1)] text-[rgba(0,0,0,0.25)] rounded-full duration-300'>Post</button>
                </div>
            </div>
        </Fragment>
    );
};

export default SharePost;
