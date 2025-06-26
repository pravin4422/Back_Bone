import React, { useState } from 'react';
import '../../css/Agrochemicals/BiologicalProducts.css';

// Separate component for biological product card
const BiologicalProductCard = ({ product, onClick }) => (
  <div 
    className="biological-card clickable"
    onClick={() => onClick(product)}
  >
    <img src={product.image} alt={product.name} className="biological-image" />
    <div className="biological-info">
      <h3>{product.name}</h3>
      <span className="biological-category">{product.category}</span>
      <p>{product.content}</p>
      <div className="click-hint">Click for detailed information</div>
    </div>
  </div>
);

// Separate component for detailed view
const BiologicalProductDetailView = ({ product, onBack }) => (
  <div className="biological-detail-view">
    <div className="detail-header">
      <button className="back-button" onClick={onBack}>
        ← Back to Products
      </button>
      <h1>{product.name}</h1>
    </div>

    <div className="detail-content">
      <div className="detail-image-section">
        <img 
          src={product.image} 
          alt={product.name}
          className="detail-image"
        />
        <div className="category-badge">
          {product.category}
        </div>
      </div>

      <div className="detail-info-section">
        <div className="info-grid">
          <InfoCard title="Active Organism" value={product.detailedInfo?.activeOrganism} />
          <InfoCard title="CFU Count" value={product.detailedInfo?.cfuCount} />
          <InfoCard title="Mode of Action" value={product.detailedInfo?.modeOfAction} />
          <InfoCard title="Target Pests/Diseases" value={product.detailedInfo?.targetPests} />
          <InfoCard title="Application Rate" value={product.detailedInfo?.applicationRate} />
          <InfoCard title="Crop Compatibility" value={product.detailedInfo?.cropCompatibility} />
          <InfoCard title="Application Method" value={product.detailedInfo?.applicationMethod} />
          <InfoCard title="Storage Instructions" value={product.detailedInfo?.storageInstructions} />
        </div>

        <div className="basic-info">
          <h3>Overview</h3>
          <p>{product.content}</p>
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

function BiologicalProducts() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Complete biological products data
  const biologicalProducts = [
    {
      id: 1,
      name: "Trichoderma Viride Bio",
      image: "/assets/biologicals/trichoderma.jpg",
      category: "Fungal Biocontrol",
      content: "Active Organism: Trichoderma viride – Biological fungicide for soil-borne disease control.",
      detailedInfo: {
        activeOrganism: "Trichoderma viride",
        cfuCount: "1 x 10^8 CFU/g",
        modeOfAction: "Mycoparasitism, antibiosis, competition for nutrients",
        targetPests: "Root rot, wilt diseases, damping off, collar rot",
        applicationRate: "2-3 kg/ha soil application, 2-3 g/L seed treatment",
        cropCompatibility: "All crops - vegetables, cereals, pulses, cotton",
        applicationMethod: "Soil application, seed treatment, seedling dip",
        storageInstructions: "Store in cool, dry place below 25°C, avoid direct sunlight"
      }
    },
    {
      id: 2,
      name: "Bacillus thuringiensis Pro",
      image: "/assets/biologicals/bt.jpg",
      category: "Bacterial Insecticide",
      content: "Active Organism: Bacillus thuringiensis – Biological insecticide for lepidopteran larvae.",
      detailedInfo: {
        activeOrganism: "Bacillus thuringiensis var. kurstaki",
        cfuCount: "5 x 10^9 CFU/g",
        modeOfAction: "Production of crystal proteins toxic to lepidopteran larvae",
        targetPests: "Bollworms, armyworms, cabbage worms, fruit borers",
        applicationRate: "1-2 kg/ha foliar spray, 500-750 g/ha for vegetables",
        cropCompatibility: "Cotton, vegetables, fruit crops, cereals",
        applicationMethod: "Foliar spray, best applied in evening hours",
        storageInstructions: "Store in refrigerated conditions, protect from heat and moisture"
      }
    },
    {
      id: 3,
      name: "Pseudomonas Fluorescens Max",
      image: "/assets/biologicals/pseudomonas.jpg",
      category: "Bacterial Biocontrol",
      content: "Active Organism: Pseudomonas fluorescens – PGPR and biocontrol agent.",
      detailedInfo: {
        activeOrganism: "Pseudomonas fluorescens",
        cfuCount: "1 x 10^9 CFU/g",
        modeOfAction: "Antibiosis, siderophore production, ISR induction",
        targetPests: "Bacterial wilt, root rot, fusarium wilt, rhizoctonia",
        applicationRate: "2-3 kg/ha soil application, 5-10 g/L seed treatment",
        cropCompatibility: "Tomato, potato, banana, cotton, rice, wheat",
        applicationMethod: "Soil application, seed treatment, root dip",
        storageInstructions: "Store in cool place below 30°C, use within 12 months"
      }
    },
    {
      id: 4,
      name: "Beauveria Bassiana Elite",
      image: "/assets/biologicals/beauveria.jpg",
      category: "Entomopathogenic Fungus",
      content: "Active Organism: Beauveria bassiana – Fungal insecticide for sucking and chewing pests.",
      detailedInfo: {
        activeOrganism: "Beauveria bassiana",
        cfuCount: "1 x 10^8 CFU/g",
        modeOfAction: "Spore adhesion, penetration, and colonization of insect body",
        targetPests: "Thrips, aphids, whiteflies, termites, beetles",
        applicationRate: "2-3 kg/ha foliar spray, 5-10 kg/ha soil application",
        cropCompatibility: "Vegetables, cotton, sugarcane, fruit crops",
        applicationMethod: "Foliar spray, soil drench, apply during cooler hours",
        storageInstructions: "Store in dry place below 25°C, avoid direct sunlight"
      }
    },
    {
      id: 5,
      name: "Metarhizium Anisopliae Super",
      image: "/assets/biologicals/metarhizium.jpg",
      category: "Entomopathogenic Fungus",
      content: "Active Organism: Metarhizium anisopliae – Biological control for soil-dwelling pests.",
      detailedInfo: {
        activeOrganism: "Metarhizium anisopliae",
        cfuCount: "1 x 10^8 CFU/g",
        modeOfAction: "Fungal infection and colonization of insect cuticle",
        targetPests: "Termites, grubs, root weevils, wireworms",
        applicationRate: "5-10 kg/ha soil application",
        cropCompatibility: "Sugarcane, potato, vegetables, fruit crops",
        applicationMethod: "Soil application, incorporate into soil",
        storageInstructions: "Store in cool, dry conditions below 25°C"
      }
    },
    {
      id: 6,
      name: "Paecilomyces Lilacinus Bio",
      image: "/assets/biologicals/paecilomyces.jpg",
      category: "Nematophagous Fungus",
      content: "Active Organism: Paecilomyces lilacinus – Biological nematicide and soil health enhancer.",
      detailedInfo: {
        activeOrganism: "Paecilomyces lilacinus",
        cfuCount: "1 x 10^8 CFU/g",
        modeOfAction: "Parasitizes nematode eggs and juveniles",
        targetPests: "Root-knot nematodes, cyst nematodes, reniform nematodes",
        applicationRate: "2.5-5 kg/ha soil application",
        cropCompatibility: "Vegetables, fruit crops, ornamentals, nursery plants",
        applicationMethod: "Soil incorporation, nursery bed treatment",
        storageInstructions: "Store in cool place, protect from moisture and heat"
      }
    },
    {
      id: 7,
      name: "Verticillium Lecanii Pro",
      image: "/assets/biologicals/verticillium.jpg",
      category: "Entomopathogenic Fungus",
      content: "Active Organism: Verticillium lecanii – Biocontrol for aphids and whiteflies.",
      detailedInfo: {
        activeOrganism: "Verticillium lecanii",
        cfuCount: "1 x 10^8 CFU/g",
        modeOfAction: "Fungal infection of soft-bodied insects",
        targetPests: "Aphids, whiteflies, thrips, mealybugs, scale insects",
        applicationRate: "2-3 kg/ha foliar application",
        cropCompatibility: "Vegetables, cotton, ornamentals, greenhouse crops",
        applicationMethod: "Foliar spray, apply in humid conditions",
        storageInstructions: "Store below 25°C in dry conditions"
      }
    },
    {
      id: 8,
      name: "NPV Helicoverpa Max",
      image: "/assets/biologicals/npv.jpg",
      category: "Viral Insecticide",
      content: "Active Pathogen: Helicoverpa NPV – Species-specific viral insecticide for bollworms.",
      detailedInfo: {
        activeOrganism: "Helicoverpa armigera Nuclear Polyhedrosis Virus",
        cfuCount: "1 x 10^12 POB/g",
        modeOfAction: "Viral infection causing larval mortality",
        targetPests: "Helicoverpa armigera (American bollworm)",
        applicationRate: "250-500 g/ha depending on larval density",
        cropCompatibility: "Cotton, tomato, chickpea, pigeonpea, maize",
        applicationMethod: "Foliar spray in evening, add UV protectant",
        storageInstructions: "Store in refrigerated conditions, protect from UV light"
      }
    },
    {
      id: 9,
      name: "Azotobacter Chroococcum Gold",
      image: "/assets/biologicals/azotobacter.jpg",
      category: "Nitrogen Fixing Bacteria",
      content: "Active Organism: Azotobacter chroococcum – Free-living nitrogen-fixing bacteria.",
      detailedInfo: {
        activeOrganism: "Azotobacter chroococcum",
        cfuCount: "1 x 10^9 CFU/g",
        modeOfAction: "Atmospheric nitrogen fixation, growth hormone production",
        targetPests: "Nutrient deficiency, poor plant growth",
        applicationRate: "2-3 kg/ha soil application, 10 g/kg seed treatment",
        cropCompatibility: "All non-leguminous crops - cereals, vegetables, cotton",
        applicationMethod: "Soil application, seed treatment, seedling root dip",
        storageInstructions: "Store in cool place below 30°C, avoid direct sunlight"
      }
    },
    {
      id: 10,
      name: "Rhizobium Leguminosarum Elite",
      image: "/assets/biologicals/rhizobium.jpg",
      category: "Symbiotic Nitrogen Fixer",
      content: "Active Organism: Rhizobium leguminosarum – Symbiotic nitrogen fixation for legumes.",
      detailedInfo: {
        activeOrganism: "Rhizobium leguminosarum",
        cfuCount: "1 x 10^9 CFU/g",
        modeOfAction: "Root nodulation and symbiotic nitrogen fixation",
        targetPests: "Nitrogen deficiency in leguminous crops",
        applicationRate: "200-250 g per 10 kg seeds",
        cropCompatibility: "Pea, lentil, chickpea, beans, clover",
        applicationMethod: "Seed inoculation before sowing",
        storageInstructions: "Store in refrigerated conditions, use before expiry"
      }
    },
    {
      id: 11,
      name: "Phosphate Solubilizing Bacteria",
      image: "/assets/biologicals/psb.jpg",
      category: "Phosphorus Mobilizer",
      content: "Active Organism: Mixed PSB strains – Phosphate solubilizing and mobilizing bacteria.",
      detailedInfo: {
        activeOrganism: "Bacillus megaterium, Pseudomonas striata",
        cfuCount: "1 x 10^9 CFU/g",
        modeOfAction: "Solubilization of insoluble phosphates, organic acid production",
        targetPests: "Phosphorus deficiency, poor root development",
        applicationRate: "2-3 kg/ha soil application, 10 g/kg seed treatment",
        cropCompatibility: "All crops - cereals, pulses, vegetables, fruit crops",
        applicationMethod: "Soil application, seed treatment, seedling dip",
        storageInstructions: "Store in cool, dry place below 25°C"
      }
    },
    {
      id: 12,
      name: "Potash Mobilizing Bacteria",
      image: "/assets/biologicals/kmb.jpg",
      category: "Potassium Mobilizer",
      content: "Active Organism: KMB strains – Potash mobilizing bacteria for potassium availability.",
      detailedInfo: {
        activeOrganism: "Frateuria aurantia",
        cfuCount: "1 x 10^9 CFU/g",
        modeOfAction: "Mobilization of fixed potassium from soil minerals",
        targetPests: "Potassium deficiency, poor fruit quality",
        applicationRate: "2-3 kg/ha soil application",
        cropCompatibility: "Fruit crops, vegetables, cereals, cotton",
        applicationMethod: "Soil application, drip irrigation",
        storageInstructions: "Store below 30°C in dry conditions"
      }
    },
    {
      id: 13,
      name: "Mycorrhiza VAM Bio",
      image: "/assets/biologicals/mycorrhiza.jpg",
      category: "Beneficial Fungi",
      content: "Active Organism: VAM fungi – Vesicular Arbuscular Mycorrhiza for nutrient uptake.",
      detailedInfo: {
        activeOrganism: "Glomus mosseae, G. fasciculatum, G. intraradices",
        cfuCount: "100 IP/g (Infective Propagules)",
        modeOfAction: "Root colonization, enhanced nutrient and water uptake",
        targetPests: "Nutrient deficiency, drought stress, poor growth",
        applicationRate: "5-10 kg/ha soil application",
        cropCompatibility: "Most crops except brassicas and chenopods",
        applicationMethod: "Soil application, transplant dip, nursery treatment",
        storageInstructions: "Store in cool place, protect from moisture"
      }
    },
    {
      id: 14,
      name: "Acetobacter Diazotrophicus",
      image: "/assets/biologicals/acetobacter.jpg",
      category: "Endophytic Bacteria",
      content: "Active Organism: Acetobacter diazotrophicus – Endophytic nitrogen fixer for sugarcane.",
      detailedInfo: {
        activeOrganism: "Acetobacter diazotrophicus",
        cfuCount: "1 x 10^9 CFU/g",
        modeOfAction: "Endophytic colonization, nitrogen fixation, growth promotion",
        targetPests: "Nitrogen deficiency in sugarcane",
        applicationRate: "2-3 kg/ha soil application",
        cropCompatibility: "Sugarcane, sweet potato, coffee",
        applicationMethod: "Soil application, sett treatment",
        storageInstructions: "Store in cool conditions below 25°C"
      }
    },
    {
      id: 15,
      name: "Lecanicillium Muscarium",
      image: "/assets/biologicals/lecanicillium.jpg",
      category: "Entomopathogenic Fungus",
      content: "Active Organism: Lecanicillium muscarium – Biocontrol for greenhouse whiteflies.",
      detailedInfo: {
        activeOrganism: "Lecanicillium muscarium",
        cfuCount: "1 x 10^8 CFU/g",
        modeOfAction: "Fungal infection and colonization of whiteflies",
        targetPests: "Whiteflies, aphids, thrips in protected cultivation",
        applicationRate: "1-2 kg/ha in greenhouse conditions",
        cropCompatibility: "Greenhouse vegetables, ornamentals",
        applicationMethod: "Foliar spray, maintain high humidity",
        storageInstructions: "Store in refrigerated conditions"
      }
    },
    {
      id: 16,
      name: "Nomuraea Rileyi Pro",
      image: "/assets/biologicals/nomuraea.jpg",
      category: "Entomopathogenic Fungus",
      content: "Active Organism: Nomuraea rileyi – Natural enemy of lepidopteran larvae.",
      detailedInfo: {
        activeOrganism: "Nomuraea rileyi",
        cfuCount: "1 x 10^8 CFU/g",
        modeOfAction: "Fungal infection causing larval mortality",
        targetPests: "Spodoptera, Helicoverpa, other lepidopteran larvae",
        applicationRate: "2-3 kg/ha foliar application",
        cropCompatibility: "Cotton, soybean, vegetables, field crops",
        applicationMethod: "Foliar spray in humid conditions",
        storageInstructions: "Store below 25°C, protect from direct light"
      }
    },
    {
      id: 17,
      name: "Hirsutella Thompsonii",
      image: "/assets/biologicals/hirsutella.jpg",
      category: "Entomopathogenic Fungus",
      content: "Active Organism: Hirsutella thompsonii – Specialized biocontrol for mites.",
      detailedInfo: {
        activeOrganism: "Hirsutella thompsonii",
        cfuCount: "1 x 10^8 CFU/g",
        modeOfAction: "Fungal infection specific to eriophyid mites",
        targetPests: "Coconut mites, citrus rust mites, eriophyid mites",
        applicationRate: "2-3 kg/ha depending on infestation",
        cropCompatibility: "Coconut, citrus, tea, ornamentals",
        applicationMethod: "Foliar spray, apply during humid weather",
        storageInstructions: "Store in cool, humid conditions"
      }
    },
    {
      id: 18,
      name: "Bacillus Subtilis Max",
      image: "/assets/biologicals/bacillus_subtilis.jpg",
      category: "Bacterial Biocontrol",
      content: "Active Organism: Bacillus subtilis – PGPR and biological fungicide.",
      detailedInfo: {
        activeOrganism: "Bacillus subtilis",
        cfuCount: "1 x 10^9 CFU/g",
        modeOfAction: "Antibiosis, competition, ISR induction",
        targetPests: "Fusarium wilt, bacterial blight, powdery mildew",
        applicationRate: "2-3 kg/ha soil application, 2-3 g/L foliar spray",
        cropCompatibility: "Vegetables, cereals, cotton, fruit crops",
        applicationMethod: "Soil application, foliar spray, seed treatment",
        storageInstructions: "Store in dry place below 30°C"
      }
    },
    {
      id: 19,
      name: "Pochonia Chlamydosporia",
      image: "/assets/biologicals/pochonia.jpg",
      category: "Nematophagous Fungus",
      content: "Active Organism: Pochonia chlamydosporia – Egg parasitic fungus for nematode control.",
      detailedInfo: {
        activeOrganism: "Pochonia chlamydosporia",
        cfuCount: "1 x 10^8 CFU/g",
        modeOfAction: "Parasitizes nematode females and eggs",
        targetPests: "Root-knot nematodes, cyst nematodes",
        applicationRate: "2.5-5 kg/ha soil application",
        cropCompatibility: "Vegetables, fruit crops, banana, potato",
        applicationMethod: "Soil incorporation before planting",
        storageInstructions: "Store in cool, dry place below 25°C"
      }
    },
    {
      id: 20,
      name: "Entomopathogenic Nematodes",
      image: "/assets/biologicals/epn.jpg",
      category: "Beneficial Nematodes",
      content: "Active Organism: Steinernema/Heterorhabditis – Insect parasitic nematodes.",
      detailedInfo: {
        activeOrganism: "Steinernema feltiae, Heterorhabditis indica",
        cfuCount: "1 x 10^9 IJs/g (Infective Juveniles)",
        modeOfAction: "Parasitizes soil-dwelling insect larvae",
        targetPests: "Cutworms, root grubs, termites, thrips pupae",
        applicationRate: "1-2 billion IJs/ha",
        cropCompatibility: "Vegetables, ornamentals, turf grass",
        applicationMethod: "Soil drench, irrigation application",
        storageInstructions: "Store in refrigerated conditions, use quickly"
      }
    },
    {
      id: 21,
      name: "Trichogramma Wasps",
      image: "/assets/biologicals/trichogramma.jpg",
      category: "Parasitic Wasp",
      content: "Beneficial Insect: Trichogramma spp. – Egg parasitoids for lepidopteran pests.",
      detailedInfo: {
        activeOrganism: "Trichogramma chilonis, T. pretiosum",
        cfuCount: "50,000-100,000 adults/ha",
        modeOfAction: "Parasitizes lepidopteran eggs preventing larval development",
        targetPests: "Bollworm eggs, stem borer eggs, fruit borer eggs",
        applicationRate: "50,000-150,000 parasitoids/ha in 4-6 releases",
        cropCompatibility: "Cotton, sugarcane, rice, vegetables, fruit crops",
        applicationMethod: "Release cards or containers in field",
        storageInstructions: "Release immediately or store briefly in cool conditions"
      }
    },
    {
      id: 22,
      name: "Chrysoperla Carnea",
      image: "/assets/biologicals/chrysoperla.jpg",
      category: "Predatory Insect",
      content: "Beneficial Insect: Chrysoperla carnea – Green lacewing predator for soft-bodied pests.",
      detailedInfo: {
        activeOrganism: "Chrysoperla carnea",
        cfuCount: "5,000-10,000 larvae/ha",
        modeOfAction: "Predation of aphids, thrips, whiteflies, small caterpillars",
        targetPests: "Aphids, thrips, whiteflies, mites, small lepidopteran larvae",
        applicationRate: "2,500-5,000 larvae/ha in multiple releases",
        cropCompatibility: "Vegetables, cotton, fruit crops, ornamentals",
        applicationMethod: "Release larvae directly in infested areas",
        storageInstructions: "Release immediately upon receipt"
      }
    },
    {
      id: 23,
      name: "Bacillus Amyloliquefaciens",
      image: "/assets/biologicals/bacillus_amylo.jpg",
      category: "Bacterial Biocontrol",
      content: "Active Organism: Bacillus amyloliquefaciens – PGPR with broad-spectrum disease control.",
      detailedInfo: {
        activeOrganism: "Bacillus amyloliquefaciens",
        cfuCount: "1 x 10^9 CFU/g",
        modeOfAction: "Biofilm formation, lipopeptide production, competition",
        targetPests: "Fusarium wilt, bacterial blight, powdery mildew, root rot",
        applicationRate: "2-3 kg/ha soil application, 2-3 g/L spray",
        cropCompatibility: "Vegetables, cereals, legumes, fruit crops",
        applicationMethod: "Soil drench, foliar spray, seed treatment",
        storageInstructions: "Store in cool, dry place below 25°C"
      }
    },
    {
      id: 24,
      name: "Streptomyces Lydicus",
      image: "/assets/biologicals/streptomyces.jpg",
      category: "Actinomycetes",
      content: "Active Organism: Streptomyces lydicus – Antibiotic-producing biocontrol agent.",
      detailedInfo: {
        activeOrganism: "Streptomyces lydicus",
        cfuCount: "1 x 10^8 CFU/g",
        modeOfAction: "Antibiotic production, root colonization",
        targetPests: "Fusarium, Rhizoctonia, Pythium, bacterial diseases",
        applicationRate: "1-2 kg/ha soil application",
        cropCompatibility: "Vegetables, ornamentals, greenhouse crops",
        applicationMethod: "Soil incorporation, transplant treatment",
        storageInstructions: "Store in cool, dry conditions"
      }
    },
    {
      id: 25,
      name: "Trichoderma Harzianum Elite",
      image: "/assets/biologicals/trichoderma_harzianum.jpg",
      category: "Fungal Biocontrol",
      content: "Active Organism: Trichoderma harzianum – Aggressive biocontrol fungus.",
      detailedInfo: {
        activeOrganism: "Trichoderma harzianum",
        cfuCount: "1 x 10^8 CFU/g",
        modeOfAction: "Mycoparasitism, antibiosis, space competition",
        targetPests: "Root rot, wilt diseases, stem rot, collar rot",
        applicationRate: "2-3 kg/ha soil treatment, 2-3 g/L seed treatment",
        cropCompatibility: "All crops, particularly effective in vegetables",
        applicationMethod: "Soil application, seed treatment, transplant dip",
        storageInstructions: "Store below 25°C in dry conditions"
      }
    }
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBackClick = () => {
    setSelectedProduct(null);
  };

  if (selectedProduct) {
    return (
      <BiologicalProductDetailView 
        product={selectedProduct} 
        onBack={handleBackClick} 
      />
    );
  }

  return (
    <div className="biological-products-container">
      <div className="biological-products-header">
        <h1>Biological Products</h1>
        <p>Eco-friendly biological solutions for sustainable crop protection and growth enhancement</p>
      </div>
      
      <div className="biological-products-grid">
        {biologicalProducts.map((product) => (
          <BiologicalProductCard
            key={product.id}
            product={product}
            onClick={handleProductClick}
          />
        ))}
      </div>
    </div>
  );
}

export default BiologicalProducts;