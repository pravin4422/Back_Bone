// src/pages/EditProfile.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/EditProfile.css';

function EditProfile({ setUser, currentUser }) {
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState('');
  const [phone, setPhone] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [email, setEmail] = useState('');
  const [preview, setPreview] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [uploadStatus, setUploadStatus] = useState('');

  useEffect(() => {
    if (currentUser) {
      setDisplayName(currentUser.displayName || '');
      setPhone(currentUser.phone || '');
      setPhotoURL(currentUser.photoURL || '');
      setEmail(currentUser.email || '');
      setPreview(currentUser.photoURL || 'https://via.placeholder.com/100?text=No+Photo');
    } else {
      setPreview('https://via.placeholder.com/100?text=No+Photo');
    }
  }, [currentUser]);

  const validateForm = () => {
    const newErrors = {};
    if (!displayName.trim()) newErrors.displayName = 'Display name is required';
    if (phone && !/^[\d\s\-()+]+$/.test(phone)) newErrors.phone = 'Please enter a valid phone number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setErrors(prev => ({ ...prev, photo: '' }));
    setUploadStatus('Checking file...');

    if (file.size > 5 * 1024 * 1024) {
      setErrors(prev => ({ ...prev, photo: 'File too large. Max 5MB allowed.' }));
      setUploadStatus('Upload failed');
      return;
    }

    if (!file.type.startsWith('image/')) {
      setErrors(prev => ({ ...prev, photo: 'Invalid file type. Please select an image.' }));
      setUploadStatus('Upload failed');
      return;
    }

    setIsLoading(true);
    setUploadStatus('Reading file...');

    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoURL(reader.result);
      setPreview(reader.result);
      setUploadStatus('Image uploaded successfully!');
      setIsLoading(false);
      setTimeout(() => setUploadStatus(''), 2000);
    };
    reader.onerror = () => {
      setErrors(prev => ({ ...prev, photo: 'Error reading file. Please try again.' }));
      setUploadStatus('Upload failed');
      setIsLoading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = () => {
    setPhotoURL('');
    setPreview('https://via.placeholder.com/100?text=No+Photo');
    setUploadStatus('Photo removed');
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) fileInput.value = '';
    setTimeout(() => setUploadStatus(''), 2000);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setUploadStatus('Saving profile...');

    try {
      const updatedUser = {
        displayName: displayName.trim(),
        phone: phone.trim(),
        photoURL,
        email,
      };

      // Save to localStorage (update current info)
      localStorage.setItem('displayName', updatedUser.displayName);
      localStorage.setItem('phone', updatedUser.phone);
      localStorage.setItem('photoURL', updatedUser.photoURL);

      setUser(updatedUser); // Lift state to App
      setUploadStatus('Profile saved successfully!');
      setTimeout(() => navigate('/'), 1500);

      // Optional: Send to backend if you're syncing profile
      /*
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/api/users/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updatedUser)
      });
      if (!res.ok) throw new Error('Failed to update profile');
      */

    } catch (error) {
      console.error(error);
      setUploadStatus('Failed to save profile');
      setErrors(prev => ({ ...prev, save: 'Failed to update profile. Please try again.' }));
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => navigate('/');

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>

      {uploadStatus && (
        <div className={`upload-status ${uploadStatus.includes('successfully') || uploadStatus.includes('removed') ? 'success' : uploadStatus.includes('failed') ? 'error' : 'info'}`}>
          {uploadStatus}
        </div>
      )}

      <form onSubmit={handleSave} className="edit-profile-form">
        <div className="profile-preview">
          <div className="image-container">
            <img
              src={preview}
              alt="Profile Preview"
              className="profile-image"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/100?text=Error'; }}
            />
            {photoURL && (
              <button type="button" className="remove-photo-btn" onClick={handleRemovePhoto}>×</button>
            )}
          </div>

          <div className="file-input-container">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={isLoading}
              id="photo-upload"
              className="file-input"
            />
            <label htmlFor="photo-upload" className="file-input-label">
              {isLoading ? 'Processing...' : 'Choose Photo'}
            </label>
          </div>

          {errors.photo && <span className="error-message">{errors.photo}</span>}
        </div>

        <label>
          Display Name: *
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
            disabled={isLoading}
            className={errors.displayName ? 'error' : ''}
          />
          {errors.displayName && <span className="error-message">{errors.displayName}</span>}
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            disabled
            className="readonly-input"
          />
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98765 43210"
            disabled={isLoading}
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </label>

        {errors.save && <div className="error-message">{errors.save}</div>}

        <div className="button-group">
          <button type="submit" className="save-btn" disabled={isLoading}>
            {isLoading ? 'Saving...' : 'Save Changes'}
          </button>
          <button type="button" className="cancel-btn" onClick={handleCancel} disabled={isLoading}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
