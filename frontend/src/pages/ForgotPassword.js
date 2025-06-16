import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ForgotPassword.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Back Bone</h1>
      <p>Your trusted companion for all things agriculture.</p>

      <div className="home-sections">
        <Link to="/schemes" className="home-card">
          <h3>🌾 Government Schemes</h3>
          <p>Stay informed about the latest farmer-friendly schemes from the government.</p>
        </Link>

        <Link to="/weather" className="home-card">
          <h3>☁️ Weather Forecast</h3>
          <p>Get up-to-date weather information for your area to plan your farming activities.</p>
        </Link>

        <Link to="/prices" className="home-card">
          <h3>📈 Market Prices</h3>
          <p>Track daily mandi prices for crops and commodities across India.</p>
        </Link>

        <Link to="/forum" className="home-card">
          <h3>💬 Farmer Forum</h3>
          <p>Connect with other farmers to share knowledge, ask questions, and get support.</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
