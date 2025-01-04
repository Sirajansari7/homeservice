import React from "react";
import Bookings from "./Bookings"; // Importing Bookings component
import Users from "./Users"; // Importing Users component
import "./adminDashboard.css";

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      {/* Section for Bookings */}
      <Bookings />
      {/* Section for Registered Users */}
      <Users />
    </div>
  );
}

export default AdminDashboard;
