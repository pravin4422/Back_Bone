import React, { useState } from 'react';
import '../css/Herbicides.css';
import seasonImage from '../assets/herbicides/season.jpg';

// Separate component for herbicide card
const HerbicideCard = ({ herbicide, onClick }) => (
  <div 
    className="herbicide-card clickable"
    onClick={() => onClick(herbicide)}
  >
    <img src={herbicide.image} alt={herbicide.name} className="herbicide-image" />
    <div className="herbicide-info">
      <h3>{herbicide.name}</h3>
      <span className="herbicide-category">{herbicide.category}</span>
      <p>{herbicide.content}</p>
      <div className="click-hint">Click for detailed information</div>
    </div>
  </div>
);

// Separate component for detailed view
const HerbicideDetailView = ({ herbicide, onBack }) => (
  <div className="herbicide-detail-view">
    <div className="detail-header">
      <button className="back-button" onClick={onBack}>
        ← Back to Products
      </button>
      <h1>{herbicide.name}</h1>
    </div>

    <div className="detail-content">
      <div className="detail-image-section">
        <img 
          src={herbicide.image} 
          alt={herbicide.name}
          className="detail-image"
        />
        <div className="category-badge">
          {herbicide.category}
        </div>
      </div>

      <div className="detail-info-section">
        <div className="info-grid">
          <InfoCard title="Active Ingredient" value={herbicide.detailedInfo?.activeIngredient} />
          <InfoCard title="Concentration" value={herbicide.detailedInfo?.concentration} />
          <InfoCard title="Mode of Action" value={herbicide.detailedInfo?.modeOfAction} />
          <InfoCard title="Target Weeds" value={herbicide.detailedInfo?.targetWeeds} />
          <InfoCard title="Application Rate" value={herbicide.detailedInfo?.applicationRate} />
          <InfoCard title="Crop Compatibility" value={herbicide.detailedInfo?.cropCompatibility} />
          <InfoCard title="Safety Period" value={herbicide.detailedInfo?.safetyPeriod} />
          <InfoCard title="Storage Instructions" value={herbicide.detailedInfo?.storageInstructions} />
        </div>

        <div className="basic-info">
          <h3>Overview</h3>
          <p>{herbicide.content}</p>
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

function Herbicides() {
  const [selectedHerbicide, setSelectedHerbicide] = useState(null);

  // Complete herbicides data (showing first few and structure for remaining)
  const herbicides = [
    {
      id: 1,
      name: "Tag Proxy",
      image: seasonImage, // Use imported image
      category: "Contact Herbicide",
      content: "Active Ingredient: Paraquat Dichloride – Used for quick burndown of green plant tissues.",
      detailedInfo: {
        activeIngredient: "Paraquat Dichloride",
        concentration: "24% SL",
        modeOfAction: "Contact herbicide that causes rapid desiccation of green plant tissues",
        targetWeeds: "Annual and perennial broadleaf weeds, grasses",
        applicationRate: "2-3 L/ha",
        cropCompatibility: "Non-selective - use as directed spray avoiding crop contact",
        safetyPeriod: "7-14 days before harvest",
        storageInstructions: "Store in cool, dry place away from children and animals"
      }
    },
    {
      id: 2,
      name: "WeedMaster",
      image: seasonImage, // Use fallback image until proper images are available
      category: "Systemic Herbicide",
      content: "Active Ingredient: Glyphosate – Controls annual and perennial weeds effectively.",
      detailedInfo: {
        activeIngredient: "Glyphosate",
        concentration: "41% SL",
        modeOfAction: "Systemic herbicide that inhibits EPSP synthase enzyme",
        targetWeeds: "Annual and perennial weeds, woody plants",
        applicationRate: "2-4 L/ha depending on weed density",
        cropCompatibility: "Non-selective - use before planting or as directed spray",
        safetyPeriod: "15-20 days before harvest",
        storageInstructions: "Store in original container in cool, dry place"
      }
    },
    {
      id: 3,
      name: "Atrazino",
      image: "/assets/herbicides/atrazino.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Atrazine – Controls broadleaf and grassy weeds in corn, sugarcane.",
      detailedInfo: {
        activeIngredient: "Atrazine",
        concentration: "50% WP",
        modeOfAction: "Pre and post-emergence herbicide that inhibits photosynthesis",
        targetWeeds: "Broadleaf weeds and annual grasses",
        applicationRate: "1-2 kg/ha",
        cropCompatibility: "Corn, sugarcane, sorghum",
        safetyPeriod: "60-90 days before harvest",
        storageInstructions: "Keep in sealed container away from moisture"
      }
    },
    {
      id: 4,
      name: "Pendimax",
      image: "/assets/herbicides/pendimax.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Pendimethalin – Prevents weed seed germination in many crops.",
      detailedInfo: {
        activeIngredient: "Pendimethalin",
        concentration: "30% EC",
        modeOfAction: "Pre-emergence herbicide that inhibits cell division",
        targetWeeds: "Annual grasses and small-seeded broadleaf weeds",
        applicationRate: "1-1.5 L/ha",
        cropCompatibility: "Cotton, soybean, vegetables, fruit crops",
        safetyPeriod: "90-120 days before harvest",
        storageInstructions: "Store in cool place, protect from freezing"
      }
    },
    {
      id: 5,
      name: "Metribuzin Gold",
      image: "/assets/herbicides/metribuzin.jpg",
      category: "Selective Herbicide",
      content: "Active Ingredient: Metribuzin – Broad-spectrum control in soybean, potato, tomato.",
      detailedInfo: {
        activeIngredient: "Metribuzin",
        concentration: "70% WP",
        modeOfAction: "Selective herbicide that inhibits photosystem II",
        targetWeeds: "Annual broadleaf weeds and grasses",
        applicationRate: "0.5-1 kg/ha",
        cropCompatibility: "Soybean, potato, tomato, sugarcane",
        safetyPeriod: "60-75 days before harvest",
        storageInstructions: "Store in dry place away from heat sources"
      }
    },
    {
      id: 6,
      name: "Sulfosate 75",
      image: "/assets/herbicides/sulfosate.jpg",
      category: "Non-Selective",
      content: "Active Ingredient: Sulfosate – Used in plantation crops and non-crop areas.",
      detailedInfo: {
        activeIngredient: "Sulfosate",
        concentration: "75% SP",
        modeOfAction: "Non-selective systemic herbicide similar to glyphosate",
        targetWeeds: "Perennial and annual weeds, woody plants",
        applicationRate: "20-30 g/L of water",
        cropCompatibility: "Plantation crops, non-crop areas",
        safetyPeriod: "21 days before harvest",
        storageInstructions: "Store in cool, dry place in original packaging"
      }
    },
    {
      id: 7,
      name: "Haloxyfop Plus",
      image: "/assets/herbicides/haloxyfop.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Haloxyfop-R-methyl – Controls grass weeds in broadleaf crops.",
      detailedInfo: {
        activeIngredient: "Haloxyfop-R-methyl",
        concentration: "10.8% EC",
        modeOfAction: "Selective post-emergence grass herbicide",
        targetWeeds: "Annual and perennial grass weeds",
        applicationRate: "1-1.5 L/ha",
        cropCompatibility: "Cotton, soybean, sunflower, vegetables",
        safetyPeriod: "45-60 days before harvest",
        storageInstructions: "Protect from direct sunlight and moisture"
      }
    },
    {
      id: 8,
      name: "Butachlor King",
      image: "/assets/herbicides/butachlor.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Butachlor – Rice herbicide for controlling grassy weeds.",
      detailedInfo: {
        activeIngredient: "Butachlor",
        concentration: "50% EC",
        modeOfAction: "Pre-emergence herbicide for rice cultivation",
        targetWeeds: "Grassy weeds and sedges in rice",
        applicationRate: "2-2.5 L/ha",
        cropCompatibility: "Rice (transplanted and direct seeded)",
        safetyPeriod: "60 days before harvest",
        storageInstructions: "Store away from food and animal feed"
      }
    },
    {
      id: 9,
      name: "Dicamba Pro",
      image: "/assets/herbicides/dicamba.jpg",
      category: "Systemic Herbicide",
      content: "Active Ingredient: Dicamba – Controls woody plants and broadleaf weeds effectively.",
      detailedInfo: {
        activeIngredient: "Dicamba",
        concentration: "48% SL",
        modeOfAction: "Systemic herbicide that mimics auxin hormone",
        targetWeeds: "Woody plants and broadleaf weeds",
        applicationRate: "1-2 L/ha",
        cropCompatibility: "Corn, sorghum, wheat, pastures",
        safetyPeriod: "30-45 days before harvest",
        storageInstructions: "Store in original container away from heat"
      }
    },
    {
      id: 10,
      name: "Oxyfluorfen Max",
      image: "/assets/herbicides/oxyfluorfen.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Oxyfluorfen – Controls annual broadleaf and grass weeds.",
      detailedInfo: {
        activeIngredient: "Oxyfluorfen",
        concentration: "23.5% EC",
        modeOfAction: "Pre-emergence herbicide that inhibits protoporphyrinogen oxidase",
        targetWeeds: "Annual broadleaf and grass weeds",
        applicationRate: "1-2 L/ha",
        cropCompatibility: "Onion, garlic, cotton, fruit orchards",
        safetyPeriod: "90 days before harvest",
        storageInstructions: "Keep away from light and moisture"
      }
    },
    {
      id: 11,
      name: "Clodinafop Elite",
      image: "/assets/herbicides/clodinafop.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Clodinafop-propargyl – Selective grass herbicide for wheat.",
      detailedInfo: {
        activeIngredient: "Clodinafop-propargyl",
        concentration: "15% WP",
        modeOfAction: "Post-emergence selective herbicide for grass control",
        targetWeeds: "Wild oat, littleseed canarygrass, annual ryegrass",
        applicationRate: "400-500 g/ha",
        cropCompatibility: "Wheat, barley",
        safetyPeriod: "60 days before harvest",
        storageInstructions: "Store in dry conditions below 25°C"
      }
    },
    {
      id: 12,
      name: "Fenoxaprop Ultra",
      image: "/assets/herbicides/fenoxaprop.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Fenoxaprop-ethyl – Controls annual grass weeds in wheat.",
      detailedInfo: {
        activeIngredient: "Fenoxaprop-ethyl",
        concentration: "9.3% EC",
        modeOfAction: "Selective post-emergence grass herbicide",
        targetWeeds: "Annual grass weeds in cereals",
        applicationRate: "1-1.2 L/ha",
        cropCompatibility: "Wheat, barley, rice",
        safetyPeriod: "45 days before harvest",
        storageInstructions: "Protect from freezing and extreme heat"
      }
    },
    {
      id: 13,
      name: "Quizalofop Power",
      image: "/assets/herbicides/quizalofop.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Quizalofop-ethyl – Selective grass herbicide for broadleaf crops.",
      detailedInfo: {
        activeIngredient: "Quizalofop-ethyl",
        concentration: "5% EC",
        modeOfAction: "Selective systemic grass herbicide",
        targetWeeds: "Annual and perennial grass weeds",
        applicationRate: "1-2 L/ha",
        cropCompatibility: "Cotton, soybean, sunflower, potato",
        safetyPeriod: "30-45 days before harvest",
        storageInstructions: "Store in cool, ventilated area"
      }
    },
    {
      id: 14,
      name: "Metsulfuron Pro",
      image: "/assets/herbicides/metsulfuron.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Metsulfuron-methyl – Controls broadleaf weeds in cereals.",
      detailedInfo: {
        activeIngredient: "Metsulfuron-methyl",
        concentration: "20% WP",
        modeOfAction: "Systemic herbicide that inhibits ALS enzyme",
        targetWeeds: "Broadleaf weeds in cereals",
        applicationRate: "20-25 g/ha",
        cropCompatibility: "Wheat, barley, oats",
        safetyPeriod: "60 days before harvest",
        storageInstructions: "Keep container tightly closed in dry place"
      }
    },
    {
      id: 15,
      name: "Isoproturon Force",
      image: "/assets/herbicides/isoproturon.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Isoproturon – Controls annual grasses and broadleaf weeds in wheat.",
      detailedInfo: {
        activeIngredient: "Isoproturon",
        concentration: "75% WP",
        modeOfAction: "Pre and early post-emergence herbicide",
        targetWeeds: "Annual grasses and broadleaf weeds",
        applicationRate: "1-1.5 kg/ha",
        cropCompatibility: "Wheat, barley",
        safetyPeriod: "90 days before harvest",
        storageInstructions: "Store in original packaging in dry conditions"
      }
    },
    {
      id: 16,
      name: "Pretilachlor Super",
      image: "/assets/herbicides/pretilachlor.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Pretilachlor – Early post-emergence herbicide for rice crops.",
      detailedInfo: {
        activeIngredient: "Pretilachlor",
        concentration: "50% EC",
        modeOfAction: "Early post-emergence herbicide for rice",
        targetWeeds: "Grasses and sedges in rice fields",
        applicationRate: "1.5-2 L/ha",
        cropCompatibility: "Transplanted rice",
        safetyPeriod: "77 days before harvest",
        storageInstructions: "Store away from children and livestock"
      }
    },
    {
      id: 17,
      name: "Pyrazosulfuron Gold",
      image: "/assets/herbicides/pyrazosulfuron.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Pyrazosulfuron-ethyl – Controls sedges and broadleaf weeds in rice.",
      detailedInfo: {
        activeIngredient: "Pyrazosulfuron-ethyl",
        concentration: "10% WP",
        modeOfAction: "Post-emergence herbicide for rice cultivation",
        targetWeeds: "Sedges and broadleaf weeds in rice",
        applicationRate: "150-200 g/ha",
        cropCompatibility: "Transplanted and direct seeded rice",
        safetyPeriod: "60 days before harvest",
        storageInstructions: "Store in cool, dry place away from sunlight"
      }
    },
    {
      id: 18,
      name: "Bispyribac Elite",
      image: "/assets/herbicides/bispyribac.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Bispyribac-sodium – Controls grasses and sedges in rice.",
      detailedInfo: {
        activeIngredient: "Bispyribac-sodium",
        concentration: "10% SC",
        modeOfAction: "Post-emergence herbicide with ALS inhibition",
        targetWeeds: "Grasses, sedges and broadleaf weeds in rice",
        applicationRate: "200-250 ml/ha",
        cropCompatibility: "Rice (all types)",
        safetyPeriod: "70 days before harvest",
        storageInstructions: "Avoid storage in extreme temperatures"
      }
    },
    {
      id: 19,
      name: "Cyhalofop Master",
      image: "/assets/herbicides/cyhalofop.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Cyhalofop-butyl – Controls barnyard grass in rice fields.",
      detailedInfo: {
        activeIngredient: "Cyhalofop-butyl",
        concentration: "10% EC",
        modeOfAction: "Selective post-emergence grass herbicide",
        targetWeeds: "Barnyard grass and other grass weeds in rice",
        applicationRate: "1-1.5 L/ha",
        cropCompatibility: "Rice (transplanted and direct seeded)",
        safetyPeriod: "65 days before harvest",
        storageInstructions: "Store in original container in cool place"
      }
    },
    {
      id: 20,
      name: "Penoxsulam Plus",
      image: "/assets/herbicides/penoxsulam.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Penoxsulam – Broad-spectrum herbicide for rice cultivation.",
      detailedInfo: {
        activeIngredient: "Penoxsulam",
        concentration: "2.5% OD",
        modeOfAction: "Broad-spectrum post-emergence herbicide",
        targetWeeds: "Grasses, sedges and broadleaf weeds",
        applicationRate: "1-1.2 L/ha",
        cropCompatibility: "Rice cultivation",
        safetyPeriod: "83 days before harvest",
        storageInstructions: "Keep container sealed and store in dry area"
      }
    },
    {
      id: 21,
      name: "Flufenacet Premium",
      image: "/assets/herbicides/flufenacet.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Flufenacet – Controls annual grasses in various crops.",
      detailedInfo: {
        activeIngredient: "Flufenacet",
        concentration: "60% WG",
        modeOfAction: "Pre-emergence herbicide with lipid synthesis inhibition",
        targetWeeds: "Annual grasses and some broadleaf weeds",
        applicationRate: "250-400 g/ha",
        cropCompatibility: "Corn, potato, sunflower",
        safetyPeriod: "120 days before harvest",
        storageInstructions: "Store in dry place below 30°C"
      }
    },
    {
      id: 22,
      name: "Trifluralin Pro",
      image: "/assets/herbicides/trifluralin.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Trifluralin – Soil-incorporated herbicide for vegetable crops.",
      detailedInfo: {
        activeIngredient: "Trifluralin",
        concentration: "48% EC",
        modeOfAction: "Pre-plant incorporated herbicide",
        targetWeeds: "Annual grasses and small-seeded broadleaf weeds",
        applicationRate: "2-3 L/ha",
        cropCompatibility: "Cotton, soybean, vegetables",
        safetyPeriod: "120 days before harvest",
        storageInstructions: "Protect from light and store in cool place"
      }
    },
    {
      id: 23,
      name: "Alachlor Max",
      image: "/assets/herbicides/alachlor.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Alachlor – Controls annual grasses and broadleaf weeds.",
      detailedInfo: {
        activeIngredient: "Alachlor",
        concentration: "50% EC",
        modeOfAction: "Pre-emergence herbicide with cell division inhibition",
        targetWeeds: "Annual grasses and broadleaf weeds",
        applicationRate: "2-4 L/ha",
        cropCompatibility: "Corn, soybean, peanut",
        safetyPeriod: "130 days before harvest",
        storageInstructions: "Store away from food, feed and seed"
      }
    },
    {
      id: 24,
      name: "Metolachlor Elite",
      image: "/assets/herbicides/metolachlor.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Metolachlor – Pre-emergence herbicide for corn and soybean.",
      detailedInfo: {
        activeIngredient: "Metolachlor",
        concentration: "50% EC",
        modeOfAction: "Pre-emergence herbicide inhibiting shoot emergence",
        targetWeeds: "Annual grasses and some broadleaf weeds",
        applicationRate: "2-3 L/ha",
        cropCompatibility: "Corn, soybean, cotton, peanut",
        safetyPeriod: "95 days before harvest",
        storageInstructions: "Store in original container away from heat"
      }
    },
    {
      id: 25,
      name: "Acetochlor Super",
      image: "/assets/herbicides/acetochlor.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Acetochlor – Controls annual grasses in corn and cotton.",
      detailedInfo: {
        activeIngredient: "Acetochlor",
        concentration: "90% EC",
        modeOfAction: "Pre-emergence herbicide with long-chain fatty acid synthesis inhibition",
        targetWeeds: "Annual grasses and some broadleaf weeds",
        applicationRate: "1-2 L/ha",
        cropCompatibility: "Corn, cotton, soybean",
        safetyPeriod: "60-80 days before harvest",
        storageInstructions: "Keep in tightly closed container"
      }
    },
    {
      id: 26,
      name: "Dimethenamid Power",
      image: "/assets/herbicides/dimethenamid.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Dimethenamid – Residual herbicide for corn and soybean.",
      detailedInfo: {
        activeIngredient: "Dimethenamid",
        concentration: "72% EC",
        modeOfAction: "Pre-emergence herbicide with residual activity",
        targetWeeds: "Annual grasses and small-seeded broadleaf weeds",
        applicationRate: "1-1.5 L/ha",
        cropCompatibility: "Corn, soybean, sunflower",
        safetyPeriod: "105 days before harvest",
        storageInstructions: "Store in dry, ventilated area"
      }
    },
    {
      id: 27,
      name: "Propachlor Gold",
      image: "/assets/herbicides/propachlor.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Propachlor – Controls annual grasses in various crops.",
      detailedInfo: {
        activeIngredient: "Propachlor",
        concentration: "65% WP",
        modeOfAction: "Pre-emergence herbicide inhibiting protein synthesis",
        targetWeeds: "Annual grasses and some broadleaf weeds",
        applicationRate: "2-3 kg/ha",
        cropCompatibility: "Corn, sorghum, vegetables",
        safetyPeriod: "90 days before harvest",
        storageInstructions: "Store in cool, dry place away from children"
      }
    },
    {
      id: 28,
      name: "Simazine Ultra",
      image: "/assets/herbicides/simazine.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Simazine – Controls annual broadleaf and grass weeds.",
      detailedInfo: {
        activeIngredient: "Simazine",
        concentration: "50% WP",
        modeOfAction: "Pre-emergence triazine herbicide",
        targetWeeds: "Annual broadleaf and grass weeds",
        applicationRate: "1-2 kg/ha",
        cropCompatibility: "Corn, sugarcane, fruit orchards",
        safetyPeriod: "150 days before harvest",
        storageInstructions: "Keep container closed and store in dry conditions"
      }
    },
    {
      id: 29,
      name: "Prometryn Force",
      image: "/assets/herbicides/prometryn.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Prometryn – Controls broadleaf weeds in cotton and vegetables.",
      detailedInfo: {
        activeIngredient: "Prometryn",
        concentration: "50% SC",
        modeOfAction: "Pre and early post-emergence triazine herbicide",
        targetWeeds: "Broadleaf weeds and some grasses",
        applicationRate: "1.5-2 L/ha",
        cropCompatibility: "Cotton, celery, vegetables",
        safetyPeriod: "60-90 days before harvest",
        storageInstructions: "Avoid freezing and excessive heat"
      }
    },
    {
      id: 30,
      name: "Terbutryn Max",
      image: "/assets/herbicides/terbutryn.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Terbutryn – Controls annual weeds in fruit orchards.",
      detailedInfo: {
        activeIngredient: "Terbutryn",
        concentration: "50% SC",
        modeOfAction: "Pre-emergence triazine herbicide",
        targetWeeds: "Annual broadleaf and grass weeds",
        applicationRate: "2-3 L/ha",
        cropCompatibility: "Fruit orchards, vineyards",
        safetyPeriod: "120 days before harvest",
        storageInstructions: "Store in original container below 35°C"
      }
    },
    {
      id: 31,
      name: "Fluazifop Elite",
      image: "/assets/herbicides/fluazifop.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Fluazifop-butyl – Selective grass herbicide for broadleaf crops.",
      detailedInfo: {
        activeIngredient: "Fluazifop-butyl",
        concentration: "13.4% EC",
        modeOfAction: "Post-emergence selective grass herbicide",
        targetWeeds: "Annual and perennial grass weeds",
        applicationRate: "1.5-2 L/ha",
        cropCompatibility: "Cotton, soybean, vegetables, fruit crops",
        safetyPeriod: "30 days before harvest",
        storageInstructions: "Protect from direct sunlight and moisture"
      }
    },
    {
      id: 32,
      name: "Clethodim Pro",
      image: "/assets/herbicides/clethodim.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Clethodim – Controls annual and perennial grasses.",
      detailedInfo: {
        activeIngredient: "Clethodim",
        concentration: "12% EC",
        modeOfAction: "Systemic post-emergence grass herbicide",
        targetWeeds: "Annual and perennial grass weeds",
        applicationRate: "500-750 ml/ha",
        cropCompatibility: "Cotton, soybean, sunflower, vegetables",
        safetyPeriod: "14-30 days before harvest",
        storageInstructions: "Store in cool place away from heat sources"
      }
    },
    {
      id: 33,
      name: "Sethoxydim Power",
      image: "/assets/herbicides/sethoxydim.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Sethoxydim – Post-emergence grass herbicide for broadleaf crops.",
      detailedInfo: {
        activeIngredient: "Sethoxydim",
        concentration: "18.5% EC",
        modeOfAction: "Selective post-emergence grass herbicide",
        targetWeeds: "Annual and perennial grass weeds",
        applicationRate: "1-1.5 L/ha",
        cropCompatibility: "Cotton, soybean, vegetables, ornamentals",
        safetyPeriod: "30 days before harvest",
        storageInstructions: "Keep container tightly closed in dry area"
      }
    },
    {
      id: 34,
      name: "Tepraloxydim Max",
      image: "/assets/herbicides/tepraloxydim.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Tepraloxydim – Controls grass weeds in various broadleaf crops.",
      detailedInfo: {
        activeIngredient: "Tepraloxydim",
        concentration: "10% EC",
        modeOfAction: "Post-emergence selective grass herbicide",
        targetWeeds: "Annual grass weeds",
        applicationRate: "1-2 L/ha",
        cropCompatibility: "Cotton, sugar beet, vegetables",
        safetyPeriod: "35 days before harvest",
        storageInstructions: "Store away from children and animals"
      }
    },
    {
      id: 35,
      name: "Tralkoxydim Elite",
      image: "/assets/herbicides/tralkoxydim.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Tralkoxydim – Selective herbicide for grass control in wheat.",
      detailedInfo: {
        activeIngredient: "Tralkoxydim",
        concentration: "25% EC",
        modeOfAction: "Post-emergence cyclohexanedione herbicide",
        targetWeeds: "Wild oat and other annual grass weeds",
        applicationRate: "500-750 ml/ha",
        cropCompatibility: "Wheat, barley",
        safetyPeriod: "56 days before harvest",
        storageInstructions: "Protect from freezing and extreme heat"
      }
    },
    {
      id: 36,
      name: "Chlorimuron Super",
      image: "/assets/herbicides/chlorimuron.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Chlorimuron-ethyl – Controls broadleaf weeds in soybean.",
      detailedInfo: {
        activeIngredient: "Chlorimuron-ethyl",
        concentration: "25% WP",
        modeOfAction: "Post-emergence sulfonylurea herbicide",
        targetWeeds: "Broadleaf weeds in soybean",
        applicationRate: "40-80 g/ha",
        cropCompatibility: "Soybean",
        safetyPeriod: "60 days before harvest",
        storageInstructions: "Store in dry conditions below 30°C"
      }
    },
  // Additional herbicides to complete the set of 50
  {
    id: 37,
    name: "Sulfosulfuron Gold",
    image: "/assets/herbicides/sulfosulfuron.jpg",
    category: "Post-emergent",
    content: "Active Ingredient: Sulfosulfuron – Controls Phalaris minor in wheat crops.",
    detailedInfo: {
      activeIngredient: "Sulfosulfuron",
      concentration: "75% WG",
      modeOfAction: "Post-emergence sulfonylurea herbicide",
      targetWeeds: "Phalaris minor and other grass weeds",
      applicationRate: "33-40 g/ha",
      cropCompatibility: "Wheat",
      safetyPeriod: "60 days before harvest",
      storageInstructions: "Store in dry place away from moisture"
    }
  },
  {
    id: 38,
    name: "Imazethapyr Elite",
    image: "/assets/herbicides/imazethapyr.jpg",
    category: "Post-emergent",
    content: "Active Ingredient: Imazethapyr – Controls broadleaf and grass weeds in soybean.",
    detailedInfo: {
      activeIngredient: "Imazethapyr",
      concentration: "10% SL",
      modeOfAction: "Post-emergence imidazolinone herbicide",
      targetWeeds: "Broadleaf and grass weeds",
      applicationRate: "1-1.5 L/ha",
      cropCompatibility: "Soybean, peanut, field pea",
      safetyPeriod: "70 days before harvest",
      storageInstructions: "Store in original container in cool place"
    }
  },
  {
    id: 39,
    name: "Imazamox Power",
    image: "/assets/herbicides/imazamox.jpg",
    category: "Post-emergent",
    content: "Active Ingredient: Imazamox – Selective herbicide for legume crops.",
    detailedInfo: {
      activeIngredient: "Imazamox",
      concentration: "35% SC",
      modeOfAction: "Post-emergence ALS inhibitor herbicide",
      targetWeeds: "Annual broadleaf and grass weeds",
      applicationRate: "80-120 ml/ha",
      cropCompatibility: "Chickpea, lentil, field pea",
      safetyPeriod: "90 days before harvest",
      storageInstructions: "Avoid extreme temperatures during storage"
    }
  },
  {
    id: 40,
    name: "Clomazone Max",
    image: "/assets/herbicides/clomazone.jpg",
    category: "Pre-emergent",
    content: "Active Ingredient: Clomazone – Controls annual grasses and broadleaf weeds.",
    detailedInfo: {
      activeIngredient: "Clomazone",
      concentration: "50% EC",
      modeOfAction: "Pre-emergence herbicide inhibiting carotenoid synthesis",
      targetWeeds: "Annual grasses and broadleaf weeds",
      applicationRate: "1-2 L/ha",
      cropCompatibility: "Rice, cotton, soybean, sugarcane",
      safetyPeriod: "90 days before harvest",
      storageInstructions: "Store in cool, dry place below 30°C"
    }
  },
  {
    id: 41,
    name: "Ethoxysulfuron Pro",
    image: "/assets/herbicides/ethoxysulfuron.jpg",
    category: "Post-emergent",
    content: "Active Ingredient: Ethoxysulfuron – Controls sedges in rice fields.",
    detailedInfo: {
      activeIngredient: "Ethoxysulfuron",
      concentration: "15% WG",
      modeOfAction: "Post-emergence sulfonylurea herbicide",
      targetWeeds: "Sedges and broadleaf weeds in rice",
      applicationRate: "125-150 g/ha",
      cropCompatibility: "Transplanted rice",
      safetyPeriod: "60 days before harvest",
      storageInstructions: "Keep in sealed container away from humidity"
    }
  },
  {
    id: 42,
    name: "Azimsulfuron Elite",
    image: "/assets/herbicides/azimsulfuron.jpg",
    category: "Post-emergent",
    content: "Active Ingredient: Azimsulfuron – Controls sedges and broadleaf weeds in rice.",
    detailedInfo: {
      activeIngredient: "Azimsulfuron",
      concentration: "50% DF",
      modeOfAction: "Post-emergence herbicide with ALS inhibition",
      targetWeeds: "Sedges, broadleaf weeds in rice",
      applicationRate: "35-70 g/ha",
      cropCompatibility: "Rice (all cultivation methods)",
      safetyPeriod: "45 days before harvest",
      storageInstructions: "Store in dry conditions below 25°C"
    }
  },
  {
    id: 43,
    name: "Bentazone Super",
    image: "/assets/herbicides/bentazone.jpg",
    category: "Post-emergent",
    content: "Active Ingredient: Bentazone – Controls broadleaf weeds in legume crops.",
    detailedInfo: {
      activeIngredient: "Bentazone",
      concentration: "48% SL",
      modeOfAction: "Contact herbicide inhibiting photosystem II",
      targetWeeds: "Annual broadleaf weeds",
      applicationRate: "2-3 L/ha",
      cropCompatibility: "Soybean, bean, pea, rice",
      safetyPeriod: "30 days before harvest",
      storageInstructions: "Protect from freezing and direct sunlight"
    }
  },
  {
    id: 44,
    name: "Lactofen Gold",
    image: "/assets/herbicides/lactofen.jpg",
    category: "Post-emergent",
    content: "Active Ingredient: Lactofen – Contact herbicide for broadleaf weed control.",
    detailedInfo: {
      activeIngredient: "Lactofen",
      concentration: "24% EC",
      modeOfAction: "Contact herbicide causing membrane disruption",
      targetWeeds: "Annual broadleaf weeds",
      applicationRate: "1-1.5 L/ha",
      cropCompatibility: "Soybean, cotton, peanut",
      safetyPeriod: "50 days before harvest",
      storageInstructions: "Store away from heat and oxidizing agents"
    }
  },
  {
    id: 45,
    name: "Acifluorfen Max",
    image: "/assets/herbicides/acifluorfen.jpg",
    category: "Post-emergent",
    content: "Active Ingredient: Acifluorfen – Controls broadleaf weeds in soybean and peanut.",
    detailedInfo: {
      activeIngredient: "Acifluorfen",
      concentration: "16.5% SL",
      modeOfAction: "Contact herbicide with protoporphyrinogen oxidase inhibition",
      targetWeeds: "Annual and perennial broadleaf weeds",
      applicationRate: "1.5-2.5 L/ha",
      cropCompatibility: "Soybean, peanut, rice",
      safetyPeriod: "85 days before harvest",
      storageInstructions: "Store in original container below 35°C"
    }
  },
  {
    id: 46,
    name: "Fomesafen Pro",
    image: "/assets/herbicides/fomesafen.jpg",
    category: "Post-emergent",
    content: "Active Ingredient: Fomesafen – Selective broadleaf herbicide for soybean.",
    detailedInfo: {
      activeIngredient: "Fomesafen",
      concentration: "25% SL",
      modeOfAction: "Post-emergence herbicide inhibiting protoporphyrinogen oxidase",
      targetWeeds: "Annual broadleaf weeds",
      applicationRate: "1-2 L/ha",
      cropCompatibility: "Soybean",
      safetyPeriod: "65 days before harvest",
      storageInstructions: "Avoid storage in metal containers"
    }
  },
  {
    id: 47,
    name: "Chloransulam Elite",
    image: "/assets/herbicides/chloransulam.jpg",
    category: "Post-emergent",
    content: "Active Ingredient: Chloransulam-methyl – Controls broadleaf weeds in soybean.",
    detailedInfo: {
      activeIngredient: "Chloransulam-methyl",
      concentration: "84% WG",
      modeOfAction: "Post-emergence triazolopyrimidine herbicide",
      targetWeeds: "Annual and perennial broadleaf weeds",
      applicationRate: "35-50 g/ha",
      cropCompatibility: "Soybean",
      safetyPeriod: "60 days before harvest",
      storageInstructions: "Store in dry place away from children"
    }
  },
  {
    id: 48,
    name: "Flumioxazin Power",
    image: "/assets/herbicides/flumioxazin.jpg",
    category: "Pre-emergent",
    content: "Active Ingredient: Flumioxazin – Pre-emergence herbicide for multiple crops.",
    detailedInfo: {
      activeIngredient: "Flumioxazin",
      concentration: "51% WG",
      modeOfAction: "Pre-emergence herbicide with PPO inhibition",
      targetWeeds: "Annual broadleaf and grass weeds",
      applicationRate: "100-200 g/ha",
      cropCompatibility: "Soybean, cotton, tree fruits, nuts",
      safetyPeriod: "120 days before harvest",
      storageInstructions: "Keep container tightly closed in cool place"
    }
  },
  {
    id: 49,
    name: "Pyrithiobac Max",
    image: "/assets/herbicides/pyrithiobac.jpg",
    category: "Post-emergent",
    content: "Active Ingredient: Pyrithiobac-sodium – Selective herbicide for cotton crops.",
    detailedInfo: {
      activeIngredient: "Pyrithiobac-sodium",
      concentration: "10% EC",
      modeOfAction: "Post-emergence ALS inhibitor herbicide",
      targetWeeds: "Annual broadleaf and grass weeds",
      applicationRate: "1-1.5 L/ha",
      cropCompatibility: "Cotton",
      safetyPeriod: "30 days before harvest",
      storageInstructions: "Store in original packaging below 30°C"
    }
  },
  {
    id: 50,
    name: "Trifloxysulfuron Gold",
    image: "/assets/herbicides/trifloxysulfuron.jpg",
    category: "Post-emergent",
    content: "Active Ingredient: Trifloxysulfuron-sodium – Controls broadleaf weeds in cotton.",
    detailedInfo: {
      activeIngredient: "Trifloxysulfuron-sodium",
      concentration: "75% WG",
      modeOfAction: "Post-emergence sulfonylurea herbicide",
      targetWeeds: "Annual and perennial broadleaf weeds",
      applicationRate: "15-20 g/ha",
      cropCompatibility: "Cotton",
      safetyPeriod: "30 days before harvest",
      storageInstructions: "Store in cool, dry place away from direct sunlight"
    }
  }
    // ... add all remaining herbicides here (3-50)
    // For brevity, I'm showing the pattern. You should complete all 50 entries.
  ];

  const handleCardClick = (herbicide) => {
    setSelectedHerbicide(herbicide);
  };

  const handleCloseDetail = () => {
    setSelectedHerbicide(null);
  };

  return (
    <div className="herbicides-container">
      {!selectedHerbicide ? (
        <>
          <div className="herbicides-grid">
            {herbicides.map((herbicide) => (
              <HerbicideCard 
                key={herbicide.id}
                herbicide={herbicide}
                onClick={handleCardClick}
              />
            ))}
          </div>

          <div className="herbicides-footer">
            Showing {herbicides.length} herbicide products
          </div>
        </>
      ) : (
        <HerbicideDetailView 
          herbicide={selectedHerbicide}
          onBack={handleCloseDetail}
        />
      )}
    </div>
  );
}

export default Herbicides;