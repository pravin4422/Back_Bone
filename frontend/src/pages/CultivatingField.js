import React, { useState, useEffect } from 'react';
import '../css/CultivatingField.css';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';

function CultivatingField() {
  const [language, setLanguage] = useState('en');
  const t = (en, ta) => (language === 'ta' ? ta : en);

  const [activities, setActivities] = useState([]);
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [date, setDate] = useState('');
  const [driver, setDriver] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerAddress, setOwnerAddress] = useState('');
  const [ownerPhone1, setOwnerPhone1] = useState('');
  const [ownerPhone2, setOwnerPhone2] = useState('');
  const [timeSegments, setTimeSegments] = useState([{ period: 'Morning', hours: '' }]);
  const [rate, setRate] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 5;

  useEffect(() => {
    const saved = localStorage.getItem('cultivationActivities');
    if (saved) setActivities(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('cultivationActivities', JSON.stringify(activities));
  }, [activities]);

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

  const handleAddActivity = () => {
    if (!title || !note || !date || !rate || timeSegments.some(seg => !seg.hours)) {
      alert(t('Please fill in all required fields', 'தயவு செய்து அனைத்து புலங்களையும் நிரப்பவும்'));
      return;
    }

    const totalHours = timeSegments.reduce((acc, seg) => acc + parseFloat(seg.hours || 0), 0);
    const total = totalHours * parseFloat(rate);

    const newEntry = {
      title,
      note,
      date,
      driver,
      owner: { name: ownerName, address: ownerAddress, phone1: ownerPhone1, phone2: ownerPhone2 },
      timeSegments,
      rate: parseFloat(rate),
      totalHours: totalHours.toFixed(2),
      total: total.toFixed(2),
    };

    if (editingIndex !== null) {
      const updated = [...activities];
      updated[editingIndex] = newEntry;
      setActivities(updated);
      setEditingIndex(null);
    } else {
      setActivities([...activities, newEntry]);
    }

    setTitle('');
    setNote('');
    setDate('');
    setDriver('');
    setOwnerName('');
    setOwnerAddress('');
    setOwnerPhone1('');
    setOwnerPhone2('');
    setTimeSegments([{ period: 'Morning', hours: '' }]);
    setRate('');
  };

  const handleEdit = (index) => {
    const entry = activities[index];
    setTitle(entry.title);
    setNote(entry.note);
    setDate(entry.date);
    setDriver(entry.driver);
    setOwnerName(entry.owner.name);
    setOwnerAddress(entry.owner.address);
    setOwnerPhone1(entry.owner.phone1);
    setOwnerPhone2(entry.owner.phone2);
    setTimeSegments(entry.timeSegments);
    setRate(entry.rate);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updated = activities.filter((_, i) => i !== index);
    setActivities(updated);
  };

  const handleExportCSV = () => {
    const rows = filteredActivities.map(act => [
      act.date,
      act.title,
      act.note,
      act.driver,
      act.owner.name,
      act.owner.address,
      act.owner.phone1,
      act.owner.phone2,
      act.timeSegments.map(s => `${s.period}: ${s.hours}h`).join(' | '),
      act.totalHours,
      act.rate,
      act.total,
    ]);

    const header = [
      'Date', 'Title', 'Note', 'Driver', 'Owner Name', 'Address', 'Phone 1', 'Phone 2',
      'Time Segments', 'Total Hours', 'Rate/hr', 'Total Cost'
    ];

    const csv = [header, ...rows].map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cultivation_activities.csv';
    a.click();
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    const table = filteredActivities.map(act => [
      act.date, act.title, act.driver, act.owner.name,
      act.totalHours, act.rate, act.total
    ]);
    autoTable(doc, {
      head: [['Date', 'Title', 'Driver', 'Owner', 'Hours', 'Rate/hr', 'Total']],
      body: table,
    });
    doc.save('cultivation_activities.pdf');
  };

  const handleExportExcel = () => {
    const data = filteredActivities.map(act => ({
      Date: act.date,
      Title: act.title,
      Note: act.note,
      Driver: act.driver,
      'Owner Name': act.owner.name,
      Address: act.owner.address,
      'Phone 1': act.owner.phone1,
      'Phone 2': act.owner.phone2,
      'Time Segments': act.timeSegments.map(s => `${s.period}: ${s.hours}h`).join(' | '),
      'Total Hours': act.totalHours,
      'Rate/hr': act.rate,
      'Total Cost': act.total,
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Cultivation');
    XLSX.writeFile(workbook, 'cultivation_activities.xlsx');
  };

  const handlePrint = () => window.print();

  const filteredActivities = activities.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.note.toLowerCase().includes(search.toLowerCase()) ||
    item.driver.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedActivities = filteredActivities.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage);
  const totalPages = Math.ceil(filteredActivities.length / entriesPerPage);

  return (
    <div className="cultivating-container">
      <div style={{ textAlign: 'right' }}>
        <button onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}>
          🌐 {language === 'en' ? 'தமிழில்' : 'In English'}
        </button>
      </div>

      <h1>{t('📋 Cultivating Field - Activity Log', '📋 விவசாய செயல் பதிவேடு')}</h1>

      <div className="form-section">
        <input type="text" placeholder={t("Activity Title", "செயலின் தலைப்பு")} value={title} onChange={e => setTitle(e.target.value)} />
        <textarea placeholder={t("Activity Notes", "செயலுக்கான குறிப்புகள்")} value={note} onChange={e => setNote(e.target.value)} />
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        <input type="text" placeholder={t("Driver Name", "டிரைவர் பெயர்")} value={driver} onChange={e => setDriver(e.target.value)} />
        <input type="text" placeholder={t("Owner Name", "உரிமையாளர் பெயர்")} value={ownerName} onChange={e => setOwnerName(e.target.value)} />
        <input type="text" placeholder={t("Owner Address", "முகவரி")} value={ownerAddress} onChange={e => setOwnerAddress(e.target.value)} />
        <input type="text" placeholder={t("Owner Phone 1", "தொலைபேசி எண் 1")} value={ownerPhone1} onChange={e => setOwnerPhone1(e.target.value)} />
        <input type="text" placeholder={t("Owner Phone 2", "தொலைபேசி எண் 2")} value={ownerPhone2} onChange={e => setOwnerPhone2(e.target.value)} />

        <label>{t("Time Segments", "நேர பகுதிகள்")}:</label>
        {timeSegments.map((seg, idx) => (
          <div key={idx} className="segment-row">
            <select value={seg.period} onChange={e => handleSegmentChange(idx, 'period', e.target.value)}>
              <option value="Morning">{t("Morning", "காலை")}</option>
              <option value="Afternoon">{t("Afternoon", "மதியம்")}</option>
              <option value="Evening">{t("Evening", "மாலை")}</option>
              <option value="Night">{t("Night", "இரவு")}</option>
            </select>
            <input type="number" placeholder={t("Hours", "மணிநேரம்")} value={seg.hours} onChange={e => handleSegmentChange(idx, 'hours', e.target.value)} />
            {idx > 0 && <button onClick={() => removeTimeSegment(idx)}>➖</button>}
          </div>
        ))}
        <button onClick={addTimeSegment}>➕ {t("Add Time Slot", "நேர இடைவெளியை சேர்")}</button>

        <input type="number" placeholder={t("Price per hour", "மணிக்கு விலை")} value={rate} onChange={e => setRate(e.target.value)} />
        <button onClick={handleAddActivity}>{editingIndex !== null ? t("Update Activity", "செயலை புதுப்பி") : t("Add Activity", "செயலை சேர்")}</button>
      </div>

      <div className="actions">
        <input type="text" placeholder={t("Search...", "தேடு...")} value={search} onChange={e => setSearch(e.target.value)} />
        <button onClick={handleExportCSV}>{t("Export CSV", "CSV ஏற்றுமதி")}</button>
        <button onClick={handleExportExcel}>{t("Export Excel", "Excel ஏற்றுமதி")}</button>
        <button onClick={handleExportPDF}>{t("Export PDF", "PDF ஏற்றுமதி")}</button>
        <button onClick={handlePrint}>🖨️ {t("Print", "அச்சிடு")}</button>
      </div>

      <div className="activity-list">
        {paginatedActivities.map((item, index) => (
          <div key={index} className="activity-card">
            <h3>{item.title} ({item.date})</h3>
            <p>{item.note}</p>
            <p>👷 {t("Driver", "டிரைவர்")}: {item.driver}</p>
            <p>👤 {t("Owner", "உரிமையாளர்")}: {item.owner.name} | 📞 {item.owner.phone1}, {item.owner.phone2}</p>
            <p>📍 {t("Address", "முகவரி")}: {item.owner.address}</p>
            <p>⏱️ {t("Time", "நேரம்")}: {item.timeSegments.map(s => `${t(s.period, translatePeriod(s.period))}: ${s.hours}h`).join(', ')}</p>
            <p>💰 {t("Hours", "மணிநேரம்")}: {item.totalHours} | {t("Rate", "விலை")}: ₹{item.rate} | {t("Total", "மொத்தம்")}: ₹{item.total}</p>
            <button onClick={() => handleEdit(index)}>✏️ {t("Edit", "தொகு")}</button>
            <button onClick={() => handleDelete(index)}>🗑 {t("Delete", "நீக்கு")}</button>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} onClick={() => setCurrentPage(i + 1)} className={currentPage === i + 1 ? 'active' : ''}>
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  function translatePeriod(period) {
    switch (period) {
      case 'Morning': return 'காலை';
      case 'Afternoon': return 'மதியம்';
      case 'Evening': return 'மாலை';
      case 'Night': return 'இரவு';
      default: return period;
    }
  }
}

export default CultivatingField;
