// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,
    trim: true
  },
  password: { 
    type: String, 
    required: true,
    minlength: 6
  },
  displayName: { 
    type: String,
    required: true,
    trim: true
  },
  phone: { 
    type: String,
    trim: true
  },
  photoURL: { 
    type: String,
    default: ''
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);