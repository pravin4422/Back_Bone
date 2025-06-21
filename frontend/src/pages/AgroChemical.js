import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/AgroChemical.css'; // Make sure this file exists

function AgroChemicalCategories() {
  const [activeTab, setActiveTab] = useState('Crop Protection');
  const navigate = useNavigate();

  const tabs = ['Crop Protection', 'Plant Nutrition', 'Speciality Products'];

  const categories = {
    'Crop Protection': [
      {
        name: 'Insecticides',
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center',
        path: 'insecticides'
      },
      {
        name: 'Herbicides',
        image: 'https://images.unsplash.com/photo-1574226516831-e1dff420e562?w=400&h=300&fit=crop&crop=center',
        path: 'herbicides'
      },
      {
        name: 'Biological Products',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop&crop=center',
        path: 'biological-products'
      },
      {
        name: 'Fungicides',
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop&crop=center',
        path: 'fungicides'
      },
      {
        name: 'Adjuvants',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop&crop=center',
        path: 'adjuvants'
      },
    ],
    'Plant Nutrition': [
      {
        name: 'Macro Nutrients',
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center',
        path: 'macro-nutrients'
      },
      {
        name: 'Micro Nutrients',
        image: 'https://images.unsplash.com/photo-1574226516831-e1dff420e562?w=400&h=300&fit=crop&crop=center',
        path: 'micro-nutrients'
      },
      {
        name: 'Soil Conditioners',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop&crop=center',
        path: 'soil-conditioners'
      },
    ],
    'Speciality Products': [
      {
        name: 'Biostimulants',
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop&crop=center',
        path: 'biostimulants'
      },
      {
        name: 'Water Soluble Fertilizers',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop&crop=center',
        path: 'water-soluble-fertilizers'
      },
      {
        name: 'Seed Coatings',
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center',
        path: 'seed-coatings'
      },
    ],
  };

  const handleCardClick = (path) => {
    navigate(`/agromedical/${path}`);
  };

  return (
    <div className="chemical-category-container">
      <div className="chemical-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="chemical-card-grid">
        {categories[activeTab].map((item, index) => (
          <div
            key={index}
            className="chemical-card"
            onClick={() => handleCardClick(item.path)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCardClick(item.path);
              }
            }}
          >
            <img src={item.image} alt={item.name} />
            <div className="card-label">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgroChemicalCategories;