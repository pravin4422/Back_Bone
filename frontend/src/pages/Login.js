import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/Login.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Login failed');

      // Save token and user details in localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('userEmail', data.user.email);
      localStorage.setItem('displayName', data.user.displayName || '');
      localStorage.setItem('phone', data.user.phone || '');
      localStorage.setItem('photoURL', data.user.photoURL || '');

      // Set user in app state
      setUser(data.user);

      toast.success('✅ Login successful!');
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      toast.error(`❌ ${err.message}`);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: forgotEmail })
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Failed to send reset email');

      toast.success('✅ Password reset email sent!');
      setShowForgotPassword(false);
      setForgotEmail('');
    } catch (err) {
      toast.error(`❌ ${err.message}`);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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

          <button type="submit">Login</button>
        </form>

        <div className="forgot-password-section">
          <button
            type="button"
            className="forgot-password-link"
            onClick={() => setShowForgotPassword(true)}
          >
            Forgot Password?
          </button>
        </div>

        <p className="signup-text">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>

        <ToastContainer position="top-center" autoClose={3000} />
      </div>

      {/* Forgot Password Modal */}
      {showForgotPassword && (
        <div className="forgot-password-overlay">
          <div className="forgot-password-modal">
            <h3>Reset Password</h3>
            <p>Enter your email address and we'll send you a link to reset your password.</p>
            <form onSubmit={handleForgotPassword}>
              <input
                type="email"
                placeholder="Enter your email"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                required
              />
              <div className="modal-buttons">
                <button type="submit" className="send-reset-btn">
                  Send Reset Link
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => {
                    setShowForgotPassword(false);
                    setForgotEmail('');
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;