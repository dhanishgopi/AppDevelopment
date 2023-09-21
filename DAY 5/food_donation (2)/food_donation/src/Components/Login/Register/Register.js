import React, { useState } from 'react';
import "./Register.css";
import { useNavigate } from 'react-router-dom';

function Register() {
  const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [MobileNo, setMobileNo] = useState('');
  const [Address, setAddress] = useState('');
  const [Password, setPassword] = useState('');
  const [ConformPassword, setConformPassword] = useState('');
  const nav1 = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = [];

    if (!Firstname) {
      errors.push('First Name is required');
    }

    if (!Lastname) {
      errors.push('Last Name is required');
    }

    if (!MobileNo) {
      errors.push('Mobile No is required');
    }

    if (!Address) {
      errors.push('Address is required');
    }

    if (!Password) {
      errors.push('Password is required');
    }

    if (Password !== ConformPassword) {
      errors.push('Passwords do not match');
    }

    if (errors.length > 0) {
      alert(errors.join('\n'));
    } else {

      alert('Form submitted successfully!');
    }
    nav1("/login");
  }

  return (
    <div className="bobb">
      <div className="register-container">
        <h1>Create a new account</h1>
        <form onSubmit={handleSubmit}>
          <label>
            First Name
            <input type="text" value={Firstname} onChange={(e) => setFirstname(e.target.value)} name="Firstname" required />
          </label>
          <label>
            Last Name
            <input type="text" value={Lastname} onChange={(e) => setLastname(e.target.value)} name="Lastname" required />
          </label>
          <label>
            Mobile No
            <input type="text" value={MobileNo} onChange={(e) => setMobileNo(e.target.value)} name="MobileNo" required />
          </label>
          <label>
            Address
            <input type="text" value={Address} onChange={(e) => setAddress(e.target.value)} name="Address" required />
          </label>
          <label>
            Password
            <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} name="Password" required />
          </label>
          <label>
            Confirm Password
            <input type="password" value={ConformPassword} onChange={(e) => setConformPassword(e.target.value)} name="ConformPassword" required />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Register;