import React, { useState, useEffect } from 'react';
import '../css/AgromedicalProducts.css';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function AgromedicalProducts() {
  const [products, setProducts] = useState([]);
  const [date, setDate] = useState('');
  const [day, setDay] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [cost, setCost] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [filterMonth, setFilterMonth] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('agroProducts');
    if (saved) setProducts(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('agroProducts', JSON.stringify(products));
  }, [products]);

  const resetForm = () => {
    setDate('');
    setDay('');
    setName('');
    setQuantity('');
    setCost('');
    setEditingIndex(null);
  };

  const addProduct = () => {
    if (!date || !day || !name || !quantity || !cost) return;

    const newEntry = {
      date,
      day,
      name,
      quantity: parseFloat(quantity),
      cost: parseFloat(cost),
      total: parseFloat(quantity) * parseFloat(cost),
    };

    if (editingIndex !== null) {
      const updated = [...products];
      updated[editingIndex] = newEntry;
      setProducts(updated);
    } else {
      setProducts([...products, newEntry]);
    }

    resetForm();
  };

  const editProduct = (index) => {
    const p = filteredProducts[index];
    setDate(p.date);
    setDay(p.day);
    setName(p.name);
    setQuantity(p.quantity);
    setCost(p.cost);
    setEditingIndex(index);
  };

  const deleteProduct = (index) => {
    const targetIndex = products.findIndex((p) => p === filteredProducts[index]);
    if (targetIndex !== -1) {
      const updated = [...products];
      updated.splice(targetIndex, 1);
      setProducts(updated);
    }
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredProducts);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'AgroProducts');
    XLSX.writeFile(wb, 'AgromedicalProducts.xlsx');
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text(`Agromedical Products - ${filterMonth || 'All'}`, 14, 15);
    const tableData = filteredProducts.map((p) => [
      p.date,
      p.day,
      p.name,
      p.quantity,
      p.cost,
      p.total,
    ]);
    doc.autoTable({
      head: [['Date', 'Day', 'Product', 'Qty', 'Unit Cost', 'Total']],
      body: tableData,
      startY: 20,
    });
    doc.text(`Printed on: ${new Date().toLocaleDateString()}`, 14, doc.lastAutoTable.finalY + 10);
    doc.text('Signature: __________________', 14, doc.lastAutoTable.finalY + 20);
    doc.save('AgromedicalProducts.pdf');
  };

  const handlePrint = () => {
    const printContent = document.getElementById('print-section');
    const printWindow = window.open('', '', 'width=900,height=700');
    printWindow.document.write(`
      <html>
        <head>
          <title>Print - Agromedical Products</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h2 { text-align: center; margin: 0; }
            table { border-collapse: collapse; width: 100%; margin-top: 20px; }
            th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
            .footer { margin-top: 40px; font-size: 14px; }
          </style>
        </head>
        <body>
          <h2>Agromedical Products - ${filterMonth || 'All Months'}</h2>
          ${printContent.innerHTML}
          <div class="footer">
            Printed on: ${new Date().toLocaleDateString()}<br/>
            Signature: ________________________
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  const filteredProducts = products.filter((p) => {
    if (!filterMonth) return true;
    const month = p.date?.slice(0, 7); // "YYYY-MM"
    return month === filterMonth;
  });

  const totalCost = filteredProducts.reduce((sum, p) => sum + p.total, 0);

  return (
    <div className="agromedical-container">
      <h1>💊 Agromedical Products</h1>

      <div className="form-section">
        <input
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            const d = new Date(e.target.value);
            const dayName = d.toLocaleDateString('en-IN', { weekday: 'long' });
            setDay(dayName);
          }}
        />
        <input type="text" placeholder="Day" value={day} readOnly />
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="number"
          placeholder="Cost per Unit"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
        <button onClick={addProduct}>
          {editingIndex !== null ? 'Update' : 'Add Product'}
        </button>
      </div>

      <div className="filter-bar">
        <input
          type="month"
          value={filterMonth}
          onChange={(e) => setFilterMonth(e.target.value)}
        />
        <button onClick={exportToExcel}>📊 Excel</button>
        <button onClick={exportToPDF}>📄 PDF</button>
        <button onClick={handlePrint}>🖨️ Print</button>
      </div>

      {/* Printable section */}
      <div id="print-section">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Day</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Cost/unit</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.day}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>₹{item.cost}</td>
                <td>₹{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="agromedical-grid">
        {filteredProducts.map((item, index) => (
          <div key={index} className="product-card">
            <p><strong>Date:</strong> {item.date}</p>
            <p><strong>Day:</strong> {item.day}</p>
            <p><strong>Product:</strong> {item.name}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <p><strong>Cost/unit:</strong> ₹{item.cost}</p>
            <p><strong>Total:</strong> ₹{item.total}</p>
            <div className="actions">
              <button onClick={() => editProduct(index)}>✏️ Edit</button>
              <button onClick={() => deleteProduct(index)}>🗑️ Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div className="total-section">
        <h2>Total Cost: ₹{totalCost.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default AgromedicalProducts;
