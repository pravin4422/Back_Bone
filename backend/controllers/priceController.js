const Price = require('../models/Price');

// Get all prices for a logged-in user
exports.getUserPrices = async (req, res) => {
  try {
    const prices = await Price.find({ user: req.user.id });
    res.json(prices);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching prices' });
  }
};

// Add a new price entry
exports.addUserPrice = async (req, res) => {
  const { commodity, market, state, min_price, max_price, arrival_date } = req.body;

  try {
    const newPrice = new Price({
      user: req.user.id,  // ✅ FIXED
      commodity,
      market,
      state,
      min_price,
      max_price,
      arrival_date
    });

    const saved = await newPrice.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Error saving price entry' });
  }
};

// Delete a price entry by ID
exports.deleteUserPrice = async (req, res) => {
  try {
    const price = await Price.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id  // ✅ FIXED
    });

    if (!price) return res.status(404).json({ message: 'Price not found' });

    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting price entry' });
  }
};
