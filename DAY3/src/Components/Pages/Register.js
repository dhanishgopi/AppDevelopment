import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [MobileNo, setMobileNo] = useState('');
  const [Address, setAddress] = useState('');
  const [Password, setPassword] = useState('');
  const [ConformPassword, setConformPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="register-container">
      <h1>REGISTER</h1>
      <form onSubmit={handleSubmit}>
        <label>
          FIRST NAME
          <input type="text" value={Firstname} onChange={(e) => setFirstname(e.target.value)} name="Firstname" required />
        </label>
        <label>
          LAST NAME
          <input type="text" value={Lastname} onChange={(e) => setLastname(e.target.value)} name="Lastname" required />
        </label>
        <label>
          MOBILE NO
          <input type="text" value={MobileNo} onChange={(e) => setMobileNo(e.target.value)} name="MobileNo" required />
        </label>
        <label>
          ADDRESS
          <input type="text" value={Address} onChange={(e) => setAddress(e.target.value)} name="Address" required />
        </label>
        <label>
          PASSWORD
          <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} name="Password" required />
        </label>
        <label>
          CONFIRM PASSWORD
          <input type="password" value={ConformPassword} onChange={(e) => setConformPassword(e.target.value)} name="ConformPassword" required />
        </label>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  )
}

export default Register;