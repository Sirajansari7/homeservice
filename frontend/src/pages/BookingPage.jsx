import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./bookingPage.css";

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // States to store user input
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [serviceType, setServiceType] = useState(location.state?.serviceType || "");
  const [area, setArea] = useState("");
  const [problem, setProblem] = useState("");

  // Function to calculate amount based on service type
  const calculateAmount = () => {
    if (serviceType === "Cleaning") {
      return area * 10;  // Example calculation for cleaning (₹10 per sq. ft.)
    } else if (serviceType === "Electrician") {
      return problem.length * 20;  // Example calculation for electrician (₹20 per character of problem description)
    }
    return 0;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      name,
      contact,
      address,
      serviceType,
      area: serviceType === "Cleaning" ? area : undefined,
      problem: serviceType === "Electrician" ? problem : undefined,
      amount: calculateAmount(), // Calculate amount before sending
    };

    // Debug: Check what data is being sent
    console.log("Booking Data: ", bookingData);

    // Send the data to the backend (PHP API)
    fetch("http://localhost/siraj/homeservice/service-backend/bookService.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.message) {
        alert(data.message); // Booking success
        navigate("/"); // Redirect to home page after successful booking
      } else if (data.error) {
        alert(data.error); // Show error message from the backend
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred while processing your request.");
    });
  };

  return (
    <div className="booking-container">
      <h1>Book Your Service</h1>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        
        {/* Contact Input */}
        <input
          type="text"
          placeholder="Contact Number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
        
        {/* Address Input */}
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        
        {/* Service Type Dropdown */}
        <div className="dropdown">
          <label>Select Service</label>
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            required
          >
            <option value="">--Select Service--</option>
            <option value="Cleaning">House Cleaning</option>
            <option value="Electrician">Electrician</option>
          </select>
        </div>

        {/* Area Input for Cleaning Service */}
        {serviceType === "Cleaning" && (
          <input
            type="number"
            placeholder="Enter area in sq. ft."
            value={area}
            onChange={(e) => setArea(e.target.value)}
            required
          />
        )}

        {/* Problem Dropdown for Electrician Service */}
        {serviceType === "Electrician" && (
          <div className="dropdown">
            <label>Select Problem</label>
            <select
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              required
            >
              <option value="">--Select Problem--</option>
              <option value="Wiring Issues">Wiring Issues</option>
              <option value="Light Fixture Problems">Light Fixture Problems</option>
              <option value="Circuit Breaker Issues">Circuit Breaker Issues</option>
              <option value="Switch/Outlet Repair">Switch/Outlet Repair</option>
            </select>
          </div>
        )}

        {/* Display the Total Amount */}
        <h3>Total Amount: ₹{calculateAmount()}</h3>

        {/* Submit Button */}
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingPage;