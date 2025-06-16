import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Back Bone</h1>
        <p>Your trusted companion for all things agriculture.</p>
        
        <div className="home-sections">
          <Link to="/create" className="home-card">
            <h3>🌾Creater Detail</h3>
            <p>Here the detail of the God Creaters of personal details .....</p>
          </Link>

           <Link to="/prices" className="home-card">
            <h3>📈 Market Prices</h3>
            <p>Track daily mandi prices for crops and commodities across India.</p>
          </Link>

          <Link to="/farming-details" className="home-card">
            <h3>📋 Farming Details</h3>
            <p>Comprehensive information about crop cultivation, seasons, and best practices.</p>
          </Link>

          <Link to="/agro-chemicals" className="home-card">
            <h3>🧪 AgroChemical Products</h3>
            <p>Learn about fertilizers, pesticides, and other agricultural chemicals for better yields.</p>
          </Link>
          
          <Link to="/weather" className="home-card">
            <h3>☁️ Weather Forecast</h3>
            <p>Get up-to-date weather information for your area to plan your farming activities.</p>
          </Link>
          
          <Link to="/forum" className="home-card">
            <h3>💬 Farmer Forum</h3>
            <p>Connect with other farmers to share knowledge, ask questions, and get support.</p>
          </Link>

           <Link to="/agro-infectors" className="home-card">
            <h3>🦠 Agro Infectors</h3>
            <p>Identify and manage crop diseases, pests, and other agricultural threats.</p>
          </Link>

          <Link to="/organic-farming" className="home-card">
            <h3>🌱 Organic Farming</h3>
            <p>Explore sustainable and eco-friendly farming methods for healthier crops.</p>
          </Link>

           <Link to="/inorganic-farming" className="home-card">
            <h3>⚗️ Inorganic Farming</h3>
            <p>Modern conventional farming techniques and synthetic inputs for maximum productivity.</p>
          </Link>

          <Link to="/farming-structure" className="home-card">
            <h3>🏗️ Farming Structure</h3>
            <p>Design and setup of farm infrastructure, irrigation systems, and storage facilities.</p>
          </Link>

          <Link to="/schemes" className="home-card">
            <h3>🌾 Government Schemes</h3>
            <p>Stay informed about the latest farmer-friendly schemes from the government.</p>
          </Link>
          <Link to="/others" className="home-card">
            <h3>📚 Others</h3>
            <p>Additional resources, tools, and information for comprehensive farming support.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;