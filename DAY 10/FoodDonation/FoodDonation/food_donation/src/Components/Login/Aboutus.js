import React from 'react';
import "./Aboutus.css";
import Navbar from './navbar';
import Footer from './Footer';
const Aboutus = () => {
  return (
    <> 
    <Navbar/>
      <div className="about-container">
         <header className="about-head">
           <h3 className="about-head-info">
             Welcome <sapn className="about-head-span">To The </sapn>Food Offerings!!!
           </h3>
         </header>
         <main className="about-main">
             <p className="about-para1">
             Thank you for taking the time to explore our Food Donation Program.
             </p>
             <p className="about-para2">
             Here at The Food Share Initiative, our mission is to provide you with the confidence and inspiration to contribute to a world with reduced food insecurity.            
             </p>
             <p className="about-para3">
             On this platform, you will find hassle-free, easy-to-follow guides on how to donate food effectively, from sourcing surplus food to delivering it to those in need.             
             </p>
             <p className="about-para4">
             In addition, we offer over 100 donation guides covering a wide variety of food items, ensuring that our donation process is comprehensive, straightforward, and accessible to all, regardless of the scale of your contribution.             
             </p>
             <p className="about-para5">
             The 'Kitchen and Giving' section is updated regularly and features innovative ways to source and prepare food for donation, along with valuable advice on optimizing your contribution.             
             </p>
             <p className="about-para6">
             Our guides on Handling Food Surplus, Managing Food Quality, and Leveraging Food Distribution Networks are valuable resources to help you address challenges as they arise.             
             </p>
             <p className="about-para7">
             If you've reviewed our guides and still have unanswered questions or require guidance along the way, our 'Ask a Question' feature is here to assist. We are dedicated to addressing any queries or concerns you may have.
             </p>
             <p className="about-para8">
             Everyone should have the opportunity to contribute to food donation, whether it's sharing a meal with a neighbor in need or participating in a community food drive.             
             </p>
             <p className="about-para9">
             We hope you find our platform valuable and look forward to supporting you in your journey to make a positive impact through food donation!
             </p>
             
         </main>
      </div>
      <Footer/>
    </>
  )

};

export default Aboutus;