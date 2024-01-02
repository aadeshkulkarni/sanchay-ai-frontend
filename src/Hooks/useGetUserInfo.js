   /* useGetUserInfo custom hook to get local storage items */

export const useGetUserInfo =()=>{
    const { name ,profilePhoto ,userID , isAuth} =JSON.parse(localStorage.getItem("authUser"))||{}
    return { name,profilePhoto,userID, isAuth};
}