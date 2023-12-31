import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
  return (
    <div>
      <h1>Login using Google</h1>
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />;
    </div>
  )
}

export default Login