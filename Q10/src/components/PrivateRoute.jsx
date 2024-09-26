import React from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated);
  
  // If the user is not authenticated, navigate to the login page
  const navigate = useNavigate()
  function callquiz(){
    navigate("/quiz")
  } 
  return isAuthenticated ? callquiz : <Navigate to="/login" />;
};

export default PrivateRoute;
