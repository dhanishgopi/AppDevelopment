import React from "react";
import "../Home.css";
import "../navbar";
import { Link } from "react-router-dom";
import Navbar from "../navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import "../Reduxlist.css";

import { useSelector } from 'react-redux';

import "../Register/Register.css";
import Fs from "../Fs";
function Reduxlist() {

    const featuredProducts = useSelector((state) => state.featuredProducts.products);
  return (
    <div>
      <Fs/>
   <Sidebar/>
    <div className='items'>
    <h2 className="items-head">FOOD AVAILABLE</h2>
    <div className="itm-list">
      {featuredProducts.map((product) => (
        <div className="itm" key={product.id}>
          <img src={product.imageUrl} alt={product.name} className="st" />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
    </div>
    <Footer/>
    
    </div>
  )
}

export default Reduxlist