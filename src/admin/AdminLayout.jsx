import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import AdminNavbar from '../admin/components/AdminNavbar'

function AdminLayout() {
  return (
    <Box>
      <AdminNavbar />
      <Outlet />
    </Box>
  );
}

export default AdminLayout;
