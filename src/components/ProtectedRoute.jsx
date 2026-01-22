import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children, role }) {
  const token = sessionStorage.getItem("token");
  const userRole = sessionStorage.getItem("role");

  // Not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Role mismatch (admin / seller / user)
  if (role && userRole !== role) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default PrivateRoute;
