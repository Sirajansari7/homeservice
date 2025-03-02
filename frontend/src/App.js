import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Lazy-loaded components
const Navbar = lazy(() => import("./pages/Navbar"));
const Footer = lazy(() => import("./pages/Footer"));
const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const BookingPage = lazy(() => import("./pages/BookingPage"));

// Admin Components
const AdminLogin = lazy(() => import("./Admin/AdminLogin"));
const AdminRegister = lazy(() => import("./Admin/AdminRegister"));
const AdminDashboard = lazy(() => import("./Admin/AdminDashboard"));
const GenerateBill = lazy(() => import("./Admin/GenerateBill")); // ✅ Import GenerateBill

// Loader Component
const Loader = () => (
  <div className="loading-container">
    <h2>Loading...</h2>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Navbar />
      </Suspense>

      <div className="main-content">
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* User Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/booking" element={<BookingPage />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/register" element={<AdminRegister />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/generate-bill" element={<GenerateBill />} /> {/* ✅ Added Route */}
          </Routes>
        </Suspense>
      </div>

      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
