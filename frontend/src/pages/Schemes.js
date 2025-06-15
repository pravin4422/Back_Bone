import React, { useState } from 'react';
import '../css/Schemes.css';

const schemes = [
  // Tamil Nadu State Schemes
  {
    name: "Sub‑Mission on Agricultural Mechanization",
    category: "Farm Mechanization",
    image: "/assets/schemes/mechanization.jpg",
    details: {
      launch: "2014",
      objective: "Subsidies and custom hiring for farm machinery 🚜",
      eligibility: "All farmers; rural entrepreneurs, FPOs, cooperatives for Custom Hiring Centres (CHCs)",
      benefit: "Subsidy on machinery; field demonstrations; CHC setup",
      apply: "Visit your local Agriculture Engineering Department (AED) or Panchayat. Forms available offline.",
      documents: "Aadhaar, land proof, bank details, credentials for entrepreneurs/FPOs.",
      website: "https://aed.tn.gov.in",
      applicationMode: "Offline"
    }
  },
  {
    name: "Sugarcane-Based Custom Hiring Centres",
    category: "Farm Mechanization",
    image: "/assets/schemes/sugarcane.jpg",
    details: {
      launch: "2015",
      objective: "Support sugarcane machinery use via CHCs",
      eligibility: "FPOs, cooperatives, entrepreneurs in sugarcane areas",
      benefit: "Subsidy for centre setup",
      apply: "Approach AED district office for guidelines",
      documents: "Entity registration, business plan, Aadhaar, bank info.",
      website: "https://msmeonline.tn.gov.in",
      applicationMode: "Offline"
    }
  },
  {
    name: "Demonstration & Training on Agricultural Machinery",
    category: "Training",
    image: "/assets/schemes/training.jpg",
    details: {
      launch: "2016",
      objective: "Machine demos and training on usage/maintenance",
      eligibility: "All farmers + rural youth (18–40 years)",
      benefit: "On-field demonstrations + refresher training sessions",
      apply: "Contact AED office; attend scheduled programmes",
      documents: "Aadhaar, age proof, farmer/youth status.",
      website: "https://aed.tn.gov.in",
      applicationMode: "Offline"
    }
  },
  {
    name: "Old Pump Replacement & Solar‑Powered Pumps",
    category: "Irrigation",
    image: "/assets/schemes/solar-pump.jpg",
    details: {
      launch: "2017",
      objective: "25–50% subsidy on new pumps; 70–80% subsidy on solar pumps",
      eligibility: "Farmers with inefficient pumps or small/marginal holdings",
      benefit: "Subsidy on replacement and solar pumps",
      apply: "Apply via AED district/divisional offices",
      documents: "Aadhaar, land and pump ownership proof, bank details.",
      website: "https://aed.tn.gov.in",
      applicationMode: "Offline"
    }
  },
  {
    name: "TN‑IAMWARM (Irrigation Modernisation)",
    category: "Irrigation",
    image: "/assets/schemes/irrigation.jpg",
    details: {
      launch: "2019",
      objective: "Promote drip/sprinkler, harvest structures, farm mechanization",
      eligibility: "Farmers in selected irrigated sub-basins (World Bank backed)",
      benefit: "50–100% subsidy on irrigation, ponds, pipes; farm ponds (90% general, 95% SC/ST)",
      apply: "Through Water Users' Association (WUA) or AED",
      documents: "Aadhaar, land proof, membership in WUA.",
      website: "https://agritech.tnau.ac.in",
      applicationMode: "Offline"
    }
  },
  {
    name: "Certified Seed Production (Pulses)",
    category: "Seeds",
    image: "/assets/schemes/seeds.jpg",
    details: {
      launch: "2018",
      objective: "Encourage certified seed production with ₹1,000/quintal subsidy",
      eligibility: "TN farmers producing certified pulses seed",
      benefit: "₹1,000/quintal subsidy",
      apply: "Get form at nearest agricultural office, fill & submit to AAO → AO/DAO → JDA",
      documents: "Identity, land/lease proof, seed certification, bank, caste (if applicable), group registration.",
      website: "https://agritech.tnau.ac.in",
      applicationMode: "Offline"
    }
  },
  {
    name: "Farmers' Interest Group (FIG)",
    category: "Group Support",
    image: "/assets/schemes/fig.jpg",
    details: {
      launch: "2017",
      objective: "Support groups (min 15 farmers) with grants for capacity building",
      eligibility: "TN residents, groups of ≥15 farmers",
      benefit: "₹5,000 for office equipment, ₹4,000 for training, ₹400 for ID cards, ₹20,000 for events",
      apply: "Get form at agri office, submit via AAO/AO/DAO → JDA",
      documents: "Identity, land proof, group registration, membership list.",
      website: "https://myscheme.gov.in",
      applicationMode: "Offline"
    }
  },
  {
    name: "Farmers' Training Scheme",
    category: "Training",
    image: "/assets/schemes/farmer-training.jpg",
    details: {
      launch: "2016",
      objective: "Skill training for farmers/agri-laborers; ₹5,000 per session",
      eligibility: "TN farmers/agri-workers residing in state",
      benefit: "₹5,000 per session",
      apply: "Collect form from village/block office; submit to AAO → AO/DAO → JDA",
      documents: "Identity, proof of farm/agricultural work status.",
      website: "https://egovtschemes.com",
      applicationMode: "Offline"
    }
  },
  {
    name: "Uzhavar Santhai (Farmers' Markets)",
    category: "Marketing",
    image: "/assets/schemes/market.jpg",
    details: {
      launch: "1999",
      objective: "Enable direct farm-to-consumer sales",
      eligibility: "Registered farmers; stalls allocated via Agriculture Marketing Board",
      benefit: "Direct sale at government-approved markets",
      apply: "Register at Taluk/District Marketing Office",
      documents: "Identity, land proof, cultivator certification.",
      website: "https://agritech.tnau.ac.in",
      applicationMode: "Offline"
    }
  },
  {
    name: "Kudimaramathu (Tank Restoration)",
    category: "Water Resources",
    image: "/assets/schemes/tank-restoration.jpg",
    details: {
      launch: "2017",
      objective: "Community-driven restoration of tanks/lakes; rejuvenation benefits farmers",
      eligibility: "Local farmers around selected tanks/lakes (SC status for tribal areas)",
      benefit: "Improved irrigation and local water security",
      apply: "Apply through local Water Resources / PWD via Village Water Users' associations",
      documents: "Residency proof, ownership of nearby land.",
      website: "https://agritech.tnau.ac.in",
      applicationMode: "Offline"
    }
  },

  // Central Government Schemes
  {
    name: "Pradhan Mantri Kisan Samman Nidhi",
    category: "Income Support",
    image: "/assets/schemes/pm-kisan.jpg",
    details: {
      launch: "2019",
      objective: "Provide direct income support to small and marginal farmers.",
      benefit: "₹6,000 per year in 3 equal installments.",
      eligibility: "All landholding farmer families (except taxpayers and certain professionals).",
      apply: "Online at pmkisan.gov.in or through the local Patwari or CSC.",
      documents: "Aadhaar, bank account, land records.",
      website: "https://pmkisan.gov.in",
      applicationMode: "Online/Offline"
    }
  },
  {
    name: "Pradhan Mantri Fasal Bima Yojana",
    category: "Insurance",
    image: "/assets/schemes/pmfby.jpg",
    details: {
      launch: "2016",
      objective: "Insurance against crop failure due to natural calamities.",
      benefit: "Premium: Kharif 2%, Rabi 1.5%, Commercial 5%.",
      eligibility: "All farmers including tenants and sharecroppers.",
      apply: "Via banks, CSCs, or the PMFBY portal.",
      documents: "Aadhaar, bank account, land details, sowing certificate.",
      website: "https://pmfby.gov.in",
      applicationMode: "Online"
    }
  },
  {
    name: "Pradhan Mantri Krishi Sinchayee Yojana",
    category: "Irrigation",
    image: "/assets/schemes/pmksy.jpg",
    details: {
      launch: "2015",
      objective: "Improve irrigation infrastructure and water use efficiency.",
      benefit: "Includes micro irrigation, watershed development, AIBP support.",
      eligibility: "Farmers needing irrigation infrastructure.",
      apply: "Via local agriculture department or https://pmksy.gov.in/",
      documents: "Land records, Aadhaar, bank details.",
      website: "https://pmksy.gov.in",
      applicationMode: "Online/Offline"
    }
  },
  {
    name: "Kisan Credit Card",
    category: "Credit",
    image: "/assets/schemes/kcc.jpg",
    details: {
      launch: "1998",
      objective: "Provide affordable credit to farmers for production/allied activities.",
      benefit: "Short‑term credit up to ₹3 lakh at 4% interest (with prompt repayment).",
      eligibility: "All farmers, fishers, livestock farmers.",
      apply: "Through any bank or cooperative society.",
      documents: "Aadhaar, land records, bank account.",
      website: "https://pmkisan.gov.in/Rpt_BeneficiaryStatus_pub.aspx",
      applicationMode: "Bank/CSC"
    }
  },
  {
    name: "National Food Security Mission",
    category: "Production Support",
    image: "/assets/schemes/nfsm.jpg",
    details: {
      launch: "2007",
      objective: "Increase production of rice, wheat, pulses, coarse cereals.",
      benefit: "Support for inputs, technology, and extension.",
      eligibility: "Farmers in participating districts.",
      apply: "Via state agriculture department.",
      documents: "Farmer registration, land records.",
      website: "https://nfsm.gov.in",
      applicationMode: "State Agriculture Department"
    }
  },
  {
    name: "Paramparagat Krishi Vikas Yojana",
    category: "Organic Farming",
    image: "/assets/schemes/pkvy.jpg",
    details: {
      launch: "2015",
      objective: "Promote organic farming and certification.",
      benefit: "Up to ₹50,000/ha for 3 years.",
      eligibility: "Farmer clusters (min 20 farmers, 20 ha).",
      apply: "Through local agricultural office.",
      documents: "Group formation documents, land records.",
      website: "https://pgsindia-ncof.gov.in",
      applicationMode: "Local Agriculture Office"
    }
  },
  {
    name: "Sustainable Agriculture Mission",
    category: "Sustainable Farming",
    image: "/assets/schemes/sustainable.jpg",
    details: {
      launch: "2010",
      objective: "Promote climate-resilient and diversified farming systems.",
      benefit: "Support for agroforestry, rainfed area dev., soil and nutrient management.",
      eligibility: "All farmers.",
      apply: "Through State Agriculture Department.",
      documents: "Farmer registration, land records.",
      website: "https://nmsa.dac.gov.in",
      applicationMode: "State Agriculture Office"
    }
  },
  {
    name: "Interest Subvention Scheme",
    category: "Credit Support",
    image: "/assets/schemes/interest.jpg",
    details: {
      launch: "2006",
      objective: "Reduce interest cost on short‑term crop loans.",
      benefit: "Loan up to ₹3 lakh @7%, reduced to 4% (prompt payment).",
      eligibility: "All farmers with Kisan Credit Card.",
      apply: "Automatically via lending banks.",
      documents: "KCC, Aadhaar, bank account.",
      website: "https://rbi.org.in",
      applicationMode: "Banks"
    }
  },
  {
    name: "Agriculture Infrastructure Fund",
    category: "Infrastructure",
    image: "/assets/schemes/aif.jpg",
    details: {
      launch: "2020",
      objective: "Support post-harvest and value-add infrastructure.",
      benefit: "Loan up to ₹2 crore with 3% interest subvention.",
      eligibility: "Farmers, FPOs, PACS, Agri-enterprises.",
      apply: "Via lending banks under AIF guidelines.",
      documents: "Project report, financial documents, registration.",
      website: "https://agriinfra.dac.gov.in",
      applicationMode: "Banks"
    }
  },
  {
    name: "Farm Mechanization",
    category: "Mechanization",
    image: "/assets/schemes/farm.jpg",
    details: {
      launch: "2014",
      objective: "Promote custom hiring centers and mechanized farming.",
      benefit: "Subsidy up to 50% on farm machinery.",
      eligibility: "Small/marginal farmers, FPOs.",
      apply: "Through local agricultural office.",
      documents: "Land records, Aadhaar, bank details.",
      website: "https://agrimachinery.nic.in",
      applicationMode: "Online/Offline"
    }
  },
  {
    name: "National Agriculture Market (eNAM)",
    category: "Marketing",
    image: "/assets/schemes/enam.jpg",
    details: {
      launch: "2016",
      objective: "Create pan‑India electronic trading platform (eNAM).",
      benefit: "Transparent pricing and payments.",
      eligibility: "Farmers with APMC mandi registration.",
      apply: "Register at local mandi or https://enam.gov.in",
      documents: "Mandi registration, Aadhaar, bank account.",
      website: "https://enam.gov.in",
      applicationMode: "Online"
    }
  },
  {
    name: "Minimum Support Price Scheme",
    category: "Price Support",
    image: "/assets/schemes/msp.jpg",
    details: {
      launch: "1966",
      objective: "Guarantee price support to farmers.",
      benefit: "Government assured price + procurement.",
      eligibility: "All farmers for notified crops.",
      apply: "Pricing announced via State/Center.",
      documents: "Crop details, quality certificates.",
      website: "https://cacp.dacnet.nic.in",
      applicationMode: "State/Center"
    }
  },
  {
    name: "Micro Irrigation Fund Scheme",
    category: "Irrigation",
    image: "/assets/schemes/micro.jpg",
    details: {
      launch: "2015",
      objective: "Encourage drip and sprinkler irrigation.",
      benefit: "Subsidy support under PMKSY.",
      eligibility: "Farmers undertaking micro irrigation.",
      apply: "Via State PMKSY/Department.",
      documents: "Land records, irrigation plan, bank details.",
      website: "https://pmksy.gov.in",
      applicationMode: "State PMKSY Department"
    }
  },
  {
    name: "Rashtriya Krishi Vikas Yojana",
    category: "Development",
    image: "/assets/schemes/rkvy.jpg",
    details: {
      launch: "2007",
      objective: "Support state‑level agri infrastructure projects.",
      benefit: "Grants to states/FPOs for project execution.",
      eligibility: "State-funded project beneficiaries.",
      apply: "Project proposals via State Nodal Agency.",
      documents: "Project proposals, state approval.",
      website: "https://rkvy.nic.in",
      applicationMode: "State Nodal Agency"
    }
  },
  {
    name: "Pradhan Mantri Kisan Maandhan Yojana",
    category: "Pension",
    image: "/assets/schemes/pension.jpg",
    details: {
      launch: "2019",
      objective: "Provide pension to small and marginal farmers.",
      benefit: "₹3,000 monthly pension after 60 years.",
      eligibility: "Small and marginal farmers aged 18-40 years.",
      apply: "Through CSCs or local agriculture office.",
      documents: "Aadhaar, bank account, land records.",
      website: "https://maandhan.in",
      applicationMode: "Online/Offline"
    }
  }
];

function Schemes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...new Set(schemes.map(s => s.category))];

  const filtered = schemes.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         s.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || s.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggle = i => {
    setExpandedIndex(expandedIndex === i ? null : i);
  };

  const searchGoogle = name => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(name + " farmer scheme India")}`, '_blank');
  };

  return (
    <div className="schemes-wrapper">
      {/* Header Section */}
      <div className="schemes-header">
        <div className="header-icon">🌾</div>
        <h1>Government Schemes for Farmers</h1>
        <p>Explore various government schemes designed to support farmers across India and Tamil Nadu. Click on any scheme to view details or search online for more information.</p>
      </div>

      {/* Filters Section */}
      <div className="schemes-filters">
        <div className="search-container">
          <div className="search-icon">🔍</div>
          <input
            type="search"
            placeholder="Search schemes by name or category..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="category-container">
          <select 
            value={selectedCategory} 
            onChange={e => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Stats Section */}
      <div className="schemes-stats">
        <span className="stats-text">Showing {filtered.length} of {schemes.length} schemes</span>
      </div>

      {/* Cards Grid */}
      <div className="schemes-grid">
        {filtered.map((scheme, index) => (
          <div className="scheme-card" key={index}>
            <div
              className="scheme-image"
              style={{ 
                backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%), url(${scheme.image || '/assets/schemes/default.jpg'})` 
              }}
              onClick={() => toggle(index)}
            >
              <div className="scheme-category-badge">{scheme.category}</div>
              <div className="expand-indicator">
                {expandedIndex === index ? '−' : '+'}
              </div>
            </div>
            
            <div className="scheme-content">
              <h3 className="scheme-title" onClick={() => toggle(index)}>
                {scheme.name}
              </h3>

              {expandedIndex === index && (
                <div className="scheme-details">
                  {scheme.details?.launch && (
                    <div className="detail-row">
                      <span className="detail-label">Launch Year:</span>
                      <span className="detail-value">{scheme.details.launch}</span>
                    </div>
                  )}
                  {scheme.details?.objective && (
                    <div className="detail-row">
                      <span className="detail-label">Objective:</span>
                      <span className="detail-value">{scheme.details.objective}</span>
                    </div>
                  )}
                  {scheme.details?.benefit && (
                    <div className="detail-row">
                      <span className="detail-label">Benefit:</span>
                      <span className="detail-value">{scheme.details.benefit}</span>
                    </div>
                  )}
                  {scheme.details?.eligibility && (
                    <div className="detail-row">
                      <span className="detail-label">Eligibility:</span>
                      <span className="detail-value">{scheme.details.eligibility}</span>
                    </div>
                  )}
                  {scheme.details?.apply && (
                    <div className="detail-row">
                      <span className="detail-label">How to Apply:</span>
                      <span className="detail-value">{scheme.details.apply}</span>
                    </div>
                  )}
                  {scheme.details?.documents && (
                    <div className="detail-row">
                      <span className="detail-label">Required Documents:</span>
                      <span className="detail-value">{scheme.details.documents}</span>
                    </div>
                  )}
                  {scheme.details?.applicationMode && (
                    <div className="detail-row">
                      <span className="detail-label">Application Mode:</span>
                      <span className="detail-value mode-badge">{scheme.details.applicationMode}</span>
                    </div>
                  )}
                  
                  <div className="scheme-actions">
                    <button
                      className="action-btn search-btn"
                      onClick={() => searchGoogle(scheme.name)}
                    >
                      <span className="btn-icon">🔍</span>
                      Search Online
                    </button>
                    {scheme.details?.website && (
                      <a 
                        href={scheme.details.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="action-btn website-btn"
                      >
                        <span className="btn-icon">🌐</span>
                        Official Site
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filtered.length === 0 && (
        <div className="no-results">
          <div className="no-results-icon">📭</div>
          <h3>No schemes found</h3>
          <p>Try adjusting your search terms or category filter.</p>
        </div>
      )}
    </div>
  );
}

export default Schemes;