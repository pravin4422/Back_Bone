import React from 'react';
import '../css/FarmingDetail.css';

function FarmingDetail() {
  return (
    <div className="farming-detail-container">
      <h1 className="farming-title">Farming Detail</h1>
      <p className="farming-description">
        This section provides in-depth information on different types of farming techniques, crop rotation, soil health, irrigation methods, seasonal planning, and best practices to improve yield.
      </p>

      <div className="farming-topics">
        <div className="topic-card">
          <h2>Crop Rotation</h2>
          <p>Helps maintain soil fertility and reduce soil erosion by alternating crops.</p>
        </div>

        <div className="topic-card">
          <h2>Soil Health</h2>
          <p>Understand soil types, pH levels, and nutrients for better productivity.</p>
        </div>

        <div className="topic-card">
          <h2>Irrigation Methods</h2>
          <p>Drip, sprinkler, and traditional irrigation methods explained.</p>
        </div>

        <div className="topic-card">
          <h2>Seasonal Planning</h2>
          <p>Plan sowing and harvesting schedules based on local climate patterns.</p>
        </div>
      </div>
    </div>
  );
}

export default FarmingDetail;
