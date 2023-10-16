import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Navbar from '../navbar';
import "./List.css";
import Footer from '../Footer';




function Reduxlist() {
  const [foodDetails, setFoodDetails] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [emailLink, setEmailLink] = useState('');

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
    axios.get('http://localhost:8080/fooddetails/getfooddetails')
      .then((response) => {
        setFoodDetails(response.data);
      })
      .catch((error) => {
        console.error('Error fetching food details:', error);
      });
  }, []);

  const handleRequestFood = (foodId, top, left) => {
    const selected = foodDetails.find(food => food.id === foodId);
    setSelectedFood(selected);
    setPopupPosition({ top, left });

    const subject = 'Food Donation Request';
    const body = `I am interested in your food donation offer:\n\nFood Type: ${selected.foodType}\nQuantity: ${selected.quantity} kg\nPreferred Pickup Time: ${selected.pickupTime}\nAddress: ${selected.address}\n\nPlease reply to discuss further details.`;
    setEmailLink(`mailto:${selected.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  const closeModal = () => {
    setSelectedFood(null);
  };

  return (
    <>
    <Navbar/>
    <div className='bol'>
      <div className="food-details-list-container">
        <h1>Food Donation Details</h1>
        <table>
          <thead>
            <tr>
              <th>Food Type</th>
              <th>Quantity (kg)</th>
              <th>Preferred Pickup Time</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {foodDetails.map((food, index) => (
              <tr key={index}>
                <td>{food.foodType}</td>
                <td>{food.quantity}</td>
                <td>{food.pickupTime}</td>
                <td>{food.address}</td>
                <td>
                  <button
                    onClick={(e) => handleRequestFood(food.id, e.clientY, e.clientX)}
                  >
                    Request Food
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedFood && (
        <div
          className="food-details-popup"
          style={{ top: popupPosition.top, left: popupPosition.left }}
        >
          <h2>Food Details</h2>
          <p>Food Type: {selectedFood.foodType}</p>
          <p>Quantity (kg): {selectedFood.quantity}</p>
          <p>Mobile No: {selectedFood.mobileNo}</p>
          <p>Preferred Pickup Time: {selectedFood.pickupTime}</p>
          <p>Address: {selectedFood.address}</p>
          <p>Email: <a href={emailLink}>{selectedFood.email}</a></p>
          <p>BestContactTime: {selectedFood.bestContactTime}</p>
          <p>NearestLandmark: {selectedFood.nearestLandmark}</p>
          <p>PreferredContactMethod: {selectedFood.preferredContactMethod}</p>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
      
    </div>
    <Footer/>
    </>
  );
}

export default Reduxlist;