import React, { useState } from 'react';
import '../../css/Agrochemicals/WaterSolubleFertilizers.css';

// Separate component for fertilizer card
const FertilizerCard = ({ fertilizer, onClick }) => (
  <div 
    className="fertilizer-card clickable"
    onClick={() => onClick(fertilizer)}
  >
    <img src={fertilizer.image} alt={fertilizer.name} className="fertilizer-image" />
    <div className="fertilizer-info">
      <h3>{fertilizer.name}</h3>
      <span className="fertilizer-category">{fertilizer.category}</span>
      <p>{fertilizer.content}</p>
      <div className="click-hint">Click for detailed information</div>
    </div>
  </div>
);

// Separate component for detailed view
const FertilizerDetailView = ({ fertilizer, onBack }) => (
  <div className="fertilizer-detail-view">
    <div className="detail-header">
      <button className="back-button" onClick={onBack}>
        ← Back to Products
      </button>
      <h1>{fertilizer.name}</h1>
    </div>

    <div className="detail-content">
      <div className="detail-image-section">
        <img 
          src={fertilizer.image} 
          alt={fertilizer.name}
          className="detail-image"
        />
        <div className="category-badge">
          {fertilizer.category}
        </div>
      </div>

      <div className="detail-info-section">
        <div className="info-grid">
          <InfoCard title="NPK Ratio" value={fertilizer.detailedInfo?.npkRatio} />
          <InfoCard title="Solubility" value={fertilizer.detailedInfo?.solubility} />
          <InfoCard title="pH Level" value={fertilizer.detailedInfo?.phLevel} />
          <InfoCard title="Application Rate" value={fertilizer.detailedInfo?.applicationRate} />
          <InfoCard title="Crop Compatibility" value={fertilizer.detailedInfo?.cropCompatibility} />
          <InfoCard title="Growth Stage" value={fertilizer.detailedInfo?.growthStage} />
          <InfoCard title="Application Method" value={fertilizer.detailedInfo?.applicationMethod} />
          <InfoCard title="Storage Instructions" value={fertilizer.detailedInfo?.storageInstructions} />
        </div>

        <div className="basic-info">
          <h3>Overview</h3>
          <p>{fertilizer.content}</p>
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

function WaterSolubleFertilizers() {
  const [selectedFertilizer, setSelectedFertilizer] = useState(null);

  // Complete water soluble fertilizers data
  const fertilizers = [
    {
      id: 1,
      name: "NPK 19-19-19",
      image: "/assets/fertilizers/npk-19-19-19.jpg",
      category: "Balanced NPK",
      content: "Complete balanced fertilizer with equal nitrogen, phosphorus, and potassium for all-round plant nutrition.",
      detailedInfo: {
        npkRatio: "19-19-19",
        solubility: "100% water soluble",
        phLevel: "5.5-6.5",
        applicationRate: "2-3 g/L water",
        cropCompatibility: "All crops, vegetables, fruits, ornamentals",
        growthStage: "All growth stages",
        applicationMethod: "Foliar spray, fertigation, drip irrigation",
        storageInstructions: "Store in cool, dry place away from moisture"
      }
    },
    {
      id: 2,
      name: "NPK 20-20-20",
      image: "/assets/fertilizers/npk-20-20-20.jpg",
      category: "Balanced NPK",
      content: "High-grade balanced fertilizer with 20% each of nitrogen, phosphorus, and potassium for maximum plant growth.",
      detailedInfo: {
        npkRatio: "20-20-20",
        solubility: "100% water soluble",
        phLevel: "5.0-6.0",
        applicationRate: "2-4 g/L water",
        cropCompatibility: "Vegetables, fruits, flowers, greenhouse crops",
        growthStage: "Vegetative to flowering stage",
        applicationMethod: "Foliar application, drip irrigation, hydroponics",
        storageInstructions: "Keep in sealed container in dry conditions"
      }
    },
    {
      id: 3,
      name: "NPK 13-40-13",
      image: "/assets/fertilizers/npk-13-40-13.jpg",
      category: "High Phosphorus",
      content: "Phosphorus-rich fertilizer for promoting root development and flowering in plants.",
      detailedInfo: {
        npkRatio: "13-40-13",
        solubility: "100% water soluble",
        phLevel: "4.5-5.5",
        applicationRate: "1.5-2.5 g/L water",
        cropCompatibility: "Flowering plants, fruit trees, root vegetables",
        growthStage: "Flowering and fruiting stage",
        applicationMethod: "Foliar spray, soil application, fertigation",
        storageInstructions: "Store away from heat and direct sunlight"
      }
    },
    {
      id: 4,
      name: "NPK 12-61-00",
      image: "/assets/fertilizers/npk-12-61-00.jpg",
      category: "High Phosphorus",
      content: "Ultra-high phosphorus fertilizer for enhanced root development and flower initiation.",
      detailedInfo: {
        npkRatio: "12-61-00",
        solubility: "100% water soluble",
        phLevel: "4.0-5.0",
        applicationRate: "1-2 g/L water",
        cropCompatibility: "All flowering crops, fruit trees, ornamentals",
        growthStage: "Pre-flowering and flowering stage",
        applicationMethod: "Foliar application, drip irrigation",
        storageInstructions: "Keep in original packaging in cool place"
      }
    },
    {
      id: 5,
      name: "NPK 00-52-34",
      image: "/assets/fertilizers/npk-00-52-34.jpg",
      category: "Phosphorus Potassium",
      content: "Specialized fertilizer for flowering and fruiting stages with high phosphorus and potassium content.",
      detailedInfo: {
        npkRatio: "00-52-34",
        solubility: "100% water soluble",
        phLevel: "4.5-5.5",
        applicationRate: "1.5-3 g/L water",
        cropCompatibility: "Fruit crops, vegetables, flowering plants",
        growthStage: "Flowering to fruit maturation",
        applicationMethod: "Fertigation, foliar spray, hydroponics",
        storageInstructions: "Store in dry area below 30°C"
      }
    },
    {
      id: 6,
      name: "NPK 18-18-18+TE",
      image: "/assets/fertilizers/npk-18-18-18-te.jpg",
      category: "Balanced with Trace Elements",
      content: "Balanced NPK fertilizer enriched with essential trace elements for comprehensive plant nutrition.",
      detailedInfo: {
        npkRatio: "18-18-18 + Trace Elements",
        solubility: "100% water soluble",
        phLevel: "5.5-6.5",
        applicationRate: "2-3 g/L water",
        cropCompatibility: "All crops, especially micronutrient deficient soils",
        growthStage: "All growth stages",
        applicationMethod: "Foliar application, fertigation, soil application",
        storageInstructions: "Protect from moisture and extreme temperatures"
      }
    },
    {
      id: 7,
      name: "Potassium Nitrate",
      image: "/assets/fertilizers/potassium-nitrate.jpg",
      category: "High Potassium",
      content: "Premium potassium nitrate fertilizer providing both potassium and nitrogen for fruit quality and plant vigor.",
      detailedInfo: {
        npkRatio: "13-00-46",
        solubility: "100% water soluble",
        phLevel: "6.0-7.0",
        applicationRate: "1-2 g/L water",
        cropCompatibility: "Fruits, vegetables, flowers, greenhouse crops",
        growthStage: "Fruiting and maturation stage",
        applicationMethod: "Foliar spray, drip irrigation, hydroponics",
        storageInstructions: "Store in cool, dry place away from organic materials"
      }
    },
    {
      id: 8,
      name: "Calcium Nitrate",
      image: "/assets/fertilizers/calcium-nitrate.jpg",
      category: "Calcium Nitrogen",
      content: "Water-soluble calcium nitrate for preventing calcium deficiency disorders and promoting cell wall strength.",
      detailedInfo: {
        npkRatio: "15.5-00-00 + 19% Ca",
        solubility: "100% water soluble",
        phLevel: "6.0-7.0",
        applicationRate: "2-3 g/L water",
        cropCompatibility: "Tomatoes, peppers, fruits, leafy vegetables",
        growthStage: "Fruit development stage",
        applicationMethod: "Foliar application, fertigation, soil application",
        storageInstructions: "Keep in sealed container away from moisture"
      }
    },
    {
      id: 9,
      name: "Magnesium Sulphate",
      image: "/assets/fertilizers/magnesium-sulphate.jpg",
      category: "Magnesium Sulphur",
      content: "Pure magnesium sulphate (Epsom salt) for correcting magnesium deficiency and enhancing chlorophyll production.",
      detailedInfo: {
        npkRatio: "00-00-00 + 16% Mg + 13% S",
        solubility: "100% water soluble",
        phLevel: "5.5-6.5",
        applicationRate: "1-2 g/L water",
        cropCompatibility: "All crops, especially citrus, tomatoes, peppers",
        growthStage: "Vegetative growth stage",
        applicationMethod: "Foliar spray, soil application, fertigation",
        storageInstructions: "Store in dry conditions below 25°C"
      }
    },
    {
      id: 10,
      name: "Mono Ammonium Phosphate",
      image: "/assets/fertilizers/mono-ammonium-phosphate.jpg",
      category: "Nitrogen Phosphorus",
      content: "High-quality MAP fertilizer providing readily available nitrogen and phosphorus for early plant growth.",
      detailedInfo: {
        npkRatio: "12-61-00",
        solubility: "100% water soluble",
        phLevel: "4.0-4.5",
        applicationRate: "1.5-2.5 g/L water",
        cropCompatibility: "All crops, especially during establishment",
        growthStage: "Seedling to early vegetative stage",
        applicationMethod: "Starter solution, foliar spray, fertigation",
        storageInstructions: "Keep in dry place away from alkaline materials"
      }
    },
    {
      id: 11,
      name: "Potassium Sulphate",
      image: "/assets/fertilizers/potassium-sulphate.jpg",
      category: "Potassium Sulphur",
      content: "Premium potassium sulphate fertilizer for chloride-sensitive crops and quality fruit production.",
      detailedInfo: {
        npkRatio: "00-00-50 + 18% S",
        solubility: "100% water soluble",
        phLevel: "5.5-6.5",
        applicationRate: "1-2 g/L water",
        cropCompatibility: "Fruits, tobacco, potatoes, chloride-sensitive crops",
        growthStage: "Flowering to maturation",
        applicationMethod: "Foliar application, drip irrigation, hydroponics",
        storageInstructions: "Store in cool, dry place in sealed container"
      }
    },
    {
      id: 12,
      name: "NPK 15-15-15+TE",
      image: "/assets/fertilizers/npk-15-15-15-te.jpg",
      category: "Balanced with Trace Elements",
      content: "Balanced fertilizer with trace elements for comprehensive nutrition in all types of crops.",
      detailedInfo: {
        npkRatio: "15-15-15 + Trace Elements",
        solubility: "100% water soluble",
        phLevel: "5.5-6.5",
        applicationRate: "2-4 g/L water",
        cropCompatibility: "All crops, field crops, vegetables, fruits",
        growthStage: "All growth stages",
        applicationMethod: "Foliar spray, fertigation, soil application",
        storageInstructions: "Protect from moisture and store in cool place"
      }
    },
    {
      id: 13,
      name: "Urea Phosphate",
      image: "/assets/fertilizers/urea-phosphate.jpg",
      category: "Nitrogen Phosphorus",
      content: "Concentrated nitrogen and phosphorus fertilizer with acidifying properties for alkaline soils.",
      detailedInfo: {
        npkRatio: "17-44-00",
        solubility: "100% water soluble",
        phLevel: "1.8-2.2",
        applicationRate: "1-2 g/L water",
        cropCompatibility: "All crops, especially in alkaline soil conditions",
        growthStage: "Early vegetative to flowering",
        applicationMethod: "Fertigation, foliar spray, soil acidification",
        storageInstructions: "Store in moisture-free environment"
      }
    },
    {
      id: 14,
      name: "NPK 06-12-36+TE",
      image: "/assets/fertilizers/npk-06-12-36-te.jpg",
      category: "High Potassium with TE",
      content: "High potassium fertilizer with trace elements for fruit quality and disease resistance.",
      detailedInfo: {
        npkRatio: "06-12-36 + Trace Elements",
        solubility: "100% water soluble",
        phLevel: "5.0-6.0",
        applicationRate: "2-3 g/L water",
        cropCompatibility: "Fruits, vegetables, tuber crops",
        growthStage: "Fruit development to maturation",
        applicationMethod: "Foliar application, drip irrigation, hydroponics",
        storageInstructions: "Keep in sealed container away from humidity"
      }
    },
    {
      id: 15,
      name: "Ammonium Sulphate",
      image: "/assets/fertilizers/ammonium-sulphate.jpg",
      category: "Nitrogen Sulphur",
      content: "Pure ammonium sulphate providing nitrogen and sulphur for protein synthesis and chlorophyll formation.",
      detailedInfo: {
        npkRatio: "21-00-00 + 24% S",
        solubility: "100% water soluble",
        phLevel: "5.0-6.0",
        applicationRate: "1-2 g/L water",
        cropCompatibility: "All crops, especially cereals and oilseeds",
        growthStage: "Vegetative growth stage",
        applicationMethod: "Foliar spray, soil application, fertigation",
        storageInstructions: "Store in dry place below 30°C"
      }
    },
    {
      id: 16,
      name: "NPK 10-26-26",
      image: "/assets/fertilizers/npk-10-26-26.jpg",
      category: "Phosphorus Potassium",
      content: "Specialized fertilizer for flowering and fruiting with balanced phosphorus and potassium.",
      detailedInfo: {
        npkRatio: "10-26-26",
        solubility: "100% water soluble",
        phLevel: "5.0-6.0",
        applicationRate: "2-3 g/L water",
        cropCompatibility: "Fruits, vegetables, flowering plants",
        growthStage: "Flowering to fruit maturation",
        applicationMethod: "Fertigation, foliar application, hydroponics",
        storageInstructions: "Store in cool, dry conditions"
      }
    },
    {
      id: 17,
      name: "Chelated Micronutrients",
      image: "/assets/fertilizers/chelated-micronutrients.jpg",
      category: "Micronutrients",
      content: "Complete chelated micronutrient mix containing Iron, Zinc, Manganese, Copper, Boron, and Molybdenum.",
      detailedInfo: {
        npkRatio: "Micronutrients: Fe, Zn, Mn, Cu, B, Mo",
        solubility: "100% water soluble",
        phLevel: "6.0-7.0",
        applicationRate: "0.5-1 g/L water",
        cropCompatibility: "All crops, especially micronutrient deficient areas",
        growthStage: "All growth stages",
        applicationMethod: "Foliar spray, fertigation, soil application",
        storageInstructions: "Store away from direct sunlight and moisture"
      }
    },
    {
      id: 18,
      name: "Potassium Phosphate",
      image: "/assets/fertilizers/potassium-phosphate.jpg",
      category: "Phosphorus Potassium",
      content: "High-grade potassium phosphate for enhanced flowering, fruiting, and root development.",
      detailedInfo: {
        npkRatio: "00-52-34",
        solubility: "100% water soluble",
        phLevel: "8.5-9.0",
        applicationRate: "1-2 g/L water",
        cropCompatibility: "Fruits, vegetables, flowers, ornamentals",
        growthStage: "Flowering and fruiting stage",
        applicationMethod: "Foliar spray, drip irrigation, hydroponics",
        storageInstructions: "Keep in sealed container in dry area"
      }
    },
    {
      id: 19,
      name: "NPK 00-00-50",
      image: "/assets/fertilizers/npk-00-00-50.jpg",
      category: "High Potassium",
      content: "Pure potassium fertilizer for fruit quality improvement and disease resistance enhancement.",
      detailedInfo: {
        npkRatio: "00-00-50",
        solubility: "100% water soluble",
        phLevel: "7.0-8.0",
        applicationRate: "1-2 g/L water",
        cropCompatibility: "Fruits, vegetables, tuber crops",
        growthStage: "Fruit development and maturation",
        applicationMethod: "Foliar application, fertigation, hydroponics",
        storageInstructions: "Store in cool, dry place away from moisture"
      }
    },
    {
      id: 20,
      name: "Calcium Chloride",
      image: "/assets/fertilizers/calcium-chloride.jpg",
      category: "Calcium",
      content: "Water-soluble calcium chloride for rapid calcium correction and prevention of physiological disorders.",
      detailedInfo: {
        npkRatio: "00-00-00 + 36% Ca",
        solubility: "100% water soluble",
        phLevel: "7.5-8.5",
        applicationRate: "1-2 g/L water",
        cropCompatibility: "Apples, tomatoes, peppers, leafy vegetables",
        growthStage: "Fruit development stage",
        applicationMethod: "Foliar spray, fertigation, soil application",
        storageInstructions: "Store in dry conditions, highly hygroscopic"
      }
    },
    {
      id: 21,
      name: "NPK 16-08-24+TE",
      image: "/assets/fertilizers/npk-16-08-24-te.jpg",
      category: "High Potassium with TE",
      content: "High potassium fertilizer with trace elements for enhanced fruit quality and plant vigor.",
      detailedInfo: {
        npkRatio: "16-08-24 + Trace Elements",
        solubility: "100% water soluble",
        phLevel: "5.5-6.5",
        applicationRate: "2-3 g/L water",
        cropCompatibility: "Fruits, vegetables, cash crops",
        growthStage: "Vegetative to fruit maturation",
        applicationMethod: "Foliar spray, drip irrigation, fertigation",
        storageInstructions: "Protect from moisture and store in cool place"
      }
    },
    {
      id: 22,
      name: "Ferrous Sulphate",
      image: "/assets/fertilizers/ferrous-sulphate.jpg",
      category: "Iron Sulphur",
      content: "Iron sulphate fertilizer for correcting iron deficiency and preventing chlorosis in plants.",
      detailedInfo: {
        npkRatio: "00-00-00 + 20% Fe + 11% S",
        solubility: "100% water soluble",
        phLevel: "3.5-4.5",
        applicationRate: "1-2 g/L water",
        cropCompatibility: "All crops, especially iron-deficient soils",
        growthStage: "Vegetative growth stage",
        applicationMethod: "Foliar spray, soil application, fertigation",
        storageInstructions: "Store in dry place, protect from oxidation"
      }
    },
    {
      id: 23,
      name: "Zinc Sulphate",
      image: "/assets/fertilizers/zinc-sulphate.jpg",
      category: "Zinc Sulphur",
      content: "Pure zinc sulphate for correcting zinc deficiency and promoting enzyme activity in plants.",
      detailedInfo: {
        npkRatio: "00-00-00 + 21% Zn + 11% S",
        solubility: "100% water soluble",
        phLevel: "4.5-5.5",
        applicationRate: "0.5-1 g/L water",
        cropCompatibility: "Rice, wheat, maize, citrus, all crops",
        growthStage: "Early vegetative to flowering",
        applicationMethod: "Foliar application, soil application, seed treatment",
        storageInstructions: "Keep in sealed container in dry conditions"
      }
    },
    {
      id: 24,
      name: "Manganese Sulphate",
      image: "/assets/fertilizers/manganese-sulphate.jpg",
      category: "Manganese Sulphur",
      content: "High-quality manganese sulphate for correcting manganese deficiency and improving photosynthesis.",
      detailedInfo: {
        npkRatio: "00-00-00 + 32% Mn + 19% S",
        solubility: "100% water soluble",
        phLevel: "4.0-5.0",
        applicationRate: "0.5-1 g/L water",
        cropCompatibility: "All crops, especially alkaline soils",
        growthStage: "Vegetative growth stage",
        applicationMethod: "Foliar spray, soil application, fertigation",
        storageInstructions: "Store away from alkaline materials"
      }
    },
    {
      id: 25,
      name: "Borax",
      image: "/assets/fertilizers/borax.jpg",
      category: "Boron",
      content: "Pure borax fertilizer for correcting boron deficiency and improving flowering and fruit set.",
      detailedInfo: {
        npkRatio: "00-00-00 + 11% B",
        solubility: "100% water soluble",
        phLevel: "9.0-9.5",
        applicationRate: "0.1-0.5 g/L water",
        cropCompatibility: "Fruits, vegetables, pulses, oilseeds",
        growthStage: "Flowering and fruit set stage",
        applicationMethod: "Foliar spray, soil application (use sparingly)",
        storageInstructions: "Store in dry place, handle with care"
      }
    },
    {
      id: 26,
      name: "NPK 14-35-14",
      image: "/assets/fertilizers/npk-14-35-14.jpg",
      category: "High Phosphorus",
      content: "High phosphorus fertilizer for enhanced root development and early plant establishment.",
      detailedInfo: {
        npkRatio: "14-35-14",
        solubility: "100% water soluble",
        phLevel: "4.5-5.5",
        applicationRate: "2-3 g/L water",
        cropCompatibility: "All crops, especially during transplanting",
        growthStage: "Seedling to early vegetative stage",
        applicationMethod: "Starter solution, foliar spray, fertigation",
        storageInstructions: "Keep in cool, dry place away from moisture"
      }
    },
    {
      id: 27,
      name: "Copper Sulphate",
      image: "/assets/fertilizers/copper-sulphate.jpg",
      category: "Copper Sulphur",
      content: "Pure copper sulphate for correcting copper deficiency and enhancing enzyme systems.",
      detailedInfo: {
        npkRatio: "00-00-00 + 25% Cu + 13% S",
        solubility: "100% water soluble",
        phLevel: "3.5-4.5",
        applicationRate: "0.2-0.5 g/L water",
        cropCompatibility: "All crops, especially organic soils",
        growthStage: "Vegetative growth stage",
        applicationMethod: "Foliar spray, soil application, fertigation",
        storageInstructions: "Store in dry place, avoid metal containers"
      }
    },
    {
      id: 28,
      name: "NPK 08-12-24+TE",
      image: "/assets/fertilizers/npk-08-12-24-te.jpg",
      category: "High Potassium with TE",
      content: "High potassium fertilizer with trace elements for superior fruit quality and shelf life.",
      detailedInfo: {
        npkRatio: "08-12-24 + Trace Elements",
        solubility: "100% water soluble",
        phLevel: "5.0-6.0",
        applicationRate: "2-3 g/L water",
        cropCompatibility: "Fruits, vegetables, ornamentals",
        growthStage: "Fruit development to harvest",
        applicationMethod: "Foliar application, drip irrigation, hydroponics",
        storageInstructions: "Store in sealed container in dry area"
      }
    },
    {
      id: 29,
      name: "Sodium Molybdate",
      image: "/assets/fertilizers/sodium-molybdate.jpg",
      category: "Molybdenum",
      content: "High-purity sodium molybdate for correcting molybdenum deficiency in legumes and vegetables.",
      detailedInfo: {
        npkRatio: "00-00-00 + 39% Mo",
        solubility: "100% water soluble",
        phLevel: "7.0-8.0",
        applicationRate: "0.05-0.1 g/L water",
        cropCompatibility: "Legumes, brassicas, citrus, vegetables",
        growthStage: "Early vegetative to flowering",
        applicationMethod: "Foliar spray, seed treatment, soil application",
        storageInstructions: "Store in cool, dry place in sealed container"
      }
    },
    {
      id: 30,
      name: "NPK 22-22-22",
      image: "/assets/fertilizers/npk-22-22-22.jpg",
      category: "High Analysis NPK",
      content: "High-analysis balanced fertilizer for maximum nutrient delivery and superior crop performance.",
      detailedInfo: {
        npkRatio: "22-22-22",
        solubility: "100% water soluble",
        phLevel: "5.5-6.5",
        applicationRate: "1.5-2.5 g/L water",
        cropCompatibility: "All high-value crops, greenhouse cultivation",
        growthStage: "All growth stages",
        applicationMethod: "Foliar spray, fertigation, hydroponics",
        storageInstructions: "Store in moisture-proof container"
      }
    }
  ];

  const handleFertilizerClick = (fertilizer) => {
    setSelectedFertilizer(fertilizer);
  };

  const handleBackClick = () => {
    setSelectedFertilizer(null);
  };

  if (selectedFertilizer) {
    return (
      <FertilizerDetailView 
        fertilizer={selectedFertilizer} 
        onBack={handleBackClick} 
      />
    );
  }

  return (
    <div className="fertilizers-container">
      <div className="fertilizers-header">
        <h1>Water Soluble Fertilizers</h1>
        <p>Premium water-soluble fertilizers for optimal plant nutrition and maximum yields</p>
      </div>
      
      <div className="fertilizers-grid">
        {fertilizers.map((fertilizer) => (
          <FertilizerCard
            key={fertilizer.id}
            fertilizer={fertilizer}
            onClick={handleFertilizerClick}
          />
        ))}
      </div>
    </div>
  );
}

export default WaterSolubleFertilizers;