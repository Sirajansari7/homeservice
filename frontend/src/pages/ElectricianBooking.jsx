import React, { useState } from "react";
import { jsPDF } from "jspdf"; // Import jsPDF
import "./bookingPage.css";

const ElectricianBooking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    problem: "",
    amount: "",
  });

  // Define pricing for common problems
  const problemPricing = {
    "Wiring Issue": 500,
    "Switch Replacement": 300,
    "Fuse Repair": 200,
    "Socket Issue": 400,
    "Others": 1000, // Default amount for unspecified problems
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Automatically update the amount if the problem changes
    if (name === "problem") {
      const selectedAmount = problemPricing[value] || problemPricing["Others"];
      setFormData((prevData) => ({
        ...prevData,
        amount: selectedAmount,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Confirmed! Total Amount: ₹${formData.amount}`);

    // Generate PDF
    const doc = new jsPDF();
    doc.text(`Booking Details:`, 20, 10);
    doc.text(`Name: ${formData.name}`, 20, 20);
    doc.text(`Phone: ${formData.phone}`, 20, 30);
    doc.text(`Address: ${formData.address}`, 20, 40);
    doc.text(`Problem: ${formData.problem}`, 20, 50);
    doc.text(`Total Amount: ₹${formData.amount}`, 20, 60);
    doc.save("booking_invoice.pdf"); // Save the PDF as 'booking_invoice.pdf'

    console.log(formData);
  };

  return (
    <div className="booking-page">
      <h2>Electrician Booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Problem Description:</label>
          <select
            name="problem"
            value={formData.problem}
            onChange={handleChange}
            required
          >
            <option value="">Select Problem</option>
            <option value="Wiring Issue">Wiring Issue</option>
            <option value="Switch Replacement">Switch Replacement</option>
            <option value="Fuse Repair">Fuse Repair</option>
            <option value="Socket Issue">Socket Issue</option>
            <option value="Others">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Estimated Amount (₹):</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            readOnly
            disabled
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default ElectricianBooking;
