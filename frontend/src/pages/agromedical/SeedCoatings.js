import React, { useState } from 'react';
import '../../css/Agrochemicals/SeedCoatings.css';

// Separate component for seed coating card
const SeedCoatingCard = ({ seedCoating, onClick }) => (
  <div 
    className="seed-coating-card clickable"
    onClick={() => onClick(seedCoating)}
  >
    <img src={seedCoating.image} alt={seedCoating.name} className="seed-coating-image" />
    <div className="seed-coating-info">
      <h3>{seedCoating.name}</h3>
      <span className="seed-coating-category">{seedCoating.category}</span>
      <p>{seedCoating.content}</p>
      <div className="click-hint">Click for detailed information</div>
    </div>
  </div>
);

// Separate component for detailed view
const SeedCoatingDetailView = ({ seedCoating, onBack }) => (
  <div className="seed-coating-detail-view">
    <div className="detail-header">
      <button className="back-button" onClick={onBack}>
        ← Back to Products
      </button>
      <h1>{seedCoating.name}</h1>
    </div>

    <div className="detail-content">
      <div className="detail-image-section">
        <img 
          src={seedCoating.image} 
          alt={seedCoating.name}
          className="detail-image"
        />
        <div className="category-badge">
          {seedCoating.category}
        </div>
      </div>

      <div className="detail-info-section">
        <div className="info-grid">
          <InfoCard title="Active Ingredient" value={seedCoating.detailedInfo?.activeIngredient} />
          <InfoCard title="Concentration" value={seedCoating.detailedInfo?.concentration} />
          <InfoCard title="Mode of Action" value={seedCoating.detailedInfo?.modeOfAction} />
          <InfoCard title="Target Pests/Diseases" value={seedCoating.detailedInfo?.targetPestsDisease} />
          <InfoCard title="Application Rate" value={seedCoating.detailedInfo?.applicationRate} />
          <InfoCard title="Crop Compatibility" value={seedCoating.detailedInfo?.cropCompatibility} />
          <InfoCard title="Seed Treatment Duration" value={seedCoating.detailedInfo?.treatmentDuration} />
          <InfoCard title="Storage Instructions" value={seedCoating.detailedInfo?.storageInstructions} />
        </div>

        <div className="basic-info">
          <h3>Overview</h3>
          <p>{seedCoating.content}</p>
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

function SeedCoatings() {
  const [selectedSeedCoating, setSelectedSeedCoating] = useState(null);

  // Complete seed coatings data
  const seedCoatings = [
    {
      id: 1,
      name: "ThioCoat Pro",
      image: "/assets/seedcoatings/thiocoat.jpg",
      category: "Fungicidal",
      content: "Active Ingredient: Thiram – Protective fungicidal seed coating for disease prevention.",
      detailedInfo: {
        activeIngredient: "Thiram",
        concentration: "75% WS",
        modeOfAction: "Multi-site contact fungicide",
        targetPestsDisease: "Damping off, seed rot, collar rot, root rot",
        applicationRate: "2-3 g/kg seed",
        cropCompatibility: "Cotton, cereals, vegetables, legumes",
        treatmentDuration: "Effective for 90-120 days",
        storageInstructions: "Store in cool, dry place away from moisture"
      }
    },
    {
      id: 2,
      name: "ImidaGuard Max",
      image: "/assets/seedcoatings/imidaguard.jpg",
      category: "Insecticidal",
      content: "Active Ingredient: Imidacloprid – Systemic insecticidal seed coating for early pest protection.",
      detailedInfo: {
        activeIngredient: "Imidacloprid",
        concentration: "70% WS",
        modeOfAction: "Nicotinic acetylcholine receptor agonist",
        targetPestsDisease: "Aphids, jassids, thrips, whiteflies, termites",
        applicationRate: "5-7 ml/kg seed",
        cropCompatibility: "Cotton, rice, wheat, maize, vegetables",
        treatmentDuration: "Protection for 45-60 days",
        storageInstructions: "Keep in original container below 25°C"
      }
    },
    {
      id: 3,
      name: "CarbendaCoat Elite",
      image: "/assets/seedcoatings/carbenda.jpg",
      category: "Fungicidal",
      content: "Active Ingredient: Carbendazim – Systemic fungicidal seed treatment for soil-borne diseases.",
      detailedInfo: {
        activeIngredient: "Carbendazim",
        concentration: "50% WP",
        modeOfAction: "Benzimidazole fungicide - tubulin inhibitor",
        targetPestsDisease: "Fusarium wilt, anthracnose, black scurf, smut",
        applicationRate: "2-2.5 g/kg seed",
        cropCompatibility: "Cotton, wheat, rice, pulses, vegetables",
        treatmentDuration: "Effective for 60-90 days",
        storageInstructions: "Store in dry place away from direct sunlight"
      }
    },
    {
      id: 4,
      name: "ThiamethoxaCoat Pro",
      image: "/assets/seedcoatings/thiamethoxacoat.jpg",
      category: "Insecticidal",
      content: "Active Ingredient: Thiamethoxam – Advanced neonicotinoid seed coating for comprehensive pest control.",
      detailedInfo: {
        activeIngredient: "Thiamethoxam",
        concentration: "30% FS",
        modeOfAction: "Nicotinic acetylcholine receptor modulator",
        targetPestsDisease: "Aphids, thrips, whiteflies, wireworms, root grubs",
        applicationRate: "10-12 ml/kg seed",
        cropCompatibility: "Cotton, maize, sunflower, soybean, vegetables",
        treatmentDuration: "Protection for 60-75 days",
        storageInstructions: "Store below 30°C in sealed container"
      }
    },
    {
      id: 5,
      name: "CapCoat Super",
      image: "/assets/seedcoatings/capcoat.jpg",
      category: "Fungicidal",
      content: "Active Ingredient: Captan – Broad-spectrum fungicidal seed dressing for multiple diseases.",
      detailedInfo: {
        activeIngredient: "Captan",
        concentration: "50% WP",
        modeOfAction: "Multi-site contact fungicide",
        targetPestsDisease: "Seed rot, damping off, blight, black leg",
        applicationRate: "2.5-3 g/kg seed",
        cropCompatibility: "Vegetables, flowers, fruit crops, cereals",
        treatmentDuration: "Effective for 75-90 days",
        storageInstructions: "Keep away from heat and moisture"
      }
    },
    {
      id: 6,
      name: "ClothianiCoat Gold",
      image: "/assets/seedcoatings/clothiani.jpg",
      category: "Insecticidal",
      content: "Active Ingredient: Clothianidin – Long-lasting neonicotinoid seed treatment.",
      detailedInfo: {
        activeIngredient: "Clothianidin",
        concentration: "50% WS",
        modeOfAction: "Nicotinic acetylcholine receptor agonist",
        targetPestsDisease: "Aphids, thrips, flea beetles, wireworms",
        applicationRate: "6-8 ml/kg seed",
        cropCompatibility: "Cotton, maize, canola, sugar beet, cereals",
        treatmentDuration: "Protection for 60-90 days",
        storageInstructions: "Store in cool, dry conditions"
      }
    },
    {
      id: 7,
      name: "MancoCoat Max",
      image: "/assets/seedcoatings/manco.jpg",
      category: "Fungicidal",
      content: "Active Ingredient: Mancozeb – Multi-site protective fungicide for seed treatment.",
      detailedInfo: {
        activeIngredient: "Mancozeb",
        concentration: "75% WP",
        modeOfAction: "Multi-site contact fungicide",
        targetPestsDisease: "Downy mildew, damping off, leaf spot, blight",
        applicationRate: "2-3 g/kg seed",
        cropCompatibility: "Vegetables, cereals, pulses, oilseeds",
        treatmentDuration: "Effective for 60-75 days",
        storageInstructions: "Store in dry place below 25°C"
      }
    },
    {
      id: 8,
      name: "AcetaCoat Pro",
      image: "/assets/seedcoatings/aceta.jpg",
      category: "Insecticidal",
      content: "Active Ingredient: Acetamiprid – Selective insecticidal seed coating for sucking pests.",
      detailedInfo: {
        activeIngredient: "Acetamiprid",
        concentration: "20% SP",
        modeOfAction: "Nicotinic acetylcholine receptor modulator",
        targetPestsDisease: "Aphids, jassids, thrips, whiteflies",
        applicationRate: "5-7 g/kg seed",
        cropCompatibility: "Cotton, vegetables, cereals, legumes",
        treatmentDuration: "Protection for 45-60 days",
        storageInstructions: "Keep sealed in dry conditions"
      }
    },
    {
      id: 9,
      name: "TebuCoat Elite",
      image: "/assets/seedcoatings/tebu.jpg",
      category: "Fungicidal",
      content: "Active Ingredient: Tebuconazole – Systemic triazole fungicide for seed treatment.",
      detailedInfo: {
        activeIngredient: "Tebuconazole",
        concentration: "2% DS",
        modeOfAction: "DMI fungicide - sterol biosynthesis inhibitor",
        targetPestsDisease: "Smut, bunt, seedling blight, root rot",
        applicationRate: "1.5-2 ml/kg seed",
        cropCompatibility: "Wheat, barley, rice, maize, cotton",
        treatmentDuration: "Effective for 90-120 days",
        storageInstructions: "Store away from extreme temperatures"
      }
    },
    {
      id: 10,
      name: "FipronilCoat Max",
      image: "/assets/seedcoatings/fipronil.jpg",
      category: "Insecticidal",
      content: "Active Ingredient: Fipronil – Phenylpyrazole insecticide for soil pest control.",
      detailedInfo: {
        activeIngredient: "Fipronil",
        concentration: "5% SC",
        modeOfAction: "GABA-gated chloride channel blocker",
        targetPestsDisease: "Termites, wireworms, cutworms, root grubs",
        applicationRate: "12-15 ml/kg seed",
        cropCompatibility: "Cotton, maize, rice, sugarcane, vegetables",
        treatmentDuration: "Protection for 75-90 days",
        storageInstructions: "Store below 35°C in original container"
      }
    },
    {
      id: 11,
      name: "PropiCoat Pro",
      image: "/assets/seedcoatings/propi.jpg",
      category: "Fungicidal",
      content: "Active Ingredient: Propiconazole – Triazole fungicide for comprehensive disease control.",
      detailedInfo: {
        activeIngredient: "Propiconazole",
        concentration: "25% EC",
        modeOfAction: "DMI fungicide - ergosterol biosynthesis inhibitor",
        targetPestsDisease: "Rust, smut, anthracnose, leaf spot diseases",
        applicationRate: "1-1.5 ml/kg seed",
        cropCompatibility: "Cereals, cotton, vegetables, legumes",
        treatmentDuration: "Effective for 60-90 days",
        storageInstructions: "Keep away from alkaline materials"
      }
    },
    {
      id: 12,
      name: "CyperCoat Gold",
      image: "/assets/seedcoatings/cyper.jpg",
      category: "Insecticidal",
      content: "Active Ingredient: Cypermethrin – Pyrethroid insecticide for early season protection.",
      detailedInfo: {
        activeIngredient: "Cypermethrin",
        concentration: "10% EC",
        modeOfAction: "Sodium channel modulator",
        targetPestsDisease: "Cutworms, aphids, thrips, flea beetles",
        applicationRate: "4-6 ml/kg seed",
        cropCompatibility: "Cotton, vegetables, cereals, oilseeds",
        treatmentDuration: "Protection for 30-45 days",
        storageInstructions: "Protect from direct sunlight and heat"
      }
    },
    {
      id: 13,
      name: "HexaCoat Super",
      image: "/assets/seedcoatings/hexa.jpg",
      category: "Fungicidal",
      content: "Active Ingredient: Hexaconazole – Triazole fungicide for systemic disease control.",
      detailedInfo: {
        activeIngredient: "Hexaconazole",
        concentration: "5% SC",
        modeOfAction: "DMI fungicide - sterol biosynthesis inhibitor",
        targetPestsDisease: "Powdery mildew, rust, sheath blight, blast",
        applicationRate: "2-3 ml/kg seed",
        cropCompatibility: "Rice, wheat, cotton, vegetables",
        treatmentDuration: "Effective for 75-90 days",
        storageInstructions: "Store in cool place away from moisture"
      }
    },
    {
      id: 14,
      name: "ChloroCoat Max",
      image: "/assets/seedcoatings/chloro.jpg",
      category: "Insecticidal",
      content: "Active Ingredient: Chlorpyrifos – Organophosphate insecticide for soil pest management.",
      detailedInfo: {
        activeIngredient: "Chlorpyrifos",
        concentration: "20% EC",
        modeOfAction: "Acetylcholinesterase inhibitor",
        targetPestsDisease: "Termites, cutworms, wireworms, root maggots",
        applicationRate: "8-10 ml/kg seed",
        cropCompatibility: "Cotton, maize, vegetables, legumes",
        treatmentDuration: "Protection for 45-60 days",
        storageInstructions: "Store away from food and feed"
      }
    },
    {
      id: 15,
      name: "TrifloxCoat Elite",
      image: "/assets/seedcoatings/triflox.jpg",
      category: "Fungicidal",
      content: "Active Ingredient: Trifloxystrobin – Strobilurin fungicide for broad-spectrum disease control.",
      detailedInfo: {
        activeIngredient: "Trifloxystrobin",
        concentration: "25% WG",
        modeOfAction: "Qol fungicide - cytochrome bc1 inhibitor",
        targetPestsDisease: "Damping off, root rot, seedling blight, leaf spot",
        applicationRate: "2-3 g/kg seed",
        cropCompatibility: "Cereals, vegetables, cotton, legumes",
        treatmentDuration: "Effective for 60-90 days",
        storageInstructions: "Keep container tightly closed in dry area"
      }
    },
    {
      id: 16,
      name: "DeltaCoat Pro",
      image: "/assets/seedcoatings/delta.jpg",
      category: "Insecticidal",
      content: "Active Ingredient: Deltamethrin – Fast-acting pyrethroid for immediate pest control.",
      detailedInfo: {
        activeIngredient: "Deltamethrin",
        concentration: "2.8% EC",
        modeOfAction: "Sodium channel modulator",
        targetPestsDisease: "Aphids, thrips, cutworms, flea beetles",
        applicationRate: "5-8 ml/kg seed",
        cropCompatibility: "Cotton, vegetables, cereals, oilseeds",
        treatmentDuration: "Protection for 30-40 days",
        storageInstructions: "Store in cool place away from light"
      }
    },
    {
      id: 17,
      name: "MetalaxylCoat Max",
      image: "/assets/seedcoatings/metalaxyl.jpg",
      category: "Fungicidal",
      content: "Active Ingredient: Metalaxyl – Phenylamide fungicide for oomycete diseases.",
      detailedInfo: {
        activeIngredient: "Metalaxyl",
        concentration: "35% WS",
        modeOfAction: "RNA polymerase I inhibitor",
        targetPestsDisease: "Downy mildew, damping off, pythium, phytophthora",
        applicationRate: "2-4 g/kg seed",
        cropCompatibility: "Vegetables, cotton, sunflower, maize",
        treatmentDuration: "Effective for 60-75 days",
        storageInstructions: "Store below 25°C in dry conditions"
      }
    },
    {
      id: 18,
      name: "BifenCoat Gold",
      image: "/assets/seedcoatings/bifen.jpg",
      category: "Insecticidal",
      content: "Active Ingredient: Bifenthrin – Long-residual pyrethroid for extended protection.",
      detailedInfo: {
        activeIngredient: "Bifenthrin",
        concentration: "10% EC",
        modeOfAction: "Sodium channel modulator",
        targetPestsDisease: "Termites, thrips, aphids, wireworms",
        applicationRate: "6-8 ml/kg seed",
        cropCompatibility: "Cotton, vegetables, cereals, legumes",
        treatmentDuration: "Protection for 50-70 days",
        storageInstructions: "Protect from freezing and excessive heat"
      }
    },
    {
      id: 19,
      name: "AzoxystrobinCoat Pro",
      image: "/assets/seedcoatings/azoxy.jpg",
      category: "Fungicidal",
      content: "Active Ingredient: Azoxystrobin – Strobilurin fungicide with plant health benefits.",
      detailedInfo: {
        activeIngredient: "Azoxystrobin",
        concentration: "23% SC",
        modeOfAction: "Qol fungicide - cytochrome bc1 inhibitor",
        targetPestsDisease: "Damping off, root rot, seedling diseases, leaf spots",
        applicationRate: "1.5-2 ml/kg seed",
        cropCompatibility: "Cereals, vegetables, cotton, soybeans",
        treatmentDuration: "Effective for 70-90 days",
        storageInstructions: "Store in original container below 30°C"
      }
    },
    {
      id: 20,
      name: "CarbofuranCoat Max",
      image: "/assets/seedcoatings/carbofuran.jpg",
      category: "Insecticidal",
      content: "Active Ingredient: Carbofuran – Carbamate insecticide for soil-dwelling pests.",
      detailedInfo: {
        activeIngredient: "Carbofuran",
        concentration: "3% G",
        modeOfAction: "Acetylcholinesterase inhibitor",
        targetPestsDisease: "Termites, root aphids, nematodes, soil grubs",
        applicationRate: "50-75 g/kg seed",
        cropCompatibility: "Rice, sugarcane, cotton, vegetables",
        treatmentDuration: "Protection for 60-90 days",
        storageInstructions: "Store away from children in dry place"
      }
    },
    {
      id: 21,
      name: "FlutriafCoat Elite",
      image: "/assets/seedcoatings/flutriaf.jpg",
      category: "Fungicidal",
      content: "Active Ingredient: Flutriafo – Triazole fungicide for seed-borne and soil-borne diseases.",
      detailedInfo: {
        activeIngredient: "Flutriafo",
        concentration: "12% SC",
        modeOfAction: "DMI fungicide - sterol biosynthesis inhibitor",
        targetPestsDisease: "Smut, bunt, rust, leaf spots, root rot",
        applicationRate: "1-2 ml/kg seed",
        cropCompatibility: "Wheat, rice, cotton, vegetables",
        treatmentDuration: "Effective for 90-120 days",
        storageInstructions: "Keep sealed away from extreme temperatures"
      }
    },
    {
      id: 22,
      name: "DimethoateCoat Pro",
      image: "/assets/seedcoatings/dimethoate.jpg",
      category: "Insecticidal",
      content: "Active Ingredient: Dimethoate – Systemic organophosphate for sucking pests.",
      detailedInfo: {
        activeIngredient: "Dimethoate",
        concentration: "30% EC",
        modeOfAction: "Acetylcholinesterase inhibitor",
        targetPestsDisease: "Aphids, jassids, thrips, whiteflies",
        applicationRate: "7-10 ml/kg seed",
        cropCompatibility: "Cotton, vegetables, cereals, legumes",
        treatmentDuration: "Protection for 40-60 days",
        storageInstructions: "Store away from food and alkaline materials"
      }
    },
    {
      id: 23,
      name: "DifenoCoat Max",
      image: "/assets/seedcoatings/difeno.jpg",
      category: "Fungicidal",
      content: "Active Ingredient: Difenoconazole – Triazole fungicide for comprehensive disease management.",
      detailedInfo: {
        activeIngredient: "Difenoconazole",
        concentration: "25% EC",
        modeOfAction: "DMI fungicide - sterol biosynthesis inhibitor",
        targetPestsDisease: "Rust, powdery mildew, leaf spot, anthracnose",
        applicationRate: "1-1.5 ml/kg seed",
        cropCompatibility: "Cereals, vegetables, cotton, fruit crops",
        treatmentDuration: "Effective for 75-90 days",
        storageInstructions: "Store in cool, dry place below 25°C"
      }
    },
    {
      id: 24,
      name: "AlphaCoat Gold",
      image: "/assets/seedcoatings/alpha.jpg",
      category: "Insecticidal",
      content: "Active Ingredient: Alpha-Cypermethrin – High-potency pyrethroid for pest control.",
      detailedInfo: {
        activeIngredient: "Alpha-Cypermethrin",
        concentration: "10% EC",
        modeOfAction: "Sodium channel modulator",
        targetPestsDisease: "Cutworms, aphids, thrips, flea beetles",
        applicationRate: "3-5 ml/kg seed",
        cropCompatibility: "Cotton, vegetables, cereals, oilseeds",
        treatmentDuration: "Protection for 35-50 days",
        storageInstructions: "Protect from direct sunlight and moisture"
      }
    },
    {
      id: 25,
      name: "KresoxCoat Pro",
      image: "/assets/seedcoatings/kresox.jpg",
      category: "Fungicidal",
      content: "Active Ingredient: Kresoxim-methyl – Strobilurin fungicide for disease prevention.",
      detailedInfo: {
        activeIngredient: "Kresoxim-methyl",
        concentration: "44.3% SC",
        modeOfAction: "Qol fungicide - cytochrome bc1 inhibitor",
        targetPestsDisease: "Powdery mildew, downy mildew, leaf spots, rust",
        applicationRate: "1-2 ml/kg seed",
        cropCompatibility: "Vegetables, cereals, cotton, fruit crops",
        treatmentDuration: "Effective for 60-80 days",
        storageInstructions: "Store away from light in cool conditions"
      }
    }
  ];

  const handleSeedCoatingClick = (seedCoating) => {
    setSelectedSeedCoating(seedCoating);
  };

  const handleBackClick = () => {
    setSelectedSeedCoating(null);
  };

  if (selectedSeedCoating) {
    return (
      <SeedCoatingDetailView 
        seedCoating={selectedSeedCoating} 
        onBack={handleBackClick} 
      />
    );
  }

  return (
    <div className="seed-coatings-container">
      <div className="seed-coatings-header">
        <h1>Seed Coatings</h1>
        <p>Advanced seed treatment solutions for enhanced crop protection and performance</p>
      </div>
      
      <div className="seed-coatings-grid">
        {seedCoatings.map((seedCoating) => (
          <SeedCoatingCard
            key={seedCoating.id}
            seedCoating={seedCoating}
            onClick={handleSeedCoatingClick}
          />
        ))}
      </div>
    </div>
  );
}

export default SeedCoatings;