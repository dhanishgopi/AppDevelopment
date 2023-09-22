import React, { useState } from 'react';
import "./Dashboard.css";
import Navbar from './navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
const Dashboard = () => {
  const [donations, setDonations] = useState([
    { id: 1, foodItem: 'Dosa', quantity: 19 },
    { id: 2, foodItem: 'Idly', quantity: 11 },
    { id: 3, foodItem: 'Dhal', quantity: 9 },
    { id: 4, foodItem: 'noodles', quantity: 17},
  ]);

  return (
    <> 
    <Navbar/>
    <Sidebar/>
    <div className='hh'>
    
    <h1>Food Offering Dashboard</h1>
    <table>
    <thead>
    <tr>
    <th>Food Item</th>
    <th>Quantity</th>
    </tr>
    </thead>
    <tbody>
    {donations.map(donation => (
      <tr key={donation.id}>
      <td>{donation.foodItem}</td>
      <td>{donation.quantity}</td>
      </tr>
      ))}
      </tbody>
      </table>
      <Footer/>
      </div>
      </>
  );
};

export default Dashboard;
