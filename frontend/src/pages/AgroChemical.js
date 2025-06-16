import React from 'react';
import '../css/AgroChemical.css';

function AgroChemical() {
  return (
    <div className="agrochemical-container">
      <h1 className="agrochemical-title">AgroChemical Products</h1>
      <p className="agrochemical-description">
        Find information about fertilizers, pesticides, herbicides, and plant growth regulators.
      </p>

      <div className="chemical-list">
        <div className="chemical-card">
          <h2>Fertilizers</h2>
          <p>Boost crop yields by providing essential nutrients like nitrogen, phosphorus, and potassium.</p>
        </div>

        <div className="chemical-card">
          <h2>Pesticides</h2>
          <p>Protect crops from harmful insects and pests to ensure better quality produce.</p>
        </div>

        <div className="chemical-card">
          <h2>Herbicides</h2>
          <p>Control weeds that compete with crops for nutrients and sunlight.</p>
        </div>

        <div className="chemical-card">
          <h2>Plant Growth Regulators</h2>
          <p>Enhance plant growth, flowering, and fruit development with natural or synthetic hormones.</p>
        </div>
      </div>
    </div>
  );
}

export default AgroChemical;
