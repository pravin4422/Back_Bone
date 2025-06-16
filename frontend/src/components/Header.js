// src/components/Header.js
import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Header.css';

function Header({ user, setUser }) {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const [displayName, setDisplayName] = useState(localStorage.getItem('displayName') || 'No Name');
  const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail') || 'No Email');
  const [phone, setPhone] = useState(localStorage.getItem('phone') || 'Not provided');
  const [photoURL, setPhotoURL] = useState(localStorage.getItem('photoURL') || 'https://via.placeholder.com/40');

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // OPTIONAL: Fetch latest user info from backend on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;

        const response = await fetch('http://localhost:5000/api/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setDisplayName(data.displayName || 'No Name');
          setUserEmail(data.email || 'No Email');
          setPhone(data.phone || 'Not provided');
          setPhotoURL(data.photoURL || 'https://via.placeholder.com/40');

          // Update localStorage
          localStorage.setItem('displayName', data.displayName || '');
          localStorage.setItem('userEmail', data.email || '');
          localStorage.setItem('phone', data.phone || '');
          localStorage.setItem('photoURL', data.photoURL || '');
        } else {
          console.error('Failed to fetch user profile');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error.message);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    setShowDropdown(false);
    navigate('/login');
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="header">
      <div className="logo">
        <Link to="/">Back Bone</Link>
      </div>

      <div className="nav-links">
        {/* Common navigation links visible to all users */}
        <Link to="/" className="nav-link">🏠 Home</Link>
        <Link to="/about" className="nav-link">ℹ️ About Us</Link>
        
        {!user ? (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link">Signup</Link>
          </>
        ) : (
          <div className="profile-container" ref={dropdownRef}>
            <div className="profile-trigger" onClick={toggleDropdown}>
              <img
                src={photoURL}
                alt="Profile"
                className="profile-icon"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/40';
                }}
              />
              <span className="profile-name">{displayName}</span>
              <span className={`dropdown-arrow ${showDropdown ? 'open' : ''}`}>▼</span>
            </div>

            {showDropdown && (
              <div className="dropdown-menu">
                <div className="dropdown-header">
                  <img
                    src={photoURL}
                    alt="Profile"
                    className="dropdown-avatar"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/60';
                    }}
                  />
                  <div className="dropdown-user-info">
                    <h4>{displayName}</h4>
                    <p className="user-email">{userEmail}</p>
                  </div>
                </div>

                <div className="dropdown-divider"></div>

                <div className="dropdown-content">
                  <div className="user-detail">
                    <span className="detail-label">📧 Email:</span>
                    <span className="detail-value">{userEmail}</span>
                  </div>
                  <div className="user-detail">
                    <span className="detail-label">📱 Phone:</span>
                    <span className="detail-value">{phone}</span>
                  </div>
                  <div className="user-detail">
                    <span className="detail-label">👤 Name:</span>
                    <span className="detail-value">{displayName}</span>
                  </div>
                </div>

                <div className="dropdown-divider"></div>

                <div className="dropdown-actions">
                  <button className="dropdown-btn profile-btn" onClick={() => navigate('/edit-profile')}>
                    ⚙️ Edit Profile
                  </button>
                  <button className="dropdown-btn settings-btn">
                    🔧 Settings
                  </button>
                  <button className="dropdown-btn logout-btn" onClick={handleLogout}>
                    🚪 Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;