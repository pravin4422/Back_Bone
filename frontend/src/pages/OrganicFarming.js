import React from 'react';
import '../css/OrganicFarming.css';

function OrganicFarming() {
  return (
    <div className="organic-container">
      <h1 className="organic-title">Organic Farming</h1>
      <p className="organic-description">
        Explore sustainable agricultural methods that rely on natural processes and eco-friendly practices.
      </p>

      <div className="organic-sections">
        <div className="organic-card">
          <h2>What is Organic Farming?</h2>
          <p>
            Organic farming avoids synthetic chemicals and focuses on crop rotation, composting, and biological pest control.
          </p>
        </div>

        <div className="organic-card">
          <h2>Benefits</h2>
          <ul>
            <li>Improves soil health</li>
            <li>Reduces pollution</li>
            <li>Produces chemical-free food</li>
            <li>Supports biodiversity</li>
          </ul>
        </div>

        <div className="organic-card">
          <h2>Common Practices</h2>
          <p>
            Includes mulching, green manure, organic compost, crop rotation, and use of beneficial insects.
          </p>
        </div>

        <div className="organic-card">
          <h2>Certification</h2>
          <p>
            Farmers must follow strict standards and undergo regular inspections to get organic certification in India (e.g., NPOP).
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrganicFarming;
