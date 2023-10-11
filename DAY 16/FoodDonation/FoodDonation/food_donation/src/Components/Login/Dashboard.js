import React, { useState } from 'react';
import './Dashboard.css'; 
import Navbar from './navbar'; 
import Footer from './Footer';

const Dashboard = () => {
  const [donations, setDonations] = useState([
    { id: 1, foodItem: 'Canned Soup', quantity: 10 },
    { id: 2, foodItem: 'Rice', quantity: 5 },
    { id: 3, foodItem: 'Pasta', quantity: 8 },
  ]);

  return (
    <>
    <Navbar />
    <div className="dashboard-container">
    <div className="dashboard-content">
    <h1 className="dashboard-heading">Food Donation Dashboard</h1>
    <div className="dashboard-table">
    <table>
    <thead>
    <tr>
    <th>Food Item</th>
    <th>Quantity</th>
    </tr>
    </thead>
    <tbody>
    {donations.map((donation) => (
      <tr key={donation.id}>
      <td>{donation.foodItem}</td>
      <td>{donation.quantity}</td>
      </tr>
      ))}
      </tbody>
      </table>
      </div>
      </div>
      </div>
      <Footer />
      </>
      );
    };

export default Dashboard;
