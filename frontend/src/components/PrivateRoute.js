import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ user }) => {
  // If no user is found, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If user is authenticated, allow access
  return <Outlet />;
};

export default PrivateRoute;
