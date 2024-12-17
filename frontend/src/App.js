import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing components and pages
import Navbar from "./pages/Navbar"; // Importing Navbar component
import HomePage from "./pages/HomePage"; // Importing HomePage
import LoginPage from "./pages/LoginPage"; // Importing LoginPage
import RegisterPage from "./pages/RegisterPage"; // Importing RegisterPage
import ElectricianBooking from "./pages/ElectricianBooking"; // Importing ElectricianBooking
import HouseCleaningBooking from "./pages/HouseCleaningBooking"; // Importing HouseCleaningBooking
import Footer from "./pages/Footer"; // Importing Footer

// Importing admin components
import AdminLogin from "./Admin/AdminLogin"; // Importing AdminLogin page
import AdminRegister from "./Admin/AdminRegister"; // Importing AdminRegister page

// Importing CSS files
import "./pages/navbar.css"; // Navbar styles
import "./pages/homePage.css"; // HomePage styles
import "./pages/loginPage.css"; // LoginPage styles
import "./pages/registerPage.css"; // RegisterPage styles
import "./pages/bookingPage.css"; // BookingPage styles
import "./Admin/adminLogin.css"; // AdminLogin styles
import "./Admin/adminRegister.css"; // AdminRegister styles

function App() {
  return (
    <Router>
      {/* Navbar at the top of every page */}
      <Navbar />
      <div className="main-content">
        {/* Defining the routes */}
        <Routes>
          {/* User routes */}
          <Route path="/" element={<HomePage />} /> {/* HomePage route */}
          <Route path="/login" element={<LoginPage />} /> {/* LoginPage route */}
          <Route path="/register" element={<RegisterPage />} /> {/* RegisterPage route */}
          <Route path="/electrician-booking" element={<ElectricianBooking />} /> {/* ElectricianBooking route */}
          <Route path="/house-cleaning-booking" element={<HouseCleaningBooking />} /> {/* HouseCleaningBooking route */}

          {/* Admin routes */}
          <Route path="/Admin/login" element={<AdminLogin />} /> {/* AdminLogin route */}
          <Route path="/Admin/register" element={<AdminRegister />} /> {/* AdminRegister route */}
        </Routes>
      </div>
      {/* Footer at the bottom of every page */}
      <Footer />
    </Router>
  );
}

export default App;
