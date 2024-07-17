// src/components/Signup.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  let navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Add sign-up logic here
    navigate('/dashboard');
  };

  return (
    <div className='SignupContainer'>
      <div className='Signup'>
        <h1>SIGN UP</h1>
        <form onSubmit={handleSignup}>
          <div className="input-container">
            <label className='lbl' htmlFor="username">Username</label>
            <input type="text" id="username" placeholder='Enter your username' />
          </div>
          <div className="input-container">
            <label className='lbl' htmlFor="password">Password</label>
            <input type="password" id="password" placeholder='Enter your password' />
          </div>
          <div className="input-container">
            <label className='lbl' htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" placeholder='Confirm your password' />
          </div>
          <div className='forgot-password'>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <div className='btn'>
            <button type="submit">SIGN UP</button>
            <button type="button" onClick={() => navigate('/')}>LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
