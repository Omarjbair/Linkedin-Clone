import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();

    return (
    <div className="w-full h-full bg-[#f5f5f5] flex flex-col justify-center items-center">
        <img className="w-[500px]" src="/images/404_Error.gif"/>
        <h1 className="text-[40px] mb-5 text-[#0a66c2] font-bold">Page Not Found</h1>
        <button onClick={() => navigate("/",{replace:true})} className="p-4 bg-[#0a66c2] rounded-sm text-white">Return to Home</button>
    </div>
    );
};

export default Error
