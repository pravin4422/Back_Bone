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
import CompleteProfile from './pages/CompleteProfile';
import EditProfile from './pages/EditProfile';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
  const token = localStorage.getItem('token');
  const displayName = localStorage.getItem('displayName');
  const email = localStorage.getItem('userEmail');

  if (token && displayName && email) {
    setUser({
      displayName,
      email,
      phone: localStorage.getItem('phone'),
      photoURL: localStorage.getItem('photoURL'),
    });
  } else if (token) {
    // fallback: assume user is logged in, even if details are missing
    setUser(true); // important: makes user truthy so <PrivateRoute> doesn't block
  } else {
    setUser(null);
  }
}, []);


  return (
    <Router>
      <Header user={user} setUser={setUser} />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />

        {/* Protected Routes */}
        <Route
          path="/weather"
          element={
            <PrivateRoute user={user}>
              <Weather />
            </PrivateRoute>
          }
        />
        <Route
          path="/prices"
          element={
            <PrivateRoute user={user}>
              <Prices />
            </PrivateRoute>
          }
        />
        <Route
          path="/schemes"
          element={
            <PrivateRoute user={user}>
              <Schemes />
            </PrivateRoute>
          }
        />
        <Route
          path="/forum"
          element={
            <PrivateRoute user={user}>
              <Forum />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <PrivateRoute user={user}>
              <EditProfile setUser={setUser} />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
