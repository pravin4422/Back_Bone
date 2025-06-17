import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/TrackerPage.css';

function Tractor() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('en');
  const t = (en, ta) => (language === 'ta' ? ta : en);

  const [entries, setEntries] = useState([]);
  const [date, setDate] = useState('');
  const [day, setDay] = useState('');
  const [work, setWork] = useState('');
  const [tractorName, setTractorName] = useState('');
  const [timeSegments, setTimeSegments] = useState([{ period: 'Morning', hours: '' }]);
  const [rate, setRate] = useState('');
  const [moneyGiven, setMoneyGiven] = useState('Okay');
  const [editingIndex, setEditingIndex] = useState(null);

  // Separate state for Kamitty entries
  const [kamittyEntries, setKamittyEntries] = useState([]);
  const [numBags, setNumBags] = useState('');
  const [costPerBag, setCostPerBag] = useState('');
  const [otherCost, setOtherCost] = useState('');
  const [kamittyCost, setKamittyCost] = useState(0);
  const [kamittyDate, setKamittyDate] = useState('');
  const [kamittyDescription, setKamittyDescription] = useState('');

  const recognitionRef = useRef(null);
  const [listeningField, setListeningField] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tractorEntries')) || [];
    const savedKamitty = JSON.parse(localStorage.getItem('kamittyEntries')) || [];
    setEntries(saved);
    setKamittyEntries(savedKamitty);
  }, []);

  useEffect(() => {
    localStorage.setItem('tractorEntries', JSON.stringify(entries));
  }, [entries]);

  useEffect(() => {
    localStorage.setItem('kamittyEntries', JSON.stringify(kamittyEntries));
  }, [kamittyEntries]);

  useEffect(() => {
    const bagTotal = parseFloat(numBags || 0) * parseFloat(costPerBag || 0);
    const other = parseFloat(otherCost || 0);
    setKamittyCost(bagTotal + other);
  }, [numBags, costPerBag, otherCost]);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = language === 'ta' ? 'ta-IN' : 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
      recognition.onresult = event => {
        const transcript = event.results[0][0].transcript;
        if (listeningField === 'day') setDay(transcript);
        else if (listeningField === 'work') setWork(transcript);
        else if (listeningField === 'tractorName') setTractorName(transcript);
        else if (listeningField === 'kamittyDescription') setKamittyDescription(transcript);
        setListeningField(null);
      };
      recognitionRef.current = recognition;
    }
  }, [language, listeningField]);

  const startListening = (field) => {
    if (recognitionRef.current) {
      setListeningField(field);
      recognitionRef.current.start();
    } else {
      alert('Voice input not supported in this browser.');
    }
  };

  const handleSegmentChange = (index, key, value) => {
    const updated = [...timeSegments];
    updated[index][key] = value;
    setTimeSegments(updated);
  };

  const addTimeSegment = () => {
    setTimeSegments([...timeSegments, { period: 'Morning', hours: '' }]);
  };

  const removeTimeSegment = (index) => {
    const updated = [...timeSegments];
    updated.splice(index, 1);
    setTimeSegments(updated);
  };

  const handleAddEntry = () => {
    if (!date || !day || !work || !tractorName || timeSegments.some(s => !s.hours) || !rate) {
      alert(t('Please fill in all fields.', 'அனைத்து புலங்களும் நிரப்பவும்.'));
      return;
    }

    const totalHours = timeSegments.reduce((acc, s) => acc + parseFloat(s.hours || 0), 0);
    const total = totalHours * parseFloat(rate);

    const newEntry = {
      date,
      day,
      work,
      tractorName,
      timeSegments,
      totalHours: totalHours.toFixed(2),
      rate: parseFloat(rate),
      total: total.toFixed(2),
      moneyGiven
    };

    if (editingIndex !== null) {
      const updated = [...entries];
      updated[editingIndex] = newEntry;
      setEntries(updated);
      setEditingIndex(null);
    } else {
      setEntries([...entries, newEntry]);
    }

    setDate('');
    setDay('');
    setWork('');
    setTractorName('');
    setTimeSegments([{ period: 'Morning', hours: '' }]);
    setRate('');
    setMoneyGiven('Okay');
  };

  // New handler for adding Kamitty entries
  const handleAddKamittyEntry = () => {
    if (!kamittyDate || (!numBags && !otherCost)) {
      alert(t('Please fill in date and at least one cost field.', 'தேதி மற்றும் குறைந்தது ஒரு செலவு புலத்தை நிரப்பவும்.'));
      return;
    }

    const newKamittyEntry = {
      date: kamittyDate,
      description: kamittyDescription || t('Kamitty Entry', 'கமிட்டி பதிவு'),
      numBags: numBags || '0',
      costPerBag: costPerBag || '0',
      otherCost: otherCost || '0',
      totalKamitty: kamittyCost.toFixed(2)
    };

    setKamittyEntries([...kamittyEntries, newKamittyEntry]);

    // Clear Kamitty form
    setKamittyDate('');
    setKamittyDescription('');
    setNumBags('');
    setCostPerBag('');
    setOtherCost('');
    setKamittyCost(0);
  };

  const handleEdit = (index) => {
    const entry = entries[index];
    setDate(entry.date);
    setDay(entry.day);
    setWork(entry.work);
    setTractorName(entry.tractorName);
    setTimeSegments(entry.timeSegments);
    setRate(entry.rate);
    setMoneyGiven(entry.moneyGiven);
    setEditingIndex(index);
  };

  const deleteEntry = (index) => {
    const updated = entries.filter((_, i) => i !== index);
    setEntries(updated);
    if (editingIndex === index) setEditingIndex(null);
  };

  const deleteKamittyEntry = (index) => {
    const updated = kamittyEntries.filter((_, i) => i !== index);
    setKamittyEntries(updated);
  };

  const toggleMoneyGiven = (index) => {
    const updated = [...entries];
    updated[index].moneyGiven = updated[index].moneyGiven === 'Okay' ? 'Not' : 'Okay';
    setEntries(updated);
  };

  const handleExportCSV = () => {
    if (entries.length === 0 && kamittyEntries.length === 0) {
      alert(t('No entries to export.', 'ஏதாவது பதிவுகள் இல்லை.'));
      return;
    }
    
    let csvContent = '';
    
    // Tractor entries
    if (entries.length > 0) {
      const tractorHeader = ['Type', 'Date', 'Day', 'Work', 'Tractor', 'Time Segments', 'Total Hours', 'Rate/hr (₹)', 'Total (₹)', 'Money Given'];
      const tractorRows = entries.map(entry => [
        'Tractor',
        entry.date,
        entry.day,
        entry.work,
        entry.tractorName,
        entry.timeSegments.map(s => `${s.period}: ${s.hours}h`).join(' | '),
        entry.totalHours,
        entry.rate,
        entry.total,
        entry.moneyGiven
      ]);
      csvContent += [tractorHeader, ...tractorRows].map(e => e.join(",")).join("\n");
    }
    
    // Kamitty entries
    if (kamittyEntries.length > 0) {
      if (csvContent) csvContent += "\n\n";
      const kamittyHeader = ['Type', 'Date', 'Description', 'Number of Bags', 'Cost per Bag', 'Other Cost', 'Total Kamitty Cost'];
      const kamittyRows = kamittyEntries.map(entry => [
        'Kamitty',
        entry.date,
        entry.description,
        entry.numBags,
        entry.costPerBag,
        entry.otherCost,
        entry.totalKamitty
      ]);
      csvContent += [kamittyHeader, ...kamittyRows].map(e => e.join(",")).join("\n");
    }

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "tractor_kamitty_entries.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const totalTractorCost = entries.reduce((acc, curr) => acc + parseFloat(curr.total), 0);
  const totalKamittyCost = kamittyEntries.reduce((acc, curr) => acc + parseFloat(curr.totalKamitty), 0);
  const grandTotal = totalTractorCost + totalKamittyCost;

  return (
    <div className="tracker-container">
      <div className="language-toggle">
        <button onClick={() => setLanguage('en')}>English</button>
        <button onClick={() => setLanguage('ta')}>தமிழ்</button>
      </div>

      <h1>🚜 {t('Tractor Tracker', 'டிராக்டர் ட்ராக்கர்')}</h1>

      {/* Tractor Entry Form */}
      <div className="form-container">
        <h2>{t('Tractor Entry', 'டிராக்டர் பதிவு')}</h2>
        <label>{t('Date:', 'தேதி:')} <input type="date" value={date} onChange={e => setDate(e.target.value)} /></label>
        <label>{t('Day:', 'நாள்:')} <input type="text" value={day} onChange={e => setDay(e.target.value)} /> <button type="button" onClick={() => startListening('day')}>🎤</button></label>
        <label>{t('Work Name:', 'பணியின் பெயர்:')} <input type="text" value={work} onChange={e => setWork(e.target.value)} /> <button type="button" onClick={() => startListening('work')}>🎤</button></label>
        <label>{t('Tractor Name:', 'டிராக்டர் பெயர்:')} <input type="text" value={tractorName} onChange={e => setTractorName(e.target.value)} /> <button type="button" onClick={() => startListening('tractorName')}>🎤</button></label>

        <div className="time-segment-group">
          <label>{t('Time Segments (e.g. Morning, Evening):', 'நேரம் பிரிவுகள்:')}</label>
          {timeSegments.map((segment, index) => (
            <div key={index} className="segment-row">
              <select value={segment.period} onChange={e => handleSegmentChange(index, 'period', e.target.value)}>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
                <option>Night</option>
              </select>
              <input type="number" placeholder={t('Hours', 'மணி')} value={segment.hours} onChange={e => handleSegmentChange(index, 'hours', e.target.value)} />
              {index > 0 && <button onClick={() => removeTimeSegment(index)}>➖</button>}
            </div>
          ))}
          <button onClick={addTimeSegment}>➕ {t('Add Time Slot', 'நேரம் சேர்க்க')}</button>
        </div>

        <label>{t('Price per Hour (₹):', 'ஒருமணி விலை (₹):')} <input type="number" value={rate} onChange={e => setRate(e.target.value)} /></label>
        <label>{t('Money Given?', 'பணம் கொடுக்கப்பட்டது?')} <select value={moneyGiven} onChange={e => setMoneyGiven(e.target.value)}><option value="Okay">{t('Okay', 'சரி')}</option><option value="Not">{t('Not', 'இல்லை')}</option></select></label>

        <button className="add-btn" onClick={handleAddEntry}>{editingIndex !== null ? t('Update Entry', 'பதிவை புதுப்பிக்க') : t('➕ Add Tractor Entry', 'டிராக்டர் பதிவை சேர்க்க')}</button>
      </div>

      {/* Separate Kamitty Entry Form */}
      <div className="form-container kamitty-form">
        <h2>🧾 {t('Kamitty Entry', 'கமிட்டி பதிவு')}</h2>
        <label>{t('Date:', 'தேதி:')} <input type="date" value={kamittyDate} onChange={e => setKamittyDate(e.target.value)} /></label>
        <label>{t('Description:', 'விவரம்:')} <input type="text" value={kamittyDescription} onChange={e => setKamittyDescription(e.target.value)} placeholder={t('Optional description', 'விருப்ப விவரம்')} /> <button type="button" onClick={() => startListening('kamittyDescription')}>🎤</button></label>
        
        <div className="kamitty-section">
          <label>{t('Number of Bags', 'பைகளின் எண்ணிக்கை')}: <input type="number" value={numBags} onChange={e => setNumBags(e.target.value)} /></label>
          <label>{t('Cost per Bag (₹)', 'ஒரு பையின் விலை (₹)')}: <input type="number" value={costPerBag} onChange={e => setCostPerBag(e.target.value)} /></label>
          <label>{t('Other Cost (₹)', 'பிற செலவுகள் (₹)')}: <input type="number" value={otherCost} onChange={e => setOtherCost(e.target.value)} /></label>
          <p className="kamitty-total">{t('Total Kamitty Cost', 'மொத்த கமிட்டி செலவு')}: ₹{kamittyCost.toFixed(2)}</p>
        </div>

        <button className="add-btn kamitty-add-btn" onClick={handleAddKamittyEntry}>➕ {t('Add Kamitty Entry', 'கமிட்டி பதிவை சேர்க்க')}</button>
      </div>

      <div className="export-container">
        <button className="export-btn" onClick={handleExportCSV}>{t('Export CSV', 'CSV ஏற்றி')}</button>
      </div>

      {/* Tractor Entries Table */}
      <h2>{t('Tractor Entries', 'டிராக்டர் பதிவுகள்')}</h2>
      {entries.length === 0 ? (
        <p>{t('No tractor entries yet.', 'ஏதாவது டிராக்டர் பதிவுகள் இல்லை.')}</p>
      ) : (
        <table className="entry-table">
          <thead>
            <tr>
              <th>{t('Date', 'தேதி')}</th>
              <th>{t('Day', 'நாள்')}</th>
              <th>{t('Work', 'பணி')}</th>
              <th>{t('Tractor', 'டிராக்டர்')}</th>
              <th>{t('Time Slots', 'நேரங்கள்')}</th>
              <th>{t('Hours', 'மணி')}</th>
              <th>{t('Rate/hr (₹)', 'ஒருமணி (₹)')}</th>
              <th>{t('Total (₹)', 'மொத்தம் (₹)')}</th>
              <th>{t('Money', 'பணம்')}</th>
              <th>{t('Actions', 'நடவடிக்கைகள்')}</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, idx) => (
              <tr key={idx} className={entry.moneyGiven === 'Okay' ? 'row-okay' : 'row-not'}>
                <td>{entry.date}</td>
                <td>{entry.day}</td>
                <td className="underline">{entry.work}</td>
                <td>{entry.tractorName}</td>
                <td>{entry.timeSegments.map(s => `${s.period}: ${s.hours}h`).join(', ')}</td>
                <td>{entry.totalHours}</td>
                <td>{entry.rate}</td>
                <td>{entry.total}</td>
                <td>
                  <button onClick={() => toggleMoneyGiven(idx)} className={`money-toggle-btn ${entry.moneyGiven === 'Okay' ? 'okay' : 'not'}`}>{entry.moneyGiven}</button>
                </td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(idx)}>✏️</button>
                  <button className="delete-btn" onClick={() => deleteEntry(idx)}>🗑</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Kamitty Entries Table */}
      <h2>{t('Kamitty Entries', 'கமிட்டி பதிவுகள்')}</h2>
      {kamittyEntries.length === 0 ? (
        <p>{t('No kamitty entries yet.', 'ஏதாவது கமிட்டி பதிவுகள் இல்லை.')}</p>
      ) : (
        <table className="entry-table">
          <thead>
            <tr>
              <th>{t('Date', 'தேதி')}</th>
              <th>{t('Description', 'விவரம்')}</th>
              <th>{t('Bags', 'பைகள்')}</th>
              <th>{t('Cost/Bag (₹)', 'பை/விலை (₹)')}</th>
              <th>{t('Other Cost (₹)', 'பிற செலவு (₹)')}</th>
              <th>{t('Total (₹)', 'மொத்தம் (₹)')}</th>
              <th>{t('Actions', 'நடவடிக்கைகள்')}</th>
            </tr>
          </thead>
          <tbody>
            {kamittyEntries.map((entry, idx) => (
              <tr key={idx}>
                <td>{entry.date}</td>
                <td>{entry.description}</td>
                <td>{entry.numBags}</td>
                <td>{entry.costPerBag}</td>
                <td>{entry.otherCost}</td>
                <td>{entry.totalKamitty}</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteKamittyEntry(idx)}>🗑</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="total-summary">
        <h3>{t('Summary', 'சுருkkam')}</h3>
        <p>{t('Total Tractor Cost:', 'மொத்த டிராக்டர் செலவு:')} ₹{totalTractorCost.toFixed(2)}</p>
        <p>{t('Total Kamitty Cost:', 'மொத்த கமிட்டி செலவு:')} ₹{totalKamittyCost.toFixed(2)}</p>
        <h3 className="total-cost">{t('Grand Total:', 'மொத்த செலவு:')} ₹{grandTotal.toFixed(2)}</h3>
      </div>

      <button className="back-btn" onClick={() => navigate(-1)}>{t('🔙 Go Back', 'பின்செல்')}</button>
    </div>
  );
}

export default Tractor;

