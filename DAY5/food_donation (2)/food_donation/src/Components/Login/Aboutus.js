import React from "react";
import "./Aboutus.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./navbar";

function  Aboutus() {
  return (
    <div className="abou">
    <Navbar/>
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
         <Link to="/">
         <div className="logo1">OFFERINGS</div>

          </Link> 
          <p className="text-wrapper">
            Welcome to Offerings, a platform dedicated to reducing food waste and addressing hunger in our
            communities.
          </p>
          <div className="div">Our Mission</div>
          <div className="overlap">
            <p className="at-mealmiracle-we">
              At&nbsp;&nbsp;Offerings, we believe that no one should go to bed hungry. Our mission is to connect
              surplus food from restaurants, cafes, and individuals with local shelters, food banks, and those in need.
              By leveraging technology, we aim to make the process of food donation and distribution seamless and
              efficient.
            </p>
            <div className="text-wrapper-2">What We Do</div>
          </div>
          <p className="facilitating-food">
            <span className="span">
              Facilitating Food Donations:
              <br />
            </span>
            <span className="text-wrapper-3">
              We provide a user-friendly platform for restaurants, cafes, and individuals to easily donate excess food
              that might otherwise go to waste. Our app connects donors with local organizations that can distribute the
              food to those who need it most.
            </span>
          </p>
          <div className="text-wrapper-4">About US</div>
          <p className="empowering">
            <span className="span">
              Empowering Communities:
              <br />
            </span>
            <span className="text-wrapper-3">
              We believe that local communities play a crucial role in addressing food insecurity. By partnering with
              local businesses and volunteers, we create a network of support that ensures no one in our community goes
              hungry.
              <br />
            </span>
          </p>
          <p className="our-team-behind">
            <span className="span">
              Our Team
              <br />
            </span>
            <span className="text-wrapper-3">
              Behind Offerings is a passionate team dedicated to making a positive impact. We come from diverse
              backgrounds, but we share a common goal: to create a world where everyone has access to nutritious meals.
            </span>
          </p>
          <p className="contact-us-have">
            <span className="span">
              Contact Us
              <br />
            </span>
            <span className="text-wrapper-3">
              Have questions or suggestions? We&#39;d love to hear from you! Reach out to us at
              [727821tuit017@skct.edu.in] or visit our [aaa.yyy] page for more information.
              <br />
            </span>
          </p>
          <p className="p">Thank You</p>
        </div>
      </div>
      <Footer/>

    </div>
  );
};
export default Aboutus;