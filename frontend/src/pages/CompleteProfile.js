import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/EditProfile.css';

function EditProfile({ setUser }) {
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState('');
  const [phone, setPhone] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  useEffect(() => {
    setDisplayName(localStorage.getItem('displayName') || '');
    setPhone(localStorage.getItem('phone') || '');
    setPhotoURL(localStorage.getItem('photoURL') || '');
  }, []);

  const handleSave = (e) => {
    e.preventDefault();

    localStorage.setItem('displayName', displayName);
    localStorage.setItem('phone', phone);
    localStorage.setItem('photoURL', photoURL);

    // ✅ Update App state (optional but needed for Header refresh)
    setUser((prevUser) => ({
      ...prevUser,
      displayName,
      phone,
      photoURL,
    }));

    alert('Profile updated successfully!');
    navigate('/');
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSave} className="edit-profile-form">
        <label>
          Display Name:
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
        </label>

        <label>
          Phone Number:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>

        <label>
          Photo URL:
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
        </label>

        <button type="submit" className="save-btn">Save Changes</button>
      </form>
    </div>
  );
}

export default EditProfile;
