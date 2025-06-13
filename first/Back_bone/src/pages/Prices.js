import React, { useEffect, useState } from 'react';
import '../css/Prices.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your actual key
const API_URL = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${API_KEY}&format=json&limit=100`;

function Prices() {
  const [apiPrices, setApiPrices] = useState([]);
  const [manualPrices, setManualPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    commodity: '',
    market: '',
    state: '',
    min_price: '',
    max_price: '',
    arrival_date: ''
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [filterMinPrice, setFilterMinPrice] = useState('');
  const [filterMaxPrice, setFilterMaxPrice] = useState('');

  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  useEffect(() => {
    const storedManual = localStorage.getItem('manualPrices');
    if (storedManual) {
      setManualPrices(JSON.parse(storedManual));
    }
  }, []);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setApiPrices(data.records || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching prices:", err);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (formData.commodity && formData.market) {
      const newList = [...manualPrices, { ...formData }];
      setManualPrices(newList);
      localStorage.setItem('manualPrices', JSON.stringify(newList));
      setFormData({
        commodity: '',
        market: '',
        state: '',
        min_price: '',
        max_price: '',
        arrival_date: ''
      });
    }
  };

  const handleDelete = (index) => {
    const updated = [...manualPrices];
    updated.splice(index, 1);
    setManualPrices(updated);
    localStorage.setItem('manualPrices', JSON.stringify(updated));
  };

  const formatDateWithDay = (dateStr) => {
    if (!dateStr) return '—';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const combinedPrices = [...manualPrices, ...apiPrices].filter(item => {
    const matchQuery =
      item.commodity?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.state?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.market?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchDate = !filterDate || item.arrival_date === filterDate;
    const matchMinPrice = !filterMinPrice || parseFloat(item.min_price) >= parseFloat(filterMinPrice);
    const matchMaxPrice = !filterMaxPrice || parseFloat(item.max_price) <= parseFloat(filterMaxPrice);

    return matchQuery && matchDate && matchMinPrice && matchMaxPrice;
  });

  const todayPrices = combinedPrices.filter(item => item.arrival_date === today);

  const handleExportCSV = () => {
    const csvHeader = ['Commodity', 'Market', 'State', 'Min Price', 'Max Price', 'Date', 'Is Today'];
    const csvRows = combinedPrices.map(row => [
      row.commodity,
      row.market,
      row.state,
      row.min_price,
      row.max_price,
      row.arrival_date || '—',
      row.arrival_date === today ? 'Yes' : 'No'
    ]);
    const csvContent =
      [csvHeader, ...csvRows].map(e => e.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'market_prices.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '', 'width=800,height=600');
    const tableHtml = document.getElementById('price-table').outerHTML;
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write(tableHtml);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  const chartData = [];
  const priceMap = {};

  combinedPrices.forEach(item => {
    const key = item.commodity;
    const avg = (parseFloat(item.min_price) + parseFloat(item.max_price)) / 2 || 0;
    if (!priceMap[key]) {
      priceMap[key] = { commodity: key, total: avg, count: 1 };
    } else {
      priceMap[key].total += avg;
      priceMap[key].count += 1;
    }
  });

  Object.values(priceMap).forEach(entry => {
    chartData.push({
      commodity: entry.commodity,
      avgPrice: (entry.total / entry.count).toFixed(2)
    });
  });

  return (
    <div className="prices-container">
      <h2>Market Prices</h2>
      <p>Today: {formatDateWithDay(today)}</p>

      <div className="filters">
        <input type="text" placeholder="Search Commodity/Market/State" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <input type="date" value={filterDate} onChange={(e) => setFilterDate(e.target.value)} />
        <input type="number" placeholder="Min Price" value={filterMinPrice} onChange={(e) => setFilterMinPrice(e.target.value)} />
        <input type="number" placeholder="Max Price" value={filterMaxPrice} onChange={(e) => setFilterMaxPrice(e.target.value)} />
      </div>

      <div className="button-group">
        <button onClick={handleExportCSV}>Export to CSV</button>
        <button onClick={handlePrint}>Print</button>
      </div>

      {loading ? <p>Loading...</p> : (
        <>
          <h3>Today's Prices</h3>
          <table>
            <thead>
              <tr>
                <th>Commodity</th>
                <th>Market</th>
                <th>State</th>
                <th>Min Price</th>
                <th>Max Price</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {todayPrices.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.commodity}</td>
                  <td>{item.market}</td>
                  <td>{item.state}</td>
                  <td>{item.min_price}</td>
                  <td>{item.max_price}</td>
                  <td>{formatDateWithDay(item.arrival_date)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <table id="price-table">
            <thead>
              <tr>
                <th>Commodity</th>
                <th>Market</th>
                <th>State</th>
                <th>Min Price</th>
                <th>Max Price</th>
                <th>Date</th>
                <th>Is Today?</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {combinedPrices.map((item, idx) => {
                const isToday = item.arrival_date === today;
                return (
                  <tr key={idx} style={isToday ? { backgroundColor: '#e0ffe0' } : {}}>
                    <td>{item.commodity}</td>
                    <td>{item.market}</td>
                    <td>{item.state}</td>
                    <td>{item.min_price}</td>
                    <td>{item.max_price}</td>
                    <td>{formatDateWithDay(item.arrival_date)}</td>
                    <td>{isToday ? '✅ Yes' : '❌ No'}</td>
                    <td>
                      {manualPrices.includes(item) && (
                        <button onClick={() => handleDelete(manualPrices.indexOf(item))}>Delete</button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="manual-form">
            <h3>Add New Price</h3>
            <form onSubmit={handleAdd}>
              <input type="text" name="commodity" placeholder="Commodity" value={formData.commodity} onChange={handleChange} required />
              <input type="text" name="market" placeholder="Market" value={formData.market} onChange={handleChange} required />
              <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} />
              <input type="number" name="min_price" placeholder="Min Price" value={formData.min_price} onChange={handleChange} />
              <input type="number" name="max_price" placeholder="Max Price" value={formData.max_price} onChange={handleChange} />
              <input type="date" name="arrival_date" value={formData.arrival_date} onChange={handleChange} required />
              <button type="submit">Add</button>
            </form>
          </div>

          <h3>Average Price by Commodity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="commodity" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="avgPrice" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
}

export default Prices;