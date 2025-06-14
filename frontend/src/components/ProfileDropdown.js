import React from 'react';
import './ProfileDropdown.css';

function ProfileDropdown({ user, onLogout }) {
  return (
    <div className="profile-dropdown">
      <img
        src={user.photoURL || 'https://via.placeholder.com/40'}
        alt="Profile"
        className="profile-icon"
      />
      <div className="profile-details">
        <strong>{user.displayName || user.email}</strong>
        <p>{user.phone}</p>
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}

export default ProfileDropdown;
