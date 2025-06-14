// src/components/PrivateRoute.js
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    // ✅ Optional: Add JWT expiry check here if needed
    if (token) {
      // Example: Basic check (assumes token is valid if present)
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  if (isAuthenticated === null) {
    // Optional: Add spinner or skeleton here for better UX
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p>Checking authentication...</p>
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
