// src/components/Header.js
import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import '../css/Header.css';

function Header({ user, setUser }) {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Get user details from localStorage
  const displayName = localStorage.getItem('displayName') || 'No Name';
  const userEmail = localStorage.getItem('userEmail') || 'No Email';
  const phone = localStorage.getItem('phone') || 'Not provided';
  const photoURL = localStorage.getItem('photoURL') || 'https://via.placeholder.com/40';

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        localStorage.clear();
        setUser(null);
        setShowDropdown(false);
        navigate('/login');
      })
      .catch((error) => {
        console.error('Logout failed:', error);
        alert('Logout failed. Please try again.');
      });
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