import React, { useState } from 'react';
import '../../css/Agrochemicals/SoilConditioners.css';

// Separate component for soil conditioner card
const SoilConditionerCard = ({ soilConditioner, onClick }) => (
  <div 
    className="soil-conditioner-card clickable"
    onClick={() => onClick(soilConditioner)}
  >
    <img src={soilConditioner.image} alt={soilConditioner.name} className="soil-conditioner-image" />
    <div className="soil-conditioner-info">
      <h3>{soilConditioner.name}</h3>
      <span className="soil-conditioner-category">{soilConditioner.category}</span>
      <p>{soilConditioner.content}</p>
      <div className="click-hint">Click for detailed information</div>
    </div>
  </div>
);

// Separate component for detailed view
const SoilConditionerDetailView = ({ soilConditioner, onBack }) => (
  <div className="soil-conditioner-detail-view">
    <div className="detail-header">
      <button className="back-button" onClick={onBack}>
        ← Back to Products
      </button>
      <h1>{soilConditioner.name}</h1>
    </div>

    <div className="detail-content">
      <div className="detail-image-section">
        <img 
          src={soilConditioner.image} 
          alt={soilConditioner.name}
          className="detail-image"
        />
        <div className="category-badge">
          {soilConditioner.category}
        </div>
      </div>

      <div className="detail-info-section">
        <div className="info-grid">
          <InfoCard title="Active Ingredient" value={soilConditioner.detailedInfo?.activeIngredient} />
          <InfoCard title="Composition" value={soilConditioner.detailedInfo?.composition} />
          <InfoCard title="Mode of Action" value={soilConditioner.detailedInfo?.modeOfAction} />
          <InfoCard title="Primary Benefits" value={soilConditioner.detailedInfo?.primaryBenefits} />
          <InfoCard title="Application Rate" value={soilConditioner.detailedInfo?.applicationRate} />
          <InfoCard title="Soil Compatibility" value={soilConditioner.detailedInfo?.soilCompatibility} />
          <InfoCard title="Application Method" value={soilConditioner.detailedInfo?.applicationMethod} />
          <InfoCard title="Storage Instructions" value={soilConditioner.detailedInfo?.storageInstructions} />
        </div>

        <div className="basic-info">
          <h3>Overview</h3>
          <p>{soilConditioner.content}</p>
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

function SoilConditioners() {
  const [selectedSoilConditioner, setSelectedSoilConditioner] = useState(null);

  // Complete soil conditioners data
  const soilConditioners = [
    {
      id: 1,
      name: "Humic Acid Pro",
      image: "/assets/soil-conditioners/humic-acid.jpg",
      category: "Organic Soil Enhancer",
      content: "Active Ingredient: Humic Acid – Improves soil structure and nutrient uptake efficiency.",
      detailedInfo: {
        activeIngredient: "Humic Acid",
        composition: "85% Humic Acid, 15% Fulvic Acid",
        modeOfAction: "Chelates nutrients and improves soil cation exchange capacity",
        primaryBenefits: "Enhanced nutrient uptake, improved soil structure, increased water retention",
        applicationRate: "2-3 kg/ha",
        soilCompatibility: "All soil types, especially beneficial for sandy and clay soils",
        applicationMethod: "Soil application, fertigation, foliar spray",
        storageInstructions: "Store in cool, dry place away from direct sunlight"
      }
    },
    {
      id: 2,
      name: "Gypsum Max",
      image: "/assets/soil-conditioners/gypsum.jpg",
      category: "Calcium Sulfate",
      content: "Active Ingredient: Calcium Sulfate – Reclaims sodic soils and improves soil structure.",
      detailedInfo: {
        activeIngredient: "Calcium Sulfate Dihydrate",
        composition: "95% Calcium Sulfate, 5% moisture",
        modeOfAction: "Replaces sodium ions with calcium ions in soil",
        primaryBenefits: "Sodic soil reclamation, improved water infiltration, reduced soil crusting",
        applicationRate: "2-5 tons/ha",
        soilCompatibility: "Sodic soils, alkaline soils, heavy clay soils",
        applicationMethod: "Broadcasting followed by incorporation",
        storageInstructions: "Keep dry and protect from moisture"
      }
    },
    {
      id: 3,
      name: "Bentonite Elite",
      image: "/assets/soil-conditioners/bentonite.jpg",
      category: "Clay Mineral",
      content: "Active Ingredient: Bentonite Clay – Improves water retention and soil binding.",
      detailedInfo: {
        activeIngredient: "Sodium Bentonite",
        composition: "90% Bentonite Clay, 10% other clay minerals",
        modeOfAction: "Swells to form gel-like structure, increases soil plasticity",
        primaryBenefits: "Improved water retention, reduced soil erosion, enhanced soil binding",
        applicationRate: "500-1000 kg/ha",
        soilCompatibility: "Sandy soils, light textured soils",
        applicationMethod: "Broadcasting and mixing with top soil",
        storageInstructions: "Store in waterproof containers"
      }
    },
    {
      id: 4,
      name: "Lime Pro",
      image: "/assets/soil-conditioners/lime.jpg",
      category: "pH Adjuster",
      content: "Active Ingredient: Calcium Carbonate – Neutralizes soil acidity and improves pH.",
      detailedInfo: {
        activeIngredient: "Calcium Carbonate",
        composition: "98% CaCO3, 2% magnesium carbonate",
        modeOfAction: "Neutralizes soil acidity by releasing hydroxide ions",
        primaryBenefits: "pH correction, improved nutrient availability, enhanced microbial activity",
        applicationRate: "1-3 tons/ha",
        soilCompatibility: "Acidic soils (pH below 6.5)",
        applicationMethod: "Broadcasting 2-3 months before planting",
        storageInstructions: "Keep dry and away from acids"
      }
    },
    {
      id: 5,
      name: "Sulfur Super",
      image: "/assets/soil-conditioners/sulfur.jpg",
      category: "pH Reducer",
      content: "Active Ingredient: Elemental Sulfur – Lowers soil pH and improves alkaline soils.",
      detailedInfo: {
        activeIngredient: "Elemental Sulfur",
        composition: "99% pure sulfur powder",
        modeOfAction: "Oxidizes to sulfuric acid, lowering soil pH",
        primaryBenefits: "pH reduction, improved nutrient availability in alkaline soils, enhanced iron uptake",
        applicationRate: "200-500 kg/ha",
        soilCompatibility: "Alkaline soils (pH above 7.5)",
        applicationMethod: "Broadcasting and incorporation before planting",
        storageInstructions: "Store in cool, dry place away from heat sources"
      }
    },
    {
      id: 6,
      name: "Perlite Gold",
      image: "/assets/soil-conditioners/perlite.jpg",
      category: "Soil Aerator",
      content: "Active Ingredient: Expanded Perlite – Improves soil aeration and drainage.",
      detailedInfo: {
        activeIngredient: "Expanded Perlite",
        composition: "100% expanded volcanic glass",
        modeOfAction: "Creates air pockets in soil, improves porosity",
        primaryBenefits: "Enhanced aeration, improved drainage, root zone oxygenation",
        applicationRate: "10-20% by volume",
        soilCompatibility: "Heavy clay soils, compacted soils, container growing",
        applicationMethod: "Mixing with soil during bed preparation",
        storageInstructions: "Store in dry area, protect from wind"
      }
    },
    {
      id: 7,
      name: "Vermiculite Pro",
      image: "/assets/soil-conditioners/vermiculite.jpg",
      category: "Water Retainer",
      content: "Active Ingredient: Expanded Vermiculite – Retains moisture and nutrients in soil.",
      detailedInfo: {
        activeIngredient: "Expanded Vermiculite",
        composition: "100% expanded mica mineral",
        modeOfAction: "Absorbs and holds water and nutrients, releases slowly",
        primaryBenefits: "Water retention, nutrient holding capacity, improved soil structure",
        applicationRate: "5-15% by volume",
        soilCompatibility: "Sandy soils, fast-draining soils, seed starting",
        applicationMethod: "Mixing with growing medium or soil",
        storageInstructions: "Keep in sealed bags away from moisture"
      }
    },
    {
      id: 8,
      name: "Compost Max",
      image: "/assets/soil-conditioners/compost.jpg",
      category: "Organic Matter",
      content: "Active Ingredient: Composted Organic Matter – Enriches soil with organic content.",
      detailedInfo: {
        activeIngredient: "Composted Organic Matter",
        composition: "Decomposed plant and animal materials, 2-3% NPK",
        modeOfAction: "Adds organic matter, improves soil biology and structure",
        primaryBenefits: "Soil fertility, microbial activity, water retention, soil structure",
        applicationRate: "5-10 tons/ha",
        soilCompatibility: "All soil types, especially depleted soils",
        applicationMethod: "Broadcasting and incorporation into soil",
        storageInstructions: "Store in covered area, maintain proper moisture"
      }
    },
    {
      id: 9,
      name: "Biochar Elite",
      image: "/assets/soil-conditioners/biochar.jpg",
      category: "Carbon Sequester",
      content: "Active Ingredient: Activated Biochar – Long-term soil carbon storage and improvement.",
      detailedInfo: {
        activeIngredient: "Activated Biochar",
        composition: "85% carbon, 15% ash and minerals",
        modeOfAction: "Provides stable carbon matrix, improves nutrient retention",
        primaryBenefits: "Carbon sequestration, nutrient retention, soil structure, pH buffering",
        applicationRate: "1-2 tons/ha",
        soilCompatibility: "All soil types, particularly acidic and nutrient-poor soils",
        applicationMethod: "Broadcasting and incorporation, can be mixed with compost",
        storageInstructions: "Store in dry place, can be stored indefinitely"
      }
    },
    {
      id: 10,
      name: "Zeolite Pro",
      image: "/assets/soil-conditioners/zeolite.jpg",
      category: "Ion Exchanger",
      content: "Active Ingredient: Natural Zeolite – Improves nutrient retention and soil structure.",
      detailedInfo: {
        activeIngredient: "Natural Zeolite (Clinoptilolite)",
        composition: "90% zeolite mineral, 10% other minerals",
        modeOfAction: "Ion exchange and molecular sieve properties",
        primaryBenefits: "Nutrient retention, reduced leaching, improved CEC, water holding",
        applicationRate: "1-3 tons/ha",
        soilCompatibility: "Sandy soils, high-leaching soils, intensive cultivation",
        applicationMethod: "Broadcasting and incorporation into root zone",
        storageInstructions: "Store in dry conditions away from chemicals"
      }
    },
    {
      id: 11,
      name: "Coconut Coir Max",
      image: "/assets/soil-conditioners/coir.jpg",
      category: "Fiber Amendment",
      content: "Active Ingredient: Coconut Coir Fiber – Natural soil conditioner from coconut husks.",
      detailedInfo: {
        activeIngredient: "Coconut Coir Fiber",
        composition: "100% processed coconut husk fiber",
        modeOfAction: "Improves soil structure through fiber matrix",
        primaryBenefits: "Water retention, aeration, organic matter addition, disease suppression",
        applicationRate: "20-30% by volume",
        soilCompatibility: "All soil types, especially container growing and raised beds",
        applicationMethod: "Mixing with soil or growing medium",
        storageInstructions: "Store in dry place, can be stored compressed"
      }
    },
    {
      id: 12,
      name: "Peat Moss Super",
      image: "/assets/soil-conditioners/peat-moss.jpg",
      category: "Organic Conditioner",
      content: "Active Ingredient: Sphagnum Peat Moss – Acidic organic matter for soil conditioning.",
      detailedInfo: {
        activeIngredient: "Sphagnum Peat Moss",
        composition: "100% decomposed sphagnum moss",
        modeOfAction: "Adds organic matter and acidity to soil",
        primaryBenefits: "Water retention, soil structure, pH reduction, organic matter",
        applicationRate: "25-50% by volume for amendments",
        soilCompatibility: "Alkaline soils, sandy soils, acid-loving plants",
        applicationMethod: "Mixing with existing soil",
        storageInstructions: "Keep moist and covered to prevent drying"
      }
    },
    {
      id: 13,
      name: "Dolomite Pro",
      image: "/assets/soil-conditioners/dolomite.jpg",
      category: "Magnesium Lime",
      content: "Active Ingredient: Dolomitic Limestone – Provides calcium and magnesium while adjusting pH.",
      detailedInfo: {
        activeIngredient: "Calcium Magnesium Carbonate",
        composition: "54% CaCO3, 40% MgCO3",
        modeOfAction: "Neutralizes acidity and supplies Ca and Mg",
        primaryBenefits: "pH correction, calcium and magnesium nutrition, improved soil structure",
        applicationRate: "1-2 tons/ha",
        soilCompatibility: "Acidic soils deficient in magnesium",
        applicationMethod: "Broadcasting 2-3 months before planting",
        storageInstructions: "Store in dry place away from moisture"
      }
    },
    {
      id: 14,
      name: "Rockdust Elite",
      image: "/assets/soil-conditioners/rockdust.jpg",
      category: "Mineral Supplement",
      content: "Active Ingredient: Basalt Rock Dust – Provides slow-release minerals for soil enrichment.",
      detailedInfo: {
        activeIngredient: "Basalt Rock Dust",
        composition: "Trace minerals including K, Ca, Mg, Fe, Si",
        modeOfAction: "Slow weathering releases minerals over time",
        primaryBenefits: "Mineral nutrition, trace element supply, soil structure improvement",
        applicationRate: "2-5 tons/ha",
        soilCompatibility: "Mineral-depleted soils, organic farming systems",
        applicationMethod: "Broadcasting and incorporation",
        storageInstructions: "Store in dry area, indefinite shelf life"
      }
    },
    {
      id: 15,
      name: "Alginite Max",
      image: "/assets/soil-conditioners/alginite.jpg",
      category: "Marine Conditioner",
      content: "Active Ingredient: Marine Algae Extract – Organic soil conditioner from sea algae.",
      detailedInfo: {
        activeIngredient: "Processed Marine Algae",
        composition: "Algae extract with trace minerals and growth promoters",
        modeOfAction: "Supplies organic matter and marine-derived nutrients",
        primaryBenefits: "Soil biology enhancement, trace nutrients, growth stimulation",
        applicationRate: "500-1000 kg/ha",
        soilCompatibility: "All soil types, particularly beneficial for organic systems",
        applicationMethod: "Broadcasting or incorporation into soil",
        storageInstructions: "Store in cool, dry place away from direct sunlight"
      }
    },
    {
      id: 16,
      name: "Polymer Gel Pro",
      image: "/assets/soil-conditioners/polymer-gel.jpg",
      category: "Water Absorber",
      content: "Active Ingredient: Hydrogel Polymer – Super-absorbent polymer for water retention.",
      detailedInfo: {
        activeIngredient: "Cross-linked Polyacrylamide",
        composition: "99% pure hydrogel polymer crystals",
        modeOfAction: "Absorbs and holds up to 400 times its weight in water",
        primaryBenefits: "Water conservation, reduced irrigation frequency, drought protection",
        applicationRate: "2-5 kg/ha",
        soilCompatibility: "Arid and semi-arid soils, container growing",
        applicationMethod: "Mixing with soil around root zone",
        storageInstructions: "Keep dry and sealed, avoid exposure to moisture"
      }
    },
    {
      id: 17,
      name: "Azomite Super",
      image: "/assets/soil-conditioners/azomite.jpg",
      category: "Trace Mineral",
      content: "Active Ingredient: Azomite – Natural volcanic ash providing 70+ trace minerals.",
      detailedInfo: {
        activeIngredient: "Hydrated Sodium Calcium Aluminosilicate",
        composition: "Over 70 trace minerals including rare earth elements",
        modeOfAction: "Slow release of trace minerals through weathering",
        primaryBenefits: "Complete trace mineral nutrition, improved plant health, soil remineralization",
        applicationRate: "200-400 kg/ha",
        soilCompatibility: "Trace mineral deficient soils, all crop types",
        applicationMethod: "Broadcasting and light incorporation",
        storageInstructions: "Store in dry place, extremely long shelf life"
      }
    },
    {
      id: 18,
      name: "Lignite Gold",
      image: "/assets/soil-conditioners/lignite.jpg",
      category: "Humic Source",
      content: "Active Ingredient: Leonardite – Natural source of humic and fulvic acids.",
      detailedInfo: {
        activeIngredient: "Oxidized Lignite (Leonardite)",
        composition: "60-70% humic acid, 20-30% fulvic acid",
        modeOfAction: "Chelates nutrients and improves soil chemistry",
        primaryBenefits: "Nutrient chelation, soil structure, cation exchange, root development",
        applicationRate: "1-3 tons/ha",
        soilCompatibility: "All soil types, especially sandy and alkaline soils",
        applicationMethod: "Broadcasting and incorporation, can be composted",
        storageInstructions: "Store in covered area to prevent wind loss"
      }
    },
    {
      id: 19,
      name: "Mycorrhizae Pro",
      image: "/assets/soil-conditioners/mycorrhizae.jpg",
      category: "Biological Enhancer",
      content: "Active Ingredient: Mycorrhizal Fungi – Beneficial fungi for enhanced root function.",
      detailedInfo: {
        activeIngredient: "Glomus and Rhizophagus species",
        composition: "Mixed mycorrhizal spores and carrier medium",
        modeOfAction: "Forms symbiotic relationship with plant roots",
        primaryBenefits: "Enhanced nutrient uptake, improved drought tolerance, disease resistance",
        applicationRate: "5-10 kg/ha",
        soilCompatibility: "Non-fumigated soils, organic and sustainable systems",
        applicationMethod: "Soil inoculation, seed treatment, transplant dipping",
        storageInstructions: "Store in cool, dry place, use within 2 years"
      }
    },
    {
      id: 20,
      name: "Diatomaceous Earth Max",
      image: "/assets/soil-conditioners/diatomaceous-earth.jpg",
      category: "Silicon Source",
      content: "Active Ingredient: Diatomaceous Earth – Fossilized diatoms for soil structure improvement.",
      detailedInfo: {
        activeIngredient: "Amorphous Silica from Diatoms",
        composition: "85% silica, 15% trace minerals",
        modeOfAction: "Improves soil porosity and provides plant-available silicon",
        primaryBenefits: "Soil aeration, silicon nutrition, pest deterrent, water retention",
        applicationRate: "1-2 tons/ha",
        soilCompatibility: "Heavy clay soils, silicon-deficient soils",
        applicationMethod: "Broadcasting and light incorporation",
        storageInstructions: "Store in dry place, protect from wind dispersion"
      }
    }
  ];

  const handleSoilConditionerClick = (soilConditioner) => {
    setSelectedSoilConditioner(soilConditioner);
  };

  const handleBackClick = () => {
    setSelectedSoilConditioner(null);
  };

  if (selectedSoilConditioner) {
    return (
      <SoilConditionerDetailView 
        soilConditioner={selectedSoilConditioner} 
        onBack={handleBackClick} 
      />
    );
  }

  return (
    <div className="soil-conditioners-container">
      <div className="soil-conditioners-header">
        <h1>Soil Conditioners</h1>
        <p>Comprehensive range of soil conditioners for optimal soil health and structure</p>
      </div>
      
      <div className="soil-conditioners-grid">
        {soilConditioners.map((soilConditioner) => (
          <SoilConditionerCard
            key={soilConditioner.id}
            soilConditioner={soilConditioner}
            onClick={handleSoilConditionerClick}
          />
        ))}
      </div>
    </div>
  );
}

export default SoilConditioners;