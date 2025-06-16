import React from 'react';
import '../css/AgroInfectors.css';

function AgroInfectors() {
  return (
    <div className="infectors-container">
      <h1 className="infectors-title">Agro Infectors</h1>
      <p className="infectors-description">
        Learn about common plant diseases and how to manage pests and pathogens in crops using safe and effective methods.
      </p>

      <div className="infectors-sections">
        <div className="infectors-card">
          <h2>Common Crop Diseases</h2>
          <ul>
            <li>Powdery mildew</li>
            <li>Leaf spot</li>
            <li>Rust</li>
            <li>Blight</li>
          </ul>
        </div>

        <div className="infectors-card">
          <h2>Pest Management</h2>
          <p>
            Use of biopesticides, insect traps, and natural predators to minimize damage without harming the environment.
          </p>
        </div>

        <div className="infectors-card">
          <h2>Safe Practices</h2>
          <p>
            Always follow safety instructions while using chemical pesticides, and consider integrated pest management (IPM) strategies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AgroInfectors;
