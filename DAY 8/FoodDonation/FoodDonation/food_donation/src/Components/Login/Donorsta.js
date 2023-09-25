import React, { useState } from 'react';
import './Donorsta.css';
import Footer from './Footer';
import Fs from './Fs';

function Donorsta() {
  const [foodType, setFoodType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!foodType || !address) {
      alert('Please fill out all fields.');
      return;
    }

  };

  return (
    <>
      <Fs />
      <div className="donorsta-container">
        <div className="donorsta-form">
          <h1 className="donorsta-heading">Register for Food Donation</h1>
          <form onSubmit={handleSubmit} className="donorsta-form">
            <div className="form-group">
              <label htmlFor="foodType">Type of Food</label>
              <input
                type="text"
                id="foodType"
                value={foodType}
                onChange={(e) => setFoodType(e.target.value)}
                required
              />
            </div>
           
           
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Donorsta;
