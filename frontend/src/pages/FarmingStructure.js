import React from 'react';
import '../css/FarmingStructure.css';

function FarmingStructure() {
  return (
    <div className="structure-container">
      <h1 className="structure-title">Farming Structures</h1>
      <p className="structure-description">
        Learn about essential farm structures that support efficient agricultural operations, storage, irrigation, and livestock management.
      </p>

      <div className="structure-sections">
        <div className="structure-card">
          <h2>Storage Facilities</h2>
          <p>
            Warehouses and silos are used for storing grains, seeds, and other produce to protect them from spoilage and pests.
          </p>
        </div>

        <div className="structure-card">
          <h2>Irrigation Systems</h2>
          <p>
            Includes drip irrigation, sprinkler systems, and canals to provide water efficiently to crops throughout the year.
          </p>
        </div>

        <div className="structure-card">
          <h2>Greenhouses</h2>
          <p>
            Controlled environments that help grow high-value crops and vegetables in all seasons using minimal resources.
          </p>
        </div>

        <div className="structure-card">
          <h2>Animal Sheds</h2>
          <p>
            Structures built to house livestock like cows, goats, and poultry, ensuring proper hygiene and health.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FarmingStructure;
