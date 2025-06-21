import React from 'react';
import '../css/Herbicides.css';

function Herbicides() {
  const herbicides = [
    {
      id: 1,
      name: "Tag Proxy",
      image: "/assets/herbicides/tag-proxy.jpg",
      category: "Contact Herbicide",
      content: "Active Ingredient: Paraquat Dichloride – Used for quick burndown of green plant tissues."
    },
    {
      id: 2,
      name: "WeedMaster",
      image: "/assets/herbicides/weedmaster.jpg",
      category: "Systemic Herbicide",
      content: "Active Ingredient: Glyphosate – Controls annual and perennial weeds effectively."
    },
    {
      id: 3,
      name: "Atrazino",
      image: "/assets/herbicides/atrazino.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Atrazine – Controls broadleaf and grassy weeds in corn, sugarcane."
    },
    {
      id: 4,
      name: "Pendimax",
      image: "/assets/herbicides/pendimax.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Pendimethalin – Prevents weed seed germination in many crops."
    },
    {
      id: 5,
      name: "Metribuzin Gold",
      image: "/assets/herbicides/metribuzin.jpg",
      category: "Selective Herbicide",
      content: "Active Ingredient: Metribuzin – Broad-spectrum control in soybean, potato, tomato."
    },
    {
      id: 6,
      name: "Sulfosate 75",
      image: "/assets/herbicides/sulfosate.jpg",
      category: "Non-Selective",
      content: "Active Ingredient: Sulfosate – Used in plantation crops and non-crop areas."
    },
    {
      id: 7,
      name: "Haloxyfop Plus",
      image: "/assets/herbicides/haloxyfop.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Haloxyfop-R-methyl – Controls grass weeds in broadleaf crops."
    },
    {
      id: 8,
      name: "Butachlor King",
      image: "/assets/herbicides/butachlor.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Butachlor – Rice herbicide for controlling grassy weeds."
    },
    {
      id: 9,
      name: "Dicamba Pro",
      image: "/assets/herbicides/dicamba.jpg",
      category: "Systemic Herbicide",
      content: "Active Ingredient: Dicamba – Controls woody plants and broadleaf weeds effectively."
    },
    {
      id: 10,
      name: "Oxyfluorfen Max",
      image: "/assets/herbicides/oxyfluorfen.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Oxyfluorfen – Controls annual broadleaf and grass weeds."
    },
    {
      id: 11,
      name: "Clodinafop Elite",
      image: "/assets/herbicides/clodinafop.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Clodinafop-propargyl – Selective grass herbicide for wheat."
    },
    {
      id: 12,
      name: "Fenoxaprop Ultra",
      image: "/assets/herbicides/fenoxaprop.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Fenoxaprop-ethyl – Controls annual grass weeds in wheat."
    },
    {
      id: 13,
      name: "Quizalofop Power",
      image: "/assets/herbicides/quizalofop.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Quizalofop-ethyl – Selective grass herbicide for broadleaf crops."
    },
    {
      id: 14,
      name: "Metsulfuron Pro",
      image: "/assets/herbicides/metsulfuron.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Metsulfuron-methyl – Controls broadleaf weeds in cereals."
    },
    {
      id: 15,
      name: "Isoproturon Force",
      image: "/assets/herbicides/isoproturon.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Isoproturon – Controls annual grasses and broadleaf weeds in wheat."
    },
    {
      id: 16,
      name: "Pretilachlor Super",
      image: "/assets/herbicides/pretilachlor.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Pretilachlor – Early post-emergence herbicide for rice crops."
    },
    {
      id: 17,
      name: "Pyrazosulfuron Gold",
      image: "/assets/herbicides/pyrazosulfuron.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Pyrazosulfuron-ethyl – Controls sedges and broadleaf weeds in rice."
    },
    {
      id: 18,
      name: "Bispyribac Elite",
      image: "/assets/herbicides/bispyribac.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Bispyribac-sodium – Controls grasses and sedges in rice."
    },
    {
      id: 19,
      name: "Cyhalofop Master",
      image: "/assets/herbicides/cyhalofop.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Cyhalofop-butyl – Controls barnyard grass in rice fields."
    },
    {
      id: 20,
      name: "Penoxsulam Plus",
      image: "/assets/herbicides/penoxsulam.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Penoxsulam – Broad-spectrum herbicide for rice cultivation."
    },
    {
      id: 21,
      name: "Flufenacet Premium",
      image: "/assets/herbicides/flufenacet.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Flufenacet – Controls annual grasses in various crops."
    },
    {
      id: 22,
      name: "Trifluralin Pro",
      image: "/assets/herbicides/trifluralin.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Trifluralin – Soil-incorporated herbicide for vegetable crops."
    },
    {
      id: 23,
      name: "Alachlor Max",
      image: "/assets/herbicides/alachlor.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Alachlor – Controls annual grasses and broadleaf weeds."
    },
    {
      id: 24,
      name: "Metolachlor Elite",
      image: "/assets/herbicides/metolachlor.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Metolachlor – Pre-emergence herbicide for corn and soybean."
    },
    {
      id: 25,
      name: "Acetochlor Super",
      image: "/assets/herbicides/acetochlor.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Acetochlor – Controls annual grasses in corn and cotton."
    },
    {
      id: 26,
      name: "Dimethenamid Power",
      image: "/assets/herbicides/dimethenamid.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Dimethenamid – Residual herbicide for corn and soybean."
    },
    {
      id: 27,
      name: "Propachlor Gold",
      image: "/assets/herbicides/propachlor.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Propachlor – Controls annual grasses in various crops."
    },
    {
      id: 28,
      name: "Simazine Ultra",
      image: "/assets/herbicides/simazine.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Simazine – Controls annual broadleaf and grass weeds."
    },
    {
      id: 29,
      name: "Prometryn Force",
      image: "/assets/herbicides/prometryn.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Prometryn – Controls broadleaf weeds in cotton and vegetables."
    },
    {
      id: 30,
      name: "Terbutryn Max",
      image: "/assets/herbicides/terbutryn.jpg",
      category: "Pre-emergent",
      content: "Active Ingredient: Terbutryn – Controls annual weeds in fruit orchards."
    },
    {
      id: 31,
      name: "Fluazifop Elite",
      image: "/assets/herbicides/fluazifop.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Fluazifop-butyl – Selective grass herbicide for broadleaf crops."
    },
    {
      id: 32,
      name: "Clethodim Pro",
      image: "/assets/herbicides/clethodim.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Clethodim – Controls annual and perennial grasses."
    },
    {
      id: 33,
      name: "Sethoxydim Power",
      image: "/assets/herbicides/sethoxydim.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Sethoxydim – Post-emergence grass herbicide for broadleaf crops."
    },
    {
      id: 34,
      name: "Tepraloxydim Max",
      image: "/assets/herbicides/tepraloxydim.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Tepraloxydim – Controls grass weeds in various broadleaf crops."
    },
    {
      id: 35,
      name: "Tralkoxydim Elite",
      image: "/assets/herbicides/tralkoxydim.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Tralkoxydim – Selective herbicide for grass control in wheat."
    },
    {
      id: 36,
      name: "Chlorimuron Super",
      image: "/assets/herbicides/chlorimuron.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Chlorimuron-ethyl – Controls broadleaf weeds in soybean."
    },
    {
      id: 37,
      name: "Sulfosulfuron Gold",
      image: "/assets/herbicides/sulfosulfuron.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Sulfosulfuron – Controls Phalaris minor in wheat crops."
    },
    {
      id: 38,
      name: "Mesosulfuron Pro",
      image: "/assets/herbicides/mesosulfuron.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Mesosulfuron-methyl – Controls grass and broadleaf weeds in wheat."
    },
    {
      id: 39,
      name: "Pyrithiobac Ultra",
      image: "/assets/herbicides/pyrithiobac.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Pyrithiobac-sodium – Controls broadleaf weeds in cotton."
    },
    {
      id: 40,
      name: "Triasulfuron Max",
      image: "/assets/herbicides/triasulfuron.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Triasulfuron – Controls broadleaf weeds in cereal crops."
    },
    {
      id: 41,
      name: "Tribenuron Elite",
      image: "/assets/herbicides/tribenuron.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Tribenuron-methyl – Controls broadleaf weeds in wheat and barley."
    },
    {
      id: 42,
      name: "Thifensulfuron Power",
      image: "/assets/herbicides/thifensulfuron.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Thifensulfuron-methyl – Controls broadleaf weeds in cereals."
    },
    {
      id: 43,
      name: "Nicosulfuron Force",
      image: "/assets/herbicides/nicosulfuron.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Nicosulfuron – Controls grass and broadleaf weeds in corn."
    },
    {
      id: 44,
      name: "Rimsulfuron Gold",
      image: "/assets/herbicides/rimsulfuron.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Rimsulfuron – Controls weeds in corn and potato crops."
    },
    {
      id: 45,
      name: "Primisulfuron Super",
      image: "/assets/herbicides/primisulfuron.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Primisulfuron-methyl – Controls grass and broadleaf weeds in corn."
    },
    {
      id: 46,
      name: "Prosulfuron Pro",
      image: "/assets/herbicides/prosulfuron.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Prosulfuron – Controls broadleaf weeds in corn and sorghum."
    },
    {
      id: 47,
      name: "Foramsulfuron Max",
      image: "/assets/herbicides/foramsulfuron.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Foramsulfuron – Controls grass weeds in corn crops."
    },
    {
      id: 48,
      name: "Iodosulfuron Elite",
      image: "/assets/herbicides/iodosulfuron.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Iodosulfuron-methyl – Controls grass and broadleaf weeds in wheat."
    },
    {
      id: 49,
      name: "Florasulam Ultra",
      image: "/assets/herbicides/florasulam.jpg",
      category: "Post-emergent",
      content: "Active Ingredient: Florasulam – Controls broadleaf weeds in wheat and barley."
    },
    {
      id: 50,
      name: "Carfentrazone Power",
      image: "/assets/herbicides/carfentrazone.jpg",
      category: "Contact Herbicide",
      content: "Active Ingredient: Carfentrazone-ethyl – Fast-acting contact herbicide for broadleaf weeds."
    }
  ];

  return (
    <div className="herbicides-container">
      <div className="herbicides-grid">
        {herbicides.map((item) => (
          <div key={item.id} className="herbicide-card">
            <img src={item.image} alt={item.name} className="herbicide-image" />
            <div className="herbicide-info">
              <h3>{item.name}</h3>
              <span className="herbicide-category">{item.category}</span>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Results Counter */}
      <div className="herbicides-footer">
        Showing {herbicides.length} herbicide products
      </div>
    </div>
  );
}

export default Herbicides;