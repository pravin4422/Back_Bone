// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';

import Home from './pages/Home';
import Weather from './pages/Weather';
import Prices from './pages/Prices';
import Schemes from './pages/Schemes';
import Forum from './pages/Forum';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userName = localStorage.getItem('userName');
    if (token && userName) {
      setUser({ name: userName });
    }
  }, []);

  return (
    <Router>
      <Header user={user} setUser={setUser} />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected Routes */}
        <Route
          path="/weather"
          element={<PrivateRoute><Weather /></PrivateRoute>}
        />
        <Route
          path="/prices"
          element={<PrivateRoute><Prices /></PrivateRoute>}
        />
        <Route
          path="/schemes"
          element={<PrivateRoute><Schemes /></PrivateRoute>}
        />
        <Route
          path="/forum"
          element={<PrivateRoute><Forum /></PrivateRoute>}
        />
      </Routes>
    </Router>
  );
}

export default App;
