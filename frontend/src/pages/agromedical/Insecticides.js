import React from 'react';
import '../../css/Agrochemicals/Insecticides.css';


function Insecticides() {
  const insecticides = [
    {
      id: 1,
      name: "Cypermethrin Super",
      image: "/assets/insecticides/cypermethrin.jpg",
      category: "Pyrethroid",
      content: "Active Ingredient: Cypermethrin – Broad-spectrum insecticide for cotton bollworm, aphids."
    },
    {
      id: 2,
      name: "Chlorpyrifos Pro",
      image: "/assets/insecticides/chlorpyrifos.jpg",
      category: "Organophosphate",
      content: "Active Ingredient: Chlorpyrifos – Controls soil and foliar insects in various crops."
    },
    {
      id: 3,
      name: "Imidacloprid Gold",
      image: "/assets/insecticides/imidacloprid.jpg",
      category: "Neonicotinoid",
      content: "Active Ingredient: Imidacloprid – Systemic insecticide for sucking pests and termites."
    },
    {
      id: 4,
      name: "Thiamethoxam Elite",
      image: "/assets/insecticides/thiamethoxam.jpg",
      category: "Neonicotinoid",
      content: "Active Ingredient: Thiamethoxam – Controls aphids, whiteflies, and thrips effectively."
    },
    {
      id: 5,
      name: "Acetamiprid Max",
      image: "/assets/insecticides/acetamiprid.jpg",
      category: "Neonicotinoid",
      content: "Active Ingredient: Acetamiprid – Controls sucking insects in cotton, vegetables."
    },
    {
      id: 6,
      name: "Lambda Cyhalothrin",
      image: "/assets/insecticides/lambda-cyhalothrin.jpg",
      category: "Pyrethroid",
      content: "Active Ingredient: Lambda-cyhalothrin – Fast knockdown against lepidopteran pests."
    },
    {
      id: 7,
      name: "Deltamethrin Force",
      image: "/assets/insecticides/deltamethrin.jpg",
      category: "Pyrethroid",
      content: "Active Ingredient: Deltamethrin – Controls bollworm, stem borer in cotton and rice."
    },
    {
      id: 8,
      name: "Bifenthrin Ultra",
      image: "/assets/insecticides/bifenthrin.jpg",
      category: "Pyrethroid",
      content: "Active Ingredient: Bifenthrin – Long-lasting control of chewing and sucking insects."
    },
    {
      id: 9,
      name: "Profenofos Power",
      image: "/assets/insecticides/profenofos.jpg",
      category: "Organophosphate",
      content: "Active Ingredient: Profenofos – Controls bollworm, aphids, and jassids in cotton."
    },
    {
      id: 10,
      name: "Acephate Super",
      image: "/assets/insecticides/acephate.jpg",
      category: "Organophosphate",
      content: "Active Ingredient: Acephate – Systemic insecticide for thrips, aphids, caterpillars."
    },
    {
      id: 11,
      name: "Dimethoate Pro",
      image: "/assets/insecticides/dimethoate.jpg",
      category: "Organophosphate",
      content: "Active Ingredient: Dimethoate – Systemic control of sucking insects and mites."
    },
    {
      id: 12,
      name: "Malathion Gold",
      image: "/assets/insecticides/malathion.jpg",
      category: "Organophosphate",
      content: "Active Ingredient: Malathion – Controls aphids, scales, and fruit flies."
    },
    {
      id: 13,
      name: "Phorate Elite",
      image: "/assets/insecticides/phorate.jpg",
      category: "Organophosphate",
      content: "Active Ingredient: Phorate – Soil applied systemic insecticide for root protection."
    },
    {
      id: 14,
      name: "Carbofuran Max",
      image: "/assets/insecticides/carbofuran.jpg",
      category: "Carbamate",
      content: "Active Ingredient: Carbofuran – Systemic insecticide for stem borers and nematodes."
    },
    {
      id: 15,
      name: "Carbaryl Force",
      image: "/assets/insecticides/carbaryl.jpg",
      category: "Carbamate",
      content: "Active Ingredient: Carbaryl – Broad-spectrum control of lepidopteran pests."
    },
    {
      id: 16,
      name: "Methomyl Ultra",
      image: "/assets/insecticides/methomyl.jpg",
      category: "Carbamate",
      content: "Active Ingredient: Methomyl – Fast-acting insecticide for bollworm and aphids."
    },
    {
      id: 17,
      name: "Fipronil Power",
      image: "/assets/insecticides/fipronil.jpg",
      category: "Phenylpyrazole",
      content: "Active Ingredient: Fipronil – Controls termites, stem borers, and soil insects."
    },
    {
      id: 18,
      name: "Spinosad Gold",
      image: "/assets/insecticides/spinosad.jpg",
      category: "Spinosyn",
      content: "Active Ingredient: Spinosad – Organic approved insecticide for thrips and caterpillars."
    },
    {
      id: 19,
      name: "Emamectin Benzoate",
      image: "/assets/insecticides/emamectin.jpg",
      category: "Avermectin",
      content: "Active Ingredient: Emamectin Benzoate – Controls bollworm, fruit borer effectively."
    },
    {
      id: 20,
      name: "Abamectin Elite",
      image: "/assets/insecticides/abamectin.jpg",
      category: "Avermectin",
      content: "Active Ingredient: Abamectin – Controls mites, leaf miners, and thrips."
    },
    {
      id: 21,
      name: "Indoxacarb Pro",
      image: "/assets/insecticides/indoxacarb.jpg",
      category: "Oxadiazine",
      content: "Active Ingredient: Indoxacarb – Selective insecticide for lepidopteran larvae."
    },
    {
      id: 22,
      name: "Flubendiamide Max",
      image: "/assets/insecticides/flubendiamide.jpg",
      category: "Diamide",
      content: "Active Ingredient: Flubendiamide – Controls stem borers and fruit borers."
    },
    {
      id: 23,
      name: "Chlorantraniliprole",
      image: "/assets/insecticides/chlorantraniliprole.jpg",
      category: "Diamide",
      content: "Active Ingredient: Chlorantraniliprole – Long-lasting control of lepidopteran pests."
    },
    {
      id: 24,
      name: "Thiacloprid Force",
      image: "/assets/insecticides/thiacloprid.jpg",
      category: "Neonicotinoid",
      content: "Active Ingredient: Thiacloprid – Controls aphids, whiteflies in vegetables."
    },
    {
      id: 25,
      name: "Clothianidin Ultra",
      image: "/assets/insecticides/clothianidin.jpg",
      category: "Neonicotinoid",
      content: "Active Ingredient: Clothianidin – Seed treatment for wireworms and aphids."
    },
    {
      id: 26,
      name: "Dinotefuran Gold",
      image: "/assets/insecticides/dinotefuran.jpg",
      category: "Neonicotinoid",
      content: "Active Ingredient: Dinotefuran – Fast-acting against sucking insects."
    },
    {
      id: 27,
      name: "Nitenpyram Super",
      image: "/assets/insecticides/nitenpyram.jpg",
      category: "Neonicotinoid",
      content: "Active Ingredient: Nitenpyram – Quick knockdown of aphids and whiteflies."
    },
    {
      id: 28,
      name: "Buprofezin Elite",
      image: "/assets/insecticides/buprofezin.jpg",
      category: "Thiadiazine",
      content: "Active Ingredient: Buprofezin – IGR for scale insects and whiteflies."
    },
    {
      id: 29,
      name: "Pyriproxyfen Pro",
      image: "/assets/insecticides/pyriproxyfen.jpg",
      category: "Pyridine",
      content: "Active Ingredient: Pyriproxyfen – Juvenile hormone mimic for whiteflies."
    },
    {
      id: 30,
      name: "Diafenthiuron Max",
      image: "/assets/insecticides/diafenthiuron.jpg",
      category: "Thiourea",
      content: "Active Ingredient: Diafenthiuron – Controls whiteflies, aphids, and mites."
    },
    {
      id: 31,
      name: "Spiromesifen Force",
      image: "/assets/insecticides/spiromesifen.jpg",
      category: "Spirocyclic",
      content: "Active Ingredient: Spiromesifen – Lipid synthesis inhibitor for mites."
    },
    {
      id: 32,
      name: "Spirotetramat Ultra",
      image: "/assets/insecticides/spirotetramat.jpg",
      category: "Spirocyclic",
      content: "Active Ingredient: Spirotetramat – Systemic control of sucking insects."
    },
    {
      id: 33,
      name: "Pymetrozine Gold",
      image: "/assets/insecticides/pymetrozine.jpg",
      category: "Pyridine",
      content: "Active Ingredient: Pymetrozine – Selective against aphids and whiteflies."
    },
    {
      id: 34,
      name: "Flonicamid Super",
      image: "/assets/insecticides/flonicamid.jpg",
      category: "Pyridinecarboxamide",
      content: "Active Ingredient: Flonicamid – Controls aphids without harming beneficials."
    },
    {
      id: 35,
      name: "Hexaflumuron Elite",
      image: "/assets/insecticides/hexaflumuron.jpg",
      category: "Benzoylurea",
      content: "Active Ingredient: Hexaflumuron – Chitin synthesis inhibitor for termites."
    },
    {
      id: 36,
      name: "Lufenuron Pro",
      image: "/assets/insecticides/lufenuron.jpg",
      category: "Benzoylurea",
      content: "Active Ingredient: Lufenuron – IGR for lepidopteran larvae control."
    },
    {
      id: 37,
      name: "Teflubenzuron Max",
      image: "/assets/insecticides/teflubenzuron.jpg",
      category: "Benzoylurea",
      content: "Active Ingredient: Teflubenzuron – Controls caterpillars and beetle larvae."
    },
    {
      id: 38,
      name: "Novaluron Force",
      image: "/assets/insecticides/novaluron.jpg",
      category: "Benzoylurea",
      content: "Active Ingredient: Novaluron – IGR for bollworm and fruit borer control."
    },
    {
      id: 39,
      name: "Triflumuron Ultra",
      image: "/assets/insecticides/triflumuron.jpg",
      category: "Benzoylurea",
      content: "Active Ingredient: Triflumuron – Controls lepidopteran and coleopteran pests."
    },
    {
      id: 40,
      name: "Cyromazine Gold",
      image: "/assets/insecticides/cyromazine.jpg",
      category: "Triazine",
      content: "Active Ingredient: Cyromazine – Controls leaf miners in vegetables."
    },
    {
      id: 41,
      name: "Metaflumizone Super",
      image: "/assets/insecticides/metaflumizone.jpg",
      category: "Semicarbazone",
      content: "Active Ingredient: Metaflumizone – Controls lepidopteran and coleopteran pests."
    },
    {
      id: 42,
      name: "Rynaxypyr Elite",
      image: "/assets/insecticides/rynaxypyr.jpg",
      category: "Diamide",
      content: "Active Ingredient: Rynaxypyr – Advanced diamide for caterpillar control."
    },
    {
      id: 43,
      name: "Cyazypyr Pro",
      image: "/assets/insecticides/cyazypyr.jpg",
      category: "Diamide",
      content: "Active Ingredient: Cyazypyr – Controls sucking and chewing insects."
    },
    {
      id: 44,
      name: "Tetraniliprole Max",
      image: "/assets/insecticides/tetraniliprole.jpg",
      category: "Diamide",
      content: "Active Ingredient: Tetraniliprole – Broad-spectrum diamide insecticide."
    },
    {
      id: 45,
      name: "Sulfoxaflor Force",
      image: "/assets/insecticides/sulfoxaflor.jpg",
      category: "Sulfoximine",
      content: "Active Ingredient: Sulfoxaflor – Controls resistant aphids and whiteflies."
    },
    {
      id: 46,
      name: "Flupyradifurone Ultra",
      image: "/assets/insecticides/flupyradifurone.jpg",
      category: "Butenolide",
      content: "Active Ingredient: Flupyradifurone – Bee-safe alternative for sucking insects."
    },
    {
      id: 47,
      name: "Triflumezopyrim Gold",
      image: "/assets/insecticides/triflumezopyrim.jpg",
      category: "Mesoionic",
      content: "Active Ingredient: Triflumezopyrim – Novel chemistry for planthopper control."
    },
    {
      id: 48,
      name: "Broflanilide Super",
      image: "/assets/insecticides/broflanilide.jpg",
      category: "Isoxazoline",
      content: "Active Ingredient: Broflanilide – Advanced chemistry for lepidopteran control."
    },
    {
      id: 49,
      name: "Tioxazafen Elite",
      image: "/assets/insecticides/tioxazafen.jpg",
      category: "Oxazole",
      content: "Active Ingredient: Tioxazafen – Nematicide and insecticide combination."
    },
    {
      id: 50,
      name: "Afidopyropen Pro",
      image: "/assets/insecticides/afidopyropen.jpg",
      category: "Pyropene",
      content: "Active Ingredient: Afidopyropen – Novel mode of action against aphids."
    }
  ];

  return (
    <div className="insecticides-container">
      <div className="insecticides-grid">
        {insecticides.map((item) => (
          <div key={item.id} className="insecticide-card">
            <img src={item.image} alt={item.name} className="insecticide-image" />
            <div className="insecticide-info">
              <h3>{item.name}</h3>
              <span className="insecticide-category">{item.category}</span>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Results Counter */}
      <div className="insecticides-footer">
        Showing {insecticides.length} insecticide products
      </div>
    </div>
  );
}

export default Insecticides;