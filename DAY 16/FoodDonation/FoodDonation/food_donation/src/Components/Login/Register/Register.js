import React, { useState } from 'react';
import "./Register.css";
import { Link, useNavigate } from 'react-router-dom';



function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!name.trim()) {
      validationErrors.name = "Username is required";
    }
    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is not valid";
    }
    if(!PhoneNumber.trim()){
      validationErrors.PhoneNumber = "PhoneNumber is required";
    }
    else if(PhoneNumber.length < 10 || PhoneNumber.length > 10)
    {
      validationErrors.PhoneNumber = "Enter Valid PhoneNumber";
    }
    if (!password.trim()) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }
    if (confirmPassword !== password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      
      nav("/login");
    }
  };
  const handlechange = (e) => {
                e.preventDefault();
                nav("/login")
  }
  const imageStyle = {
    width: '50px', 
    height: '50px', 
    border: '1px solid #ccc', 
    borderRadius: '50%' 
  };
  return (
    <div className='sigup_body'>
      <form className='signup_form'>
      <span>
   <span className='sig_logos'> </span>
    </span>
      <h2 className='header'>Signup</h2>
        <div>
          <input
            type="text"
            className='input'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Username"
          />
          <h5 className="error-message">{errors.name && <span>{errors.name}</span>}</h5>
        </div>
        <div>
          <input
            type="email"
            className='input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <h5 className="error-message">{errors.email && <span>{errors.email}</span>}</h5>
        </div>
        <div>
          <input
            type="tel"
            className='input'
            value={PhoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="PhoneNumber"
          />
          <h5 className="error-message">{errors.PhoneNumber && <span>{errors.PhoneNumber}</span>}</h5>
        </div>
        <div>
          <input
            type="password"
            className='input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <h5 className="error-message">{errors.password && <span>{errors.password}</span>}</h5>
        </div>
        <div>
          <input
            type="password"
            className='input'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
          <h5 className="error-message">{errors.confirmPassword && <span>{errors.confirmPassword}</span>}</h5>
        </div>
        <button onClick={handleSubmit} className='signup_button' >Register</button>
        <span className="sin_or">or</span>
        <span className='sign_to'>Already have account?</span>
        <sapn onClick={handlechange} className="signin_to">sign in!</sapn>
        <Link to="/registerdo">
        Donar Register
        </Link>
      </form>
    </div>
  );
}

export default Register;