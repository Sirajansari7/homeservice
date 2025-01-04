import React, { useState, useEffect } from "react";
import "./adminDashboard.css";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  // Fetch bookings data from the backend
  useEffect(() => {
    fetch("/api/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error("Error fetching bookings:", err));
  }, []);

  return (
    <section className="dashboard-section">
      <h2>Bookings</h2>
      {bookings.length > 0 ? (
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Service</th>
              <th>Customer Name</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.service}</td>
                <td>{booking.customerName}</td>
                <td>{booking.date}</td>
                <td>{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No bookings available</p>
      )}
    </section>
  );
}

export default Bookings;
