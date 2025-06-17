import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/CreatorDetail.css';

function CreatorDetail() {
  const [showForm, setShowForm] = useState(false);
  const [language, setLanguage] = useState('en');
  const [editingIndex, setEditingIndex] = useState(null);

  const [seedDate, setSeedDate] = useState('');
  const [seedWeight, setSeedWeight] = useState('');
  const [seedCost, setSeedCost] = useState('');
  const [seedingCount, setSeedingCount] = useState('');
  const [peopleCount, setPeopleCount] = useState('');
  const [moneyPerPerson, setMoneyPerPerson] = useState('');
  const [entries, setEntries] = useState([]);

  const [seedingTakers, setSeedingTakers] = useState([]);
  const [seedingPerson, setSeedingPerson] = useState('');
  const [seedingTakenCount, setSeedingTakenCount] = useState('');
  const [seedingPersonMoney, setSeedingPersonMoney] = useState('');

  const [plantingDate, setPlantingDate] = useState('');
  const [workerName, setWorkerName] = useState('');
  const [moneyGiven, setMoneyGiven] = useState('yes');
  const [costPerPerson, setCostPerPerson] = useState('');
  const [workers, setWorkers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('creatorEntries')) || [];
    setEntries(savedEntries);
  }, []);

  useEffect(() => {
    localStorage.setItem('creatorEntries', JSON.stringify(entries));
  }, [entries]);

  const totalSeedingCost =
    peopleCount && moneyPerPerson
      ? parseInt(peopleCount) * parseInt(moneyPerPerson)
      : 0;

  const totalSeedingsTaken = seedingTakers.reduce((sum, p) => sum + p.taken, 0);
  const totalMoneyForSeedings = seedingTakers.reduce((sum, p) => sum + p.money, 0);

  const handleAddOrUpdateEntry = () => {
    const newEntry = {
      seedDate,
      seedWeight,
      seedCost,
      seedingCount,
      peopleCount,
      moneyPerPerson,
      totalSeedingCost,
      seedingTakers,
      plantingDate,
      workers,
    };

    if (editingIndex !== null) {
      const updatedEntries = [...entries];
      updatedEntries[editingIndex] = newEntry;
      setEntries(updatedEntries);
      setEditingIndex(null);
    } else {
      setEntries([...entries, newEntry]);
    }

    setSeedDate('');
    setSeedWeight('');
    setSeedCost('');
    setSeedingCount('');
    setPeopleCount('');
    setMoneyPerPerson('');
    setSeedingTakers([]);
    setPlantingDate('');
    setWorkers([]);
    setShowForm(false);
  };

  const handleEdit = (index) => {
    const entry = entries[index];
    setSeedDate(entry.seedDate);
    setSeedWeight(entry.seedWeight);
    setSeedCost(entry.seedCost);
    setSeedingCount(entry.seedingCount);
    setPeopleCount(entry.peopleCount);
    setMoneyPerPerson(entry.moneyPerPerson);
    setSeedingTakers(entry.seedingTakers || []);
    setPlantingDate(entry.plantingDate || '');
    setWorkers(entry.workers || []);
    setShowForm(true);
    setEditingIndex(index);
  };

  const handleAddSeedingTaker = () => {
    if (!seedingPerson || !seedingTakenCount || !seedingPersonMoney) return;
    setSeedingTakers([
      ...seedingTakers,
      {
        name: seedingPerson,
        taken: parseInt(seedingTakenCount),
        money: parseInt(seedingPersonMoney),
      },
    ]);
    setSeedingPerson('');
    setSeedingTakenCount('');
    setSeedingPersonMoney('');
  };

  const handleAddWorker = () => {
    if (!workerName || !costPerPerson) return;
    setWorkers([
      ...workers,
      {
        name: workerName,
        moneyGiven,
        cost: parseInt(costPerPerson),
      },
    ]);
    setWorkerName('');
    setMoneyGiven('yes');
    setCostPerPerson('');
  };

  const t = (en, ta) => (language === 'ta' ? ta : en);

  return (
    <div className="creator-detail-container">
      <div className="top-bar">
        <h1>🌾 {t('Creator Detail', 'உருவாக்குநர் விவரம்')}</h1>
        <div className="top-actions">
          <button className="toggle-btn" onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}>
            🌐 {t('தமிழ்', 'English')}
          </button>
          <button className="print-btn" onClick={() => window.print()}>
            🖨️ {t('Print', 'அச்சிடுக')}
          </button>
          <button className="tracker-btn" onClick={() => navigate('/Tractor')}>
            🚜 {t('Tracker', 'டிராக்டர்')}
          </button>
          <button className="agromedical-btn" onClick={() => navigate('/AgromedicalProducts')}>
            💊 {t('Agromedical Products', 'வேளாண் மருத்துவ பொருட்கள்')}
          </button>
          <button className="cultivating-btn" onClick={() => navigate('/CultivatingField')}>
            🚜 {t('Cultivating Field', 'வயல் உழுது')}
          </button>
        </div>
      </div>

      <button className="add-button" onClick={() => {
        setShowForm(!showForm);
        setEditingIndex(null);
        setSeedDate('');
        setSeedWeight('');
        setSeedCost('');
        setSeedingCount('');
        setPeopleCount('');
        setMoneyPerPerson('');
        setSeedingTakers([]);
        setPlantingDate('');
        setWorkers([]);
      }}>
        {showForm ? t('Cancel', 'ரத்துசெய்') : t('➕ Add Entry', '➕ பதிவை சேர்க்க')}
      </button>

      {showForm && (
        <div className="entry-form">
          <h2>🌱 {t('Seed Sowing Details', 'விதை விதைக்கும் விவரம்')}</h2>

          <label>{t('Date of Sowing:', 'விதைத்த நாள்')}</label>
          <input type="date" value={seedDate} onChange={(e) => setSeedDate(e.target.value)} />

          <label>{t('Seed Weight (kg):', 'விதையின் எடை (கி.கி):')}</label>
          <input type="number" value={seedWeight} onChange={(e) => setSeedWeight(e.target.value)} />

          <label>{t('Cost of Seed (₹):', 'விதையின் செலவு (₹):')}</label>
          <input type="number" value={seedCost} onChange={(e) => setSeedCost(e.target.value)} />

          <label>{t('Number of Seedings:', 'விதைப்புகளின் எண்ணிக்கை:')}</label>
          <input type="number" value={seedingCount} onChange={(e) => setSeedingCount(e.target.value)} />

          <label>{t('People for Seeding:', 'விதைக்கும் மக்கள்:')}</label>
          <input type="number" value={peopleCount} onChange={(e) => setPeopleCount(e.target.value)} />

          <div className="taking-seeding-inline">
            <h4>{t('Taking Seeding', 'விதைப்புகளை எடுத்தல்')}</h4>
            <label>{t('Name of Person:', 'நபரின் பெயர்:')}</label>
            <input value={seedingPerson} onChange={(e) => setSeedingPerson(e.target.value)} />

            <label>{t('Number of Seedings Taken:', 'எடுத்த விதைப்புகள்:')}</label>
            <input type="number" value={seedingTakenCount} onChange={(e) => setSeedingTakenCount(e.target.value)} />

            <label>{t('Money Given (₹):', 'கொடுக்கப்பட்ட தொகை (₹):')}</label>
            <input type="number" value={seedingPersonMoney} onChange={(e) => setSeedingPersonMoney(e.target.value)} />

            <button onClick={handleAddSeedingTaker}>➕ {t('Add Person', 'நபரை சேர்க்க')}</button>

            <div className="seeding-takers-list">
              {seedingTakers.map((person, index) => (
                <div key={index} className="taker-card">
                  <p>👤 <strong>{person.name}</strong></p>
                  <p>{t('Seedings Taken:', 'விதைப்புகள்:')} {person.taken}</p>
                  <p>{t('Money:', 'தொகை:')} ₹ {person.money}</p>
                </div>
              ))}
            </div>

            <div className="seeding-summary">
              <p><strong>{t('Total Seedings Taken:', 'மொத்த எடுத்தல்:')}</strong> {totalSeedingsTaken}</p>
              <p><strong>{t('Total Money for Seedings:', 'மொத்த செலவு:')}</strong> ₹ {totalMoneyForSeedings}</p>
            </div>
          </div>

          <div className="planting-section">
            <h4>🌱 {t('Planted Cost (Natta Kooli)', 'நட்ட கூலி')}</h4>
            <label>{t('Planting Date:', 'நட்ட தேதி:')}</label>
            <input type="date" value={plantingDate} onChange={(e) => setPlantingDate(e.target.value)} />

            <label>{t('Name of Worker:', 'வேலை செய்யும் நபர்:')}</label>
            <input value={workerName} onChange={(e) => setWorkerName(e.target.value)} />

            <label>{t('Money Given?', 'கூலி வழங்கப்பட்டதா?')}</label>
            <select value={moneyGiven} onChange={(e) => setMoneyGiven(e.target.value)}>
              <option value="yes">{t('Yes', 'ஆம்')}</option>
              <option value="no">{t('No', 'இல்லை')}</option>
            </select>

            <label>{t('Cost per Person (₹):', 'ஒருவர் கூலி (₹):')}</label>
            <input type="number" value={costPerPerson} onChange={(e) => setCostPerPerson(e.target.value)} />

            <button onClick={handleAddWorker}>➕ {t('Add Worker', 'நபரை சேர்க்க')}</button>

            <div className="worker-list">
              {workers.map((worker, i) => (
                <div key={i} className="taker-card">
                  <p>👷 {worker.name}</p>
                  <p>{t('Money Given:', 'கூலி வழங்கப்பட்டது:')} {worker.moneyGiven === 'yes' ? t('Yes', 'ஆம்') : t('No', 'இல்லை')}</p>
                  <p>{t('Cost:', 'செலவு:')} ₹ {worker.cost}</p>
                </div>
              ))}
            </div>

            <div className="planting-summary">
              <p><strong>{t('Total Workers:', 'மொத்த நபர்கள்:')}</strong> {workers.length}</p>
              <p><strong>{t('Total Cost:', 'மொத்த செலவு:')}</strong> ₹ {workers.reduce((sum, w) => sum + parseInt(w.cost), 0)}</p>
            </div>
          </div>

          <button onClick={handleAddOrUpdateEntry}>
            ✅ {editingIndex !== null ? t('Update Entry', 'பதிவை புதுப்பிக்க') : t('Save Entry', 'பதிவை சேமிக்க')}
          </button>
        </div>
      )}

      <div className="entry-list">
        <h2>📋 {t('Entries', 'பதிவுகள்')}</h2>
        {entries.length === 0 ? (
          <p>{t('No entries yet.', 'எந்த பதிவும் இல்லை.')}</p>
        ) : (
          entries.map((entry, index) => (
            <div key={index} className="entry-card">
              <p><strong>{t('Date:', 'நாள்:')}</strong> {entry.seedDate}</p>
              <p><strong>{t('Seed Weight:', 'விதை எடை:')}</strong> {entry.seedWeight} kg</p>
              <p><strong>{t('Seed Cost:', 'விதை செலவு:')}</strong> ₹ {entry.seedCost}</p>
              <p><strong>{t('Seedings:', 'விதைப்புகள்:')}</strong> {entry.seedingCount}</p>
              <p><strong>{t('People Involved:', 'சேர்ந்தவர்கள்:')}</strong> {entry.peopleCount}</p>

              {entry.seedingTakers && entry.seedingTakers.length > 0 && (
                <>
                  <p><strong>{t('Seeding Takers:', 'விதைப்புகளை எடுத்தவர்கள்:')}</strong></p>
                  {entry.seedingTakers.map((taker, i) => (
                    <div key={i} className="taker-card">
                      <p>👤 {taker.name}</p>
                      <p>{t('Seedings Taken:', 'விதைப்புகள்:')} {taker.taken}</p>
                      <p>{t('Money:', 'தொகை:')} ₹ {taker.money}</p>
                    </div>
                  ))}
                </>
              )}

              {entry.workers && entry.workers.length > 0 && (
                <>
                  <p><strong>{t('Planted Workers:', 'நட்ட நபர்கள்:')}</strong></p>
                  {entry.workers.map((w, i) => (
                    <div key={i} className="taker-card">
                      <p>👷 {w.name}</p>
                      <p>{t('Money Given:', 'கொடுக்கப்பட்டதா:')} {w.moneyGiven === 'yes' ? t('Yes', 'ஆம்') : t('No', 'இல்லை')}</p>
                      <p>{t('Cost:', 'செலவு:')} ₹ {w.cost}</p>
                    </div>
                  ))}
                  <p><strong>{t('Total Workers:', 'மொத்த நபர்கள்:')}</strong> {entry.workers.length}</p>
                  <p><strong>{t('Total Cost:', 'மொத்த செலவு:')}</strong> ₹ {entry.workers.reduce((sum, w) => sum + parseInt(w.cost), 0)}</p>
                </>
              )}

              <div className="entry-actions">
                <button onClick={() => handleEdit(index)}>✏️ {t('Edit', 'திருத்த')}</button>
                <button onClick={() => {
                  const updated = entries.filter((_, i) => i !== index);
                  setEntries(updated);
                }}>🗑️ {t('Delete', 'அழிக்க')}</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CreatorDetail;