import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./bookingPage.css";

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [serviceType, setServiceType] = useState(location.state?.serviceType || "");
  const [area, setArea] = useState("");
  const [problem, setProblem] = useState("");
  const [amount, setAmount] = useState(0);

  const calculateAmount = () => {
    if (serviceType === "Cleaning") {
      setAmount(area * 10);
    } else if (serviceType === "Electrician") {
      setAmount(problem.length * 20);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Confirmed! Amount: ₹${amount}`);
    navigate("/");
  };

  return (
    <div className="booking-container">
      <h1>Book Your Service</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Contact Number" value={contact} onChange={(e) => setContact(e.target.value)} required />
        <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        
        <div className="service-options">
          <button type="button" className={serviceType === "Cleaning" ? "active" : ""} onClick={() => setServiceType("Cleaning")}>Book House Cleaning</button>
          <button type="button" className={serviceType === "Electrician" ? "active" : ""} onClick={() => setServiceType("Electrician")}>Book Electrician</button>
        </div>

        {serviceType === "Cleaning" && (
          <input type="number" placeholder="Enter area in sq. ft." value={area} onChange={(e) => setArea(e.target.value)} onBlur={calculateAmount} required />
        )}

        {serviceType === "Electrician" && (
          <textarea placeholder="Describe the issue" value={problem} onChange={(e) => setProblem(e.target.value)} onBlur={calculateAmount} required />
        )}

        <h3>Total Amount: ₹{amount}</h3>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingPage;
