import React from 'react';
import '../css/Others.css';

function Others() {
  return (
    <div className="others-container">
      <h1 className="others-title">Other Agricultural Resources</h1>
      <p className="others-description">
        Explore additional agricultural topics and resources that support farming productivity and knowledge sharing.
      </p>

      <div className="others-sections">
        <div className="others-card">
          <h2>Agricultural Machinery</h2>
          <p>
            Information about tools and equipment like tractors, tillers, seed drills, and harvesters that improve farm efficiency.
          </p>
        </div>

        <div className="others-card">
          <h2>Farming Apps & Portals</h2>
          <p>
            Mobile apps and websites offering updates on weather, market prices, schemes, and expert farming advice.
          </p>
        </div>

        <div className="others-card">
          <h2>Training & Workshops</h2>
          <p>
            Government and NGO-led training programs for farmers to adopt modern techniques, digital tools, and organic practices.
          </p>
        </div>

        <div className="others-card">
          <h2>Soil & Water Testing</h2>
          <p>
            Importance of testing soil nutrients and water quality to ensure proper crop selection and fertilizer use.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Others;
