import React, { useState } from "react";
import Bookings from "./Bookings";
import Users from "./Users";
import GenerateBill from "./GenerateBill"; // Updated File Name
import "./adminDashboard.css";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("bookings");

  return (
    <div className="admin-dashboard">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li 
            className={activeTab === "bookings" ? "active" : ""}
            onClick={() => setActiveTab("bookings")}
          >
            📅 Bookings
          </li>
          <li 
            className={activeTab === "users" ? "active" : ""}
            onClick={() => setActiveTab("users")}
          >
            👤 Users
          </li>
          <li 
            className={activeTab === "bill" ? "active" : ""}
            onClick={() => setActiveTab("bill")}
          >
            🧾 Generate Bill
          </li>
        </ul>
      </aside>

      {/* Content Section */}
      <div className="dashboard-content">
        {activeTab === "bookings" && <Bookings />}
        {activeTab === "users" && <Users />}
        {activeTab === "bill" && <GenerateBill />} {/* Updated File Name */}
      </div>
    </div>
  );
}

export default AdminDashboard;
