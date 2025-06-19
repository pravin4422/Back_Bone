import React, { useState, useEffect } from 'react';
import '../css/FarmerDetails.css';
import jsPDF from 'jspdf';

function FarmerDetails() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    experience: '',
    contactName: '',
    phone: '',
    totalArea: '',
    lands: [{ landName: '', landSize: '', workers: '' }],
  });

  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [pdf, setPdf] = useState(null);
  const [pdfName, setPdfName] = useState('');

  // Load data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('farmerData');
    const savedImages = JSON.parse(localStorage.getItem('farmerImages'));
    const savedPdf = localStorage.getItem('farmerPdf');
    const savedPdfName = localStorage.getItem('farmerPdfName');

    if (savedData) setFormData(JSON.parse(savedData));
    if (savedImages) setImageURLs(savedImages);
    if (savedPdf && savedPdfName) {
      setPdf(savedPdf);
      setPdfName(savedPdfName);
    }
  }, []);

  const handleInputChange = (e, index, field) => {
    if (field) {
      const updatedLands = [...formData.lands];
      updatedLands[index][field] = e.target.value;
      setFormData({ ...formData, lands: updatedLands });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleAddLand = () => {
    setFormData({
      ...formData,
      lands: [...formData.lands, { landName: '', landSize: '', workers: '' }],
    });
  };

  const handleDeleteLand = (index) => {
    const updatedLands = [...formData.lands];
    updatedLands.splice(index, 1);
    setFormData({ ...formData, lands: updatedLands });
  };

  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    const base64s = await Promise.all(files.map(fileToBase64));
    localStorage.setItem('farmerImages', JSON.stringify(base64s));
    setImages(files);
    setImageURLs(base64s);
  };

  const handlePdfUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await fileToBase64(file);
    localStorage.setItem('farmerPdf', base64);
    localStorage.setItem('farmerPdfName', file.name);
    setPdf(base64);
    setPdfName(file.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('farmerData', JSON.stringify(formData));
    alert('✅ Farmer data saved to localStorage!');
  };

  const handleReset = () => {
    localStorage.clear();
    setFormData({
      name: '',
      age: '',
      experience: '',
      contactName: '',
      phone: '',
      totalArea: '',
      lands: [{ landName: '', landSize: '', workers: '' }],
    });
    setImages([]);
    setImageURLs([]);
    setPdf(null);
    setPdfName('');
  };

  // Download farmer details PDF (without images and uploaded PDF)
  const handleDownloadDetailsPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Farmer Details', 14, 20);

    doc.setFontSize(12);
    doc.text(`Name: ${formData.name}`, 14, 30);
    doc.text(`Age: ${formData.age}`, 14, 38);
    doc.text(`Experience: ${formData.experience} years`, 14, 46);
    doc.text(`Contact Name: ${formData.contactName}`, 14, 54);
    doc.text(`Phone Number: ${formData.phone}`, 14, 62);
    doc.text(`Total Area: ${formData.totalArea} acres`, 14, 70);

    // Manual table creation instead of autoTable
    let yPosition = 85;
    doc.setFontSize(14);
    doc.text('Land Details:', 14, yPosition);
    
    yPosition += 10;
    doc.setFontSize(10);
    
    // Table headers
    doc.text('Land Name', 14, yPosition);
    doc.text('Size (acres)', 80, yPosition);
    doc.text('Workers', 140, yPosition);
    
    // Draw header underline
    doc.line(14, yPosition + 2, 180, yPosition + 2);
    yPosition += 8;
    
    // Table data
    formData.lands.forEach((land, index) => {
      if (yPosition > 270) { // Check if we need a new page
        doc.addPage();
        yPosition = 20;
      }
      
      doc.text(land.landName || 'N/A', 14, yPosition);
      doc.text(land.landSize || 'N/A', 80, yPosition);
      doc.text(land.workers || 'N/A', 140, yPosition);
      yPosition += 8;
    });

    doc.save('Farmer_Details.pdf');
  };

  // Download all images as a ZIP file
  const handleDownloadImages = () => {
    if (imageURLs.length === 0) {
      alert('No images to download!');
      return;
    }

    // Create a simple method to download images individually
    imageURLs.forEach((imageUrl, index) => {
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = `farmer_image_${index + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  // Download the uploaded PDF
  const handleDownloadUploadedPDF = () => {
    if (!pdf) {
      alert('No PDF file uploaded!');
      return;
    }

    const link = document.createElement('a');
    link.href = pdf;
    link.download = pdfName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Download everything as separate files
  const handleDownloadAll = () => {
    handleDownloadDetailsPDF();
    
    setTimeout(() => {
      if (imageURLs.length > 0) {
        handleDownloadImages();
      }
    }, 500);
    
    setTimeout(() => {
      if (pdf) {
        handleDownloadUploadedPDF();
      }
    }, 1000);
  };

  return (
    <div className="farmer-container">
      <h2>Farmer Details</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />

        <label>Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleInputChange} required />

        <label>Years of Experience:</label>
        <input type="number" name="experience" value={formData.experience} onChange={handleInputChange} required />

        <label>Important Contact Name:</label>
        <input type="text" name="contactName" value={formData.contactName} onChange={handleInputChange} />

        <label>Phone Number:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />

        <label>Total Area (acres):</label>
        <input type="text" name="totalArea" value={formData.totalArea} onChange={handleInputChange} />

        <div className="lands-section">
          <h3>Land Splits</h3>
          {formData.lands.map((land, index) => (
            <div key={index} className="land-entry">
              <input
                type="text"
                placeholder="Land Name"
                value={land.landName}
                onChange={(e) => handleInputChange(e, index, 'landName')}
              />
              <input
                type="text"
                placeholder="Land Size"
                value={land.landSize}
                onChange={(e) => handleInputChange(e, index, 'landSize')}
              />
              <input
                type="number"
                placeholder="Workers"
                value={land.workers}
                onChange={(e) => handleInputChange(e, index, 'workers')}
              />
              <button type="button" className="delete-btn" onClick={() => handleDeleteLand(index)}>Delete</button>
            </div>
          ))}
          <button type="button" className="add-land-btn" onClick={handleAddLand}>Add More Land</button>
        </div>

        <label>Upload Images:</label>
        <input type="file" accept="image/*" multiple onChange={handleImageUpload} />

        <label>Upload PDF:</label>
        <input type="file" accept="application/pdf" onChange={handlePdfUpload} />

        <button type="submit" className="submit-btn">Save Farmer Data</button>
        <button type="button" className="reset-btn" onClick={handleReset}>Reset All</button>
      </form>

      {/* Download Buttons Section */}
      <div className="download-section">
        <h3>Download Options</h3>
        <div className="download-buttons">
          <button type="button" className="pdf-btn" onClick={handleDownloadDetailsPDF}>
            📄 Download Details (PDF)
          </button>
          
          <button 
            type="button" 
            className="images-btn" 
            onClick={handleDownloadImages}
            disabled={imageURLs.length === 0}
          >
            🖼️ Download Images ({imageURLs.length})
          </button>
          
          <button 
            type="button" 
            className="uploaded-pdf-btn" 
            onClick={handleDownloadUploadedPDF}
            disabled={!pdf}
          >
            📎 Download Uploaded PDF
          </button>
          
          <button type="button" className="download-all-btn" onClick={handleDownloadAll}>
            📦 Download All Files
          </button>
        </div>
      </div>

      <div className="preview-section">
        <h3>Saved Details</h3>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Age:</strong> {formData.age}</p>
        <p><strong>Experience:</strong> {formData.experience} years</p>
        <p><strong>Contact Name:</strong> {formData.contactName}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>Total Area:</strong> {formData.totalArea} acres</p>

        <h4>Land Splits</h4>
        <ul>
          {formData.lands.map((land, index) => (
            <li key={index}>
              <strong>{land.landName}</strong> – {land.landSize} acres – {land.workers} workers
            </li>
          ))}
        </ul>

        <h4>Uploaded Images</h4>
        <div className="image-preview">
          {imageURLs.map((img, index) => (
            <img key={index} src={img} alt={`img-${index}`} />
          ))}
        </div>

        <h4>Uploaded PDF</h4>
        {pdf && <a href={pdf} target="_blank" rel="noreferrer">{pdfName}</a>}
      </div>
    </div>
  );
}

export default FarmerDetails;