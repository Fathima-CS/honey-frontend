import React from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import AdminStatsCard from "../components/AdminStatsCard";
import AdminTable from "../components/AdminTable";

/* =========================
   DATA
========================= */

const stats = [
  { title: "Total Raised", value: "$1,750", icon: "money" },
  { title: "Active Campaigns", value: "3", icon: "campaign" },
  { title: "Total Donors", value: "120", icon: "users" },
  { title: "Completed Campaigns", value: "5", icon: "success" },
  { title: "Total Fundraisers", value: "18", icon: "fundraisers" },
  { title: "Pending Approvals", value: "8", icon: "pending" },
  { title: "Withdraw Requests", value: "5", icon: "withdraw" },
  { title: "Complaints", value: "2", icon: "warning" },
];

const lineData = [
  { month: "Jan", amount: 500 },
  { month: "Feb", amount: 800 },
  { month: "Mar", amount: 1750 },
  { month: "Apr", amount: 1200 },
  { month: "May", amount: 2000 },
];

const pieData = [
  { name: "Active", value: 3 },
  { name: "Completed", value: 5 },
  { name: "Pending", value: 2 },
];

const COLORS = ["#FB8C00", "#10B981", "#FACC15"];

const orderColumns = [
  { field: "id", headerName: "Order ID", width: 120 },
  { field: "user", headerName: "Customer", width: 160 },
  { field: "status", headerName: "Status", width: 140 },
  { field: "total", headerName: "Total ($)", width: 140 },
];

const orderRows = [
  { id: 1, user: "Alice", status: "Pending", total: 120 },
  { id: 2, user: "Bob", status: "Completed", total: 300 },
];

/* ✅ ADD THIS */
function AdminDashboard() {
  return (
    <Box sx={{ minHeight: "100vh", background: "#f4f6fb" }}>
      {/* <AdminNavbar /> */}

      <Box sx={{ display: "flex" }}>
        <AdminSidebar />

        <Box
          sx={{
            flex: 1,
            p: 3,
            background:
              "linear-gradient(135deg, rgba(248,249,252,1), rgba(240,244,250,1))",
          }}
        >
          {/* Title */}
          <Box mb={4}>
            <Typography variant="h4" fontWeight={600}>
              Admin Dashboard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              HoneyHub platform overview
            </Typography>
          </Box>

          {/* Stats Cards */}
          <Grid container spacing={3} mb={4}>
            {stats.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <AdminStatsCard {...item} />
              </Grid>
            ))}
          </Grid>

          {/* Charts */}
          <Grid container spacing={3}>
            {/* Line Chart */}
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 3, bgcolor: "white", borderRadius: 3 }}>
                <Typography fontWeight={600} mb={2}>
                  Total Funds Raised
                </Typography>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={lineData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="amount"
                      stroke="#FB8C00"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </Grid>

            {/* Pie Chart */}
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 3, bgcolor: "white", borderRadius: 3 }}>
                <Typography fontWeight={600} mb={2}>
                  Campaign Status
                </Typography>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label
                    >
                      {pieData.map((_, i) => (
                        <Cell key={i} fill={COLORS[i]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          <AdminTable
            title="Recent Orders"
            columns={orderColumns}
            rows={orderRows}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default AdminDashboard;
