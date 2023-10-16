import React from 'react';
import "../Login/ContactUs.css";
import Navbar from './navbar';
import Footer from './Footer';
function ContactUs () {
  return (
    <>
    <Navbar/>
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>
        If you have any questions or need assistance, feel free to get in touch with us.
      </p>
      <div className="contact-info">
        <h2>Email</h2>
        <p>727821tuit017@gmail.com</p>
      </div>
      <div className="contact-info">
        <h2>Phone</h2>
        <p>+91 2345675678</p>
      </div>
      <div className="contact-info">
        <h2>Address</h2>
        <p>Anna Nagar Cross</p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
