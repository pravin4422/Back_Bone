import React, { useState } from 'react';
import '../../css/Agrochemicals/Biostimulants.css';

// Separate component for biostimulant card
const BiostimulantCard = ({ biostimulant, onClick }) => (
  <div 
    className="biostimulant-card clickable"
    onClick={() => onClick(biostimulant)}
  >
    <img src={biostimulant.image} alt={biostimulant.name} className="biostimulant-image" />
    <div className="biostimulant-info">
      <h3>{biostimulant.name}</h3>
      <span className="biostimulant-category">{biostimulant.category}</span>
      <p>{biostimulant.content}</p>
      <div className="click-hint">Click for detailed information</div>
    </div>
  </div>
);

// Separate component for detailed view
const BiostimulantDetailView = ({ biostimulant, onBack }) => (
  <div className="biostimulant-detail-view">
    <div className="detail-header">
      <button className="back-button" onClick={onBack}>
        ← Back to Products
      </button>
      <h1>{biostimulant.name}</h1>
    </div>

    <div className="detail-content">
      <div className="detail-image-section">
        <img 
          src={biostimulant.image} 
          alt={biostimulant.name}
          className="detail-image"
        />
        <div className="category-badge">
          {biostimulant.category}
        </div>
      </div>

      <div className="detail-info-section">
        <div className="info-grid">
          <InfoCard title="Active Components" value={biostimulant.detailedInfo?.activeComponents} />
          <InfoCard title="Formulation" value={biostimulant.detailedInfo?.formulation} />
          <InfoCard title="Mode of Action" value={biostimulant.detailedInfo?.modeOfAction} />
          <InfoCard title="Benefits" value={biostimulant.detailedInfo?.benefits} />
          <InfoCard title="Application Rate" value={biostimulant.detailedInfo?.applicationRate} />
          <InfoCard title="Crop Compatibility" value={biostimulant.detailedInfo?.cropCompatibility} />
          <InfoCard title="Application Method" value={biostimulant.detailedInfo?.applicationMethod} />
          <InfoCard title="Storage Instructions" value={biostimulant.detailedInfo?.storageInstructions} />
        </div>

        <div className="basic-info">
          <h3>Overview</h3>
          <p>{biostimulant.content}</p>
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

function Biostimulants() {
  const [selectedBiostimulant, setSelectedBiostimulant] = useState(null);

  // Complete biostimulants data
  const biostimulants = [
    {
      id: 1,
      name: "Seaweed Extract Pro",
      image: "/assets/biostimulants/seaweed.jpg",
      category: "Marine Extract",
      content: "Natural seaweed extract rich in growth hormones and micronutrients for enhanced plant vigor.",
      detailedInfo: {
        activeComponents: "Ascophyllum nodosum extract, cytokinins, auxins, gibberellins",
        formulation: "Liquid concentrate",
        modeOfAction: "Enhances cell division, root development, and stress tolerance",
        benefits: "Improved germination, enhanced root growth, stress resistance",
        applicationRate: "2-3 L/ha",
        cropCompatibility: "All crops - vegetables, cereals, fruits, ornamentals",
        applicationMethod: "Foliar spray, soil application, seed treatment",
        storageInstructions: "Store in cool, dry place away from direct sunlight"
      }
    },
    {
      id: 2,
      name: "Humic Acid Gold",
      image: "/assets/biostimulants/humic.jpg",
      category: "Humic Substance",
      content: "Premium humic acid for soil conditioning and nutrient uptake enhancement.",
      detailedInfo: {
        activeComponents: "Humic acid 12%, fulvic acid 3%, potassium humate",
        formulation: "Granular/Liquid",
        modeOfAction: "Improves soil structure, enhances nutrient availability and uptake",
        benefits: "Better soil health, increased nutrient efficiency, improved root development",
        applicationRate: "5-10 kg/ha (granular), 2-3 L/ha (liquid)",
        cropCompatibility: "All field crops, vegetables, fruit trees, plantation crops",
        applicationMethod: "Soil application, fertigation, foliar spray",
        storageInstructions: "Keep in dry conditions, avoid moisture contact"
      }
    },
    {
      id: 3,
      name: "Amino Acid Complex",
      image: "/assets/biostimulants/amino.jpg",
      category: "Protein Hydrolysate",
      content: "Free amino acids complex for rapid plant metabolism and stress recovery.",
      detailedInfo: {
        activeComponents: "Free amino acids 40%, glycine, proline, tryptophan",
        formulation: "Soluble powder",
        modeOfAction: "Direct protein synthesis, enzyme activation, stress tolerance",
        benefits: "Faster recovery from stress, improved protein synthesis, enhanced quality",
        applicationRate: "1-2 kg/ha",
        cropCompatibility: "Vegetables, fruit crops, cereals, legumes",
        applicationMethod: "Foliar application, fertigation",
        storageInstructions: "Store in airtight container in cool, dry place"
      }
    },
    {
      id: 4,
      name: "Mycorrhizal Inoculant",
      image: "/assets/biostimulants/mycorrhiza.jpg",
      category: "Microbial",
      content: "Beneficial mycorrhizal fungi for enhanced root function and nutrient uptake.",
      detailedInfo: {
        activeComponents: "Glomus intraradices, G. fasciculatum, G. aggregatum",
        formulation: "Granular inoculant",
        modeOfAction: "Symbiotic association with roots, extended root surface area",
        benefits: "Improved phosphorus uptake, drought tolerance, soil health",
        applicationRate: "5-10 kg/ha",
        cropCompatibility: "Most crops except brassicas - cereals, legumes, fruits",
        applicationMethod: "Soil application at planting, root dipping",
        storageInstructions: "Store in cool place, avoid high temperatures and moisture"
      }
    },
    {
      id: 5,
      name: "Chitosan Elite",
      image: "/assets/biostimulants/chitosan.jpg",
      category: "Biopolymer",
      content: "Natural chitosan biopolymer for plant defense activation and growth promotion.",
      detailedInfo: {
        activeComponents: "Chitosan 95%, oligosaccharides",
        formulation: "Soluble powder",
        modeOfAction: "Activates plant defense mechanisms, enhances cell wall strength",
        benefits: "Disease resistance, improved fruit quality, enhanced shelf life",
        applicationRate: "500g-1kg/ha",
        cropCompatibility: "Vegetables, fruits, ornamentals, cereals",
        applicationMethod: "Foliar spray, soil drench",
        storageInstructions: "Keep in sealed container away from moisture"
      }
    },
    {
      id: 6,
      name: "Fulvic Acid Max",
      image: "/assets/biostimulants/fulvic.jpg",
      category: "Humic Substance",
      content: "High-grade fulvic acid for enhanced nutrient mobility and plant uptake.",
      detailedInfo: {
        activeComponents: "Fulvic acid 60%, trace elements, organic chelates",
        formulation: "Liquid concentrate",
        modeOfAction: "Chelates nutrients, improves membrane permeability",
        benefits: "Enhanced nutrient uptake, improved photosynthesis, stress tolerance",
        applicationRate: "1-2 L/ha",
        cropCompatibility: "All crops - field crops, horticulture, plantation",
        applicationMethod: "Foliar application, fertigation, seed treatment",
        storageInstructions: "Store in cool place, avoid freezing"
      }
    },
    {
      id: 7,
      name: "Trichoderma Viride",
      image: "/assets/biostimulants/trichoderma.jpg",
      category: "Microbial",
      content: "Beneficial fungus for root health, disease suppression and growth promotion.",
      detailedInfo: {
        activeComponents: "Trichoderma viride 10^8 CFU/g",
        formulation: "Wettable powder",
        modeOfAction: "Root colonization, antagonistic activity, growth hormone production",
        benefits: "Disease suppression, root development, nutrient solubilization",
        applicationRate: "2-3 kg/ha",
        cropCompatibility: "All crops - vegetables, cereals, fruits, ornamentals",
        applicationMethod: "Soil application, seed treatment, transplant dipping",
        storageInstructions: "Store in cool, dry place below 25°C"
      }
    },
    {
      id: 8,
      name: "Glycine Betaine Pro",
      image: "/assets/biostimulants/betaine.jpg",
      category: "Osmoprotectant",
      content: "Natural osmoprotectant for enhanced stress tolerance and water efficiency.",
      detailedInfo: {
        activeComponents: "Glycine betaine 98%, compatible solutes",
        formulation: "Crystalline powder",
        modeOfAction: "Osmotic adjustment, membrane stabilization under stress",
        benefits: "Drought tolerance, salt stress tolerance, temperature stress protection",
        applicationRate: "100-200 g/ha",
        cropCompatibility: "Stress-prone crops - cereals, vegetables, fruits",
        applicationMethod: "Foliar spray during stress periods",
        storageInstructions: "Keep in airtight container in dry conditions"
      }
    },
    {
      id: 9,
      name: "Bacillus Subtilis",
      image: "/assets/biostimulants/bacillus.jpg",
      category: "Microbial",
      content: "Plant growth promoting bacteria for root zone enhancement and disease control.",
      detailedInfo: {
        activeComponents: "Bacillus subtilis 10^9 CFU/g",
        formulation: "Granular/Liquid",
        modeOfAction: "Root colonization, phytohormone production, antagonistic activity",
        benefits: "Enhanced root growth, disease suppression, nutrient mobilization",
        applicationRate: "1-2 kg/ha (solid), 2-3 L/ha (liquid)",
        cropCompatibility: "All crops - vegetables, cereals, fruits, legumes",
        applicationMethod: "Soil application, seed treatment, fertigation",
        storageInstructions: "Store in cool place, avoid direct sunlight"
      }
    },
    {
      id: 10,
      name: "Brassinosteroid Complex",
      image: "/assets/biostimulants/brassinosteroid.jpg",
      category: "Plant Hormone",
      content: "Natural plant hormone for enhanced growth, flowering and stress tolerance.",
      detailedInfo: {
        activeComponents: "24-Epibrassinolide 0.01%, natural brassinosteroids",
        formulation: "Emulsifiable concentrate",
        modeOfAction: "Cell elongation, protein synthesis, enzyme activation",
        benefits: "Enhanced flowering, improved fruit set, stress tolerance",
        applicationRate: "50-100 ml/ha",
        cropCompatibility: "Fruits, vegetables, cereals, ornamentals",
        applicationMethod: "Foliar spray at critical growth stages",
        storageInstructions: "Store in cool, dark place away from heat"
      }
    },
    {
      id: 11,
      name: "Vermicompost Extract",
      image: "/assets/biostimulants/vermicompost.jpg",
      category: "Organic Extract",
      content: "Liquid vermicompost extract rich in growth promoting substances and beneficial microbes.",
      detailedInfo: {
        activeComponents: "Humic substances, growth hormones, beneficial microorganisms",
        formulation: "Liquid extract",
        modeOfAction: "Soil conditioning, nutrient release, microbial activity enhancement",
        benefits: "Improved soil health, enhanced nutrient availability, plant vigor",
        applicationRate: "5-10 L/ha",
        cropCompatibility: "All crops - organic farming systems preferred",
        applicationMethod: "Soil application, fertigation, foliar spray",
        storageInstructions: "Store in cool place, use within 6 months"
      }
    },
    {
      id: 12,
      name: "Silicon Supplement",
      image: "/assets/biostimulants/silicon.jpg",
      category: "Mineral Supplement",
      content: "Bioavailable silicon for enhanced plant structure and stress resistance.",
      detailedInfo: {
        activeComponents: "Monosilicic acid 10%, potassium silicate",
        formulation: "Liquid concentrate",
        modeOfAction: "Cell wall strengthening, mechanical barriers, stress signaling",
        benefits: "Disease resistance, lodging resistance, abiotic stress tolerance",
        applicationRate: "1-2 L/ha",
        cropCompatibility: "Rice, cereals, vegetables, ornamentals",
        applicationMethod: "Foliar spray, soil application, hydroponic systems",
        storageInstructions: "Store in plastic containers, avoid metal contact"
      }
    },
    {
      id: 13,
      name: "Triacontanol Plus",
      image: "/assets/biostimulants/triacontanol.jpg",
      category: "Growth Regulator",
      content: "Natural plant growth regulator for enhanced photosynthesis and yield.",
      detailedInfo: {
        activeComponents: "Triacontanol 0.05%, natural waxes",
        formulation: "Emulsifiable concentrate",
        modeOfAction: "Enhances photosynthesis, CO2 fixation, enzyme activity",
        benefits: "Increased yield, improved photosynthetic efficiency, better quality",
        applicationRate: "500ml-1L/ha",
        cropCompatibility: "Rice, wheat, vegetables, sugarcane, cotton",
        applicationMethod: "Foliar spray at vegetative and reproductive stages",
        storageInstructions: "Store in cool place, shake well before use"
      }
    },
    {
      id: 14,
      name: "Calcium Chloride Premium",
      image: "/assets/biostimulants/calcium.jpg",
      category: "Mineral Supplement",
      content: "High-purity calcium chloride for calcium deficiency correction and fruit quality.",
      detailedInfo: {
        activeComponents: "Calcium chloride 77%, readily available calcium",
        formulation: "Crystalline powder",
        modeOfAction: "Cell wall formation, enzyme activation, membrane stability",
        benefits: "Prevents blossom end rot, improves fruit quality, reduces cracking",
        applicationRate: "2-3 kg/ha",
        cropCompatibility: "Tomato, pepper, apple, citrus, leafy vegetables",
        applicationMethod: "Foliar spray, fertigation",
        storageInstructions: "Store in dry place, avoid moisture absorption"
      }
    },
    {
      id: 15,
      name: "Phosphite Fertilizer",
      image: "/assets/biostimulants/phosphite.jpg",
      category: "Mineral Supplement",
      content: "Potassium phosphite for enhanced disease resistance and root development.",
      detailedInfo: {
        activeComponents: "Potassium phosphite 40%, phosphorous acid",
        formulation: "Liquid concentrate",
        modeOfAction: "Activates plant defense, enhances root function, systemic movement",
        benefits: "Disease resistance, improved root health, enhanced P uptake",
        applicationRate: "2-3 L/ha",
        cropCompatibility: "Vegetables, fruits, ornamentals, turf",
        applicationMethod: "Foliar spray, soil drench, injection",
        storageInstructions: "Store in cool place, avoid freezing"
      }
    },
    {
      id: 16,
      name: "Compost Tea Concentrate",
      image: "/assets/biostimulants/compost.jpg",
      category: "Organic Extract",
      content: "Concentrated compost tea with beneficial microorganisms and nutrients.",
      detailedInfo: {
        activeComponents: "Beneficial bacteria, fungi, nutrients, organic acids",
        formulation: "Liquid concentrate",
        modeOfAction: "Microbial activity enhancement, nutrient cycling, soil health",
        benefits: "Improved soil biology, enhanced nutrient availability, disease suppression",
        applicationRate: "10-20 L/ha (diluted 1:10)",
        cropCompatibility: "All crops - especially organic systems",
        applicationMethod: "Soil application, foliar spray (filtered)",
        storageInstructions: "Store in cool place, use fresh, avoid prolonged storage"
      }
    },
    {
      id: 17,
      name: "Salicylic Acid Bio",
      image: "/assets/biostimulants/salicylic.jpg",
      category: "Plant Hormone",
      content: "Natural salicylic acid for plant defense activation and stress tolerance.",
      detailedInfo: {
        activeComponents: "Salicylic acid 0.1%, natural phenolic compounds",
        formulation: "Soluble powder",
        modeOfAction: "Systemic acquired resistance, stress signaling, antioxidant activity",
        benefits: "Enhanced disease resistance, stress tolerance, improved immunity",
        applicationRate: "100-200 g/ha",
        cropCompatibility: "Vegetables, fruits, cereals, ornamentals",
        applicationMethod: "Foliar spray, soil drench",
        storageInstructions: "Store in cool, dry place away from light"
      }
    },
    {
      id: 18,
      name: "Kelp Meal Extract",
      image: "/assets/biostimulants/kelp.jpg",
      category: "Marine Extract",
      content: "Processed kelp meal extract with growth hormones and trace elements.",
      detailedInfo: {
        activeComponents: "Kelp extract, natural growth hormones, trace minerals",
        formulation: "Soluble powder",
        modeOfAction: "Hormone regulation, nutrient supplementation, stress mitigation",
        benefits: "Improved plant vigor, enhanced root development, stress resistance",
        applicationRate: "1-2 kg/ha",
        cropCompatibility: "All crops - vegetables, fruits, cereals, legumes",
        applicationMethod: "Foliar spray, soil application, compost additive",
        storageInstructions: "Keep in sealed container in dry conditions"
      }
    },
    {
      id: 19,
      name: "Proline Pro",
      image: "/assets/biostimulants/proline.jpg",
      category: "Amino Acid",
      content: "Pure proline amino acid for osmotic stress tolerance and protein synthesis.",
      detailedInfo: {
        activeComponents: "L-Proline 98%, compatible solutes",
        formulation: "Crystalline powder",
        modeOfAction: "Osmotic adjustment, protein stabilization, ROS scavenging",
        benefits: "Drought tolerance, salt stress mitigation, improved protein quality",
        applicationRate: "200-500 g/ha",
        cropCompatibility: "Stress-prone crops - rice, wheat, vegetables under stress",
        applicationMethod: "Foliar application during stress periods",
        storageInstructions: "Store in airtight container, protect from humidity"
      }
    },
    {
      id: 20,
      name: "Biochar Activator",
      image: "/assets/biostimulants/biochar.jpg",
      category: "Soil Conditioner",
      content: "Activated biochar with beneficial microbes for soil carbon sequestration.",
      detailedInfo: {
        activeComponents: "Activated biochar, beneficial microorganisms, nutrients",
        formulation: "Granular material",
        modeOfAction: "Soil structure improvement, carbon sequestration, microbial habitat",
        benefits: "Enhanced soil health, improved water retention, carbon storage",
        applicationRate: "500-1000 kg/ha (one-time application)",
        cropCompatibility: "All crops - long-term soil improvement",
        applicationMethod: "Soil incorporation, composting additive",
        storageInstructions: "Store in dry place, avoid contamination"
      }
    },
    {
      id: 21,
      name: "Gibberellic Acid GA3",
      image: "/assets/biostimulants/gibberellic.jpg",
      category: "Plant Hormone",
      content: "Pure gibberellic acid for stem elongation, fruit development and dormancy breaking.",
      detailedInfo: {
        activeComponents: "Gibberellic acid (GA3) 90%, plant growth regulator",
        formulation: "Soluble tablet/powder",
        modeOfAction: "Cell elongation, enzyme activation, dormancy breaking",
        benefits: "Enhanced stem growth, improved fruit size, dormancy breaking",
        applicationRate: "10-50 g/ha depending on crop and purpose",
        cropCompatibility: "Grapes, citrus, cereals, vegetables, ornamentals",
        applicationMethod: "Foliar spray, fruit dipping",
        storageInstructions: "Store in cool, dry place, protect from light"
      }
    },
    {
      id: 22,
      name: "Zeolite Plus",
      image: "/assets/biostimulants/zeolite.jpg",
      category: "Mineral Supplement",
      content: "Natural zeolite for nutrient retention, soil conditioning and stress mitigation.",
      detailedInfo: {
        activeComponents: "Natural zeolite (clinoptilolite) 85%, trace minerals",
        formulation: "Granular mineral",
        modeOfAction: "Ion exchange, water retention, gradual nutrient release",
        benefits: "Improved nutrient efficiency, water retention, reduced leaching",
        applicationRate: "200-500 kg/ha",
        cropCompatibility: "All crops - particularly in sandy soils",
        applicationMethod: "Soil incorporation, potting mix additive",
        storageInstructions: "Store in dry place, indefinite shelf life"
      }
    },
    {
      id: 23,
      name: "Ascorbic Acid Shield",
      image: "/assets/biostimulants/ascorbic.jpg",
      category: "Antioxidant",
      content: "Vitamin C supplement for antioxidant protection and stress recovery.",
      detailedInfo: {
        activeComponents: "L-Ascorbic acid 99%, natural antioxidants",
        formulation: "Soluble powder",
        modeOfAction: "ROS scavenging, antioxidant enzyme activation, stress mitigation",
        benefits: "Oxidative stress protection, improved stress recovery, quality enhancement",
        applicationRate: "200-500 g/ha",
        cropCompatibility: "Fruits, vegetables, ornamentals under stress",
        applicationMethod: "Foliar spray, especially after stress events",
        storageInstructions: "Store in cool, dry place, protect from light and air"
      }
    },
    {
      id: 24,
      name: "Bentonite Clay",
      image: "/assets/biostimulants/bentonite.jpg",
      category: "Soil Conditioner",
      content: "Premium bentonite clay for soil structure improvement and nutrient retention.",
      detailedInfo: {
        activeComponents: "Montmorillonite clay 90%, natural minerals",
        formulation: "Fine powder",
        modeOfAction: "Soil aggregation, cation exchange, water retention",
        benefits: "Improved soil structure, better water holding capacity, reduced erosion",
        applicationRate: "500-1000 kg/ha",
        cropCompatibility: "All crops - especially sandy soils",
        applicationMethod: "Soil incorporation, composting additive",
        storageInstructions: "Keep dry, avoid contamination with chemicals"
      }
    },
    {
      id: 25,
      name: "Trehalose Protector",
      image: "/assets/biostimulants/trehalose.jpg",
      category: "Osmoprotectant",
      content: "Natural trehalose sugar for cellular protection and stress tolerance.",
      detailedInfo: {
        activeComponents: "Trehalose 95%, compatible osmolytes",
        formulation: "Crystalline powder",
        modeOfAction: "Protein stabilization, membrane protection, osmotic adjustment",
        benefits: "Enhanced stress tolerance, improved storage, cellular protection",
        applicationRate: "500g-1kg/ha",
        cropCompatibility: "High-value crops, post-harvest applications",
        applicationMethod: "Foliar spray, post-harvest treatment",
        storageInstructions: "Store in airtight container in cool, dry place"
      }
    },
    {
      id: 26,
      name: "Bioactive Peptides",
      image: "/assets/biostimulants/peptides.jpg",
      category: "Protein Hydrolysate",
      content: "Bioactive peptides derived from plant proteins for enhanced metabolism.",
      detailedInfo: {
        activeComponents: "Bioactive peptides 30%, free amino acids, signaling molecules",
        formulation: "Liquid concentrate",
        modeOfAction: "Metabolic activation, enzyme induction, stress signaling",
        benefits: "Enhanced metabolism, improved stress response, better nutrient use",
        applicationRate: "1-2 L/ha",
        cropCompatibility: "High-value crops, vegetables, fruits",
        applicationMethod: "Foliar application, fertigation",
        storageInstructions: "Store in cool place, avoid freezing and high temperatures"
      }
    },
    {
      id: 27,
      name: "Potassium Humate",
      image: "/assets/biostimulants/potassium_humate.jpg",
      category: "Humic Substance",
      content: "Potassium humate for soil conditioning and enhanced nutrient uptake.",
      detailedInfo: {
        activeComponents: "Potassium humate 85%, humic acid, fulvic acid",
        formulation: "Soluble flakes",
        modeOfAction: "Soil structure improvement, nutrient chelation, root development",
        benefits: "Better soil health, enhanced root growth, improved nutrient efficiency",
        applicationRate: "5-10 kg/ha",
        cropCompatibility: "All crops - field crops, horticulture, plantation",
        applicationMethod: "Soil application, fertigation, compost additive",
        storageInstructions: "Keep dry, store in sealed containers"
      }
    },
    {
      id: 28,
      name: "Organic Acids Complex",
      image: "/assets/biostimulants/organic_acids.jpg",
      category: "Organic Acid",
      content: "Blend of organic acids for nutrient mobilization and pH management.",
      detailedInfo: {
        activeComponents: "Citric acid, malic acid, succinic acid, organic chelates",
        formulation: "Liquid concentrate",
        modeOfAction: "Nutrient solubilization, pH adjustment, metal chelation",
        benefits: "Improved nutrient availability, enhanced uptake, pH correction",
        applicationRate: "2-3 L/ha",
        cropCompatibility: "All crops - especially in alkaline soils",
        applicationMethod: "Soil application, fertigation, foliar spray",
        storageInstructions: "Store in cool place, avoid metal containers"
      }
    },
    {
      id: 29,
      name: "Moringa Leaf Extract",
      image: "/assets/biostimulants/moringa.jpg",
      category: "Plant Extract",
      content: "Natural moringa leaf extract rich in growth hormones and antioxidants.",
      detailedInfo: {
        activeComponents: "Zeatin, cytokinins, antioxidants, vitamins, minerals",
        formulation: "Concentrated liquid",
        modeOfAction: "Hormone regulation, antioxidant protection, nutrient supplementation",
        benefits: "Enhanced growth, improved flowering, stress tolerance, better yield",
        applicationRate: "2-3 L/ha",
        cropCompatibility: "All crops - vegetables, fruits, cereals, legumes",
        applicationMethod: "Foliar spray, soil application",
        storageInstructions: "Store in cool, dark place, refrigerate if possible"
      }
    },
    {
      id: 30,
      name: "Effective Microorganisms",
      image: "/assets/biostimulants/em.jpg",
      category: "Microbial",
      content: "Consortium of beneficial microorganisms for soil health and plant growth.",
      detailedInfo: {
        activeComponents: "Lactobacillus, Rhodopseudomonas, Saccharomyces, Streptomyces",
        formulation: "Liquid inoculant",
        modeOfAction: "Soil biology enhancement, organic matter decomposition, plant growth promotion",
        benefits: "Improved soil health, enhanced nutrient cycling, disease suppression",
        applicationRate: "5-10 L/ha (diluted 1:100)",
        cropCompatibility: "All crops - organic farming systems preferred",
        applicationMethod: "Soil application, foliar spray, compost activator",
        storageInstructions: "Store in cool place, avoid direct sunlight, use within 6 months"
      }
    }
  ];

  const handleBiostimulantClick = (biostimulant) => {
    setSelectedBiostimulant(biostimulant);
  };

  const handleBackClick = () => {
    setSelectedBiostimulant(null);
  };

  if (selectedBiostimulant) {
    return (
      <BiostimulantDetailView 
        biostimulant={selectedBiostimulant} 
        onBack={handleBackClick} 
      />
    );
  }

  return (
    <div className="biostimulants-container">
      <div className="biostimulants-header">
        <h1>Biostimulants</h1>
        <p>Natural solutions for enhanced plant growth, stress tolerance and soil health</p>
      </div>
      
      <div className="biostimulants-grid">
        {biostimulants.map((biostimulant) => (
          <BiostimulantCard
            key={biostimulant.id}
            biostimulant={biostimulant}
            onClick={handleBiostimulantClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Biostimulants;