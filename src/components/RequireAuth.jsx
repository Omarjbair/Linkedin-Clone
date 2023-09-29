import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RequireAuth = ({children}) => {
    
    const {userInfo} = useSelector((state) => state.auth);
    const navigate = useNavigate();
    useEffect(()=> {
        if(!userInfo) 
            navigate("/");
        
    },[userInfo,navigate]);
    
    return (
    <>
        {children}
    </>
    );
};

export default RequireAuth;