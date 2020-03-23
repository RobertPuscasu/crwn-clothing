import * as React from 'react';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import './style.css';

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <Login />
    <Signup />
  </div>
);

export default SignInAndSignUp;
