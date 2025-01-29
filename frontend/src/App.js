import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import all components at the top (including lazy-loaded ones)
const Navbar = lazy(() => import("./pages/Navbar"));
const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const Footer = lazy(() => import("./pages/Footer"));

const AdminLogin = lazy(() => import("./Admin/AdminLogin"));
const AdminRegister = lazy(() => import("./Admin/AdminRegister"));
const AdminDashboard = lazy(() => import("./Admin/AdminDashboard"));

// Lazy-load BookingPage (import at the top)
const BookingPage = lazy(() => import("./pages/BookingPage"));

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
            <Route path="/booking" element={<BookingPage />} /> {/* Combined booking route */}

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
