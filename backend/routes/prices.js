const express = require('express');
const router = express.Router();
const Price = require('../models/Price');
require('dotenv').config();

// ✅ GET /api/prices/my-prices - Get all prices (no auth required)
router.get('/my-prices', async (req, res) => {
  try {
    const prices = await Price.find({}).sort({ createdAt: -1 });
    res.json(prices);
  } catch (err) {
    console.error('Error fetching prices:', err);
    res.status(500).json({ error: 'Failed to fetch prices' });
  }
});

// ✅ POST /api/prices/add - Add new price (no auth required)
router.post('/add', async (req, res) => {
  const { commodity, market, state, min_price, max_price, arrival_date } = req.body;

  // Basic validation
  if (!commodity || !market || !state || !min_price || !max_price || !arrival_date) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const price = new Price({
      commodity,
      market,
      state,
      min_price: parseFloat(min_price),
      max_price: parseFloat(max_price),
      arrival_date
    });

    const saved = await price.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error('Error adding price:', err);
    res.status(500).json({ error: 'Failed to add price' });
  }
});

// ✅ DELETE /api/prices/:id - Delete price (no auth required)
router.delete('/:id', async (req, res) => {
  try {
    const price = await Price.findById(req.params.id);
    if (!price) {
      return res.status(404).json({ error: 'Price not found' });
    }

    await Price.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    console.error('Error deleting price:', err);
    res.status(500).json({ error: 'Failed to delete price' });
  }
});

module.exports = router;