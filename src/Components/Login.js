import React, { useEffect, useState } from 'react'
import GoogleButton from 'react-google-button'
import {signInWithPopup ,onAuthStateChanged} from "firebase/auth"
import { auth,provider } from '../config/firebaseConfig'
import { useNavigate} from "react-router-dom"


const Login = () => {
  const [user,setUser]=useState({});
  const navigate=useNavigate();

   /* SignInwithGoogle */
   
  const signInWithGoogle=async()=>{
    try{
       const results= await signInWithPopup (auth,provider);
       const authInfo={
         userID:results.user.uid,
         name:results.user.displayName,
         profilePhoto:results.user.photoURL,
         isAuth:true
       }
       localStorage.setItem("authUser",JSON.stringify(authInfo||{}));
       navigate("/");
    }
    catch (err){
        console.log(err.message);
    }
  }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser) 
    })
    return ()=>{
      unsubscribe();
    }
  })


  return (
    <div className='w-full h-[80vh] flex flex-col justify-center items-center mx-auto'>
        <h1 className='p-4 text-xl text-gray-700 font-bold'>Login using Google</h1>
         <GoogleButton
         onClick={() => signInWithGoogle() }
         />  
    </div>
  )
}

export default Login