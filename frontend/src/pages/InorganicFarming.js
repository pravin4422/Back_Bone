import React from 'react';
import '../css/InorganicFarming.css';

function InorganicFarming() {
  return (
    <div className="inorganic-container">
      <h1 className="inorganic-title">Inorganic Farming</h1>
      <p className="inorganic-description">
        Understand conventional farming techniques that use synthetic fertilizers, pesticides, and modern equipment to increase productivity.
      </p>

      <div className="inorganic-sections">
        <div className="inorganic-card">
          <h2>What is Inorganic Farming?</h2>
          <p>
            Inorganic farming involves the use of artificial inputs like chemical fertilizers and pesticides to boost crop yields and control pests.
          </p>
        </div>

        <div className="inorganic-card">
          <h2>Advantages</h2>
          <ul>
            <li>Higher crop yield</li>
            <li>Faster growth cycle</li>
            <li>Greater pest and weed control</li>
            <li>Mechanized processes</li>
          </ul>
        </div>

        <div className="inorganic-card">
          <h2>Disadvantages</h2>
          <ul>
            <li>Soil degradation</li>
            <li>Water contamination</li>
            <li>Loss of biodiversity</li>
            <li>Health concerns due to chemical residues</li>
          </ul>
        </div>

        <div className="inorganic-card">
          <h2>Common Chemicals Used</h2>
          <p>
            Urea, DAP, potash, insecticides, herbicides, and fungicides are frequently applied in conventional farming.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InorganicFarming;
