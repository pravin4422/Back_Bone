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
    // Initialize with current user data if available
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
    
    if (!displayName.trim()) {
      newErrors.displayName = 'Display name is required';
    }
    
    if (phone && !/^\+?[\d\s\-\(\)]+$/.test(phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageUpload = (e) => {
    console.log('File input changed:', e.target.files); // Debug log
    
    const file = e.target.files[0];
    if (!file) {
      console.log('No file selected');
      return;
    }

    console.log('File details:', {
      name: file.name,
      size: file.size,
      type: file.type
    });

    // Clear previous errors
    setErrors(prev => ({ ...prev, photo: '' }));
    setUploadStatus('Checking file...');

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      const errorMsg = `File too large: ${(file.size / (1024 * 1024)).toFixed(1)}MB. Max size is 5MB.`;
      setErrors(prev => ({ ...prev, photo: errorMsg }));
      setUploadStatus('Upload failed');
      console.error(errorMsg);
      return;
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      const errorMsg = `Invalid file type: ${file.type}. Please select an image file.`;
      setErrors(prev => ({ ...prev, photo: errorMsg }));
      setUploadStatus('Upload failed');
      console.error(errorMsg);
      return;
    }

    setIsLoading(true);
    setUploadStatus('Reading file...');
    
    const reader = new FileReader();
    
    reader.onloadstart = () => {
      console.log('FileReader started');
      setUploadStatus('Processing image...');
    };
    
    reader.onprogress = (e) => {
      if (e.lengthComputable) {
        const percentLoaded = Math.round((e.loaded / e.total) * 100);
        setUploadStatus(`Loading: ${percentLoaded}%`);
        console.log(`FileReader progress: ${percentLoaded}%`);
      }
    };
    
    reader.onloadend = () => {
      console.log('FileReader completed successfully');
      console.log('Result length:', reader.result?.length);
      
      if (reader.result) {
        setPhotoURL(reader.result);
        setPreview(reader.result);
        setUploadStatus('Image uploaded successfully!');
        console.log('Image set successfully');
        
        // Clear success message after 3 seconds
        setTimeout(() => setUploadStatus(''), 3000);
      } else {
        console.error('FileReader result is empty');
        setErrors(prev => ({ ...prev, photo: 'Failed to read file' }));
        setUploadStatus('Upload failed');
      }
      setIsLoading(false);
    };
    
    reader.onerror = (error) => {
      console.error('FileReader error:', error);
      setErrors(prev => ({ ...prev, photo: 'Error reading file. Please try again.' }));
      setUploadStatus('Upload failed');
      setIsLoading(false);
    };

    try {
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error starting FileReader:', error);
      setErrors(prev => ({ ...prev, photo: 'Failed to process file' }));
      setUploadStatus('Upload failed');
      setIsLoading(false);
    }
  };

  const handleRemovePhoto = () => {
    setPhotoURL('');
    setPreview('https://via.placeholder.com/100?text=No+Photo');
    setUploadStatus('Photo removed');
    
    // Clear the file input
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) {
      fileInput.value = '';
    }
    
    setTimeout(() => setUploadStatus(''), 2000);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setUploadStatus('Saving profile...');

    try {
      const updatedUser = {
        displayName: displayName.trim(),
        phone: phone.trim(),
        photoURL,
        email,
      };

      console.log('Saving user data:', updatedUser);

      // Call the setUser function to update the user state
      setUser(updatedUser);
      
      setUploadStatus('Profile saved successfully!');
      
      // Navigate back after a short delay to show success message
      setTimeout(() => {
        navigate('/');
      }, 1500);
      
    } catch (error) {
      console.error('Error updating profile:', error);
      setUploadStatus('Failed to save profile');
      setErrors(prev => ({ ...prev, save: 'Failed to update profile. Please try again.' }));
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

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
              onError={(e) => {
                console.log('Image load error, using placeholder');
                e.target.src = 'https://via.placeholder.com/100?text=Error';
              }}
              onLoad={() => {
                console.log('Image loaded successfully:', preview);
              }}
            />
            {photoURL && (
              <button 
                type="button" 
                className="remove-photo-btn"
                onClick={handleRemovePhoto}
                title="Remove photo"
              >
                ×
              </button>
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
            onChange={(e) => setEmail(e.target.value)}
            disabled={true}
            className="readonly-input"
          />
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 (555) 123-4567"
            disabled={isLoading}
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </label>

        {errors.save && <div className="error-message">{errors.save}</div>}

        <div className="button-group">
          <button 
            type="submit" 
            className="save-btn"
            disabled={isLoading}
          >
            {isLoading ? 'Saving...' : 'Save Changes'}
          </button>
          <button 
            type="button" 
            className="cancel-btn"
            onClick={handleCancel}
            disabled={isLoading}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;