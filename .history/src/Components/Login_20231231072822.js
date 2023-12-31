import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const Login = () => {
  return (
    <div>
      
        <GoogleLogin
          onSuccess={credentialResponse => {
          const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
          console.log(credentialResponseDecoded);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />;
    </div>
  )
}

export default Login