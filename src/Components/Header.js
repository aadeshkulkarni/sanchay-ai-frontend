import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetUserInfo } from "../Hooks/useGetUserInfo";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

const Header = () => {
  const { isAuth,profilePhoto }=useGetUserInfo();
  const navigate=useNavigate();
  const handleSignOut = async()=>{
    try{
    await signOut(auth);
    localStorage.clear()
    navigate("/login")
    }
    catch(err){
     console.log(err.message);
    }

  }
  return (
    <header className="p-4 shadow-md flex justify-between">
      <Link to="/">
        <h1 className="text-xl text-gray-700 font-bold">Sanchay AI</h1>
      </Link>
      <div className="flex justify-center items-center">
        {/* TODO: Show only if user logged in */}
       
        {isAuth&&
         <>
          <Link className="px-2 font-light" to="/projects">
            Projects
          </Link>
          <div className="bg-slate-200 rounded-full w-[30px] h-[30px] mx-4 cursor-pointer ">
          {/* ProfilePhoto from google login */}
            <img src={profilePhoto} alt="" className=" rounded-full " />
            
          </div>
          <div className=" cursor-pointer">
            {/* Sign Out */}
             <button 
                className="bg-blue-500 text-white font-bold rounded-lg px-4 py-2"
                onClick={()=>handleSignOut()}
                >
                  Sign Out
              </button>
          </div>
          </>
        }

      </div>
    </header>
  );
};

export default Header;
