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

// ✅ New public pages
import FarmingDetail from './pages/FarmingDetail';
import AgroChemical from './pages/AgroChemical';
import AgroInfectors from './pages/AgroInfectors';
import OrganicFarming from './pages/OrganicFarming';
import InorganicFarming from './pages/InorganicFarming';
import FarmingStructure from './pages/FarmingStructure';
import Others from './pages/Others';

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
      setUser(true); // fallback if user details are not set
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

        {/* ✅ Newly added Public Routes */}
        <Route path="/farming_detail" element={<FarmingDetail />} />
        <Route path="/agro_chemical" element={<AgroChemical />} />
        <Route path="/agro_infectors" element={<AgroInfectors />} />
        <Route path="/organic_farming" element={<OrganicFarming />} />
        <Route path="/inorganic_farming" element={<InorganicFarming />} />
        <Route path="/farming_structure" element={<FarmingStructure />} />
        <Route path="/others" element={<Others />} />

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
