import { useSelector } from "react-redux";

const LeftSide = () => {
  const {userInfo} = useSelector((state) => state.auth);

  return (
    <div className="w-[23%] max-[960px]:w-[98%]">
      <div className="bg-white rounded-lg overflow-y-hidden border-[2px] border-[rgba(0,0,0,0.15)]">
        <div className="hover:bg-[rgba(0,0,0,0.08)] duration-300">
          <div className="w-full relative h-[60px]" >
            <img className='object-cover h-full w-full' src='/images/card-bg.svg'/>
            <div className="bg-white rounded-full p-2 absolute top-[50%] left-[50%] translate-x-[-50%]"><img className='object-cover w-13' src="/images/photo.svg" /></div>
          </div>
          <div className="text-center pb-5  border-b-[1px] border-[rgba(0,0,0,0.15)]">
            <h1 className="mt-[50px] font-bold text-[rgba(0,0,0,0.9)] px-2">Welcome, {userInfo ? userInfo.displayName : "there!"}</h1>
            <a className="text-[13px] text-[#0a66c2] cursor-pointer">Add a Photo</a>
          </div>
        </div>
        <div className="flex justify-between items-center py-4 px-4 border-b-[1px] border-[rgba(0,0,0,0.15)] hover:bg-[rgba(0,0,0,0.08)] duration-300">
          <div>
            <p className="text-[13px] text-[rgba(0,0,0,0.6)]">Connections</p>
            <p className="text-[13px] font-bold text-[rgba(0,0,0,1)]">Grow your network</p>
          </div>
          <img className='text-[rgba(0,0,0,1)] cursor-pointer' src="images/widget-icon.svg"/>
        </div>
        <div className="flex px-4 py-3 hover:bg-[rgba(0,0,0,0.08)] duration-300">
          <img className='text-[rgba(0,0,0,0.6)]' src="/images/item-icon.svg"/>
          <p className="pl-1 font-bold text-[14px]">My Items</p>
        </div>
      </div>
      <div className="mt-[10px] bg-white rounded-lg overflow-y-hidden border-[2px] border-[rgba(0,0,0,0.15)]">
        <div className="flex justify-between items-center border-b-[1px] border-[rgba(0,0,0,0.15)] px-4 py-2 hover:bg-[rgba(0,0,0,0.08)] duration-300">
          <div className="flex flex-col gap-[2px]">
            <a className="text-[13px] cursor-pointer font-bold hover:text-[#0a66c2] duration-300">Groups</a>
            <a className="text-[13px] cursor-pointer font-bold hover:text-[#0a66c2] duration-300">Events</a>
            <a className="text-[13px] cursor-pointer font-bold hover:text-[#0a66c2] duration-300">Follows Hashtags</a>
          </div>
          <img className='cursor-pointer' src="images/plus-icon.svg"/>
        </div>
        <div className="px-4 py-2 hover:bg-[rgba(0,0,0,0.08)] duration-300">
          <p className="text-[13px] text-[rgba(0,0,0,0.6)] font-bold">Discover more</p>
        </div>
      </div>
    </div>
  )
}

export default LeftSide;
