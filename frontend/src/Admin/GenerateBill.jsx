import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./adminDashboard.css";

function GenerateBill() {
  const [billDetails, setBillDetails] = useState({
    customerName: "",
    serviceType: "",
    amount: "",
    date: "",
    description: "",
  });

  // Function to handle input changes
  const handleChange = (e) => {
    setBillDetails({ ...billDetails, [e.target.name]: e.target.value });
  };

  // Function to generate and download PDF
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.text("Western Flex Home Service - Invoice", 20, 20);

    doc.setFont("helvetica", "normal");
    doc.text(`Date: ${billDetails.date || "N/A"}`, 20, 30);
    doc.text(`Customer Name: ${billDetails.customerName || "N/A"}`, 20, 40);
    doc.text(`Service Type: ${billDetails.serviceType || "N/A"}`, 20, 50);
    doc.text(`Amount: ₹${billDetails.amount || "N/A"}`, 20, 60);
    doc.text(`Description: ${billDetails.description || "N/A"}`, 20, 70);

    doc.save(`Invoice_${billDetails.customerName}.pdf`);
  };

  return (
    <section className="dashboard-section">
      <h2>Generate Bill</h2>
      <div className="bill-input">
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={billDetails.customerName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="serviceType"
          placeholder="Service Type"
          value={billDetails.serviceType}
          onChange={handleChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount (₹)"
          value={billDetails.amount}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={billDetails.date}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Enter Description"
          value={billDetails.description}
          onChange={handleChange}
          className="bill-textarea"
        ></textarea>
      </div>

      <div className="bill-details">
        <h3>Bill Summary</h3>
        <p><strong>Customer Name:</strong> {billDetails.customerName || "N/A"}</p>
        <p><strong>Service Type:</strong> {billDetails.serviceType || "N/A"}</p>
        <p><strong>Amount:</strong> ₹{billDetails.amount || "N/A"}</p>
        <p><strong>Date:</strong> {billDetails.date || "N/A"}</p>
        <p><strong>Description:</strong> {billDetails.description || "N/A"}</p>
      </div>

      <button className="print-btn" onClick={generatePDF}>Print Bill</button>
    </section>
  );
}

export default GenerateBill;
