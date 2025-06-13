const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  displayName: String,
  phone: String,
  photoURL: String
});

module.exports = mongoose.model('User', userSchema);
