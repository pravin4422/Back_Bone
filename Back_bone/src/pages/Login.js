import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import '../css/Login.css';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save basic auth info
      localStorage.setItem('userEmail', user.email);

      // Load existing profile (if available)
      const displayName = localStorage.getItem('displayName') || 'No Name';
      const phone = localStorage.getItem('phone') || 'Not provided';
      const photoURL = localStorage.getItem('photoURL') || 'https://via.placeholder.com/40';

      // Store locally (redundant but consistent)
      localStorage.setItem('displayName', displayName);
      localStorage.setItem('phone', phone);
      localStorage.setItem('photoURL', photoURL);

      // Set user in state
      setUser({
        email: user.email,
        displayName,
        phone,
        photoURL
      });

      navigate('/');
    } catch (error) {
      alert('Login failed: ' + error.message);
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
          <div className="forgot-link">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <button type="submit">Login</button>
        </form>
        <p className="signup-text">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
