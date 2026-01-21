import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
} from "@mui/material";

import AdminTable from "../components/AdminTable";
import { getAllUsersAdminAPI } from "../../services/allAPI";

function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  /* =========================
     FETCH USERS
  ========================= */
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = sessionStorage.getItem("token");

      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const res = await getAllUsersAdminAPI(reqHeader);

      const userArray = Array.isArray(res.data)
        ? res.data
        : res.data.data;

      // MongoDB _id → MUI id
      const formattedUsers = userArray.map((user) => ({
        ...user,
        id: user._id,
      }));

      setUsers(formattedUsers);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  /* =========================
     FILTER USERS
  ========================= */
  const filteredUsers = users.filter(
    (user) =>
      user.username?.toLowerCase().includes(search.toLowerCase()) ||
      user.email?.toLowerCase().includes(search.toLowerCase())
  );

  /* =========================
     TABLE COLUMNS
  ========================= */
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "username", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 260 },
    { field: "role", headerName: "Role", width: 160 },
  ];

  return (
    <Box>
      {/* HEADER */}
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ color: "primary.main" }}
      >
        Manage Users
      </Typography>

      {/* SEARCH */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Grid>
      </Grid>

      {/* TABLE */}
      <AdminTable
        columns={columns}
        rows={filteredUsers}
        title="User List"
      />
    </Box>
  );
}

export default ManageUsers;
