import React from 'react';
import '../../css/Agrochemicals/BiologicalProducts.css';

function BiologicalProducts() {
  const biologicalProducts = [
    {
      id: 1,
      name: "Trichoderma Viride Bio",
      image: "/assets/biological/trichoderma-viride.jpg",
      category: "Bio-Fungicide",
      content: "Active Ingredient: Trichoderma viride – Soil-borne fungal diseases control in various crops."
    },
    {
      id: 2,
      name: "Bacillus Subtilis Pro",
      image: "/assets/biological/bacillus-subtilis.jpg",
      category: "Bio-Fungicide",
      content: "Active Ingredient: Bacillus subtilis – Root rot, damping off, and foliar disease control."
    },
    {
      id: 3,
      name: "Pseudomonas Fluorescens",
      image: "/assets/biological/pseudomonas.jpg",
      category: "Bio-Fungicide",
      content: "Active Ingredient: Pseudomonas fluorescens – Wilt, blight, and bacterial disease management."
    },
    {
      id: 4,
      name: "Beauveria Bassiana Max",
      image: "/assets/biological/beauveria-bassiana.jpg",
      category: "Bio-Insecticide",
      content: "Active Ingredient: Beauveria bassiana – Entomopathogenic fungi for insect pest control."
    },
    {
      id: 5,
      name: "Metarhizium Anisopliae",
      image: "/assets/biological/metarhizium.jpg",
      category: "Bio-Insecticide",
      content: "Active Ingredient: Metarhizium anisopliae – Controls termites, white grubs, and soil insects."
    },
    {
      id: 6,
      name: "NPV Helicoverpa",
      image: "/assets/biological/npv-helicoverpa.jpg",
      category: "Bio-Insecticide",
      content: "Active Ingredient: Helicoverpa NPV – Specific control of bollworm and pod borer."
    },
    {
      id: 7,
      name: "NPV Spodoptera",
      image: "/assets/biological/npv-spodoptera.jpg",
      category: "Bio-Insecticide",
      content: "Active Ingredient: Spodoptera NPV – Army worm and cutworm specific control."
    },
    {
      id: 8,
      name: "Lecanicillium Lecanii",
      image: "/assets/biological/lecanicillium.jpg",
      category: "Bio-Insecticide",
      content: "Active Ingredient: Lecanicillium lecanii – Aphids, whiteflies, and thrips control."
    },
    {
      id: 9,
      name: "Paecilomyces Lilacinus",
      image: "/assets/biological/paecilomyces.jpg",
      category: "Bio-Nematicide",
      content: "Active Ingredient: Paecilomyces lilacinus – Root-knot and cyst nematode control."
    },
    {
      id: 10,
      name: "Pochonia Chlamydosporia",
      image: "/assets/biological/pochonia.jpg",
      category: "Bio-Nematicide",
      content: "Active Ingredient: Pochonia chlamydosporia – Egg parasitic fungi for nematode control."
    },
    {
      id: 11,
      name: "Rhizobium Bio-Fix",
      image: "/assets/biological/rhizobium.jpg",
      category: "Biofertilizer",
      content: "Active Ingredient: Rhizobium species – Nitrogen fixation in leguminous crops."
    },
    {
      id: 12,
      name: "Azotobacter Super",
      image: "/assets/biological/azotobacter.jpg",
      category: "Biofertilizer",
      content: "Active Ingredient: Azotobacter chroococcum – Free-living nitrogen fixing bacteria."
    },
    {
      id: 13,
      name: "Azospirillum Elite",
      image: "/assets/biological/azospirillum.jpg",
      category: "Biofertilizer",
      content: "Active Ingredient: Azospirillum brasilense – Nitrogen fixation for cereal crops."
    },
    {
      id: 14,
      name: "PSB Phosphate Gold",
      image: "/assets/biological/psb.jpg",
      category: "Biofertilizer",
      content: "Active Ingredient: Phosphate Solubilizing Bacteria – Phosphorus mobilization."
    },
    {
      id: 15,
      name: "KSB Potash Pro",
      image: "/assets/biological/ksb.jpg",
      category: "Biofertilizer",
      content: "Active Ingredient: Potassium Solubilizing Bacteria – Potassium availability enhancement."
    },
    {
      id: 16,
      name: "Mycorrhiza VAM",
      image: "/assets/biological/mycorrhiza.jpg",
      category: "Biofertilizer",
      content: "Active Ingredient: Vesicular Arbuscular Mycorrhiza – Root symbiosis for nutrient uptake."
    },
    {
      id: 17,
      name: "Acetobacter Premium",
      image: "/assets/biological/acetobacter.jpg",
      category: "Biofertilizer",
      content: "Active Ingredient: Acetobacter diazotrophicus – Nitrogen fixation in sugarcane."
    },
    {
      id: 18,
      name: "Trichogramma Cards",
      image: "/assets/biological/trichogramma.jpg",
      category: "Bio-Control Agent",
      content: "Active Ingredient: Trichogramma species – Egg parasitoid for bollworm control."
    },
    {
      id: 19,
      name: "Chrysoperla Predator",
      image: "/assets/biological/chrysoperla.jpg",
      category: "Bio-Control Agent",
      content: "Active Ingredient: Chrysoperla carnea – Predatory insect for aphid control."
    },
    {
      id: 20,
      name: "Cryptolaemus Beetle",
      image: "/assets/biological/cryptolaemus.jpg",
      category: "Bio-Control Agent",
      content: "Active Ingredient: Cryptolaemus montrouzieri – Mealybug predator beetle."
    },
    {
      id: 21,
      name: "Trichoderma Harzianum",
      image: "/assets/biological/trichoderma-harzianum.jpg",
      category: "Bio-Fungicide",
      content: "Active Ingredient: Trichoderma harzianum – Soil and seed treatment for disease control."
    },
    {
      id: 22,
      name: "Trichoderma Reesei",
      image: "/assets/biological/trichoderma-reesei.jpg",
      category: "Bio-Fungicide",
      content: "Active Ingredient: Trichoderma reesei – Cellulose decomposer and disease suppressor."
    },
    {
      id: 23,
      name: "Gliocladium Virens",
      image: "/assets/biological/gliocladium.jpg",
      category: "Bio-Fungicide",
      content: "Active Ingredient: Gliocladium virens – Soil-borne pathogen antagonist."
    },
    {
      id: 24,
      name: "Chaetomium Globosum",
      image: "/assets/biological/chaetomium.jpg",
      category: "Bio-Fungicide",
      content: "Active Ingredient: Chaetomium globosum – Seed treatment and foliar disease control."
    },
    {
      id: 25,
      name: "Ampelomyces Quisqualis",
      image: "/assets/biological/ampelomyces.jpg",
      category: "Bio-Fungicide",
      content: "Active Ingredient: Ampelomyces quisqualis – Powdery mildew hyperparasite."
    },
    {
      id: 26,
      name: "Coniothyrium Minitans",
      image: "/assets/biological/coniothyrium.jpg",
      category: "Bio-Fungicide",
      content: "Active Ingredient: Coniothyrium minitans – Sclerotia parasitic fungus."
    },
    {
      id: 27,
      name: "Streptomyces Griseus",
      image: "/assets/biological/streptomyces.jpg",
      category: "Bio-Fungicide",
      content: "Active Ingredient: Streptomyces griseus – Antibiotic producing actinomycete."
    },
    {
      id: 28,
      name: "Bacillus Thuringiensis",
      image: "/assets/biological/bt.jpg",
      category: "Bio-Insecticide",
      content: "Active Ingredient: Bacillus thuringiensis – Crystal protein toxin for caterpillars."
    },
    {
      id: 29,
      name: "Bacillus Sphaericus",
      image: "/assets/biological/bacillus-sphaericus.jpg",
      category: "Bio-Insecticide",
      content: "Active Ingredient: Bacillus sphaericus – Mosquito larvae specific control."
    },
    {
      id: 30,
      name: "Nomuraea Rileyi",
      image: "/assets/biological/nomuraea.jpg",
      category: "Bio-Insecticide",
      content: "Active Ingredient: Nomuraea rileyi – Lepidopteran specific entomopathogenic fungi."
    },
    {
      id: 31,
      name: "Hirsutella Thompsonii",
      image: "/assets/biological/hirsutella.jpg",
      category: "Bio-Insecticide",
      content: "Active Ingredient: Hirsutella thompsonii – Citrus rust mite specific fungus."
    },
    {
      id: 32,
      name: "Isaria Fumosorosea",
      image: "/assets/biological/isaria.jpg",
      category: "Bio-Insecticide",
      content: "Active Ingredient: Isaria fumosorosea – Whitefly and thrips control fungus."
    },
    {
      id: 33,
      name: "Cordyceps Militaris",
      image: "/assets/biological/cordyceps.jpg",
      category: "Bio-Insecticide",
      content: "Active Ingredient: Cordyceps militaris – Lepidopteran larvae parasitic fungus."
    },
    {
      id: 34,
      name: "Entomophaga Maimaiga",
      image: "/assets/biological/entomophaga.jpg",
      category: "Bio-Insecticide",
      content: "Active Ingredient: Entomophaga maimaiga – Gypsy moth specific pathogen."
    },
    {
      id: 35,
      name: "Purpureocillium Lilacinum",
      image: "/assets/biological/purpureocillium.jpg",
      category: "Bio-Nematicide",
      content: "Active Ingredient: Purpureocillium lilacinum – Nematode egg and juvenile destroyer."
    },
    {
      id: 36,
      name: "Arthrobotrys Oligospora",
      image: "/assets/biological/arthrobotrys.jpg",
      category: "Bio-Nematicide",
      content: "Active Ingredient: Arthrobotrys oligospora – Nematode trapping fungus."
    },
    {
      id: 37,
      name: "Dactylellina Haptotyla",
      image: "/assets/biological/dactylellina.jpg",
      category: "Bio-Nematicide",
      content: "Active Ingredient: Dactylellina haptotyla – Predatory nematophagous fungus."
    },
    {
      id: 38,
      name: "Hirsutella Rhossiliensis",
      image: "/assets/biological/hirsutella-rhoss.jpg",
      category: "Bio-Nematicide",
      content: "Active Ingredient: Hirsutella rhossiliensis – Cyst and root-knot nematode control."
    },
    {
      id: 39,
      name: "Myrothecium Verrucaria",
      image: "/assets/biological/myrothecium.jpg",
      category: "Bio-Nematicide",
      content: "Active Ingredient: Myrothecium verrucaria – Nematode egg parasitic fungus."
    },
    {
      id: 40,
      name: "Bradyrhizobium Elite",
      image: "/assets/biological/bradyrhizobium.jpg",
      category: "Biofertilizer",
      content: "Active Ingredient: Bradyrhizobium japonicum – Soybean specific nitrogen fixation."
    },
    {
      id: 41,
      name: "Mesorhizobium Ciceri",
      image: "/assets/biological/mesorhizobium.jpg",
      category: "Biofertilizer",
      content: "Active Ingredient: Mesorhizobium ciceri – Chickpea nitrogen fixing bacteria."
    },
    {
      id: 42,
      name: "Sinorhizobium Meliloti",
      image: "/assets/biological/sinorhizobium.jpg",
      category: "Biofertilizer",
      content: "Active Ingredient: Sinorhizobium meliloti – Alfalfa and clover nitrogen fixation."
    },
    {
      id: 43,
      name: "Azorhizobium Caulinodans",
      image: "/assets/biological/azorhizobium.jpg",
      category: "Biofertilizer",
      content: "Active Ingredient: Azorhizobium caulinodans – Stem nodulating nitrogen fixer."
    },
    {
      id: 44,
      name: "Herbaspirillum Seropedicae",
      image: "/assets/biological/herbaspirillum.jpg",
      category: "Biofertilizer",
      content: "Active Ingredient: Herbaspirillum seropedicae – Endophytic nitrogen fixing bacteria."
    },
    {
      id: 45,
      name: "Gluconacetobacter Diazotrophicus",
      image: "/assets/biological/gluconacetobacter.jpg",
      category: "Biofertilizer",
      content: "Active Ingredient: Gluconacetobacter diazotrophicus – Sugarcane endophytic bacteria."
    },
    {
      id: 46,
      name: "Frateuria Aurantia",
      image: "/assets/biological/frateuria.jpg",
      category: "Biofertilizer",
      content: "Active Ingredient: Frateuria aurantia – Phosphate solubilizing orange bacteria."
    },
    {
      id: 47,
      name: "Bacillus Megaterium",
      image: "/assets/biological/bacillus-megaterium.jpg",
      category: "Biofertilizer",
      content: "Active Ingredient: Bacillus megaterium – Phosphate and potassium solubilizer."
    },
    {
      id: 48,
      name: "Glomus Intraradices",
      image: "/assets/biological/glomus-intra.jpg",
      category: "Biofertilizer",
      content: "Active Ingredient: Glomus intraradices – Root colonizing mycorrhizal fungus."
    },
    {
      id: 49,
      name: "Glomus Mosseae",
      image: "/assets/biological/glomus-mosseae.jpg",
      category: "Biofertilizer",
      content: "Active Ingredient: Glomus mosseae – Phosphorus uptake enhancing mycorrhiza."
    },
    {
      id: 50,
      name: "Gigaspora Margarita",
      image: "/assets/biological/gigaspora.jpg",
      category: "Biofertilizer",
      content: "Active Ingredient: Gigaspora margarita – Large spore mycorrhizal fungus."
    },
    {
      id: 51,
      name: "Acaulospora Laevis",
      image: "/assets/biological/acaulospora.jpg",
      category: "Biofertilizer",
      content: "Active Ingredient: Acaulospora laevis – Drought tolerance enhancing mycorrhiza."
    },
    {
      id: 52,
      name: "Trichogramma Chilonis",
      image: "/assets/biological/trichogramma-chilonis.jpg",
      category: "Bio-Control Agent",
      content: "Active Ingredient: Trichogramma chilonis – Rice stem borer egg parasitoid."
    },
    {
      id: 53,
      name: "Trichogramma Pretiosum",
      image: "/assets/biological/trichogramma-pretiosum.jpg",
      category: "Bio-Control Agent",
      content: "Active Ingredient: Trichogramma pretiosum – Cotton bollworm egg parasitoid."
    },
    {
      id: 54,
      name: "Encarsia Formosa",
      image: "/assets/biological/encarsia.jpg",
      category: "Bio-Control Agent",
      content: "Active Ingredient: Encarsia formosa – Whitefly parasitic wasp."
    },
    {
      id: 55,
      name: "Eretmocerus Eremicus",
      image: "/assets/biological/eretmocerus.jpg",
      category: "Bio-Control Agent",
      content: "Active Ingredient: Eretmocerus eremicus – Whitefly and silverleaf control."
    },
    {
      id: 56,
      name: "Aphidius Colemani",
      image: "/assets/biological/aphidius.jpg",
      category: "Bio-Control Agent",
      content: "Active Ingredient: Aphidius colemani – Aphid parasitic wasp for greenhouse."
    },
    {
      id: 57,
      name: "Lysiphlebus Testaceipes",
      image: "/assets/biological/lysiphlebus.jpg",
      category: "Bio-Control Agent",
      content: "Active Ingredient: Lysiphlebus testaceipes – Cotton aphid parasitoid wasp."
    },
    {
      id: 58,
      name: "Neoseiulus Californicus",
      image: "/assets/biological/neoseiulus.jpg",
      category: "Bio-Control Agent",
      content: "Active Ingredient: Neoseiulus californicus – Predatory mite for spider mite control."
    },
    {
      id: 59,
      name: "Phytoseiulus Persimilis",
      image: "/assets/biological/phytoseiulus.jpg",
      category: "Bio-Control Agent",
      content: "Active Ingredient: Phytoseiulus persimilis – Two-spotted spider mite predator."
    },
    {
      id: 60,
      name: "Amblyseius Swirskii",
      image: "/assets/biological/amblyseius.jpg",
      category: "Bio-Control Agent",
      content: "Active Ingredient: Amblyseius swirskii – Thrips and whitefly predatory mite."
    },
    {
      id: 61,
      name: "Orius Laevigatus",
      image: "/assets/biological/orius.jpg",
      category: "Bio-Control Agent",
      content: "Active Ingredient: Orius laevigatus – Anthocorid bug for thrips control."
    },
    {
      id: 62,
      name: "Macrolophus Pygmaeus",
      image: "/assets/biological/macrolophus.jpg",
      category: "Bio-Control Agent",
      content: "Active Ingredient: Macrolophus pygmaeus – Mirid bug for whitefly control."
    },
    {
      id: 63,
      name: "Nesidiocoris Tenuis",
      image: "/assets/biological/nesidiocoris.jpg",
      category: "Bio-Control Agent",
      content: "Active Ingredient: Nesidiocoris tenuis – Predatory bug for tomato pests."
    },
    {
      id: 64,
      name: "Steinernema Carpocapsae",
      image: "/assets/biological/steinernema.jpg",
      category: "Bio-Insecticide",
      content: "Active Ingredient: Steinernema carpocapsae – Entomopathogenic nematode for soil pests."
    },
    {
      id: 65,
      name: "Heterorhabditis Bacteriophora",
      image: "/assets/biological/heterorhabditis.jpg",
      category: "Bio-Insecticide",
      content: "Active Ingredient: Heterorhabditis bacteriophora – Beneficial nematode for grub control."
    },
    {
      id: 66,
      name: "Steinernema Feltiae",
      image: "/assets/biological/steinernema-feltiae.jpg",
      category: "Bio-Insecticide",
      content: "Active Ingredient: Steinernema feltiae – Entomopathogenic nematode for fungus gnats."
    }
  ];

  return (
    <div className="biological-products-container">
      <div className="biological-products-grid">
        {biologicalProducts.map((item) => (
          <div key={item.id} className="biological-product-card">
            <img src={item.image} alt={item.name} className="biological-product-image" />
            <div className="biological-product-info">
              <h3>{item.name}</h3>
              <span className="biological-product-category">{item.category}</span>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Results Counter */}
      <div className="biological-products-footer">
        Showing {biologicalProducts.length} biological products
      </div>
    </div>
  );
}

export default BiologicalProducts;