import React, { useState } from 'react';
import '../../css/Agrochemicals/Adjuvants.css';

// Separate component for adjuvant card
const AdjuvantCard = ({ adjuvant, onClick }) => (
  <div 
    className="adjuvant-card clickable"
    onClick={() => onClick(adjuvant)}
  >
    <img src={adjuvant.image} alt={adjuvant.name} className="adjuvant-image" />
    <div className="adjuvant-info">
      <h3>{adjuvant.name}</h3>
      <span className="adjuvant-category">{adjuvant.category}</span>
      <p>{adjuvant.content}</p>
      <div className="click-hint">Click for detailed information</div>
    </div>
  </div>
);

// Separate component for detailed view
const AdjuvantDetailView = ({ adjuvant, onBack }) => (
  <div className="adjuvant-detail-view">
    <div className="detail-header">
      <button className="back-button" onClick={onBack}>
        ← Back to Products
      </button>
      <h1>{adjuvant.name}</h1>
    </div>

    <div className="detail-content">
      <div className="detail-image-section">
        <img 
          src={adjuvant.image} 
          alt={adjuvant.name}
          className="detail-image"
        />
        <div className="category-badge">
          {adjuvant.category}
        </div>
      </div>

      <div className="detail-info-section">
        <div className="info-grid">
          <InfoCard title="Active Ingredient" value={adjuvant.detailedInfo?.activeIngredient} />
          <InfoCard title="Concentration" value={adjuvant.detailedInfo?.concentration} />
          <InfoCard title="Function" value={adjuvant.detailedInfo?.function} />
          <InfoCard title="Compatible Chemicals" value={adjuvant.detailedInfo?.compatibleChemicals} />
          <InfoCard title="Application Rate" value={adjuvant.detailedInfo?.applicationRate} />
          <InfoCard title="Benefits" value={adjuvant.detailedInfo?.benefits} />
          <InfoCard title="Usage Instructions" value={adjuvant.detailedInfo?.usageInstructions} />
          <InfoCard title="Storage Instructions" value={adjuvant.detailedInfo?.storageInstructions} />
        </div>

        <div className="basic-info">
          <h3>Overview</h3>
          <p>{adjuvant.content}</p>
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

function Adjuvants() {
  const [selectedAdjuvant, setSelectedAdjuvant] = useState(null);

  // Complete adjuvants data
  const adjuvants = [
    {
      id: 1,
      name: "SurfMax Pro",
      image: "/assets/adjuvants/surfmax.jpg",
      category: "Surfactant",
      content: "Non-ionic surfactant that improves wetting and spreading of spray solutions.",
      detailedInfo: {
        activeIngredient: "Polyoxyethylene alkyl ether",
        concentration: "80% EC",
        function: "Wetting agent and spreader",
        compatibleChemicals: "Most pesticides, herbicides, fungicides",
        applicationRate: "0.5-1 ml/L of spray solution",
        benefits: "Improved coverage, reduced surface tension, better penetration",
        usageInstructions: "Add to spray tank after pesticides, mix thoroughly",
        storageInstructions: "Store in cool, dry place away from direct sunlight"
      }
    },
    {
      id: 2,
      name: "PenetrAid Elite",
      image: "/assets/adjuvants/penetraid.jpg",
      category: "Penetrant",
      content: "Specialized penetrant that enhances systemic uptake of active ingredients.",
      detailedInfo: {
        activeIngredient: "Organosilicone compound",
        concentration: "100% AI",
        function: "Penetration enhancer and spreader",
        compatibleChemicals: "Systemic pesticides, herbicides, growth regulators",
        applicationRate: "0.2-0.5 ml/L of spray solution",
        benefits: "Super spreading, stomatal infiltration, reduced spray volume",
        usageInstructions: "Mix with water first, then add pesticides",
        storageInstructions: "Keep container tightly closed, store below 30°C"
      }
    },
    {
      id: 3,
      name: "StickFast Max",
      image: "/assets/adjuvants/stickfast.jpg",
      category: "Sticker",
      content: "Anti-drift sticker that improves spray retention and rainfastness.",
      detailedInfo: {
        activeIngredient: "Pinolene-based polymer",
        concentration: "95% AI",
        function: "Sticker and anti-drift agent",
        compatibleChemicals: "All types of crop protection chemicals",
        applicationRate: "1-2 ml/L of spray solution",
        benefits: "Weather resistance, reduced washoff, improved adhesion",
        usageInstructions: "Add last to spray tank, avoid excessive agitation",
        storageInstructions: "Protect from freezing, store in original container"
      }
    },
    {
      id: 4,
      name: "DriftGuard Pro",
      image: "/assets/adjuvants/driftguard.jpg",
      category: "Anti-Drift",
      content: "Anti-drift agent that reduces fine droplets and spray drift.",
      detailedInfo: {
        activeIngredient: "High molecular weight polymer",
        concentration: "98% AI",
        function: "Drift reduction and droplet control",
        compatibleChemicals: "Water-based pesticide formulations",
        applicationRate: "0.5-1 ml/L of spray solution",
        benefits: "Reduced drift, larger droplet formation, better deposition",
        usageInstructions: "Pre-mix with small amount of water before tank mixing",
        storageInstructions: "Store in dry place, avoid extreme temperatures"
      }
    },
    {
      id: 5,
      name: "BufferMax",
      image: "/assets/adjuvants/buffermax.jpg",
      category: "pH Buffer",
      content: "pH buffering agent that optimizes spray solution pH for better efficacy.",
      detailedInfo: {
        activeIngredient: "Organic acid buffer system",
        concentration: "90% AI",
        function: "pH adjustment and buffering",
        compatibleChemicals: "pH-sensitive pesticides and fertilizers",
        applicationRate: "2-5 ml/L of spray solution",
        benefits: "Stabilizes pH, prevents hydrolysis, improves chemical stability",
        usageInstructions: "Add to water before mixing pesticides",
        storageInstructions: "Keep in sealed container away from moisture"
      }
    },
    {
      id: 6,
      name: "DefoamPro",
      image: "/assets/adjuvants/defoam.jpg",
      category: "Defoamer",
      content: "Anti-foaming agent that prevents excessive foam formation in spray tanks.",
      detailedInfo: {
        activeIngredient: "Silicone-based antifoam",
        concentration: "100% AI",
        function: "Foam suppression and control",
        compatibleChemicals: "All liquid formulations",
        applicationRate: "0.1-0.3 ml/L of spray solution",
        benefits: "Eliminates foam, improves mixing efficiency, prevents tank overflow",
        usageInstructions: "Add small amounts gradually while mixing",
        storageInstructions: "Store at room temperature, avoid contamination"
      }
    },
    {
      id: 7,
      name: "WaterMax Conditioner",
      image: "/assets/adjuvants/watermax.jpg",
      category: "Water Conditioner",
      content: "Water conditioning agent that improves water quality for spray solutions.",
      detailedInfo: {
        activeIngredient: "Chelating agents and sequestrants",
        concentration: "85% AI",
        function: "Water softening and conditioning",
        compatibleChemicals: "Hard water sensitive chemicals",
        applicationRate: "1-3 ml/L of spray solution",
        benefits: "Prevents chemical precipitation, improves solubility, reduces antagonism",
        usageInstructions: "Add to water before mixing other chemicals",
        storageInstructions: "Store in cool, dry place away from metals"
      }
    },
    {
      id: 8,
      name: "OilMax Emulsifier",
      image: "/assets/adjuvants/oilmax.jpg",
      category: "Crop Oil",
      content: "Crop oil concentrate that enhances herbicide performance.",
      detailedInfo: {
        activeIngredient: "Methylated seed oil with emulsifiers",
        concentration: "95% oil concentrate",
        function: "Penetration aid and carrier",
        compatibleChemicals: "Post-emergence herbicides",
        applicationRate: "5-10 ml/L of spray solution",
        benefits: "Enhanced cuticle penetration, improved herbicide uptake, faster action",
        usageInstructions: "Mix thoroughly with water before adding herbicides",
        storageInstructions: "Store above freezing point, protect from heat"
      }
    },
    {
      id: 9,
      name: "SpreadMax Ultra",
      image: "/assets/adjuvants/spreadmax.jpg",
      category: "Spreader",
      content: "Super spreader that provides exceptional surface coverage.",
      detailedInfo: {
        activeIngredient: "Trisiloxane ethoxylate",
        concentration: "100% AI",
        function: "Super spreading and wetting",
        compatibleChemicals: "Contact fungicides and insecticides",
        applicationRate: "0.25-0.5 ml/L of spray solution",
        benefits: "Ultra-low surface tension, complete coverage, reduced water usage",
        usageInstructions: "Use minimal rates, add after diluting pesticides",
        storageInstructions: "Keep container sealed, avoid contamination with water"
      }
    },
    {
      id: 10,
      name: "ThickMax Thickener",
      image: "/assets/adjuvants/thickmax.jpg",
      category: "Thickening Agent",
      content: "Spray thickener that reduces drift and improves spray pattern.",
      detailedInfo: {
        activeIngredient: "Cross-linked polyacrylic polymer",
        concentration: "100% AI",
        function: "Spray thickening and viscosity modifier",
        compatibleChemicals: "Water-based spray solutions",
        applicationRate: "2-5 g/L of spray solution",
        benefits: "Reduced drift, improved droplet size, better pattern uniformity",
        usageInstructions: "Pre-hydrate in water before adding to spray tank",
        storageInstructions: "Store in dry conditions, protect from moisture"
      }
    },
    {
      id: 11,
      name: "AcidMax Acidifier",
      image: "/assets/adjuvants/acidmax.jpg",
      category: "Acidifier",
      content: "Spray acidifier that lowers pH for acid-loving chemicals.",
      detailedInfo: {
        activeIngredient: "Phosphoric acid blend",
        concentration: "85% AI",
        function: "pH reduction and acidification",
        compatibleChemicals: "Glyphosate and other acid-stable pesticides",
        applicationRate: "2-10 ml/L depending on water hardness",
        benefits: "Optimizes chemical performance, prevents precipitation, improves stability",
        usageInstructions: "Add to water first, check pH before adding pesticides",
        storageInstructions: "Store in corrosion-resistant containers, keep cool"
      }
    },
    {
      id: 12,
      name: "UVMax Protector",
      image: "/assets/adjuvants/uvmax.jpg",
      category: "UV Protector",
      content: "UV protection agent that prevents photodegradation of pesticides.",
      detailedInfo: {
        activeIngredient: "UV-absorbing compounds",
        concentration: "90% AI",
        function: "UV protection and stabilization",
        compatibleChemicals: "UV-sensitive pesticides and biologicals",
        applicationRate: "1-2 ml/L of spray solution",
        benefits: "Extends chemical life, prevents breakdown, maintains efficacy",
        usageInstructions: "Add to spray solution just before application",
        storageInstructions: "Store in dark place away from direct sunlight"
      }
    },
    {
      id: 13,
      name: "ColorMax Marker",
      image: "/assets/adjuvants/colormax.jpg",
      category: "Spray Marker",
      content: "Spray pattern indicator that shows treated areas.",
      detailedInfo: {
        activeIngredient: "Water-soluble colorant",
        concentration: "100% colorant",
        function: "Visual spray pattern indicator",
        compatibleChemicals: "All spray solutions",
        applicationRate: "5-10 ml/L of spray solution",
        benefits: "Prevents over-spraying, shows coverage, improves application accuracy",
        usageInstructions: "Add last to spray tank, mix gently",
        storageInstructions: "Store in original container, avoid freezing"
      }
    },
    {
      id: 14,
      name: "CompatMax Compatibility",
      image: "/assets/adjuvants/compatmax.jpg",
      category: "Compatibility Agent",
      content: "Tank mix compatibility agent for complex spray solutions.",
      detailedInfo: {
        activeIngredient: "Compatibility polymers",
        concentration: "95% AI",
        function: "Tank mix compatibility and stabilization",
        compatibleChemicals: "Multiple pesticide combinations",
        applicationRate: "1-3 ml/L of spray solution",
        benefits: "Prevents precipitation, improves stability, enables complex mixes",
        usageInstructions: "Add before mixing incompatible chemicals",
        storageInstructions: "Keep in sealed container at stable temperature"
      }
    },
    {
      id: 15,
      name: "NitroMax Nitrogen",
      image: "/assets/adjuvants/nitromax.jpg",
      category: "Nitrogen Additive",
      content: "Liquid nitrogen source that enhances systemic uptake.",
      detailedInfo: {
        activeIngredient: "Urea ammonium nitrate solution",
        concentration: "28% nitrogen",
        function: "Nitrogen carrier and uptake enhancer",
        compatibleChemicals: "Systemic herbicides and foliar fertilizers",
        applicationRate: "10-20 ml/L of spray solution",
        benefits: "Improved systemic activity, enhanced plant uptake, dual nutrition",
        usageInstructions: "Mix thoroughly with water before adding chemicals",
        storageInstructions: "Store in non-metallic containers, avoid high temperatures"
      }
    },
    {
      id: 16,
      name: "HumiMax Humectant",
      image: "/assets/adjuvants/humimax.jpg",
      category: "Humectant",
      content: "Moisture retention agent that extends drying time on leaf surfaces.",
      detailedInfo: {
        activeIngredient: "Hygroscopic compounds",
        concentration: "90% AI",
        function: "Moisture retention and absorption enhancer",
        compatibleChemicals: "Systemic pesticides requiring uptake time",
        applicationRate: "2-5 ml/L of spray solution",
        benefits: "Extended uptake time, improved absorption, better efficacy in dry conditions",
        usageInstructions: "Add to spray solution before application",
        storageInstructions: "Store in moisture-proof containers"
      }
    },
    {
      id: 17,
      name: "SiliMax Silicone",
      image: "/assets/adjuvants/silimax.jpg",
      category: "Silicone Surfactant",
      content: "Premium silicone surfactant for superior spreading and penetration.",
      detailedInfo: {
        activeIngredient: "Modified trisiloxane",
        concentration: "100% AI",
        function: "Super spreading and stomatal flooding",
        compatibleChemicals: "Contact and systemic pesticides",
        applicationRate: "0.1-0.25 ml/L of spray solution",
        benefits: "Stomatal infiltration, reduced surface tension, enhanced coverage",
        usageInstructions: "Use minimal rates, mix gently to avoid foaming",
        storageInstructions: "Store in original container below 35°C"
      }
    },
    {
      id: 18,
      name: "WaxMax Cuticle",
      image: "/assets/adjuvants/waxmax.jpg",
      category: "Cuticle Penetrant",
      content: "Specialized cuticle penetrant for waxy leaf surfaces.",
      detailedInfo: {
        activeIngredient: "Penetrating solvents blend",
        concentration: "95% AI",
        function: "Cuticle dissolution and penetration",
        compatibleChemicals: "Herbicides for hard-to-wet surfaces",
        applicationRate: "3-5 ml/L of spray solution",
        benefits: "Overcomes waxy barriers, improves uptake on difficult plants",
        usageInstructions: "Mix with water before adding herbicides",
        storageInstructions: "Store in tightly sealed containers away from heat"
      }
    },
    {
      id: 19,
      name: "DyeMax Colorant",
      image: "/assets/adjuvants/dyemax.jpg",
      category: "Temporary Colorant",
      content: "Temporary spray colorant that fades after application.",
      detailedInfo: {
        activeIngredient: "Photodegradable dye",
        concentration: "100% colorant",
        function: "Temporary spray marking",
        compatibleChemicals: "All pesticide formulations",
        applicationRate: "3-8 ml/L of spray solution",
        benefits: "Shows application pattern, fades naturally, prevents double application",
        usageInstructions: "Add to spray tank last, avoid excessive agitation",
        storageInstructions: "Protect from direct sunlight, store in dark place"
      }
    },
    {
      id: 20,
      name: "VolMax Volatility",
      image: "/assets/adjuvants/volmax.jpg",
      category: "Volatility Reducer",
      content: "Anti-volatility agent that reduces vapor drift of herbicides.",
      detailedInfo: {
        activeIngredient: "Vapor pressure suppressant",
        concentration: "85% AI",
        function: "Volatility suppression and drift control",
        compatibleChemicals: "Volatile herbicides like 2,4-D",
        applicationRate: "5-10 ml/L of spray solution",
        benefits: "Reduces vapor drift, protects sensitive crops, extends application window",
        usageInstructions: "Mix thoroughly with herbicide solution",
        storageInstructions: "Store at stable temperature, avoid extreme heat"
      }
    }
  ];

  const handleAdjuvantClick = (adjuvant) => {
    setSelectedAdjuvant(adjuvant);
  };

  const handleBackClick = () => {
    setSelectedAdjuvant(null);
  };

  if (selectedAdjuvant) {
    return (
      <AdjuvantDetailView 
        adjuvant={selectedAdjuvant} 
        onBack={handleBackClick} 
      />
    );
  }

  return (
    <div className="adjuvants-container">
      <div className="adjuvants-header">
        <h1>Adjuvants</h1>
        <p>Essential spray additives to enhance pesticide performance and application efficiency</p>
      </div>
      
      <div className="adjuvants-grid">
        {adjuvants.map((adjuvant) => (
          <AdjuvantCard
            key={adjuvant.id}
            adjuvant={adjuvant}
            onClick={handleAdjuvantClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Adjuvants;