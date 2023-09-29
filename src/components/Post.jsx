import ReactPlayer from "react-player";

const Post = ({ data }) => {
    return (
    <div className="mt-2 bg-white border-[2px] border-[rgba(0,0,0,0.15)] rounded-md">
        <div className="flex justify-between items-center p-4">
            <a className="flex items-center">
                <img className='w-[48px] h-[48px] rounded-full mr-3 cursor-pointer' src={data.actor.image}/>
                <div>
                    <p className="text-[14px] font-bold cursor-pointer">{data.actor.title}</p>
                    <p className="text-[12px] text-[rgba(0,0,0,0.6)]">{data.actor.description}</p>
                    <p className="text-[12px] text-[rgba(0,0,0,0.6)]">{data.actor.date.toDate().toLocaleDateString()}</p>
                </div>
            </a>
            <button><img src="/images/ellipsis.svg"/></button>
        </div>
        <div className="mt-5 px-6 pb-4 ">
            <p>{data.description}</p>
        </div>
        {data.shareImg || data.video?
        (<div className=" w-full mx-auto">
            <a>{data.video?(<ReactPlayer width="100%" url={data.video}/>):data.shareImg?(<img className=" object-cover bg-center" loading="lazy" src={data.shareImg}/>):null}</a>
        </div>):null}
        <div style={!data.shareImg && !data.video?{marginTop:'8px'}:{marginTop:'24px'}} className="px-4 items-center">
            <div className="border-b-[1px] border-[rgb(233,229,223)] flex gap-4 items-center justify-start pb-2">
                <li className="ml-2">
                    <button className="flex gap-[2px]">
                        <img src="https://static-exp1.licdn.com/sc/h/2uxqgankkcxm505qn812vqyss" alt="" />
                        <img src="https://static-exp1.licdn.com/sc/h/f58e354mjsjpdd67eq51cuh49" alt="" />
                        <span>75</span>
                    </button>
                </li>
                <li>
                    <a className="text-[14px]">{data.comments} comments</a>
                </li>
                <li>
                    <a className="text-[14px]">1 share</a>
                </li>
            </div>
        </div>
        <div className="flex justify-between py-1 items-center px-2">
            <button className="w-[25%] flex py-4 items-center gap-2 justify-center hover:bg-[rgba(0,0,0,0.08)] duration-300 rounded-md max-[500px]:flex-col max-[500px]:gap-0">
                <img src="/images/like-icon.svg" alt="" />
                <span>Like</span>
            </button>
            <button className="w-[25%] flex py-4 items-center gap-2 justify-center hover:bg-[rgba(0,0,0,0.08)] duration-300 rounded-md max-[500px]:flex-col">
                <img src="/images/comment-icon.svg" alt="" />
                <span>Comment</span>
            </button>
            <button className="w-[25%] flex py-4 items-center gap-2 justify-center hover:bg-[rgba(0,0,0,0.08)] duration-300 rounded-md max-[500px]:flex-col">
                <img src="/images/share-icon.svg" alt="" />
                <span>Share</span>
            </button>
            <button className="w-[25%] flex py-4 items-center gap-2 justify-center hover:bg-[rgba(0,0,0,0.08)] duration-300 rounded-md max-[500px]:flex-col">
                <img src="/images/send-icon.svg" alt="" />
                <span>Send</span>
            </button>
        </div>
    </div>
    );
}

export default Post;
