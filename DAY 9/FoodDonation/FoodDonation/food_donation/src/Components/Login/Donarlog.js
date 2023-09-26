import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../Login/Login.css"
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length === 0) {
      alert("Enter the email");
      return;
    }
    if (password.length === 0) {
      alert("Enter the Password");
      return;
    }
    
  }

  

  return (
    <div className='unique-login-container'>
      <form className="unique-form" onSubmit={handleSubmit}>
        <h1 className="unique-form-title">DONOR</h1>
        <div className="unique-input-container">
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email" 
            required 
          />
        </div>
        <div className="unique-input-container">
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
            required 
          />
        </div>
        <Link to="/donorsta" style={{textDecoration:"none"}}>
        <button type="submit" className="unique-submit-button">Sign In</button>
        </Link>
        <p className="unique-signup-link">
          Don't have an account?
          <Link to="/registerdo">Sign Up?</Link>
          <Link to="/login">
          NGO Login
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login;