import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing components and pages
import Navbar from "./pages/Navbar"; // Importing Navbar component
import HomePage from "./pages/HomePage"; // Importing HomePage
import LoginPage from "./pages/LoginPage"; // Importing LoginPage
import RegisterPage from "./pages/RegisterPage"; // Importing RegisterPage
import ElectricianBooking from "./pages/ElectricianBooking";
import HouseCleaningBooking from "./pages/HouseCleaningBooking";



// Importing CSS files
import './pages/navbar.css'; // Navbar styles
import './pages/homePage.css'; // HomePage styles
import './pages/loginPage.css'; // LoginPage styles
import './pages/registerPage.css'; // RegisterPage styles
import'./pages/bookingPage.css';

function App() {
  return (
    <Router>
      {/* Navbar at the top of every page */}
      <Navbar />
      <div className="main-content">
        {/* Defining the routes */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* HomePage route */}
          <Route path="/login" element={<LoginPage />} /> {/* LoginPage route */}
          <Route path="/register" element={<RegisterPage />} /> {/* RegisterPage route */}
          <Route path="/electrician-booking" element={<ElectricianBooking />} />
        <Route path="/house-cleaning-booking" element={<HouseCleaningBooking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
