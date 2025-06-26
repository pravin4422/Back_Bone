import React, { useState } from 'react';
import '../../css/Agrochemicals/MicroNutrients.css';

// Separate component for micronutrient card
const MicroNutrientCard = ({ micronutrient, onClick }) => (
  <div 
    className="micronutrient-card clickable"
    onClick={() => onClick(micronutrient)}
  >
    <img src={micronutrient.image} alt={micronutrient.name} className="micronutrient-image" />
    <div className="micronutrient-info">
      <h3>{micronutrient.name}</h3>
      <span className="micronutrient-category">{micronutrient.category}</span>
      <p>{micronutrient.content}</p>
      <div className="click-hint">Click for detailed information</div>
    </div>
  </div>
);

// Separate component for detailed view
const MicroNutrientDetailView = ({ micronutrient, onBack }) => (
  <div className="micronutrient-detail-view">
    <div className="detail-header">
      <button className="back-button" onClick={onBack}>
        ← Back to Products
      </button>
      <h1>{micronutrient.name}</h1>
    </div>

    <div className="detail-content">
      <div className="detail-image-section">
        <img 
          src={micronutrient.image} 
          alt={micronutrient.name}
          className="detail-image"
        />
        <div className="category-badge">
          {micronutrient.category}
        </div>
      </div>

      <div className="detail-info-section">
        <div className="info-grid">
          <InfoCard title="Nutrient Content" value={micronutrient.detailedInfo?.nutrientContent} />
          <InfoCard title="Formulation" value={micronutrient.detailedInfo?.formulation} />
          <InfoCard title="Application Method" value={micronutrient.detailedInfo?.applicationMethod} />
          <InfoCard title="Target Crops" value={micronutrient.detailedInfo?.targetCrops} />
          <InfoCard title="Application Rate" value={micronutrient.detailedInfo?.applicationRate} />
          <InfoCard title="Deficiency Symptoms" value={micronutrient.detailedInfo?.deficiencySymptoms} />
          <InfoCard title="pH Range" value={micronutrient.detailedInfo?.phRange} />
          <InfoCard title="Storage Instructions" value={micronutrient.detailedInfo?.storageInstructions} />
        </div>

        <div className="basic-info">
          <h3>Overview</h3>
          <p>{micronutrient.content}</p>
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

function MicroNutrients() {
  const [selectedMicroNutrient, setSelectedMicroNutrient] = useState(null);

  // Complete micronutrients data
  const micronutrients = [
    {
      id: 1,
      name: "Zinc Sulphate Heptahydrate",
      image: "/assets/micronutrients/zinc-sulphate.jpg",
      category: "Zinc Supplement",
      content: "Essential micronutrient for enzyme activation and protein synthesis in plants.",
      detailedInfo: {
        nutrientContent: "Zn - 21%, S - 10.5%",
        formulation: "Crystalline powder",
        applicationMethod: "Foliar spray, soil application, fertigation",
        targetCrops: "Rice, wheat, maize, cotton, vegetables, fruit crops",
        applicationRate: "2-3 kg/ha (soil), 0.5% solution (foliar)",
        deficiencySymptoms: "Interveinal chlorosis, stunted growth, small leaves",
        phRange: "Effective in pH 6.0-7.5",
        storageInstructions: "Store in cool, dry place away from moisture"
      }
    },
    {
      id: 2,
      name: "Ferrous Sulphate Heptahydrate",
      image: "/assets/micronutrients/ferrous-sulphate.jpg",
      category: "Iron Supplement",
      content: "Vital for chlorophyll synthesis and electron transport in photosynthesis.",
      detailedInfo: {
        nutrientContent: "Fe - 19%, S - 10.9%",
        formulation: "Crystalline powder",
        applicationMethod: "Foliar spray, soil application, seed treatment",
        targetCrops: "Citrus, apple, grapes, vegetables, cereals",
        applicationRate: "25-50 kg/ha (soil), 0.2-0.5% solution (foliar)",
        deficiencySymptoms: "Interveinal chlorosis in young leaves, yellowing",
        phRange: "Most effective in acidic to neutral pH (5.5-7.0)",
        storageInstructions: "Keep in dry conditions to prevent oxidation"
      }
    },
    {
      id: 3,
      name: "Manganese Sulphate Monohydrate",
      image: "/assets/micronutrients/manganese-sulphate.jpg",
      category: "Manganese Supplement",
      content: "Important for photosynthesis and enzyme activation in metabolic processes.",
      detailedInfo: {
        nutrientContent: "Mn - 32%, S - 18.7%",
        formulation: "Crystalline powder",
        applicationMethod: "Foliar spray, soil application, fertigation",
        targetCrops: "Cereals, oilseeds, vegetables, fruit trees",
        applicationRate: "5-10 kg/ha (soil), 0.2-0.3% solution (foliar)",
        deficiencySymptoms: "Interveinal chlorosis, gray speck in oats, marsh spot in peas",
        phRange: "Effective in pH 5.0-6.5",
        storageInstructions: "Store in sealed containers away from alkaline materials"
      }
    },
    {
      id: 4,
      name: "Copper Sulphate Pentahydrate",
      image: "/assets/micronutrients/copper-sulphate.jpg",
      category: "Copper Supplement",
      content: "Essential for enzyme systems and plays role in plant reproduction.",
      detailedInfo: {
        nutrientContent: "Cu - 25%, S - 12.8%",
        formulation: "Blue crystalline powder",
        applicationMethod: "Foliar spray, soil application, seed treatment",
        targetCrops: "Cereals, vegetables, fruit crops, ornamentals",
        applicationRate: "2-5 kg/ha (soil), 0.2-0.3% solution (foliar)",
        deficiencySymptoms: "Tip burn, stunted growth, poor seed set",
        phRange: "Available in pH 5.0-7.0",
        storageInstructions: "Store in cool, dry place in non-metallic containers"
      }
    },
    {
      id: 5,
      name: "Boric Acid",
      image: "/assets/micronutrients/boric-acid.jpg",
      category: "Boron Supplement",
      content: "Critical for cell wall formation, flowering, and fruit development.",
      detailedInfo: {
        nutrientContent: "B - 17.5%",
        formulation: "White crystalline powder",
        applicationMethod: "Foliar spray, soil application, fertigation",
        targetCrops: "Cotton, sunflower, vegetables, fruit crops, pulses",
        applicationRate: "5-10 kg/ha (soil), 0.1-0.2% solution (foliar)",
        deficiencySymptoms: "Hollow stem, heart rot, poor flowering and fruiting",
        phRange: "Effective across wide pH range (5.5-8.5)",
        storageInstructions: "Keep in dry place away from children and animals"
      }
    },
    {
      id: 6,
      name: "Sodium Molybdate",
      image: "/assets/micronutrients/sodium-molybdate.jpg",
      category: "Molybdenum Supplement",
      content: "Essential for nitrogen fixation and nitrate reduction in plants.",
      detailedInfo: {
        nutrientContent: "Mo - 39.7%",
        formulation: "White crystalline powder",
        applicationMethod: "Foliar spray, seed treatment, soil application",
        targetCrops: "Legumes, cauliflower, cabbage, cereals",
        applicationRate: "1-2 kg/ha (soil), 0.05-0.1% solution (foliar)",
        deficiencySymptoms: "Whiptail in cauliflower, yellow spot in citrus, poor nodulation",
        phRange: "Most available in alkaline soils (pH > 7.0)",
        storageInstructions: "Store in airtight containers in cool, dry place"
      }
    },
    {
      id: 7,
      name: "Chelated Zinc EDTA",
      image: "/assets/micronutrients/zinc-edta.jpg",
      category: "Chelated Zinc",
      content: "Highly available form of zinc that remains stable in soil solution.",
      detailedInfo: {
        nutrientContent: "Zn - 12% (chelated form)",
        formulation: "Light tan powder",
        applicationMethod: "Foliar spray, fertigation, hydroponic solutions",
        targetCrops: "High-value crops, greenhouse vegetables, fruit trees",
        applicationRate: "1-2 kg/ha (soil), 0.1-0.2% solution (foliar)",
        deficiencySymptoms: "Little leaf, rosetting, interveinal chlorosis",
        phRange: "Stable across pH range 4.0-9.0",
        storageInstructions: "Store in sealed containers away from moisture"
      }
    },
    {
      id: 8,
      name: "Chelated Iron EDDHA",
      image: "/assets/micronutrients/iron-eddha.jpg",
      category: "Chelated Iron",
      content: "Most stable chelated iron form, effective in alkaline soils.",
      detailedInfo: {
        nutrientContent: "Fe - 6% (o,o-EDDHA)",
        formulation: "Reddish-brown granules",
        applicationMethod: "Soil application, fertigation, hydroponic solutions",
        targetCrops: "Citrus, grapes, ornamentals, greenhouse crops",
        applicationRate: "3-5 kg/ha (soil), 0.1-0.3% solution (fertigation)",
        deficiencySymptoms: "Iron chlorosis, yellowing of young leaves",
        phRange: "Highly stable in alkaline conditions (pH up to 9.0)",
        storageInstructions: "Protect from light and moisture"
      }
    },
    {
      id: 9,
      name: "Magnesium Sulphate Heptahydrate",
      image: "/assets/micronutrients/magnesium-sulphate.jpg",
      category: "Secondary Nutrient",
      content: "Central atom in chlorophyll molecule, essential for photosynthesis.",
      detailedInfo: {
        nutrientContent: "Mg - 9.8%, S - 13%",
        formulation: "White crystalline salt",
        applicationMethod: "Foliar spray, soil application, fertigation",
        targetCrops: "All crops, especially potatoes, tomatoes, peppers",
        applicationRate: "25-50 kg/ha (soil), 1-2% solution (foliar)",
        deficiencySymptoms: "Interveinal chlorosis starting from older leaves",
        phRange: "Readily available in pH 6.0-8.0",
        storageInstructions: "Store in dry place in sealed containers"
      }
    },
    {
      id: 10,
      name: "Calcium Chloride",
      image: "/assets/micronutrients/calcium-chloride.jpg",
      category: "Calcium Supplement",
      content: "Important for cell wall strength and fruit quality improvement.",
      detailedInfo: {
        nutrientContent: "Ca - 36%, Cl - 64%",
        formulation: "White granular salt",
        applicationMethod: "Foliar spray, fertigation, soil application",
        targetCrops: "Tomatoes, apples, grapes, leafy vegetables",
        applicationRate: "10-25 kg/ha (soil), 0.5-1.0% solution (foliar)",
        deficiencySymptoms: "Blossom end rot, tip burn, poor fruit quality",
        phRange: "Effective across wide pH range",
        storageInstructions: "Keep in airtight containers due to hygroscopic nature"
      }
    },
    {
      id: 11,
      name: "Multi-Micronutrient Mix",
      image: "/assets/micronutrients/multi-mix.jpg",
      category: "Micronutrient Blend",
      content: "Balanced blend of essential micronutrients for comprehensive plant nutrition.",
      detailedInfo: {
        nutrientContent: "Zn-4%, Fe-2%, Mn-2%, Cu-1%, B-0.5%, Mo-0.1%",
        formulation: "Granular blend",
        applicationMethod: "Soil application, fertigation, broadcasting",
        targetCrops: "All field crops, vegetables, fruit orchards",
        applicationRate: "25-50 kg/ha depending on crop and soil test",
        deficiencySymptoms: "Multiple deficiency symptoms across nutrients",
        phRange: "Formulated for pH 6.0-8.0",
        storageInstructions: "Store in cool, dry place in original packaging"
      }
    },
    {
      id: 12,
      name: "Liquid Micronutrient Concentrate",
      image: "/assets/micronutrients/liquid-micro.jpg",
      category: "Liquid Fertilizer",
      content: "Ready-to-use liquid formulation for quick micronutrient correction.",
      detailedInfo: {
        nutrientContent: "Zn-5%, Fe-3%, Mn-2%, Cu-1%, B-0.5%, Mo-0.05%",
        formulation: "Liquid concentrate",
        applicationMethod: "Foliar spray, fertigation, tank mixing",
        targetCrops: "Vegetables, fruit crops, ornamentals, greenhouse crops",
        applicationRate: "2-5 L/ha in 500-1000L water",
        deficiencySymptoms: "Rapid correction of multiple micronutrient deficiencies",
        phRange: "pH buffered for stability (6.0-7.0)",
        storageInstructions: "Store in cool place, shake well before use"
      }
    },
    {
      id: 13,
      name: "Ammonium Molybdate",
      image: "/assets/micronutrients/ammonium-molybdate.jpg",
      category: "Molybdenum Supplement",
      content: "Alternative molybdenum source for nitrogen metabolism enhancement.",
      detailedInfo: {
        nutrientContent: "Mo - 54%, N - 7%",
        formulation: "White crystalline powder",
        applicationMethod: "Seed treatment, foliar spray, soil application",
        targetCrops: "Legumes, brassicas, cereals, fodder crops",
        applicationRate: "0.5-1 kg/ha (soil), 50-100g/100kg seed",
        deficiencySymptoms: "Poor nodulation, nitrogen deficiency symptoms",
        phRange: "Most effective in neutral to alkaline soils",
        storageInstructions: "Store in dry conditions away from organic matter"
      }
    },
    {
      id: 14,
      name: "Chelated Manganese EDTA",
      image: "/assets/micronutrients/manganese-edta.jpg",
      category: "Chelated Manganese",
      content: "Protected manganese form for enhanced availability and uptake.",
      detailedInfo: {
        nutrientContent: "Mn - 13% (chelated form)",
        formulation: "Light pink powder",
        applicationMethod: "Foliar spray, fertigation, hydroponic solutions",
        targetCrops: "Soybeans, cereals, vegetables, fruit trees",
        applicationRate: "1-2 kg/ha (fertigation), 0.1-0.2% solution (foliar)",
        deficiencySymptoms: "Gray speck, interveinal chlorosis, poor growth",
        phRange: "Stable in pH range 4.0-8.0",
        storageInstructions: "Keep in sealed containers in cool, dry place"
      }
    },
    {
      id: 15,
      name: "Solubor (Sodium Octaborate)",
      image: "/assets/micronutrients/solubor.jpg",
      category: "Boron Supplement",
      content: "Highly soluble boron source for rapid plant uptake and utilization.",
      detailedInfo: {
        nutrientContent: "B - 20.5%",
        formulation: "White granular powder",
        applicationMethod: "Foliar spray, fertigation, soil application",
        targetCrops: "Cotton, alfalfa, fruit trees, vegetables",
        applicationRate: "2-5 kg/ha (soil), 0.1-0.15% solution (foliar)",
        deficiencySymptoms: "Cracked stems, poor fruit set, hollow heart",
        phRange: "Effective across pH range 5.0-8.5",
        storageInstructions: "Store in moisture-proof containers"
      }
    },
    {
      id: 16,
      name: "Gypsum (Calcium Sulphate)",
      image: "/assets/micronutrients/gypsum.jpg",
      category: "Calcium-Sulphur Source",
      content: "Natural mineral providing calcium and sulphur for soil and plant health.",
      detailedInfo: {
        nutrientContent: "Ca - 23%, S - 18%",
        formulation: "White/gray granular powder",
        applicationMethod: "Soil application, broadcasting, deep placement",
        targetCrops: "All crops, especially peanuts, alfalfa, cotton",
        applicationRate: "250-500 kg/ha depending on soil conditions",
        deficiencySymptoms: "Poor root development, reduced oil content in oilseeds",
        phRange: "Neutral pH, improves alkaline soils",
        storageInstructions: "Store in dry conditions to prevent caking"
      }
    },
    {
      id: 17,
      name: "Potassium Sulphate",
      image: "/assets/micronutrients/potassium-sulphate.jpg",
      category: "Potassium-Sulphur Source",
      content: "Chloride-free potassium source with added sulphur benefits.",
      detailedInfo: {
        nutrientContent: "K2O - 50%, S - 18%",
        formulation: "White crystalline granules",
        applicationMethod: "Soil application, fertigation, broadcasting",
        targetCrops: "Tobacco, potatoes, fruits, vegetables, chloride-sensitive crops",
        applicationRate: "100-200 kg/ha based on soil test and crop requirement",
        deficiencySymptoms: "Marginal leaf burn, poor fruit quality, lodging",
        phRange: "Suitable for all soil pH ranges",
        storageInstructions: "Store in dry place in moisture-proof bags"
      }
    },
    {
      id: 18,
      name: "Chelated Copper EDTA",
      image: "/assets/micronutrients/copper-edta.jpg",
      category: "Chelated Copper",
      content: "Protected copper form preventing fixation in soil and ensuring availability.",
      detailedInfo: {
        nutrientContent: "Cu - 15% (chelated form)",
        formulation: "Blue-green powder",
        applicationMethod: "Foliar spray, fertigation, soil application",
        targetCrops: "Cereals, citrus, vegetables, ornamentals",
        applicationRate: "0.5-1 kg/ha (soil), 0.05-0.1% solution (foliar)",
        deficiencySymptoms: "Dieback, poor grain filling, white tip disease",
        phRange: "Stable across pH range 4.0-9.0",
        storageInstructions: "Store in airtight containers away from light"
      }
    },
    {
      id: 19,
      name: "Borax (Sodium Tetraborate)",
      image: "/assets/micronutrients/borax.jpg",
      category: "Boron Supplement",
      content: "Traditional boron source for soil application and long-term availability.",
      detailedInfo: {
        nutrientContent: "B - 11%",
        formulation: "White crystalline powder",
        applicationMethod: "Soil application, broadcasting, band placement",
        targetCrops: "Cotton, sunflower, vegetables, fruit trees",
        applicationRate: "10-20 kg/ha depending on soil test and crop",
        deficiencySymptoms: "Hollow stem, poor seed set, cracked fruits",
        phRange: "Effective in pH range 6.0-8.0",
        storageInstructions: "Store in dry place in sealed containers"
      }
    },
    {
      id: 20,
      name: "Ferric EDTA",
      image: "/assets/micronutrients/ferric-edta.jpg",
      category: "Chelated Iron",
      content: "Stable iron chelate for hydroponic and alkaline soil conditions.",
      detailedInfo: {
        nutrientContent: "Fe - 13% (chelated form)",
        formulation: "Yellow-brown powder",
        applicationMethod: "Hydroponic solutions, fertigation, foliar spray",
        targetCrops: "Greenhouse crops, hydroponic vegetables, ornamentals",
        applicationRate: "1-3 kg/ha (fertigation), 0.1-0.2% solution (foliar)",
        deficiencySymptoms: "Interveinal chlorosis, stunted growth, poor yields",
        phRange: "Stable in pH range 4.0-7.5",
        storageInstructions: "Protect from light and moisture"
      }
    },
    {
      id: 21,
      name: "Zinc Oxide",
      image: "/assets/micronutrients/zinc-oxide.jpg",
      category: "Zinc Supplement",
      content: "Slow-release zinc source for long-term soil zinc management.",
      detailedInfo: {
        nutrientContent: "Zn - 80%",
        formulation: "White fine powder",
        applicationMethod: "Soil application, seed coating, fertilizer blending",
        targetCrops: "Rice, wheat, maize, vegetables",
        applicationRate: "5-10 kg/ha (soil application)",
        deficiencySymptoms: "Little leaf, white bud, khaira disease in rice",
        phRange: "Slowly available, effective in pH 6.0-7.5",
        storageInstructions: "Store in dry place in sealed containers"
      }
    },
    {
      id: 22,
      name: "Calcium Nitrate",
      image: "/assets/micronutrients/calcium-nitrate.jpg",
      category: "Calcium-Nitrogen Source",
      content: "Water-soluble calcium source with readily available nitrogen.",
      detailedInfo: {
        nutrientContent: "Ca - 19%, N - 15.5%",
        formulation: "White granular salt",
        applicationMethod: "Fertigation, foliar spray, hydroponic solutions",
        targetCrops: "Tomatoes, peppers, leafy vegetables, fruit crops",
        applicationRate: "50-100 kg/ha (fertigation), 0.5-1% solution (foliar)",
        deficiencySymptoms: "Blossom end rot, tip burn, poor fruit quality",
        phRange: "Suitable for all pH ranges",
        storageInstructions: "Store in dry place due to hygroscopic nature"
      }
    },
    {
      id: 23,
      name: "Sulphur Powder",
      image: "/assets/micronutrients/sulphur-powder.jpg",
      category: "Sulphur Supplement",
      content: "Elemental sulphur for soil pH management and sulphur nutrition.",
      detailedInfo: {
        nutrientContent: "S - 90% (elemental form)",
        formulation: "Yellow fine powder",
        applicationMethod: "Soil application, broadcasting, incorporation",
        targetCrops: "Oilseeds, pulses, onion, garlic, all crops",
        applicationRate: "20-40 kg/ha depending on soil sulphur status",
        deficiencySymptoms: "Yellowing of young leaves, poor oil content, stunted growth",
        phRange: "Acidifies soil, suitable for alkaline soils",
        storageInstructions: "Store away from heat sources and oxidizing materials"
      }
    },
    {
      id: 24,
      name: "Humic Acid with Micronutrients",
      image: "/assets/micronutrients/humic-micro.jpg",
      category: "Organic Micronutrient Complex",
      content: "Organic complex enhancing micronutrient availability and uptake.",
      detailedInfo: {
        nutrientContent: "Humic acid - 60%, Zn-2%, Fe-1%, Mn-1%, Cu-0.5%, B-0.2%",
        formulation: "Dark brown granules",
        applicationMethod: "Soil application, fertigation, seed treatment",
        targetCrops: "All crops, especially in degraded soils",
        applicationRate: "5-10 kg/ha (soil), 2-3 kg/ha (fertigation)",
        deficiencySymptoms: "Improved nutrient uptake, better root development",
        phRange: "Effective across pH range 5.5-8.5",
        storageInstructions: "Store in cool, dry place away from direct sunlight"
      }
    },
    {
      id: 25,
      name: "Seaweed Extract with Micronutrients",
      image: "/assets/micronutrients/seaweed-micro.jpg",
      category: "Bio-stimulant with Micronutrients",
      content: "Natural seaweed extract enriched with essential micronutrients.",
      detailedInfo: {
        nutrientContent: "Seaweed extract - 25%, Zn-1%, Fe-0.5%, Mn-0.5%, B-0.1%",
        formulation: "Dark liquid concentrate",
        applicationMethod: "Foliar spray, fertigation, seed treatment",
        targetCrops: "Vegetables, fruit crops, ornamentals, field crops",
        applicationRate: "2-3 L/ha (foliar), 3-5 L/ha (fertigation)",
        deficiencySymptoms: "Enhanced stress tolerance, improved growth",
        phRange: "pH buffered for plant compatibility",
        storageInstructions: "Store in cool place, shake well before use"
      }
    }
  ];

  const handleMicroNutrientClick = (micronutrient) => {
    setSelectedMicroNutrient(micronutrient);
  };

  const handleBackClick = () => {
    setSelectedMicroNutrient(null);
  };

  if (selectedMicroNutrient) {
    return (
      <MicroNutrientDetailView 
        micronutrient={selectedMicroNutrient} 
        onBack={handleBackClick} 
      />
    );
  }

  return (
    <div className="micronutrients-container">
      <div className="micronutrients-header">
        <h1>MicroNutrients</h1>
        <p>Essential micronutrients for optimal plant growth and development</p>
      </div>
      
      <div className="micronutrients-grid">
        {micronutrients.map((micronutrient) => (
          <MicroNutrientCard
            key={micronutrient.id}
            micronutrient={micronutrient}
            onClick={handleMicroNutrientClick}
          />
        ))}
      </div>
    </div>
  );
}

export default MicroNutrients;