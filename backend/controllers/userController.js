// controllers/userController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// User registration
exports.signup = async (req, res) => {
  const { displayName, email, password, phone, photoURL } = req.body;

  try {
    // Validation
    if (!displayName || !email || !password) {
      return res.status(400).json({ msg: 'Please provide all required fields' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user
    const newUser = new User({
      displayName,
      email,
      password: hashedPassword,
      phone: phone || '',
      photoURL: photoURL || ''
    });

    await newUser.save();

    res.status(201).json({ 
      msg: 'User created successfully',
      user: {
        id: newUser._id,
        displayName: newUser.displayName,
        email: newUser.email,
        phone: newUser.phone,
        photoURL: newUser.photoURL
      }
    });
  } catch (err) {
    console.error('Signup error:', err.message);
    res.status(500).json({ msg: 'Server error during user registration' });
  }
};

// User login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validation
    if (!email || !password) {
      return res.status(400).json({ msg: 'Please provide email and password' });
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Create JWT token
    const payload = {
      id: user._id,
      email: user.email
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { 
      expiresIn: '24h' 
    });

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        displayName: user.displayName,
        email: user.email,
        phone: user.phone,
        photoURL: user.photoURL
      }
    });
  } catch (err) {
    console.error('Login error:', err.message);
    res.status(500).json({ msg: 'Server error during login' });
  }
};

// Get user profile (protected route)
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error('Get profile error:', err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};