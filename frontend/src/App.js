// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React, { Suspense, lazy } from "react";

const Navbar = lazy(() => import("./pages/Navbar"));
const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const ElectricianBooking = lazy(() => import("./pages/ElectricianBooking"));
const HouseCleaningBooking = lazy(() => import("./pages/HouseCleaningBooking"));
const Footer = lazy(() => import("./pages/Footer"));

const AdminLogin = lazy(() => import("./Admin/AdminLogin"));
const AdminRegister = lazy(() => import("./Admin/AdminRegister"));
const AdminDashboard = lazy(() => import("./Admin/AdminDashboard"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <div className="main-content">
          <Routes>
            {/* User routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/electrician-booking" element={<ElectricianBooking />} />
            <Route path="/house-cleaning-booking" element={<HouseCleaningBooking />} />

            {/* Admin routes */}
            <Route path="/Admin/login" element={<AdminLogin />} />
            <Route path="/Admin/register" element={<AdminRegister />} />
            <Route path="/Admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </div>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
