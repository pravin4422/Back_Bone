import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import '../css/Prices.css';

function Prices() {
  const [apiPrices, setApiPrices] = useState([]);
  const [userPrices, setUserPrices] = useState([]);
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

  const today = new Date().toISOString().split('T')[0];

  // Helper function to normalize date to YYYY-MM-DD format
  const normalizeDate = (dateStr) => {
    if (!dateStr) return null;
    try {
      const date = new Date(dateStr);
      // Check if date is valid
      if (isNaN(date.getTime())) return null;
      return date.toISOString().split('T')[0];
    } catch (error) {
      console.error('Error normalizing date:', dateStr, error);
      return null;
    }
  };

  // Check if a date is today
  const isToday = (dateStr) => {
    const normalizedDate = normalizeDate(dateStr);
    return normalizedDate === today;
  };

  // Fetch user prices from database
  const fetchUserPrices = async () => {
    try {
      console.log('Making API call to fetch user prices');
      const response = await fetch('/api/prices/my-prices', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('API response status:', response.status);

      if (response.ok) {
        const data = await response.json();
        console.log('User prices fetched successfully:', data.length, 'items');
        // Normalize dates when setting user prices
        const normalizedData = data.map(item => ({
          ...item,
          arrival_date: normalizeDate(item.arrival_date) || item.arrival_date
        }));
        setUserPrices(normalizedData);
      } else {
        console.log('API error:', response.status);
        setUserPrices([]);
      }
    } catch (error) {
      console.error('Error fetching user prices:', error);
      setUserPrices([]);
    }
  };

  useEffect(() => {
    // API call to fetch prices would go here
    // For now, just set loading to false
    setTimeout(() => {
      setApiPrices([]);
    }, 1000);
    
    // Fetch user prices from database
    fetchUserPrices().finally(() => setLoading(false));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/prices/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          commodity: formData.commodity,
          market: formData.market,
          state: formData.state,
          min_price: formData.min_price,
          max_price: formData.max_price,
          arrival_date: formData.arrival_date
        })
      });

      if (response.ok) {
        const savedPrice = await response.json();
        // Normalize the date of the newly added price
        const normalizedPrice = {
          ...savedPrice,
          arrival_date: normalizeDate(savedPrice.arrival_date) || savedPrice.arrival_date
        };
        setUserPrices(prev => [...prev, normalizedPrice]);
        setFormData({
          commodity: '',
          market: '',
          state: '',
          min_price: '',
          max_price: '',
          arrival_date: ''
        });
        alert("Price added successfully!");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || 'Failed to add price'}`);
      }
    } catch (error) {
      console.error('Error adding price:', error);
      alert("Network error. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this price entry?")) {
      return;
    }

    try {
      const response = await fetch(`/api/prices/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setUserPrices(prev => prev.filter(p => p._id !== id));
        alert("Price deleted successfully!");
      } else if (response.status === 404) {
        alert("Price entry not found.");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || 'Failed to delete price'}`);
      }
    } catch (error) {
      console.error('Error deleting price:', error);
      alert("Network error. Please try again.");
    }
  };

  const formatDateWithDay = (dateStr) => {
    if (!dateStr) return '—';
    try {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) return '—';
      return date.toLocaleDateString('en-IN', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    } catch (error) {
      console.error('Error formatting date:', dateStr, error);
      return '—';
    }
  };

  const combinedPrices = [...userPrices, ...apiPrices].filter(item => {
    const matchQuery =
      item.commodity?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.state?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.market?.toLowerCase().includes(searchQuery.toLowerCase());

    const normalizedItemDate = normalizeDate(item.arrival_date);
    const normalizedFilterDate = normalizeDate(filterDate);
    
    const matchDate = !filterDate || normalizedItemDate === normalizedFilterDate;
    const matchMinPrice = !filterMinPrice || parseFloat(item.min_price) >= parseFloat(filterMinPrice);
    const matchMaxPrice = !filterMaxPrice || parseFloat(item.max_price) <= parseFloat(filterMaxPrice);

    return matchQuery && matchDate && matchMinPrice && matchMaxPrice;
  });

  // Filter today's prices using the improved isToday function
  const todayPrices = combinedPrices.filter(item => isToday(item.arrival_date));

  const handleExportCSV = () => {
    const csvHeader = ['Commodity', 'Market', 'State', 'Min Price', 'Max Price', 'Date', 'Is Today'];
    const csvRows = combinedPrices.map(row => [
      row.commodity,
      row.market,
      row.state,
      row.min_price,
      row.max_price,
      row.arrival_date || '—',
      isToday(row.arrival_date) ? 'Yes' : 'No'
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
    printWindow.document.write(`
      <html>
        <head>
          <title>Market Prices Report</title>
          <style>
            table { border-collapse: collapse; width: 100%; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
            .today-row { background-color: #e0ffe0; }
          </style>
        </head>
        <body>
          <h1>Market Prices Report</h1>
          ${tableHtml}
        </body>
      </html>
    `);
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
      avgPrice: parseFloat((entry.total / entry.count).toFixed(2))
    });
  });

  return (
    <div className="prices-container">
      <h2>Market Prices Dashboard</h2>
      <p>Today: {formatDateWithDay(today)}</p>

      <div className="filters">
        <input 
          type="text" 
          placeholder="🔍 Search Commodity/Market/State" 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
        <input 
          type="date" 
          value={filterDate} 
          onChange={(e) => setFilterDate(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Min Price (₹)" 
          value={filterMinPrice} 
          onChange={(e) => setFilterMinPrice(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Max Price (₹)" 
          value={filterMaxPrice} 
          onChange={(e) => setFilterMaxPrice(e.target.value)} 
        />
      </div>

      <div className="button-group">
        <button onClick={handleExportCSV}>📊 Export to CSV</button>
        <button onClick={handlePrint}>🖨️ Print Report</button>
      </div>

      {loading ? (
        <p className="loading">Loading market data...</p>
      ) : (
        <>
          <h3>📈 Today's Market Prices ({todayPrices.length} items)</h3>
          {todayPrices.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Commodity</th>
                  <th>Market</th>
                  <th>State</th>
                  <th>Min Price (₹)</th>
                  <th>Max Price (₹)</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {todayPrices.map((item, idx) => (
                  <tr key={idx} className="today-row">
                    <td><strong>{item.commodity}</strong></td>
                    <td>{item.market}</td>
                    <td>{item.state}</td>
                    <td>₹{item.min_price}</td>
                    <td>₹{item.max_price}</td>
                    <td>{formatDateWithDay(item.arrival_date)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="no-data">No prices available for today</p>
          )}

          <h3>📋 All Market Prices</h3>
          <table id="price-table">
            <thead>
              <tr>
                <th>Commodity</th>
                <th>Market</th>
                <th>State</th>
                <th>Min Price (₹)</th>
                <th>Max Price (₹)</th>
                <th>Date</th>
                <th>Today?</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {combinedPrices.length > 0 ? combinedPrices.map((item, idx) => {
                const itemIsToday = isToday(item.arrival_date);
                const isUserPrice = userPrices.some(p => p._id === item._id);
                return (
                  <tr key={item._id || idx} className={itemIsToday ? 'today-row' : ''}>
                    <td><strong>{item.commodity}</strong></td>
                    <td>{item.market}</td>
                    <td>{item.state}</td>
                    <td>₹{item.min_price}</td>
                    <td>₹{item.max_price}</td>
                    <td>{formatDateWithDay(item.arrival_date)}</td>
                    <td>
                      <span className="status-badge">
                        {itemIsToday ? '✅ Yes' : '❌ No'}
                      </span>
                    </td>
                    <td>
                      {isUserPrice && (
                        <button onClick={() => handleDelete(item._id)}>🗑️ Delete</button>
                      )}
                    </td>
                  </tr>
                );
              }) : (
                <tr>
                  <td colSpan="8" className="no-data">No data available</td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="manual-form">
            <h3>➕ Add New Price Entry</h3>
            <form onSubmit={handleAdd}>
              <input 
                type="text" 
                name="commodity" 
                placeholder="Commodity (e.g., Rice, Wheat)" 
                value={formData.commodity} 
                onChange={handleChange} 
                required 
              />
              <input 
                type="text" 
                name="market" 
                placeholder="Market Name" 
                value={formData.market} 
                onChange={handleChange} 
                required 
              />
              <input 
                type="text" 
                name="state" 
                placeholder="State" 
                value={formData.state} 
                onChange={handleChange} 
                required
              />
              <input 
                type="number" 
                name="min_price" 
                placeholder="Minimum Price (₹)" 
                value={formData.min_price} 
                onChange={handleChange} 
                required
                min="0"
                step="0.01"
              />
              <input 
                type="number" 
                name="max_price" 
                placeholder="Maximum Price (₹)" 
                value={formData.max_price} 
                onChange={handleChange} 
                required
                min="0"
                step="0.01"
              />
              <input 
                type="date" 
                name="arrival_date" 
                value={formData.arrival_date} 
                onChange={handleChange} 
                required 
              />
              <button type="submit">
                ➕ Add Price Entry
              </button>
            </form>
          </div>

          {chartData.length > 0 && (
            <div className="chart-container">
              <h3>📊 Average Price by Commodity</h3>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ecf0f1" />
                  <XAxis 
                    dataKey="commodity" 
                    tick={{ fontSize: 12 }}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    label={{ value: 'Price (₹)', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip 
                    formatter={(value) => [`₹${value}`, 'Avg Price']}
                    labelStyle={{ color: '#2c3e50' }}
                    contentStyle={{ 
                      backgroundColor: '#fff', 
                      border: '1px solid #ddd',
                      borderRadius: '6px'
                    }}
                  />
                  <Bar 
                    dataKey="avgPrice" 
                    fill="url(#colorGradient)"
                    radius={[4, 4, 0, 0]}
                  />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3498db" />
                      <stop offset="100%" stopColor="#2980b9" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Prices;