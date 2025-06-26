import React, { useState } from 'react';
import '../../css/Agrochemicals/Fungicides.css';

// Separate component for fungicide card
const FungicideCard = ({ fungicide, onClick }) => (
  <div 
    className="fungicide-card clickable"
    onClick={() => onClick(fungicide)}
  >
    <img src={fungicide.image} alt={fungicide.name} className="fungicide-image" />
    <div className="fungicide-info">
      <h3>{fungicide.name}</h3>
      <span className="fungicide-category">{fungicide.category}</span>
      <p>{fungicide.content}</p>
      <div className="click-hint">Click for detailed information</div>
    </div>
  </div>
);

// Separate component for detailed view
const FungicideDetailView = ({ fungicide, onBack }) => (
  <div className="fungicide-detail-view">
    <div className="detail-header">
      <button className="back-button" onClick={onBack}>
        ← Back to Products
      </button>
      <h1>{fungicide.name}</h1>
    </div>

    <div className="detail-content">
      <div className="detail-image-section">
        <img 
          src={fungicide.image} 
          alt={fungicide.name}
          className="detail-image"
        />
        <div className="category-badge">
          {fungicide.category}
        </div>
      </div>

      <div className="detail-info-section">
        <div className="info-grid">
          <InfoCard title="Active Ingredient" value={fungicide.detailedInfo?.activeIngredient} />
          <InfoCard title="Concentration" value={fungicide.detailedInfo?.concentration} />
          <InfoCard title="Mode of Action" value={fungicide.detailedInfo?.modeOfAction} />
          <InfoCard title="Target Diseases" value={fungicide.detailedInfo?.targetDiseases} />
          <InfoCard title="Application Rate" value={fungicide.detailedInfo?.applicationRate} />
          <InfoCard title="Crop Compatibility" value={fungicide.detailedInfo?.cropCompatibility} />
          <InfoCard title="Safety Period" value={fungicide.detailedInfo?.safetyPeriod} />
          <InfoCard title="Storage Instructions" value={fungicide.detailedInfo?.storageInstructions} />
        </div>

        <div className="basic-info">
          <h3>Overview</h3>
          <p>{fungicide.content}</p>
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

function Fungicides() {
  const [selectedFungicide, setSelectedFungicide] = useState(null);

  // Complete fungicides data
  const fungicides = [
    {
      id: 1,
      name: "Mancozeb Pro",
      image: "/assets/fungicides/mancozeb.jpg",
      category: "Dithiocarbamate",
      content: "Active Ingredient: Mancozeb – Broad-spectrum protective fungicide for various crop diseases.",
      detailedInfo: {
        activeIngredient: "Mancozeb",
        concentration: "75% WP",
        modeOfAction: "Multi-site contact activity",
        targetDiseases: "Late blight, downy mildew, anthracnose, leaf spot",
        applicationRate: "2-2.5 kg/ha",
        cropCompatibility: "Potato, tomato, grapes, wheat, rice",
        safetyPeriod: "7-14 days before harvest",
        storageInstructions: "Store in cool, dry place away from heat"
      }
    },
    {
      id: 2,
      name: "Copper Oxychloride Max",
      image: "/assets/fungicides/copper_oxychloride.jpg",
      category: "Copper Compound",
      content: "Active Ingredient: Copper Oxychloride – Protective bactericide and fungicide.",
      detailedInfo: {
        activeIngredient: "Copper Oxychloride",
        concentration: "50% WP",
        modeOfAction: "Multi-site contact activity",
        targetDiseases: "Bacterial blight, canker, leaf spot, rust",
        applicationRate: "2-3 kg/ha",
        cropCompatibility: "Citrus, vegetables, cereals, cotton",
        safetyPeriod: "7 days before harvest",
        storageInstructions: "Keep away from moisture and alkaline materials"
      }
    },
    {
      id: 3,
      name: "Propiconazole Elite",
      image: "/assets/fungicides/propiconazole.jpg",
      category: "Triazole",
      content: "Active Ingredient: Propiconazole – Systemic fungicide for rust and powdery mildew control.",
      detailedInfo: {
        activeIngredient: "Propiconazole",
        concentration: "25% EC",
        modeOfAction: "DMI - sterol biosynthesis inhibitor",
        targetDiseases: "Rust, powdery mildew, sheath blight, blast",
        applicationRate: "1-1.5 L/ha",
        cropCompatibility: "Wheat, rice, groundnut, banana",
        safetyPeriod: "30 days before harvest",
        storageInstructions: "Store in original container below 35°C"
      }
    },
    {
      id: 4,
      name: "Tebuconazole Super",
      image: "/assets/fungicides/tebuconazole.jpg",
      category: "Triazole",
      content: "Active Ingredient: Tebuconazole – Systemic fungicide with protective and curative action.",
      detailedInfo: {
        activeIngredient: "Tebuconazole",
        concentration: "25.9% EC",
        modeOfAction: "DMI - sterol biosynthesis inhibitor",
        targetDiseases: "Rust, smut, bunt, powdery mildew, sheath blight",
        applicationRate: "1 L/ha",
        cropCompatibility: "Wheat, rice, barley, sugarcane",
        safetyPeriod: "35 days before harvest",
        storageInstructions: "Protect from direct sunlight and freezing"
      }
    },
    {
      id: 5,
      name: "Carbendazim Gold",
      image: "/assets/fungicides/carbendazim.jpg",
      category: "Benzimidazole",
      content: "Active Ingredient: Carbendazim – Broad-spectrum systemic fungicide.",
      detailedInfo: {
        activeIngredient: "Carbendazim",
        concentration: "50% WP",
        modeOfAction: "MBC - microtubule assembly inhibitor",
        targetDiseases: "Powdery mildew, rust, scab, anthracnose",
        applicationRate: "0.5-1 kg/ha",
        cropCompatibility: "Rice, wheat, cotton, vegetables, fruit crops",
        safetyPeriod: "14-21 days before harvest",
        storageInstructions: "Store in dry place away from children"
      }
    },
    {
      id: 6,
      name: "Thiram Power",
      image: "/assets/fungicides/thiram.jpg",
      category: "Dithiocarbamate",
      content: "Active Ingredient: Thiram – Seed treatment and foliar fungicide.",
      detailedInfo: {
        activeIngredient: "Thiram",
        concentration: "75% WS",
        modeOfAction: "Multi-site contact activity",
        targetDiseases: "Seed rot, damping off, leaf blight, scab",
        applicationRate: "2-3 g/kg seed or 2 kg/ha foliar",
        cropCompatibility: "Cereals, vegetables, fruit crops",
        safetyPeriod: "7 days before harvest",
        storageInstructions: "Keep container tightly closed in cool place"
      }
    },
    {
      id: 7,
      name: "Azoxystrobin Elite",
      image: "/assets/fungicides/azoxystrobin.jpg",
      category: "Strobilurin",
      content: "Active Ingredient: Azoxystrobin – Broad-spectrum systemic fungicide.",
      detailedInfo: {
        activeIngredient: "Azoxystrobin",
        concentration: "23% SC",
        modeOfAction: "QoI - respiration inhibitor",
        targetDiseases: "Late blight, downy mildew, powdery mildew, rust",
        applicationRate: "1 L/ha",
        cropCompatibility: "Grapes, tomato, potato, rice, wheat",
        safetyPeriod: "3-7 days before harvest",
        storageInstructions: "Avoid extreme temperatures during storage"
      }
    },
    {
      id: 8,
      name: "Difenoconazole Pro",
      image: "/assets/fungicides/difenoconazole.jpg",
      category: "Triazole",
      content: "Active Ingredient: Difenoconazole – Systemic fungicide for fruit and vegetable crops.",
      detailedInfo: {
        activeIngredient: "Difenoconazole",
        concentration: "25% EC",
        modeOfAction: "DMI - sterol biosynthesis inhibitor",
        targetDiseases: "Scab, powdery mildew, rust, anthracnose",
        applicationRate: "0.5-1 L/ha",
        cropCompatibility: "Apple, grapes, vegetables, cereals",
        safetyPeriod: "14-21 days before harvest",
        storageInstructions: "Store in original packaging in dry conditions"
      }
    },
    {
      id: 9,
      name: "Metalaxyl Max",
      image: "/assets/fungicides/metalaxyl.jpg",
      category: "Phenylamide",
      content: "Active Ingredient: Metalaxyl – Systemic fungicide for oomycete diseases.",
      detailedInfo: {
        activeIngredient: "Metalaxyl",
        concentration: "35% WS",
        modeOfAction: "RNA polymerase I inhibitor",
        targetDiseases: "Downy mildew, late blight, damping off",
        applicationRate: "2-2.5 kg/ha",
        cropCompatibility: "Grapes, potato, tomato, cucurbits",
        safetyPeriod: "21 days before harvest",
        storageInstructions: "Keep away from heat and oxidizing agents"
      }
    },
    {
      id: 10,
      name: "Hexaconazole Super",
      image: "/assets/fungicides/hexaconazole.jpg",
      category: "Triazole",
      content: "Active Ingredient: Hexaconazole – Systemic fungicide for powdery mildew and rust.",
      detailedInfo: {
        activeIngredient: "Hexaconazole",
        concentration: "5% EC",
        modeOfAction: "DMI - sterol biosynthesis inhibitor",
        targetDiseases: "Powdery mildew, rust, tikka leaf spot, anthracnose",
        applicationRate: "2 L/ha",
        cropCompatibility: "Groundnut, mango, grapes, vegetables",
        safetyPeriod: "21 days before harvest",
        storageInstructions: "Store in cool place away from direct sunlight"
      }
    },
    {
      id: 11,
      name: "Chlorothalonil Gold",
      image: "/assets/fungicides/chlorothalonil.jpg",
      category: "Chloronitrile",
      content: "Active Ingredient: Chlorothalonil – Broad-spectrum protective fungicide.",
      detailedInfo: {
        activeIngredient: "Chlorothalonil",
        concentration: "75% WP",
        modeOfAction: "Multi-site contact activity",
        targetDiseases: "Early blight, late blight, leaf spot, anthracnose",
        applicationRate: "2 kg/ha",
        cropCompatibility: "Potato, tomato, onion, peanut, vegetables",
        safetyPeriod: "7 days before harvest",
        storageInstructions: "Store in dry place below 30°C"
      }
    },
    {
      id: 12,
      name: "Cymoxanil Elite",
      image: "/assets/fungicides/cymoxanil.jpg",
      category: "Cyanoacetamide Oxime",
      content: "Active Ingredient: Cymoxanil – Systemic fungicide for oomycete control.",
      detailedInfo: {
        activeIngredient: "Cymoxanil",
        concentration: "8% + Mancozeb 64% WP",
        modeOfAction: "Multi-site + respiration inhibitor",
        targetDiseases: "Late blight, downy mildew, leaf spot",
        applicationRate: "2.5-3 kg/ha",
        cropCompatibility: "Potato, tomato, grapes, cucurbits",
        safetyPeriod: "14 days before harvest",
        storageInstructions: "Keep container sealed in cool, dry area"
      }
    },
    {
      id: 13,
      name: "Kasugamycin Pro",
      image: "/assets/fungicides/kasugamycin.jpg",
      category: "Antibiotic",
      content: "Active Ingredient: Kasugamycin – Antibiotic fungicide for bacterial and fungal diseases.",
      detailedInfo: {
        activeIngredient: "Kasugamycin",
        concentration: "3% SL",
        modeOfAction: "Protein synthesis inhibitor",
        targetDiseases: "Bacterial leaf blight, blast, sheath blight",
        applicationRate: "2-3 L/ha",
        cropCompatibility: "Rice, vegetables, fruit crops",
        safetyPeriod: "14 days before harvest",
        storageInstructions: "Store below 25°C away from direct light"
      }
    },
    {
      id: 14,
      name: "Tridemorph Max",
      image: "/assets/fungicides/tridemorph.jpg",
      category: "Morpholine",
      content: "Active Ingredient: Tridemorph – Systemic fungicide for powdery mildew control.",
      detailedInfo: {
        activeIngredient: "Tridemorph",
        concentration: "80% EC",
        modeOfAction: "SBI - sterol biosynthesis inhibitor",
        targetDiseases: "Powdery mildew, rust, leaf spot",
        applicationRate: "1 L/ha",
        cropCompatibility: "Wheat, barley, rice, vegetables",
        safetyPeriod: "30 days before harvest",
        storageInstructions: "Avoid storage in metal containers"
      }
    },
    {
      id: 15,
      name: "Validamycin Super",
      image: "/assets/fungicides/validamycin.jpg",
      category: "Antibiotic",
      content: "Active Ingredient: Validamycin – Antibiotic fungicide for sheath blight control.",
      detailedInfo: {
        activeIngredient: "Validamycin",
        concentration: "3% SL",
        modeOfAction: "Trehalase inhibitor",
        targetDiseases: "Sheath blight, stem rot, web blight",
        applicationRate: "2.5-3 L/ha",
        cropCompatibility: "Rice, sugarcane, vegetables",
        safetyPeriod: "14 days before harvest",
        storageInstructions: "Store in cool place protected from light"
      }
    },
    {
      id: 16,
      name: "Epoxiconazole Gold",
      image: "/assets/fungicides/epoxiconazole.jpg",
      category: "Triazole",
      content: "Active Ingredient: Epoxiconazole – Systemic fungicide for cereal diseases.",
      detailedInfo: {
        activeIngredient: "Epoxiconazole",
        concentration: "12.5% SE",
        modeOfAction: "DMI - sterol biosynthesis inhibitor",
        targetDiseases: "Rust, powdery mildew, septoria, fusarium",
        applicationRate: "1.5-2 L/ha",
        cropCompatibility: "Wheat, barley, rice, canola",
        safetyPeriod: "35 days before harvest",
        storageInstructions: "Keep in original container in dry place"
      }
    },
    {
      id: 17,
      name: "Pyraclostrobin Elite",
      image: "/assets/fungicides/pyraclostrobin.jpg",
      category: "Strobilurin",
      content: "Active Ingredient: Pyraclostrobin – Broad-spectrum strobilurin fungicide.",
      detailedInfo: {
        activeIngredient: "Pyraclostrobin",
        concentration: "20% WG",
        modeOfAction: "QoI - respiration inhibitor",
        targetDiseases: "Late blight, downy mildew, anthracnose, rust",
        applicationRate: "500-750 g/ha",
        cropCompatibility: "Grapes, vegetables, cereals, fruit crops",
        safetyPeriod: "7 days before harvest",
        storageInstructions: "Store in cool, dry place away from heat"
      }
    },
    {
      id: 18,
      name: "Flusilazole Pro",
      image: "/assets/fungicides/flusilazole.jpg",
      category: "Triazole",
      content: "Active Ingredient: Flusilazole – Systemic fungicide for fruit and vegetable diseases.",
      detailedInfo: {
        activeIngredient: "Flusilazole",
        concentration: "40% EC",
        modeOfAction: "DMI - sterol biosynthesis inhibitor",
        targetDiseases: "Powdery mildew, scab, rust, brown rot",
        applicationRate: "0.3-0.5 L/ha",
        cropCompatibility: "Apple, grapes, stone fruits, vegetables",
        safetyPeriod: "14-28 days before harvest",
        storageInstructions: "Protect from extreme temperatures"
      }
    },
    {
      id: 19,
      name: "Captan Max",
      image: "/assets/fungicides/captan.jpg",
      category: "Phthalimide",
      content: "Active Ingredient: Captan – Protective fungicide for fruit and vegetable crops.",
      detailedInfo: {
        activeIngredient: "Captan",
        concentration: "50% WP",
        modeOfAction: "Multi-site contact activity",
        targetDiseases: "Scab, brown rot, leaf spot, downy mildew",
        applicationRate: "2-3 kg/ha",
        cropCompatibility: "Apple, grapes, tomato, potato, vegetables",
        safetyPeriod: "0-7 days before harvest",
        storageInstructions: "Store in cool, dry place away from alkaline materials"
      }
    },
    {
      id: 20,
      name: "Fenpropimorph Super",
      image: "/assets/fungicides/fenpropimorph.jpg",
      category: "Morpholine",
      content: "Active Ingredient: Fenpropimorph – Systemic fungicide for cereal diseases.",
      detailedInfo: {
        activeIngredient: "Fenpropimorph",
        concentration: "75% EC",
        modeOfAction: "SBI - sterol biosynthesis inhibitor",
        targetDiseases: "Powdery mildew, rust, eyespot, septoria",
        applicationRate: "1-1.5 L/ha",
        cropCompatibility: "Wheat, barley, oats, rye",
        safetyPeriod: "35 days before harvest",
        storageInstructions: "Keep away from heat and ignition sources"
      }
    },
    {
      id: 21,
      name: "Fludioxonil Gold",
      image: "/assets/fungicides/fludioxonil.jpg",
      category: "Phenylpyrrole",
      content: "Active Ingredient: Fludioxonil – Seed treatment and post-harvest fungicide.",
      detailedInfo: {
        activeIngredient: "Fludioxonil",
        concentration: "23% SC",
        modeOfAction: "MAP/Histidine kinase in osmotic signal transduction",
        targetDiseases: "Seed rot, damping off, storage rot, sclerotinia",
        applicationRate: "200-300 ml/100 kg seed",
        cropCompatibility: "Cereals, vegetables, fruit crops",
        safetyPeriod: "7 days before harvest",
        storageInstructions: "Store in original container below 35°C"
      }
    },
    {
      id: 22,
      name: "Boscalid Elite",
      image: "/assets/fungicides/boscalid.jpg",
      category: "Carboxamide",
      content: "Active Ingredient: Boscalid – Broad-spectrum fungicide for various crops.",
      detailedInfo: {
        activeIngredient: "Boscalid",
        concentration: "50% WG",
        modeOfAction: "SDHI - respiration inhibitor",
        targetDiseases: "Gray mold, sclerotinia, alternaria, powdery mildew",
        applicationRate: "400-600 g/ha",
        cropCompatibility: "Grapes, vegetables, fruit crops, legumes",
        safetyPeriod: "7-14 days before harvest",
        storageInstructions: "Keep in sealed container in dry conditions"
      }
    },
    {
      id: 23,
      name: "Iprodione Pro",
      image: "/assets/fungicides/iprodione.jpg",
      category: "Dicarboximide",
      content: "Active Ingredient: Iprodione – Contact fungicide for gray mold and sclerotinia.",
      detailedInfo: {
        activeIngredient: "Iprodione",
        concentration: "50% WP",
        modeOfAction: "MAP/Histidine kinase in osmotic signal transduction",
        targetDiseases: "Gray mold, sclerotinia, alternaria, brown rot",
        applicationRate: "1-2 kg/ha",
        cropCompatibility: "Grapes, vegetables, fruit crops, ornamentals",
        safetyPeriod: "7-14 days before harvest",
        storageInstructions: "Store away from direct sunlight and moisture"
      }
    },
    {
      id: 24,
      name: "Tricyclazole Max",
      image: "/assets/fungicides/tricyclazole.jpg",
      category: "Benzothiazole",
      content: "Active Ingredient: Tricyclazole – Systemic fungicide for rice blast control.",
      detailedInfo: {
        activeIngredient: "Tricyclazole",
        concentration: "75% WP",
        modeOfAction: "Melanin biosynthesis inhibitor",
        targetDiseases: "Rice blast, neck blast, leaf blast",
        applicationRate: "600 g/ha",
        cropCompatibility: "Rice",
        safetyPeriod: "21 days before harvest",
        storageInstructions: "Store in cool, dry place below 30°C"
      }
    },
    {
      id: 25,
      name: "Fluazinam Super",
      image: "/assets/fungicides/fluazinam.jpg",
      category: "Dinitroaniline",
      content: "Active Ingredient: Fluazinam – Protective fungicide for oomycete diseases.",
      detailedInfo: {
        activeIngredient: "Fluazinam",
        concentration: "40% SC",
        modeOfAction: "Uncoupler of oxidative phosphorylation",
        targetDiseases: "Late blight, downy mildew, sclerotinia",
        applicationRate: "1.25-1.5 L/ha",
        cropCompatibility: "Potato, tomato, grapes, vegetables",
        safetyPeriod: "7 days before harvest",
        storageInstructions: "Protect from light and store below 35°C"
      }
    },
    {
      id: 26,
      name: "Kresoxim-methyl Gold",
      image: "/assets/fungicides/kresoxim.jpg",
      category: "Strobilurin",
      content: "Active Ingredient: Kresoxim-methyl – Systemic strobilurin fungicide.",
      detailedInfo: {
        activeIngredient: "Kresoxim-methyl",
        concentration: "44.3% SC",
        modeOfAction: "QoI - respiration inhibitor",
        targetDiseases: "Powdery mildew, rust, scab, downy mildew",
        applicationRate: "0.5-0.75 L/ha",
        cropCompatibility: "Apple, grapes, cereals, vegetables",
        safetyPeriod: "7-21 days before harvest",
        storageInstructions: "Keep container tightly closed in cool place"
      }
    },
    {
      id: 27,
      name: "Penconazole Elite",
      image: "/assets/fungicides/penconazole.jpg",
      category: "Triazole",
      content: "Active Ingredient: Penconazole – Systemic fungicide for powdery mildew control.",
      detailedInfo: {
        activeIngredient: "Penconazole",
        concentration: "10% EC",
        modeOfAction: "DMI - sterol biosynthesis inhibitor",
        targetDiseases: "Powdery mildew, rust, scab, brown rot",
        applicationRate: "1.5-2 L/ha",
        cropCompatibility: "Apple, grapes, stone fruits, vegetables",
        safetyPeriod: "14-28 days before harvest",
        storageInstructions: "Store in original packaging in dry area"
      }
    },
    {
      id: 28,
      name: "Fosetyl-Al Pro",
      image: "/assets/fungicides/fosetyl.jpg",
      category: "Phosphonate",
      content: "Active Ingredient: Fosetyl-Al – Systemic fungicide for oomycete diseases.",
      detailedInfo: {
        activeIngredient: "Fosetyl-Aluminium",
        concentration: "80% WP",
        modeOfAction: "Host plant defense activator",
        targetDiseases: "Downy mildew, phytophthora, root rot",
        applicationRate: "2.5-3 kg/ha",
        cropCompatibility: "Grapes, citrus, avocado, ornamentals",
        safetyPeriod: "14-28 days before harvest",
        storageInstructions: "Store away from moisture and heat"
      }
    },
    {
      id: 29,
      name: "Flutriafol Max",
      image: "/assets/fungicides/flutriafol.jpg",
      category: "Triazole",
      content: "Active Ingredient: Flutriafol – Broad-spectrum systemic fungicide.",
      detailedInfo: {
        activeIngredient: "Flutriafol",
        concentration: "25% EC",
        modeOfAction: "DMI - sterol biosynthesis inhibitor",
        targetDiseases: "Rust, powdery mildew, sheath blight, blast",
        applicationRate: "0.5-1 L/ha",
        cropCompatibility: "Rice, wheat, peanut, banana, vegetables",
        safetyPeriod: "21-35 days before harvest",
        storageInstructions: "Keep in original container in cool, dry place"
      }
    },
    {
      id: 30,
      name: "Myclobutanil Super",
      image: "/assets/fungicides/myclobutanil.jpg",
      category: "Triazole",
      content: "Active Ingredient: Myclobutanil – Systemic fungicide for fruit and vegetable crops.",
      detailedInfo: {
        activeIngredient: "Myclobutanil",
        concentration: "10% WP",
        modeOfAction: "DMI - sterol biosynthesis inhibitor",
        targetDiseases: "Powdery mildew, scab, rust, brown rot",
        applicationRate: "1-1.5 kg/ha",
        cropCompatibility: "Apple, grapes, stone fruits, vegetables",
        safetyPeriod: "14-21 days before harvest",
        storageInstructions: "Store in dry conditions away from children"
      }
    }
  ];

  const handleFungicideClick = (fungicide) => {
    setSelectedFungicide(fungicide);
  };

  const handleBackClick = () => {
    setSelectedFungicide(null);
  };

  if (selectedFungicide) {
    return (
      <FungicideDetailView 
        fungicide={selectedFungicide} 
        onBack={handleBackClick} 
      />
    );
  }

  return (
    <div className="fungicides-container">
      <div className="fungicides-header">
        <h1>Fungicides</h1>
        <p>Comprehensive range of fungicides for effective disease control</p>
      </div>
      
      <div className="fungicides-grid">
        {fungicides.map((fungicide) => (
          <FungicideCard
            key={fungicide.id}
            fungicide={fungicide}
            onClick={handleFungicideClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Fungicides;