const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const SECRET_KEY = 'your_secret_key'; // Replace this with an environment variable in production

// Register a new user
exports.registerUser = async (req, res) => {
  const { email, password, displayName, phone, photoURL } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      email,
      password: hashedPassword,
      displayName,
      phone,
      photoURL,
    });

    await newUser.save();

    // Generate JWT
    const token = jwt.sign({ id: newUser._id }, SECRET_KEY, { expiresIn: '7d' });

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        email: newUser.email,
        displayName: newUser.displayName,
        phone: newUser.phone,
        photoURL: newUser.photoURL,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error during registration', error: error.message });
  }
};

// Login a user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

    // Generate JWT
    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '7d' });

    res.json({
      message: 'Login successful',
      token,
      user: {
        email: user.email,
        displayName: user.displayName,
        phone: user.phone,
        photoURL: user.photoURL,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error during login', error: error.message });
  }
};
