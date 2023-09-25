import React, { useEffect } from "react";
import "../Home.css";
import Navbar from "../navbar";
import Footer from "../Footer";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="asdfgg">
      <div className="home-container">
      <section className="hero">
      <div className="hero-content">
      <h1 className="hero-title">Join Us in Creating a Hunger-Free World</h1>
      <p className="hero-subtitle">Every Contribution Counts in the Fight Against Hunger</p>
      <p className="hero-description">
      At FoodOfferings, we believe in the transformative power of food donation. Together, we can make the world a better place—one meal at a time. Whether it's providing meals for a local community or contributing to hunger relief efforts on a global scale, your act of kindness in donating food matters.
      </p>
      </div>
      </section>
      
      <section className="image-gallery">
      <div className="image-card">
      <img
      src="https://images.pexels.com/photos/6347738/pexels-photo-6347738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="DONATION"
      className="cause-image"
      />
      <h2 className="cause-title">Education</h2>
      <p className="cause-description">
      Help the needed people by donating the food.
      </p>
      </div>
      
      <div className="image-card">
      <img
      src="https://images.pexels.com/photos/6347743/pexels-photo-6347743.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="VOLUNTEER"
      className="cause-image"
      />
      <h2 className="cause-title">Healthcare</h2>
      <p className="cause-description">
      Contribute to food donation initiatives to provide for those in need of nourishment.
      </p>
      </div>
      
      
      </section>
      
      
      </div>
      </div>
      
      <Footer />
      </>
  );
}

export default Home;
