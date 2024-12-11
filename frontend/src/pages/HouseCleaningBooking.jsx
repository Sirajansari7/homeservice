import React, { useState } from "react";
import { jsPDF } from "jspdf"; // Import jsPDF
import "./bookingPage.css";

const HouseCleaningBooking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    squareFeet: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate squareFeet input
    if (parseInt(formData.squareFeet) <= 0) {
      alert("Please enter a valid house area.");
      return;
    }

    const totalAmount = parseInt(formData.squareFeet || 0) * 10;
    alert(`Booking Confirmed! Total Amount: ₹${totalAmount}`);

    // Generate PDF
    const doc = new jsPDF();
    doc.text(`Booking Details:`, 20, 10);
    doc.text(`Name: ${formData.name}`, 20, 20);
    doc.text(`Phone: ${formData.phone}`, 20, 30);
    doc.text(`Address: ${formData.address}`, 20, 40);
    doc.text(`House Area: ${formData.squareFeet} sq. ft.`, 20, 50);
    doc.text(`Total Amount: ₹${totalAmount}`, 20, 60);
    doc.save("house_cleaning_invoice.pdf"); // Save the PDF as 'house_cleaning_invoice.pdf'

    console.log({ ...formData, totalAmount });
  };

  return (
    <div className="booking-page">
      <h2>House Cleaning Booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>House Area (in square feet):</label>
          <input
            type="number"
            name="squareFeet"
            value={formData.squareFeet}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default HouseCleaningBooking;
