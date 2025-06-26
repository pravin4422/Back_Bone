import React, { useState } from 'react';
import '../../css/Agrochemicals/MacroNutrients.css';

// Separate component for macro nutrient card
const MacroNutrientCard = ({ nutrient, onClick }) => (
  <div 
    className="macronutrient-card clickable"
    onClick={() => onClick(nutrient)}
  >
    <img src={nutrient.image} alt={nutrient.name} className="macronutrient-image" />
    <div className="macronutrient-info">
      <h3>{nutrient.name}</h3>
      <span className="macronutrient-category">{nutrient.category}</span>
      <p>{nutrient.content}</p>
      <div className="click-hint">Click for detailed information</div>
    </div>
  </div>
);

// Separate component for detailed view
const MacroNutrientDetailView = ({ nutrient, onBack }) => (
  <div className="macronutrient-detail-view">
    <div className="detail-header">
      <button className="back-button" onClick={onBack}>
        ← Back to Products
      </button>
      <h1>{nutrient.name}</h1>
    </div>

    <div className="detail-content">
      <div className="detail-image-section">
        <img 
          src={nutrient.image} 
          alt={nutrient.name}
          className="detail-image"
        />
        <div className="category-badge">
          {nutrient.category}
        </div>
      </div>

      <div className="detail-info-section">
        <div className="info-grid">
          <InfoCard title="Nutrient Content" value={nutrient.detailedInfo?.nutrientContent} />
          <InfoCard title="NPK Ratio" value={nutrient.detailedInfo?.npkRatio} />
          <InfoCard title="Form" value={nutrient.detailedInfo?.form} />
          <InfoCard title="Recommended Crops" value={nutrient.detailedInfo?.recommendedCrops} />
          <InfoCard title="Application Rate" value={nutrient.detailedInfo?.applicationRate} />
          <InfoCard title="Application Method" value={nutrient.detailedInfo?.applicationMethod} />
          <InfoCard title="Best Application Time" value={nutrient.detailedInfo?.bestApplicationTime} />
          <InfoCard title="Storage Instructions" value={nutrient.detailedInfo?.storageInstructions} />
        </div>

        <div className="basic-info">
          <h3>Overview</h3>
          <p>{nutrient.content}</p>
        </div>
      </div>
    </div>
  </div>
);

// Reusable info card component
const InfoCard = ({ title, value }) => (
  <div className="info-card">
    <h3>{title}</h3>
    <p>{value || "Information not available"}</p>
  </div>
);

function MacroNutrients() {
  const [selectedNutrient, setSelectedNutrient] = useState(null);

  // Complete macro nutrients data
  const macroNutrients = [
    {
      id: 1,
      name: "Urea Boost 46",
      image: "/assets/macronutrients/urea.jpg",
      category: "Nitrogen Fertilizer",
      content: "High nitrogen content fertilizer for vegetative growth and leaf development.",
      detailedInfo: {
        nutrientContent: "46% Nitrogen",
        npkRatio: "46-0-0",
        form: "Granular/Prilled",
        recommendedCrops: "Wheat, rice, maize, vegetables, sugarcane",
        applicationRate: "100-200 kg/ha",
        applicationMethod: "Broadcasting, side dressing, foliar spray",
        bestApplicationTime: "During active growth phase",
        storageInstructions: "Store in cool, dry place away from moisture"
      }
    },
    {
      id: 2,
      name: "DAP Premium",
      image: "/assets/macronutrients/dap.jpg",
      category: "Phosphorus Fertilizer",
      content: "Diammonium Phosphate - Essential for root development and early plant growth.",
      detailedInfo: {
        nutrientContent: "18% Nitrogen, 46% Phosphorus",
        npkRatio: "18-46-0",
        form: "Granular",
        recommendedCrops: "All crops, especially at planting",
        applicationRate: "100-150 kg/ha",
        applicationMethod: "Basal application, drilling",
        bestApplicationTime: "At sowing/planting time",
        storageInstructions: "Keep dry and avoid caking"
      }
    },
    {
      id: 3,
      name: "MOP Gold",
      image: "/assets/macronutrients/mop.jpg",
      category: "Potassium Fertilizer",
      content: "Muriate of Potash - Enhances fruit quality, disease resistance, and water use efficiency.",
      detailedInfo: {
        nutrientContent: "60% Potassium",
        npkRatio: "0-0-60",
        form: "Granular/Crystalline",
        recommendedCrops: "Fruits, vegetables, cotton, sugarcane",
        applicationRate: "50-100 kg/ha",
        applicationMethod: "Broadcasting, fertigation",
        bestApplicationTime: "Flowering and fruit development stage",
        storageInstructions: "Store in moisture-proof containers"
      }
    },
    {
      id: 4,
      name: "Ammonium Sulphate Pro",
      image: "/assets/macronutrients/ammonium_sulphate.jpg",
      category: "Nitrogen-Sulphur Fertilizer",
      content: "Provides nitrogen and sulphur for protein synthesis and oil content improvement.",
      detailedInfo: {
        nutrientContent: "21% Nitrogen, 24% Sulphur",
        npkRatio: "21-0-0 + 24% S",
        form: "Crystalline",
        recommendedCrops: "Oilseeds, pulses, tea, coffee",
        applicationRate: "150-250 kg/ha",
        applicationMethod: "Broadcasting, basal application",
        bestApplicationTime: "Before sowing and during tillering",
        storageInstructions: "Store in dry conditions to prevent caking"
      }
    },
    {
      id: 5,
      name: "Single Super Phosphate",
      image: "/assets/macronutrients/ssp.jpg",
      category: "Phosphorus-Sulphur Fertilizer",
      content: "Traditional phosphatic fertilizer with added sulphur and calcium benefits.",
      detailedInfo: {
        nutrientContent: "16% Phosphorus, 12% Sulphur, 20% Calcium",
        npkRatio: "0-16-0 + 12% S + 20% Ca",
        form: "Granular/Powder",
        recommendedCrops: "All crops, especially oilseeds and pulses",
        applicationRate: "200-300 kg/ha",
        applicationMethod: "Basal application, drilling",
        bestApplicationTime: "At planting time",
        storageInstructions: "Keep dry and well-ventilated storage"
      }
    },
    {
      id: 6,
      name: "NPK 20:20:0:13",
      image: "/assets/macronutrients/npk_20_20_0.jpg",
      category: "Complex Fertilizer",
      content: "Balanced NPK with sulphur for comprehensive plant nutrition.",
      detailedInfo: {
        nutrientContent: "20% N, 20% P, 13% S",
        npkRatio: "20-20-0 + 13% S",
        form: "Granular",
        recommendedCrops: "Wheat, rice, cotton, vegetables",
        applicationRate: "125-200 kg/ha",
        applicationMethod: "Basal application, broadcasting",
        bestApplicationTime: "At sowing time",
        storageInstructions: "Store in moisture-free environment"
      }
    },
    {
      id: 7,
      name: "NPK 19:19:19",
      image: "/assets/macronutrients/npk_19_19_19.jpg",
      category: "Complete Fertilizer",
      content: "Fully water-soluble balanced fertilizer for fertigation and foliar application.",
      detailedInfo: {
        nutrientContent: "19% N, 19% P, 19% K",
        npkRatio: "19-19-19",
        form: "Water Soluble Crystals",
        recommendedCrops: "Fruits, vegetables, flowers, greenhouse crops",
        applicationRate: "5-10 kg/ha (foliar), 25-50 kg/ha (fertigation)",
        applicationMethod: "Fertigation, foliar spray, drip irrigation",
        bestApplicationTime: "Throughout growing season",
        storageInstructions: "Store in airtight containers away from humidity"
      }
    },
    {
      id: 8,
      name: "Calcium Ammonium Nitrate",
      image: "/assets/macronutrients/can.jpg",
      category: "Nitrogen-Calcium Fertilizer",
      content: "Quick release nitrogen with calcium for cell wall strength and disease resistance.",
      detailedInfo: {
        nutrientContent: "26% Nitrogen, 10% Calcium",
        npkRatio: "26-0-0 + 10% Ca",
        form: "Granular/Prilled",
        recommendedCrops: "Vegetables, fruits, field crops",
        applicationRate: "100-175 kg/ha",
        applicationMethod: "Top dressing, side dressing",
        bestApplicationTime: "During active growth periods",
        storageInstructions: "Store in cool, dry place away from combustibles"
      }
    },
    {
      id: 9,
      name: "Potassium Sulphate Premium",
      image: "/assets/macronutrients/potassium_sulphate.jpg",
      category: "Potassium-Sulphur Fertilizer",
      content: "Chloride-free potash with sulphur for quality crops and salt-sensitive plants.",
      detailedInfo: {
        nutrientContent: "50% Potassium, 18% Sulphur",
        npkRatio: "0-0-50 + 18% S",
        form: "Granular/Crystalline",
        recommendedCrops: "Tobacco, potatoes, fruits, vegetables",
        applicationRate: "75-125 kg/ha",
        applicationMethod: "Broadcasting, fertigation",
        bestApplicationTime: "Pre-flowering to fruit development",
        storageInstructions: "Store in dry conditions to prevent lumping"
      }
    },
    {
      id: 10,
      name: "NPK 12:32:16",
      image: "/assets/macronutrients/npk_12_32_16.jpg",
      category: "Starter Fertilizer",
      content: "High phosphorus starter fertilizer for seedling establishment and root development.",
      detailedInfo: {
        nutrientContent: "12% N, 32% P, 16% K",
        npkRatio: "12-32-16",
        form: "Granular",
        recommendedCrops: "Maize, cotton, vegetables, transplanted crops",
        applicationRate: "100-150 kg/ha",
        applicationMethod: "Band placement, starter application",
        bestApplicationTime: "At planting time",
        storageInstructions: "Keep in moisture-proof storage"
      }
    },
    {
      id: 11,
      name: "NPK 15:15:15",
      image: "/assets/macronutrients/npk_15_15_15.jpg",
      category: "Balanced Fertilizer",
      content: "Equal ratio NPK for balanced nutrition throughout the growing season.",
      detailedInfo: {
        nutrientContent: "15% N, 15% P, 15% K",
        npkRatio: "15-15-15",
        form: "Granular",
        recommendedCrops: "All crops requiring balanced nutrition",
        applicationRate: "150-250 kg/ha",
        applicationMethod: "Broadcasting, basal application",
        bestApplicationTime: "At sowing and during growth stages",
        storageInstructions: "Store in dry, well-ventilated area"
      }
    },
    {
      id: 12,
      name: "Ammonium Phosphate",
      image: "/assets/macronutrients/map.jpg",
      category: "Nitrogen-Phosphorus Fertilizer",
      content: "High analysis NP fertilizer for efficient nutrient uptake and reduced application costs.",
      detailedInfo: {
        nutrientContent: "12% Nitrogen, 61% Phosphorus",
        npkRatio: "12-61-0",
        form: "Granular",
        recommendedCrops: "All crops, especially P-deficient soils",
        applicationRate: "75-125 kg/ha",
        applicationMethod: "Basal application, band placement",
        bestApplicationTime: "At planting time",
        storageInstructions: "Store in moisture-free conditions"
      }
    },
    {
      id: 13,
      name: "Calcium Nitrate",
      image: "/assets/macronutrients/calcium_nitrate.jpg",
      category: "Calcium-Nitrogen Fertilizer",
      content: "Highly soluble calcium and nitrogen source for premium crop quality.",
      detailedInfo: {
        nutrientContent: "15.5% Nitrogen, 19% Calcium",
        npkRatio: "15.5-0-0 + 19% Ca",
        form: "Water Soluble Granules",
        recommendedCrops: "Tomatoes, peppers, leafy vegetables, fruits",
        applicationRate: "100-200 kg/ha",
        applicationMethod: "Fertigation, foliar spray",
        bestApplicationTime: "Throughout growing season",
        storageInstructions: "Store in airtight containers"
      }
    },
    {
      id: 14,
      name: "NPK 20:10:10",
      image: "/assets/macronutrients/npk_20_10_10.jpg",
      category: "High Nitrogen Fertilizer",
      content: "Nitrogen-rich formulation for leafy crops and vegetative growth promotion.",
      detailedInfo: {
        nutrientContent: "20% N, 10% P, 10% K",
        npkRatio: "20-10-10",
        form: "Granular",
        recommendedCrops: "Leafy vegetables, tea, coffee, turf grass",
        applicationRate: "150-200 kg/ha",
        applicationMethod: "Broadcasting, top dressing",
        bestApplicationTime: "During vegetative growth phase",
        storageInstructions: "Keep dry and avoid moisture exposure"
      }
    },
    {
      id: 15,
      name: "NPK 10:26:26",
      image: "/assets/macronutrients/npk_10_26_26.jpg",
      category: "Flowering Fertilizer",
      content: "High P&K fertilizer for flowering, fruiting, and root development stages.",
      detailedInfo: {
        nutrientContent: "10% N, 26% P, 26% K",
        npkRatio: "10-26-26",
        form: "Granular",
        recommendedCrops: "Fruits, vegetables, flowering plants",
        applicationRate: "125-175 kg/ha",
        applicationMethod: "Broadcasting, fertigation",
        bestApplicationTime: "Pre-flowering to fruit development",
        storageInstructions: "Store in moisture-proof environment"
      }
    },
    {
      id: 16,
      name: "Potassium Nitrate",
      image: "/assets/macronutrients/potassium_nitrate.jpg",
      category: "Potassium-Nitrogen Fertilizer",
      content: "Premium water-soluble fertilizer combining readily available nitrogen and potassium.",
      detailedInfo: {
        nutrientContent: "13% Nitrogen, 46% Potassium",
        npkRatio: "13-0-46",
        form: "Water Soluble Crystals",
        recommendedCrops: "High-value crops, greenhouse vegetables, fruits",
        applicationRate: "50-100 kg/ha",
        applicationMethod: "Fertigation, foliar application",
        bestApplicationTime: "Fruit development and maturation",
        storageInstructions: "Store in dry, airtight containers"
      }
    },
    {
      id: 17,
      name: "NPK 14:28:14",
      image: "/assets/macronutrients/npk_14_28_14.jpg",
      category: "Phosphorus Rich Fertilizer",
      content: "High phosphorus content for root establishment and early plant development.",
      detailedInfo: {
        nutrientContent: "14% N, 28% P, 14% K",
        npkRatio: "14-28-14",
        form: "Granular",
        recommendedCrops: "Root crops, cereals, legumes",
        applicationRate: "125-200 kg/ha",
        applicationMethod: "Basal application, starter fertilizer",
        bestApplicationTime: "At sowing/planting time",
        storageInstructions: "Keep in dry storage conditions"
      }
    },
    {
      id: 18,
      name: "NPK Growth Plus",
      image: "/assets/macronutrients/npk_growth_plus.jpg",
      category: "Enhanced Efficiency Fertilizer",
      content: "Slow-release NPK with micronutrients for sustained plant nutrition.",
      detailedInfo: {
        nutrientContent: "16% N, 16% P, 16% K + Micronutrients",
        npkRatio: "16-16-16 + Micro",
        form: "Coated Granules",
        recommendedCrops: "Long-duration crops, perennials, ornamentals",
        applicationRate: "100-150 kg/ha",
        applicationMethod: "Broadcasting, incorporation",
        bestApplicationTime: "Beginning of growing season",
        storageInstructions: "Store in cool, dry conditions"
      }
    },
    {
      id: 19,
      name: "Triple Super Phosphate",
      image: "/assets/macronutrients/tsp.jpg",
      category: "High Phosphorus Fertilizer",
      content: "Concentrated phosphatic fertilizer for maximum phosphorus availability.",
      detailedInfo: {
        nutrientContent: "46% Phosphorus",
        npkRatio: "0-46-0",
        form: "Granular",
        recommendedCrops: "P-deficient soils, all crops",
        applicationRate: "75-150 kg/ha",
        applicationMethod: "Basal application, band placement",
        bestApplicationTime: "Before sowing/planting",
        storageInstructions: "Store in moisture-free environment"
      }
    },
    {
      id: 20,
      name: "NPK Water Soluble Premium",
      image: "/assets/macronutrients/npk_water_soluble.jpg",
      category: "Fertigation Fertilizer",
      content: "100% water-soluble NPK for precision fertigation and hydroponic systems.",
      detailedInfo: {
        nutrientContent: "20% N, 20% P, 20% K",
        npkRatio: "20-20-20",
        form: "Water Soluble Powder",
        recommendedCrops: "Protected cultivation, high-tech farming",
        applicationRate: "25-50 kg/ha",
        applicationMethod: "Fertigation, hydroponic solution",
        bestApplicationTime: "Throughout crop cycle",
        storageInstructions: "Store in moisture-proof sealed containers"
      }
    },
    {
      id: 21,
      name: "Magnesium Sulphate",
      image: "/assets/macronutrients/magnesium_sulphate.jpg",
      category: "Secondary Macronutrient",
      content: "Essential for chlorophyll formation and enzyme activation in plants.",
      detailedInfo: {
        nutrientContent: "16% Magnesium, 32% Sulphur",
        npkRatio: "0-0-0 + 16% Mg + 32% S",
        form: "Crystalline/Granular",
        recommendedCrops: "All crops, especially Mg-deficient soils",
        applicationRate: "25-50 kg/ha",
        applicationMethod: "Soil application, foliar spray",
        bestApplicationTime: "Throughout growing season",
        storageInstructions: "Store in dry conditions"
      }
    },
    {
      id: 22,
      name: "NPK 28:28:0",
      image: "/assets/macronutrients/npk_28_28_0.jpg",
      category: "Liquid Fertilizer",
      content: "High analysis liquid NP fertilizer for easy application and quick uptake.",
      detailedInfo: {
        nutrientContent: "28% N, 28% P",
        npkRatio: "28-28-0",
        form: "Liquid Suspension",
        recommendedCrops: "Row crops, vegetables, fruits",
        applicationRate: "150-300 L/ha",
        applicationMethod: "Liquid application, starter fertilizer",
        bestApplicationTime: "At planting and early growth",
        storageInstructions: "Store above freezing point, agitate before use"
      }
    },
    {
      id: 23,
      name: "Sulphur Bentonite",
      image: "/assets/macronutrients/sulphur_bentonite.jpg",
      category: "Sulphur Fertilizer",
      content: "Slow-release sulphur fertilizer with extended availability for crops.",
      detailedInfo: {
        nutrientContent: "90% Sulphur",
        npkRatio: "0-0-0 + 90% S",
        form: "Granular with Clay Coating",
        recommendedCrops: "Oilseeds, pulses, onion, garlic",
        applicationRate: "15-25 kg/ha",
        applicationMethod: "Broadcasting, incorporation",
        bestApplicationTime: "Before sowing, basal application",
        storageInstructions: "Store in dry place to prevent clumping"
      }
    },
    {
      id: 24,
      name: "NPK Organic Plus",
      image: "/assets/macronutrients/npk_organic.jpg",
      category: "Organic Fertilizer",
      content: "Organic NPK fertilizer with natural ingredients for sustainable farming.",
      detailedInfo: {
        nutrientContent: "8% N, 8% P, 8% K + Organic Matter",
        npkRatio: "8-8-8 + Organic",
        form: "Granular/Pellets",
        recommendedCrops: "Organic farming, vegetables, fruits",
        applicationRate: "250-500 kg/ha",
        applicationMethod: "Broadcasting, incorporation",
        bestApplicationTime: "Before planting and during growth",
        storageInstructions: "Store in cool, dry place away from moisture"
      }
    },
    {
      id: 25,
      name: "NPK 13:40:13",
      image: "/assets/macronutrients/npk_13_40_13.jpg",
      category: "High Phosphorus Starter",
      content: "Super starter fertilizer with very high phosphorus for rapid establishment.",
      detailedInfo: {
        nutrientContent: "13% N, 40% P, 13% K",
        npkRatio: "13-40-13",
        form: "Granular",
        recommendedCrops: "Transplanted crops, seedlings, new plantings",
        applicationRate: "100-125 kg/ha",
        applicationMethod: "Band placement, transplant holes",
        bestApplicationTime: "At transplanting/planting time",
        storageInstructions: "Keep dry and prevent moisture absorption"
      }
    }
  ];

  const handleNutrientClick = (nutrient) => {
    setSelectedNutrient(nutrient);
  };

  const handleBackClick = () => {
    setSelectedNutrient(null);
  };

  if (selectedNutrient) {
    return (
      <MacroNutrientDetailView 
        nutrient={selectedNutrient} 
        onBack={handleBackClick} 
      />
    );
  }

  return (
    <div className="macronutrients-container">
      <div className="macronutrients-header">
        <h1>Macro Nutrients</h1>
        <p>Essential primary and secondary nutrients for optimal plant growth and development</p>
      </div>
      
      <div className="macronutrients-grid">
        {macroNutrients.map((nutrient) => (
          <MacroNutrientCard
            key={nutrient.id}
            nutrient={nutrient}
            onClick={handleNutrientClick}
          />
        ))}
      </div>
    </div>
  );
}

export default MacroNutrients;