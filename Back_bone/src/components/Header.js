// src/components/Header.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Header.css'; // Importing the CSS

function Header({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/schemes" className="nav-link">Schemes</Link>
        <Link to="/weather" className="nav-link">Weather</Link>
        <Link to="/prices" className="nav-link">Prices</Link>
        <Link to="/forum" className="nav-link">Forum</Link>
      </div>

      <div className="nav-auth">
        {user ? (
          <>
            <span className="nav-user">👋 {user.name}</span>
            <button onClick={handleLogout} className="nav-button">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-button">Login</Link>
            <Link to="/signup" className="nav-button">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Header;
