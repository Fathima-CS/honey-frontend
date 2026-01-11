// src/seller/SellerLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import SellerNavbar from "./components/SellerNavbar";

function SellerLayout() {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#FFF8E1" }}>
      <SellerNavbar />
      <Box sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default SellerLayout;
