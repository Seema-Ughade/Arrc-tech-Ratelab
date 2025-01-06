import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const location = useLocation();
  const token = localStorage.getItem('token');  // Get the stored token
  const user = JSON.parse(localStorage.getItem('user'));  // Get the stored user object

  // If no token or user is found, redirect to login page
  if (!token || !user) {
    return <Navigate to="/user/login" state={{ from: location }} replace />;
  }

  // If the user role is not in the allowedRoles, redirect to home page or another path
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  // If everything checks out, render the protected route's children
  return children;
};

export default ProtectedRoute;
