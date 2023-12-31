import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (credentialResponse) => {
    const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
    console.log(credentialResponseDecoded);

    // Redirect to the '/' route after successful login
    navigate('/main');
  };

  return (
    <div className="flex justify-center items-center mt-12">
      
        <GoogleLogin
        onSuccess={handleLoginSuccess}
        theme="filled_black"
        text="signup_with"
        shape="circle"
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  )
}

export default Login