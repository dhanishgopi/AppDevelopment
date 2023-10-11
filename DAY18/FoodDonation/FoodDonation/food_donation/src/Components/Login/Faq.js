import React, { useState } from 'react';
import "./Faq.css";
import Navbar from './navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
const FAQ = () => {

  return (
    <>
    <Navbar/>

    <h1>Food Offerings</h1>
  
  <div class="faq">
    <input class="question" type="checkbox" id="question1"/>
    <label for="question1"> How can I donate food?</label>
    <div class="answer">You can donate food by contacting local food banks, shelters, or nonprofit organizations in your area. They often have guidelines on what types of food they accept and where to drop off donations.</div>
  </div>
  
  <div class="faq">
    <input class="question" type="checkbox" id="question2"/>
    <label for="question2"> Can I donate homemade food?</label>
    <div class="answer">Some organizations may accept homemade food, but it's best to check with them first. If donating homemade food, ensure it's properly packaged and labeled with ingredients and preparation date.</div>
  </div>
  
  <div class="faq">
    <input class="question" type="checkbox" id="question3"/>
    <label for="question3">How can I volunteer to help with food donation efforts?</label>
    <div class="answer">Many food banks and shelters rely on volunteers to sort, pack, and distribute food. Contact local organizations to inquire about volunteer opportunities.</div>
  </div>
              <Footer/>
              </>
              );
            };

export default FAQ;
