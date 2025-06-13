import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/Signup.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      toast.error('❌ Passwords do not match');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('✅ Account created successfully!');
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      toast.error(`❌ ${err.message}`);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          <div className="password-wrapper">
            <input
              type={showConfirm ? 'text' : 'password'}
              placeholder="Confirm Password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowConfirm(!showConfirm)}
              title={showConfirm ? 'Hide Password' : 'Show Password'}
            >
              {showConfirm ? '🙈' : '👁️'}
            </span>
          </div>

          <button type="submit">Create Account</button>
        </form>

        {/* 👇 Link to login */}
        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>

        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </div>
  );
};

export default Signup;
