// models/Price.js
const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
  commodity: { type: String, required: true },
  market: { type: String, required: true },
  state: { type: String, required: true },
  min_price: { type: Number, required: true },
  max_price: { type: Number, required: true },
  arrival_date: { type: Date, required: true },
  // Remove or make optional: user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true
});

module.exports = mongoose.model('Price', priceSchema);