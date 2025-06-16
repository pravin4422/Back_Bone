// src/pages/CreaterDetail.js
import React from 'react';
import '../css/CreaterDetail.css';

const CreaterDetail = () => {
  return (
    <div className="creater-detail-container">
      <h1 className="creater-heading">🌾 Creater Detail</h1>
      <p className="creater-description">
        Here are the details of the God Creators and their personal background...
      </p>

      <div className="creater-card">
        <h2>👤 Pravin Kumar</h2>
        <p><strong>Role:</strong> Lead Developer & UI Designer</p>
        <p><strong>Email:</strong> pravin@example.com</p>
        <p><strong>Bio:</strong> Final year student with a passion for empowering farmers through technology.</p>
      </div>

      <div className="creater-card">
        <h2>👤 Co-Creater Name</h2>
        <p><strong>Role:</strong> Backend & Database Management</p>
        <p><strong>Email:</strong> co-creater@example.com</p>
        <p><strong>Bio:</strong> Focused on building secure, scalable infrastructures for rural tech apps.</p>
      </div>
    </div>
  );
};

export default CreaterDetail;
