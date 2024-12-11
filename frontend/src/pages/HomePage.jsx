import React from "react";
import { useNavigate } from "react-router-dom";
import "./homePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome to Service Management</h1>
        <p>Your trusted partner for expert electricians and professional house cleaning services.</p>
      </div>
      <div className="service-cards">
        <div className="service-card">
          <img src={require("./elec.jpg")} alt="Electrician Service" className="service-image" />
          <h2>Electrician Services</h2>
          <p>Expert solutions for all your electrical needs. Reliable and safe service at your doorstep.</p>
          <button className="service-button" onClick={() => navigate("/electrician-booking")}>
            Book Electrician
          </button>
        </div>
        <div className="service-card">
          <img src={require("./clean.jpg")} alt="House Cleaning Service" className="service-image" />
          <h2>House Cleaning Services</h2>
          <p>Professional cleaning to make your home spotless and welcoming.</p>
          <button className="service-button" onClick={() => navigate("/house-cleaning-booking")}>
            Book Cleaning
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
