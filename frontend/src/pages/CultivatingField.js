import React, { useState, useEffect } from 'react';
import '../css/CultivatingField.css';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';

function CultivatingField() {
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
      alert('Please fill in all required fields');
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
      <h1>📋 Cultivating Field - Activity Log</h1>

      <div className="form-section">
        <input type="text" placeholder="Activity Title" value={title} onChange={e => setTitle(e.target.value)} />
        <textarea placeholder="Activity Notes" value={note} onChange={e => setNote(e.target.value)} />
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        <input type="text" placeholder="Driver Name" value={driver} onChange={e => setDriver(e.target.value)} />
        <input type="text" placeholder="Owner Name" value={ownerName} onChange={e => setOwnerName(e.target.value)} />
        <input type="text" placeholder="Owner Address" value={ownerAddress} onChange={e => setOwnerAddress(e.target.value)} />
        <input type="text" placeholder="Owner Phone 1" value={ownerPhone1} onChange={e => setOwnerPhone1(e.target.value)} />
        <input type="text" placeholder="Owner Phone 2" value={ownerPhone2} onChange={e => setOwnerPhone2(e.target.value)} />

        <label>Time Segments:</label>
        {timeSegments.map((seg, idx) => (
          <div key={idx} className="segment-row">
            <select value={seg.period} onChange={e => handleSegmentChange(idx, 'period', e.target.value)}>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
              <option>Night</option>
            </select>
            <input type="number" placeholder="Hours" value={seg.hours} onChange={e => handleSegmentChange(idx, 'hours', e.target.value)} />
            {idx > 0 && <button onClick={() => removeTimeSegment(idx)}>➖</button>}
          </div>
        ))}
        <button onClick={addTimeSegment}>➕ Add Time Slot</button>

        <input type="number" placeholder="Price per hour" value={rate} onChange={e => setRate(e.target.value)} />
        <button onClick={handleAddActivity}>{editingIndex !== null ? 'Update Activity' : 'Add Activity'}</button>
      </div>

      <div className="actions">
        <input type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} />
        <button onClick={handleExportCSV}>Export CSV</button>
        <button onClick={handleExportExcel}>Export Excel</button>
        <button onClick={handleExportPDF}>Export PDF</button>
        <button onClick={handlePrint}>🖨️ Print</button>
      </div>

      <div className="activity-list">
        {paginatedActivities.map((item, index) => (
          <div key={index} className="activity-card">
            <h3>{item.title} ({item.date})</h3>
            <p>{item.note}</p>
            <p>👷 Driver: {item.driver}</p>
            <p>👤 Owner: {item.owner.name} | 📞 {item.owner.phone1}, {item.owner.phone2}</p>
            <p>📍 Address: {item.owner.address}</p>
            <p>⏱️ Time: {item.timeSegments.map(s => `${s.period}: ${s.hours}h`).join(', ')}</p>
            <p>💰 Hours: {item.totalHours} | Rate: ₹{item.rate} | Total: ₹{item.total}</p>
            <button onClick={() => handleEdit(index)}>✏️ Edit</button>
            <button onClick={() => handleDelete(index)}>🗑 Delete</button>
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
}

export default CultivatingField;
