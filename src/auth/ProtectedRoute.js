import React from 'react'
import {Navigate, Outlet} from "react-router-dom"
import { useGetUserInfo } from '../Hooks/useGetUserInfo';

const ProtectedRoute = () => {
   /* Getting isAuth from useGetUserInfo custom hook */
  const { isAuth }=useGetUserInfo();
  if(!isAuth){
    return <Navigate to="/Login"/>;
 }
 else{
  return(<Outlet/>)
 }

}

export default ProtectedRoute