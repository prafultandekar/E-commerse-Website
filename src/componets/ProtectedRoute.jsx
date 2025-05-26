// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PrivateRoute({ children }) {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
