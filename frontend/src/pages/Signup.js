import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/Login.css'; // ✅ You can reuse Login.css
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = ({ setUser }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    displayName: '',
    phone: '',
    photoURL: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Signup failed');
      }

      // Save to localStorage
      localStorage.setItem('token', data.token || '');
      localStorage.setItem('userEmail', data.user.email);
      localStorage.setItem('displayName', data.user.displayName || '');
      localStorage.setItem('phone', data.user.phone || '');
      localStorage.setItem('photoURL', data.user.photoURL || '');

      setUser(data.user);

      toast.success('✅ Signup successful!');
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      toast.error(`❌ ${err.message}`);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="displayName"
            placeholder="Display Name"
            value={formData.displayName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              title={showPassword ? 'Hide Password' : 'Show Password'}
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>

          <input
            type="text"
            name="phone"
            placeholder="Phone (optional)"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL (optional)"
            value={formData.photoURL}
            onChange={handleChange}
          />

          <button type="submit">Sign Up</button>
        </form>

        <p className="signup-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>

        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </div>
  );
};

export default Signup;
