// src/components/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
     
    navigate('/dashboard');
  };

  return (
    <div className='LoginContainer'>
      <div className='Login'>
        <h1>LOGIN</h1> 
        <form onSubmit={handleLogin}>
          <div className="input-container">
            <label className='lbl' htmlFor="username">Username</label>
            <input type="text" id="username" placeholder='Enter your username' />
          </div>
          <div className="input-container">
            <label className='lbl' htmlFor="password">Password</label>
            <input type="password" id="password" placeholder='Enter your password' />
          </div>
          <div className='forgot-password'>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <div className='btn'>
            <button type="submit">LOGIN</button>
            <button type="button" onClick={() => navigate('/signup')}>SIGN UP</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
