import React, { useState } from 'react';
import '../../css/Agrochemicals/Insecticides.css';



// Separate component for insecticide card
const InsecticideCard = ({ insecticide, onClick }) => (
  <div 
    className="insecticide-card clickable"
    onClick={() => onClick(insecticide)}
  >
    <img src={insecticide.image} alt={insecticide.name} className="insecticide-image" />
    <div className="insecticide-info">
      <h3>{insecticide.name}</h3>
      <span className="insecticide-category">{insecticide.category}</span>
      <p>{insecticide.content}</p>
      <div className="click-hint">Click for detailed information</div>
    </div>
  </div>
);

// Separate component for detailed view
const InsecticideDetailView = ({ insecticide, onBack }) => (
  <div className="insecticide-detail-view">
    <div className="detail-header">
      <button className="back-button" onClick={onBack}>
        ← Back to Products
      </button>
      <h1>{insecticide.name}</h1>
    </div>

    <div className="detail-content">
      <div className="detail-image-section">
        <img 
          src={insecticide.image} 
          alt={insecticide.name}
          className="detail-image"
        />
        <div className="category-badge">
          {insecticide.category}
        </div>
      </div>

      <div className="detail-info-section">
        <div className="info-grid">
          <InfoCard title="Active Ingredient" value={insecticide.detailedInfo?.activeIngredient} />
          <InfoCard title="Concentration" value={insecticide.detailedInfo?.concentration} />
          <InfoCard title="Mode of Action" value={insecticide.detailedInfo?.modeOfAction} />
          <InfoCard title="Target Pests" value={insecticide.detailedInfo?.targetPests} />
          <InfoCard title="Application Rate" value={insecticide.detailedInfo?.applicationRate} />
          <InfoCard title="Crop Compatibility" value={insecticide.detailedInfo?.cropCompatibility} />
          <InfoCard title="Safety Period" value={insecticide.detailedInfo?.safetyPeriod} />
          <InfoCard title="Storage Instructions" value={insecticide.detailedInfo?.storageInstructions} />
        </div>

        <div className="basic-info">
          <h3>Overview</h3>
          <p>{insecticide.content}</p>
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

function Insecticides() {
  const [selectedInsecticide, setSelectedInsecticide] = useState(null);

  // Complete insecticides data
  const insecticides = [
    {
      id: 1,
      name: "Cypermethrin Pro",
      image: "seasonImage",
      category: "Pyrethroid",
      content: "Active Ingredient: Cypermethrin – Broad-spectrum insecticide for controlling various pests.",
      detailedInfo: {
        activeIngredient: "Cypermethrin",
        concentration: "10% EC",
        modeOfAction: "Sodium channel modulator affecting nervous system",
        targetPests: "Aphids, bollworms, thrips, whiteflies",
        applicationRate: "1-1.5 L/ha",
        cropCompatibility: "Cotton, vegetables, fruit crops",
        safetyPeriod: "3-7 days before harvest",
        storageInstructions: "Store in cool, dry place away from children"
      }
    },
    {
      id: 2,
      name: "Imidacloprid Max",
      image: "/assets/insecticides/imidacloprid.jpg",
      category: "Neonicotinoid",
      content: "Active Ingredient: Imidacloprid – Systemic insecticide for sucking pests.",
      detailedInfo: {
        activeIngredient: "Imidacloprid",
        concentration: "17.8% SL",
        modeOfAction: "Nicotinic acetylcholine receptor competitive modulator",
        targetPests: "Aphids, jassids, whiteflies, thrips",
        applicationRate: "300-400 ml/ha",
        cropCompatibility: "Cotton, rice, vegetables, sugarcane",
        safetyPeriod: "21 days before harvest",
        storageInstructions: "Keep in original container in cool place"
      }
    },
    {
      id: 3,
      name: "Chlorpyrifos Elite",
      image: "/assets/insecticides/chlorpyrifos.jpg",
      category: "Organophosphate",
      content: "Active Ingredient: Chlorpyrifos – Controls soil and foliar insects effectively.",
      detailedInfo: {
        activeIngredient: "Chlorpyrifos",
        concentration: "20% EC",
        modeOfAction: "Acetylcholinesterase inhibitor",
        targetPests: "Termites, cutworms, rootworms, bollworms",
        applicationRate: "2-2.5 L/ha",
        cropCompatibility: "Cotton, sugarcane, vegetables, fruit trees",
        safetyPeriod: "15-30 days before harvest",
        storageInstructions: "Store away from food and feed in dry place"
      }
    },
    {
      id: 4,
      name: "Thiamethoxam Power",
      image: "/assets/insecticides/thiamethoxam.jpg",
      category: "Neonicotinoid",
      content: "Active Ingredient: Thiamethoxam – Systemic insecticide with translaminar action.",
      detailedInfo: {
        activeIngredient: "Thiamethoxam",
        concentration: "25% WG",
        modeOfAction: "Nicotinic acetylcholine receptor agonist",
        targetPests: "Aphids, jassids, thrips, whiteflies, hoppers",
        applicationRate: "100-200 g/ha",
        cropCompatibility: "Cotton, rice, vegetables, wheat",
        safetyPeriod: "21 days before harvest",
        storageInstructions: "Store in cool, dry place below 30°C"
      }
    },
    {
      id: 5,
      name: "Lambda Cyhalothrin Super",
      image: "/assets/insecticides/lambda.jpg",
      category: "Pyrethroid",
      content: "Active Ingredient: Lambda Cyhalothrin – Fast-acting contact and stomach poison.",
      detailedInfo: {
        activeIngredient: "Lambda Cyhalothrin",
        concentration: "5% EC",
        modeOfAction: "Sodium channel modulator",
        targetPests: "Bollworms, armyworms, cutworms, aphids",
        applicationRate: "400-600 ml/ha",
        cropCompatibility: "Cotton, vegetables, pulses, cereals",
        safetyPeriod: "7 days before harvest",
        storageInstructions: "Protect from direct sunlight and moisture"
      }
    },
    {
      id: 6,
      name: "Acetamiprid Gold",
      image: "/assets/insecticides/acetamiprid.jpg",
      category: "Neonicotinoid",
      content: "Active Ingredient: Acetamiprid – Controls sucking pests with systemic action.",
      detailedInfo: {
        activeIngredient: "Acetamiprid",
        concentration: "20% SP",
        modeOfAction: "Nicotinic acetylcholine receptor modulator",
        targetPests: "Aphids, jassids, thrips, whiteflies",
        applicationRate: "50-100 g/ha",
        cropCompatibility: "Cotton, rice, vegetables, fruit crops",
        safetyPeriod: "14 days before harvest",
        storageInstructions: "Store in dry conditions away from heat"
      }
    },
    {
      id: 7,
      name: "Profenofos Master",
      image: "/assets/insecticides/profenofos.jpg",
      category: "Organophosphate",
      content: "Active Ingredient: Profenofos – Broad-spectrum insecticide and acaricide.",
      detailedInfo: {
        activeIngredient: "Profenofos",
        concentration: "50% EC",
        modeOfAction: "Acetylcholinesterase inhibitor",
        targetPests: "Bollworms, aphids, jassids, mites, thrips",
        applicationRate: "1-2 L/ha",
        cropCompatibility: "Cotton, vegetables, sugarcane",
        safetyPeriod: "15 days before harvest",
        storageInstructions: "Store in cool place away from oxidizing agents"
      }
    },
    {
      id: 8,
      name: "Fipronil Ultra",
      image: "/assets/insecticides/fipronil.jpg",
      category: "Phenylpyrazole",
      content: "Active Ingredient: Fipronil – Controls chewing and sucking insects.",
      detailedInfo: {
        activeIngredient: "Fipronil",
        concentration: "5% SC",
        modeOfAction: "GABA-gated chloride channel blocker",
        targetPests: "Thrips, aphids, termites, rice stem borer",
        applicationRate: "1-2 L/ha",
        cropCompatibility: "Rice, cotton, sugarcane, vegetables",
        safetyPeriod: "60 days before harvest",
        storageInstructions: "Store in original container below 35°C"
      }
    },
    {
      id: 9,
      name: "Spinosad Pro",
      image: "/assets/insecticides/spinosad.jpg",
      category: "Spinosyn",
      content: "Active Ingredient: Spinosad – Biological insecticide for lepidopteran pests.",
      detailedInfo: {
        activeIngredient: "Spinosad",
        concentration: "45% SC",
        modeOfAction: "Nicotinic acetylcholine receptor allosteric activator",
        targetPests: "Thrips, bollworms, fruit flies, leafminers",
        applicationRate: "300-400 ml/ha",
        cropCompatibility: "Cotton, vegetables, fruit crops, tea",
        safetyPeriod: "3 days before harvest",
        storageInstructions: "Protect from light and store in cool place"
      }
    },
    {
      id: 10,
      name: "Indoxacarb Elite",
      image: "/assets/insecticides/indoxacarb.jpg",
      category: "Oxadiazine",
      content: "Active Ingredient: Indoxacarb – Controls lepidopteran larvae effectively.",
      detailedInfo: {
        activeIngredient: "Indoxacarb",
        concentration: "14.5% SC",
        modeOfAction: "Voltage-gated sodium channel blocker",
        targetPests: "Bollworms, armyworms, diamondback moth, fruit borers",
        applicationRate: "500-750 ml/ha",
        cropCompatibility: "Cotton, vegetables, rice, sugarcane",
        safetyPeriod: "5 days before harvest",
        storageInstructions: "Store away from children and animals"
      }
    },
    {
      id: 11,
      name: "Emamectin Benzoate Max",
      image: "/assets/insecticides/emamectin.jpg",
      category: "Avermectin",
      content: "Active Ingredient: Emamectin Benzoate – Controls lepidopteran pests with translaminar action.",
      detailedInfo: {
        activeIngredient: "Emamectin Benzoate",
        concentration: "5% SG",
        modeOfAction: "Glutamate-gated chloride channel allosteric modulator",
        targetPests: "Bollworms, fruit borers, diamondback moth, thrips",
        applicationRate: "200-400 g/ha",
        cropCompatibility: "Cotton, vegetables, tea, grapes",
        safetyPeriod: "5 days before harvest",
        storageInstructions: "Store in dry place below 25°C"
      }
    },
    {
      id: 12,
      name: "Deltamethrin Power",
      image: "/assets/insecticides/deltamethrin.jpg",
      category: "Pyrethroid",
      content: "Active Ingredient: Deltamethrin – Fast knockdown pyrethroid insecticide.",
      detailedInfo: {
        activeIngredient: "Deltamethrin",
        concentration: "2.8% EC",
        modeOfAction: "Sodium channel modulator",
        targetPests: "Bollworms, aphids, thrips, jassids, whiteflies",
        applicationRate: "1 L/ha",
        cropCompatibility: "Cotton, vegetables, wheat, rice",
        safetyPeriod: "7 days before harvest",
        storageInstructions: "Keep container tightly closed in cool place"
      }
    },
    {
      id: 13,
      name: "Quinalphos Gold",
      image: "/assets/insecticides/quinalphos.jpg",
      category: "Organophosphate",
      content: "Active Ingredient: Quinalphos – Controls chewing and sucking pests.",
      detailedInfo: {
        activeIngredient: "Quinalphos",
        concentration: "25% EC",
        modeOfAction: "Acetylcholinesterase inhibitor",
        targetPests: "Bollworms, stem borers, leaf folders, aphids",
        applicationRate: "1.5-2 L/ha",
        cropCompatibility: "Rice, cotton, sugarcane, vegetables",
        safetyPeriod: "21 days before harvest",
        storageInstructions: "Store in cool, dry place away from heat"
      }
    },
    {
      id: 14,
      name: "Flubendiamide Super",
      image: "/assets/insecticides/flubendiamide.jpg",
      category: "Diamide",
      content: "Active Ingredient: Flubendiamide – Controls lepidopteran pests with novel mode of action.",
      detailedInfo: {
        activeIngredient: "Flubendiamide",
        concentration: "20% WG",
        modeOfAction: "Ryanodine receptor modulator",
        targetPests: "Bollworms, stem borers, fruit borers, diamondback moth",
        applicationRate: "250-300 g/ha",
        cropCompatibility: "Cotton, rice, vegetables, sugarcane",
        safetyPeriod: "7 days before harvest",
        storageInstructions: "Store in original packaging in dry conditions"
      }
    },
    {
      id: 15,
      name: "Bifenthrin Elite",
      image: "/assets/insecticides/bifenthrin.jpg",
      category: "Pyrethroid",
      content: "Active Ingredient: Bifenthrin – Long-lasting pyrethroid for soil and foliar pests.",
      detailedInfo: {
        activeIngredient: "Bifenthrin",
        concentration: "10% EC",
        modeOfAction: "Sodium channel modulator",
        targetPests: "Termites, aphids, thrips, whiteflies, mites",
        applicationRate: "1-1.5 L/ha",
        cropCompatibility: "Cotton, vegetables, fruit crops, ornamentals",
        safetyPeriod: "14 days before harvest",
        storageInstructions: "Protect from freezing and excessive heat"
      }
    },
    {
      id: 16,
      name: "Dimethoate Pro",
      image: "/assets/insecticides/dimethoate.jpg",
      category: "Organophosphate",
      content: "Active Ingredient: Dimethoate – Systemic insecticide for sucking pests.",
      detailedInfo: {
        activeIngredient: "Dimethoate",
        concentration: "30% EC",
        modeOfAction: "Acetylcholinesterase inhibitor",
        targetPests: "Aphids, jassids, thrips, whiteflies, mites",
        applicationRate: "1-2 L/ha",
        cropCompatibility: "Cotton, vegetables, fruit crops, cereals",
        safetyPeriod: "30 days before harvest",
        storageInstructions: "Store away from food and feed"
      }
    },
    {
      id: 17,
      name: "Carbofuran Max",
      image: "/assets/insecticides/carbofuran.jpg",
      category: "Carbamate",
      content: "Active Ingredient: Carbofuran – Systemic soil insecticide and nematicide.",
      detailedInfo: {
        activeIngredient: "Carbofuran",
        concentration: "3% G",
        modeOfAction: "Acetylcholinesterase inhibitor",
        targetPests: "Termites, root aphids, nematodes, soil grubs",
        applicationRate: "33 kg/ha",
        cropCompatibility: "Rice, sugarcane, potato, vegetables",
        safetyPeriod: "60 days before harvest",
        storageInstructions: "Store in dry place away from children"
      }
    },
    {
      id: 18,
      name: "Malathion Super",
      image: "/assets/insecticides/malathion.jpg",
      category: "Organophosphate",
      content: "Active Ingredient: Malathion – Broad-spectrum contact insecticide.",
      detailedInfo: {
        activeIngredient: "Malathion",
        concentration: "50% EC",
        modeOfAction: "Acetylcholinesterase inhibitor",
        targetPests: "Aphids, thrips, fruit flies, scale insects",
        applicationRate: "1.5-2 L/ha",
        cropCompatibility: "Fruit crops, vegetables, cereals",
        safetyPeriod: "7 days before harvest",
        storageInstructions: "Store in cool place away from alkaline materials"
      }
    },
    {
      id: 19,
      name: "Triazophos Gold",
      image: "/assets/insecticides/triazophos.jpg",
      category: "Organophosphate",
      content: "Active Ingredient: Triazophos – Controls stem borers and leaf folder in rice.",
      detailedInfo: {
        activeIngredient: "Triazophos",
        concentration: "40% EC",
        modeOfAction: "Acetylcholinesterase inhibitor",
        targetPests: "Stem borers, leaf folder, brown planthopper, gall midge",
        applicationRate: "1.25-1.5 L/ha",
        cropCompatibility: "Rice, cotton, sugarcane",
        safetyPeriod: "21 days before harvest",
        storageInstructions: "Keep away from heat and oxidizing agents"
      }
    },
    {
      id: 20,
      name: "Methomyl Elite",
      image: "/assets/insecticides/methomyl.jpg",
      category: "Carbamate",
      content: "Active Ingredient: Methomyl – Fast-acting carbamate insecticide.",
      detailedInfo: {
        activeIngredient: "Methomyl",
        concentration: "40% SP",
        modeOfAction: "Acetylcholinesterase inhibitor",
        targetPests: "Bollworms, armyworms, aphids, thrips",
        applicationRate: "1-1.5 kg/ha",
        cropCompatibility: "Cotton, vegetables, tobacco",
        safetyPeriod: "14 days before harvest",
        storageInstructions: "Store in dry conditions below 30°C"
      }
    },
    {
      id: 21,
      name: "Buprofezin Pro",
      image: "/assets/insecticides/buprofezin.jpg",
      category: "Thiadiazine",
      content: "Active Ingredient: Buprofezin – IGR for controlling planthoppers and whiteflies.",
      detailedInfo: {
        activeIngredient: "Buprofezin",
        concentration: "25% SC",
        modeOfAction: "Chitin biosynthesis inhibitor",
        targetPests: "Brown planthopper, whiteflies, mealybugs, scale insects",
        applicationRate: "1-1.5 L/ha",
        cropCompatibility: "Rice, cotton, vegetables, fruit crops",
        safetyPeriod: "21 days before harvest",
        storageInstructions: "Avoid extreme temperatures during storage"
      }
    },
    {
      id: 22,
      name: "Diafenthiuron Max",
      image: "/assets/insecticides/diafenthiuron.jpg",
      category: "Thiourea",
      content: "Active Ingredient: Diafenthiuron – Controls sucking pests and mites.",
      detailedInfo: {
        activeIngredient: "Diafenthiuron",
        concentration: "50% WP",
        modeOfAction: "Mitochondrial ATP synthase inhibitor",
        targetPests: "Whiteflies, aphids, jassids, thrips, mites",
        applicationRate: "1-1.5 kg/ha",
        cropCompatibility: "Cotton, vegetables, tea, grapes",
        safetyPeriod: "28 days before harvest",
        storageInstructions: "Store in cool, dry place away from light"
      }
    },
    {
      id: 23,
      name: "Pymetrozine Super",
      image: "/assets/insecticides/pymetrozine.jpg",
      category: "Pyridine Azomethine",
      content: "Active Ingredient: Pymetrozine – Selective feeding blocker for aphids and planthoppers.",
      detailedInfo: {
        activeIngredient: "Pymetrozine",
        concentration: "50% WG",
        modeOfAction: "Selective feeding blocker",
        targetPests: "Aphids, brown planthopper, whiteflies",
        applicationRate: "120-150 g/ha",
        cropCompatibility: "Rice, cotton, vegetables, fruit crops",
        safetyPeriod: "14 days before harvest",
        storageInstructions: "Keep container sealed in dry conditions"
      }
    },
    {
      id: 24,
      name: "Spiromesifen Gold",
      image: "/assets/insecticides/spiromesifen.jpg",
      category: "Tetronic Acid",
      content: "Active Ingredient: Spiromesifen – Miticide and insecticide for sucking pests.",
      detailedInfo: {
        activeIngredient: "Spiromesifen",
        concentration: "22.9% SC",
        modeOfAction: "Lipid synthesis inhibitor",
        targetPests: "Spider mites, whiteflies, thrips, aphids",
        applicationRate: "1-1.5 L/ha",
        cropCompatibility: "Cotton, vegetables, fruit crops, ornamentals",
        safetyPeriod: "3 days before harvest",
        storageInstructions: "Store in original container below 35°C"
      }
    },
    {
      id: 25,
      name: "Chlorantraniliprole Elite",
      image: "/assets/insecticides/chlorantraniliprole.jpg",
      category: "Diamide",
      content: "Active Ingredient: Chlorantraniliprole – Novel diamide for lepidopteran control.",
      detailedInfo: {
        activeIngredient: "Chlorantraniliprole",
        concentration: "18.5% SC",
        modeOfAction: "Ryanodine receptor modulator",
        targetPests: "Bollworms, stem borers, fruit borers, armyworms",
        applicationRate: "400-500 ml/ha",
        cropCompatibility: "Cotton, rice, vegetables, sugarcane, fruit crops",
        safetyPeriod: "3 days before harvest",
        storageInstructions: "Store in cool place away from direct sunlight"
      }
    },
    {
      id: 26,
      name: "Spirotetramat Pro",
      image: "/assets/insecticides/spirotetramat.jpg",
      category: "Tetramic Acid",
      content: "Active Ingredient: Spirotetramat – Systemic insecticide for sucking pests.",
      detailedInfo: {
        activeIngredient: "Spirotetramat",
        concentration: "11.01% OD",
        modeOfAction: "Lipid synthesis inhibitor",
        targetPests: "Aphids, whiteflies, thrips, mealybugs, scale insects",
        applicationRate: "1-1.5 L/ha",
        cropCompatibility: "Cotton, vegetables, fruit crops, tea",
        safetyPeriod: "7 days before harvest",
        storageInstructions: "Avoid storage in metal containers"
      }
    },
    {
      id: 27,
      name: "Pyriproxyfen Max",
      image: "/assets/insecticides/pyriproxyfen.jpg",
      category: "Pyridyloxypropyl Ether",
      content: "Active Ingredient: Pyriproxyfen – Juvenile hormone analog IGR.",
      detailedInfo: {
        activeIngredient: "Pyriproxyfen",
        concentration: "10% EC",
        modeOfAction: "Juvenile hormone mimic",
        targetPests: "Whiteflies, aphids, scales, thrips, planthoppers",
        applicationRate: "1-1.5 L/ha",
        cropCompatibility: "Cotton, vegetables, fruit crops, ornamentals",
        safetyPeriod: "30 days before harvest",
        storageInstructions: "Store in cool, dry place below 30°C"
      }
    },
    {
      id: 28,
      name: "Flonicamid Super",
      image: "/assets/insecticides/flonicamid.jpg",
      category: "Pyridinecarboxamide",
      content: "Active Ingredient: Flonicamid – Selective feeding blocker for aphids.",
      detailedInfo: {
        activeIngredient: "Flonicamid",
        concentration: "50% WG",
        modeOfAction: "Selective homopteran feeding blocker",
        targetPests: "Aphids, whiteflies, planthoppers, mealybugs",
        applicationRate: "150-200 g/ha",
        cropCompatibility: "Cotton, vegetables, fruit crops, cereals",
        safetyPeriod: "7 days before harvest",
        storageInstructions: "Keep in sealed container away from moisture"
      }
    },
    {
      id: 29,
      name: "Spinetoram Gold",
      image: "/assets/insecticides/spinetoram.jpg",
      category: "Spinosyn",
      content: "Active Ingredient: Spinetoram – Next-generation spinosyn insecticide.",
      detailedInfo: {
        activeIngredient: "Spinetoram",
        concentration: "11.7% SC",
        modeOfAction: "Nicotinic acetylcholine receptor allosteric activator",
        targetPests: "Thrips, bollworms, fruit flies, lepidopteran larvae",
        applicationRate: "1-1.5 L/ha",
        cropCompatibility: "Cotton, vegetables, fruit crops, grapes",
        safetyPeriod: "3 days before harvest",
        storageInstructions: "Protect from light and store in cool place"
      }
    },
    {
      id: 30,
      name: "Cyflumetofen Elite",
      image: "/assets/insecticides/cyflumetofen.jpg",
      category: "Beta-Ketonitrile",
      content: "Active Ingredient: Cyflumetofen – Specialized miticide for spider mites.",
      detailedInfo: {
        activeIngredient: "Cyflumetofen",
        concentration: "20% SC",
        modeOfAction: "Mitochondrial complex II electron transport inhibitor",
        targetPests: "Spider mites, rust mites, broad mites",
        applicationRate: "400-600 ml/ha",
        cropCompatibility: "Cotton, vegetables, fruit crops, tea, ornamentals",
        safetyPeriod: "7 days before harvest",
        storageInstructions: "Store in original container in cool place"
      }
    },
    {
      id: 31,
      name: "Hexaflumuron Pro",
      image: "/assets/insecticides/hexaflumuron.jpg",
      category: "Benzoylurea",
      content: "Active Ingredient: Hexaflumuron – IGR for controlling lepidopteran larvae.",
      detailedInfo: {
        activeIngredient: "Hexaflumuron",
        concentration: "5.45% EC",
        modeOfAction: "Chitin biosynthesis inhibitor",
        targetPests: "Bollworms, armyworms, loopers, fruit borers",
        applicationRate: "1.5-2 L/ha",
        cropCompatibility: "Cotton, vegetables, fruit crops",
        safetyPeriod: "14 days before harvest",
        storageInstructions: "Store away from direct sunlight and heat"
      }
    },
    {
      id: 32,
      name: "Lufenuron Max",
      image: "/assets/insecticides/lufenuron.jpg",
      category: "Benzoylurea",
      content: "Active Ingredient: Lufenuron – Chitin synthesis inhibitor for larvae control.",
      detailedInfo: {
        activeIngredient: "Lufenuron",
        concentration: "5.4% EC",
        modeOfAction: "Chitin biosynthesis inhibitor",
        targetPests: "Bollworms, diamondback moth, fruit borers, armyworms",
        applicationRate: "1-1.5 L/ha",
        cropCompatibility: "Cotton, vegetables, fruit crops",
        safetyPeriod: "21 days before harvest",
        storageInstructions: "Keep container tightly closed in dry area"
      }
    },

    {
      id: 34,
      name: "Metaflumizone Elite",
      image: "/assets/insecticides/metaflumizone.jpg",
      category: "Semicarbazone",
      content: "Active Ingredient: Metaflumizone – Novel sodium channel blocker for lepidopteran control.",
      detailedInfo: {
        activeIngredient: "Metaflumizone",
        concentration: "22% SC",
        modeOfAction: "Voltage-gated sodium channel blocker",
        targetPests: "Bollworms, armyworms, diamondback moth, fruit borers",
        applicationRate: "1-1.5 L/ha",
        cropCompatibility: "Cotton, vegetables, fruit crops",
        safetyPeriod: "3 days before harvest",
        storageInstructions: "Store below 35°C away from direct sunlight"
      }
    },
    {
      id: 35,
      name: "Cyantraniliprole Pro",
      image: "/assets/insecticides/cyantraniliprole.jpg",
      category: "Diamide",
      content: "Active Ingredient: Cyantraniliprole – Broad-spectrum diamide insecticide.",
      detailedInfo: {
        activeIngredient: "Cyantraniliprole",
        concentration: "10.26% OD",
        modeOfAction: "Ryanodine receptor modulator",
        targetPests: "Bollworms, stem borers, thrips, aphids, whiteflies",
        applicationRate: "2-3 L/ha",
        cropCompatibility: "Cotton, rice, vegetables, sugarcane, fruit crops",
        safetyPeriod: "3 days before harvest",
        storageInstructions: "Store in original packaging in cool, dry place"
      }
    }
  ];

  const handleInsecticideClick = (insecticide) => {
    setSelectedInsecticide(insecticide);
  };

  const handleBackClick = () => {
    setSelectedInsecticide(null);
  };

  if (selectedInsecticide) {
    return (
      <InsecticideDetailView 
        insecticide={selectedInsecticide} 
        onBack={handleBackClick} 
      />
    );
  }

  return (
    <div className="insecticides-container">
      <div className="insecticides-header">
        <h1>Insecticides</h1>
        <p>Comprehensive range of insecticides for effective pest control</p>
      </div>
      
      <div className="insecticides-grid">
        {insecticides.map((insecticide) => (
          <InsecticideCard
            key={insecticide.id}
            insecticide={insecticide}
            onClick={handleInsecticideClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Insecticides;