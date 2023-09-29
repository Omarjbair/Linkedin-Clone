import { useSelector } from "react-redux";
import Post from "./Post";
import { useState } from "react";
import { useEffect } from "react";

const Posts = () => {
    const {loading,article} = useSelector((state) => state.article);
    const [showLoader,setShowLoader] = useState(false);
    
    useEffect(() => {
        setShowLoader(true);
        const clear = setTimeout(() => {
            setShowLoader(false)
        },2000)

        return () => {
            clearTimeout(clear);
        }
    },[loading])
    
    const post = article.map((item,idx) => (
        <Post data = {item} key={idx} />
    ));

    return (
    <div className="flex flex-col gap-2">
        {showLoader && <img className="mx-auto w-[60px] my-5" src="images/loader.svg" alt = "loader-icon"/>}
        {post}
    </div>
    );
};

export default Posts;
