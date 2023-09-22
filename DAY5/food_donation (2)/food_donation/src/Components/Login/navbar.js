import React from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';


function Navbar() {
  const nav = useNavigate();

  const handleClick = (e) => {
    nav("/")
  }
  return (
    <div>
      <nav className="navbar">
      
      <div className="logo">
      <h3 className="logo-head" onClick={handleClick}>OFFERINGS</h3>
      </div>
      
        <ul className="nav-links">
          <Link to="/about">

          <li>About Us</li>
          </Link>
          <Link to="">
            
          <li>Contact Us</li>
          </Link>
          
          <li>Community</li>
          <Link to="/login">

            
          <li>Login</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
