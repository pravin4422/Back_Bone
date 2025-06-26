import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/AgroChemical.css';

const AgroChemicalCategories = () => {
  const [activeTab, setActiveTab] = useState('Crop Protection');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = ['Crop Protection', 'Plant Nutrition', 'Speciality Products'];

  const categories = {
    'Crop Protection': [
      {
        id: 1,
        name: 'Insecticides',
        description: 'Products for controlling harmful insects',
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center',
        path: 'insecticides',
        category: 'Crop Protection'
      },
      {
        id: 2,
        name: 'Herbicides',
        description: 'Weed control solutions',
        image: 'https://images.unsplash.com/photo-1574226516831-e1dff420e562?w=400&h=300&fit=crop&crop=center',
        path: 'herbicides',
        category: 'Crop Protection'
      },
      {
        id: 3,
        name: 'Biological Products',
        description: 'Eco-friendly biological solutions',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop&crop=center',
        path: 'biological-products',
        category: 'Crop Protection'
      },
      {
        id: 4,
        name: 'Fungicides',
        description: 'Fungal disease prevention and control',
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop&crop=center',
        path: 'fungicides',
        category: 'Crop Protection'
      },
      {
        id: 5,
        name: 'Adjuvants',
        description: 'Enhancement products for better efficacy',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop&crop=center',
        path: 'adjuvants',
        category: 'Crop Protection'
      }
    ],
    'Plant Nutrition': [
      {
        id: 6,
        name: 'Macro Nutrients',
        description: 'Essential nutrients for plant growth',
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center',
        path: 'macro-nutrients',
        category: 'Plant Nutrition'
      },
      {
        id: 7,
        name: 'Micro Nutrients',
        description: 'Trace elements for healthy plants',
        image: 'https://images.unsplash.com/photo-1574226516831-e1dff420e562?w=400&h=300&fit=crop&crop=center',
        path: 'micro-nutrients',
        category: 'Plant Nutrition'
      },
      {
        id: 8,
        name: 'Soil Conditioners',
        description: 'Products to improve soil health',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop&crop=center',
        path: 'soil-conditioners',
        category: 'Plant Nutrition'
      }
    ],
    'Speciality Products': [
      {
        id: 9,
        name: 'Biostimulants',
        description: 'Natural growth enhancers',
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop&crop=center',
        path: 'biostimulants',
        category: 'Speciality Products'
      },
      {
        id: 10,
        name: 'Water Soluble Fertilizers',
        description: 'Quick-dissolving nutrient solutions',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop&crop=center',
        path: 'water-soluble-fertilizers',
        category: 'Speciality Products'
      },
      {
        id: 11,
        name: 'Seed Coatings',
        description: 'Protective and nutritive seed treatments',
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center',
        path: 'seed-coatings',
        category: 'Speciality Products'
      }
    ]
  };

  // Function to get category by path
  const getCategoryByPath = useCallback((path) => {
    for (const [categoryName, items] of Object.entries(categories)) {
      const foundItem = items.find(item => item.path === path);
      if (foundItem) {
        return categoryName;
      }
    }
    return null;
  }, [categories]);

  // Effect to restore active tab when returning from a subcategory
  useEffect(() => {
    // Get the stored active tab from sessionStorage
    const storedActiveTab = sessionStorage.getItem('agroChemicalActiveTab');
    
    // Check if we're coming back from a subcategory page
    const currentPath = location.pathname;
    const isSubcategoryPage = currentPath.includes('/agromedical/') && 
                             currentPath !== '/agromedical' && 
                             currentPath !== '/agromedical/';
    
    if (storedActiveTab && !isSubcategoryPage) {
      // We're on the main page and have a stored tab, restore it
      setActiveTab(storedActiveTab);
    } else if (isSubcategoryPage) {
      // We're on a subcategory page, determine which tab it belongs to
      const pathSegments = currentPath.split('/');
      const subcategoryPath = pathSegments[pathSegments.length - 1];
      const belongsToCategory = getCategoryByPath(subcategoryPath);
      
      if (belongsToCategory) {
        // Store the category this subcategory belongs to
        sessionStorage.setItem('agroChemicalActiveTab', belongsToCategory);
        setActiveTab(belongsToCategory);
      }
    }
  }, [location.pathname, getCategoryByPath]);

  const handleCardClick = useCallback((path, category) => {
    setLoading(true);
    
    // Store the current active tab before navigating
    sessionStorage.setItem('agroChemicalActiveTab', category);
    
    try {
      navigate(`/agromedical/${path}`);
    } catch (error) {
      console.error('Navigation error:', error);
    } finally {
      // Reset loading state after a short delay
      setTimeout(() => setLoading(false), 500);
    }
  }, [navigate]);

  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
    // Store the selected tab
    sessionStorage.setItem('agroChemicalActiveTab', tab);
  }, []);

  const handleKeyDown = useCallback((e, path, category) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick(path, category);
    }
  }, [handleCardClick]);

  const CategoryCard = ({ item }) => (
    <div
      className="chemical-card"
      onClick={() => handleCardClick(item.path, item.category)}
      tabIndex={0}
      onKeyDown={(e) => handleKeyDown(e, item.path, item.category)}
      role="button"
      aria-label={`Navigate to ${item.name} category`}
    >
      <div className="card-image-container">
        <img 
          src={item.image} 
          alt={item.name}
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
          }}
        />
        <div className="card-overlay">
          <span className="card-action">View Products</span>
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{item.name}</h3>
        <p className="card-description">{item.description}</p>
      </div>
    </div>
  );

  CategoryCard.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired
    }).isRequired
  };

  return (
    <div className="agro-chemical-container">
      <header className="section-header">
        <h1 className="section-title">Agricultural Solutions</h1>
        <p className="section-subtitle">
          Discover our comprehensive range of agricultural products designed to enhance crop productivity
        </p>
      </header>

      <nav className="chemical-tabs" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabChange(tab)}
            role="tab"
            aria-selected={activeTab === tab}
            aria-controls={`panel-${tab.replace(/\s+/g, '-').toLowerCase()}`}
          >
            {tab}
          </button>
        ))}
      </nav>

      <main 
        className="chemical-content"
        id={`panel-${activeTab.replace(/\s+/g, '-').toLowerCase()}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <div className="category-info">
          <h2 className="category-title">{activeTab}</h2>
          <p className="category-count">
            {categories[activeTab].length} categories available
          </p>
        </div>

        <div className="chemical-card-grid">
          {categories[activeTab].map((item) => (
            <CategoryCard key={item.id} item={item} />
          ))}
        </div>
      </main>

      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default AgroChemicalCategories;