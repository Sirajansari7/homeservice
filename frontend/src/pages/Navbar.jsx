import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    // Check if the user is logged in by checking localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        // Clear user data from localStorage
        localStorage.removeItem('user');
        navigate('/login');  // Redirect to login page after logout
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Service Management</Link>
            </div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                {/* If user is logged in, show their username and Logout button */}
                {user ? (
                    <>
                        <span className="navbar-username">Hello, {user.username}</span>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    // If not logged in, show Login and Register links
                    <>
                        <Link to="/login">Login</Link>
                        {/* <Link to="/register">Register</Link> */}
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
