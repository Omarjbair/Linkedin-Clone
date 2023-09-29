

const RightSide = () => {
    return (
        <div className="flex flex-col gap-4 w-[30%] max-[960px]:w-[98%]"> 
            <div className="bg-white rounded-md border-[2px] border-[rgba(0,0,0,0.15)] px-3 py-2">
                <div className="flex justify-between mb-2">
                    <h1 className="text-[rgba((0,0,0,0.6)] text-[15px]">Add to your feed</h1>
                    <img src="/images/feed-icon.svg"/>
                </div>
                <div className="flex items-center my-4 gap-2">
                    <div className="w-[50px]">
                        <img src="https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs"/>
                    </div>
                    <div className="flex flex-col justify-center">
                        <span>#Linkdein</span>
                        <button className="border-[3px] rounded-full p-1 text-[13px] text-[rgba(0,0,0,0.6)] border-[rgba(0,0,0,0.8)]">Follow</button>
                    </div>
                </div>
                <div className="flex items-center my-4 gap-2">
                    <div className="w-[50px]">
                        <img src="https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs"/>
                    </div>
                    <div className="flex flex-col justify-center">
                        <span>#Video</span>
                        <button className="border-[3px] px-4 rounded-full p-1 text-[13px] text-[rgba(0,0,0,0.6)] border-[rgba(0,0,0,0.8)]">Follow</button>
                    </div>
                </div>
                <a className="flex text-[rgb(10,102,194)] text-[15px] cursor-pointer"><span>View all recommendations</span><img src="/images/right-icon.svg"/></a>
            </div>
            <div className="bg-white rounded-md border-[2px] border-[rgba(0,0,0,0.15)] p-3">
                <img className="w-full rounded-md" src="/images/banner-image.jpg" />
            </div>
        </div>
    );
};

export default RightSide;
