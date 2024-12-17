// AdminRegister.jsx
import React, { useState } from "react";
import "./adminRegister.css";

const AdminRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Admin Registration: ", { name, email, password });
    // Make API call here to register the admin
  };

  return (
    <div className="auth-container">
      <h2>Admin Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="auth-button">Register</button>
      </form>
      <p>
        Already have an account? <a href="/admin/login">Login here</a>.
      </p>
    </div>
  );
};

export default AdminRegister;

