import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../Login/Admin.css"
function Admin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username !== 'admin' || password !== 'admin') {
      alert("Invalid username or password");
      return;
    }
    nav("/panel");
  }

  return (
    <div className='bobbb'>
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">ADMIN</p>
        <div className="input-container">
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Enter Username" 
            required 
          />
        </div>
        <div className="input-container">
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter Password" 
            required 
          />
        </div>
        <button type="submit" className="submit">Login</button>
      </form>
    </div>
  )
}

export default Admin;