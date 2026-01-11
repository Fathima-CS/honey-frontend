import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children, role }) {
  const userRole = localStorage.getItem("userRole");

  // Not logged in
  if (!userRole) {
    return <Navigate to="/login" replace />;
  }

  // Role mismatch
  if (role && userRole !== role) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default PrivateRoute;
