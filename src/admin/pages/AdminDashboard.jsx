import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Collapse,
  IconButton,
  Divider,
  Chip,
} from '@mui/material';
import {
  ExpandMore,
  ExpandLess,
  People,
  Inventory2,
  ShoppingCart,
  AttachMoney,
  TrendingUp,
} from '@mui/icons-material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import AdminTable from '../components/AdminTable';

function AdminDashboard() {
  const [stats, setStats] = useState({
    users: 0,
    products: 0,
    orders: 0,
    revenue: 0,
  });

  const [recentOrders, setRecentOrders] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [expanded, setExpanded] = useState({
    orders: true,
    analytics: true,
  });

  useEffect(() => {
    setStats({
      users: 120,
      products: 45,
      orders: 18,
      revenue: 5600,
    });

    setRecentOrders([
      { id: 1, user: 'Alice', status: 'Pending', total: 120 },
      { id: 2, user: 'Bob', status: 'Completed', total: 300 },
      { id: 3, user: 'Charlie', status: 'Processing', total: 180 },
    ]);

    setChartData([
      { month: 'Jan', sales: 400 },
      { month: 'Feb', sales: 700 },
      { month: 'Mar', sales: 900 },
      { month: 'Apr', sales: 1200 },
    ]);
  }, []);

  const handleExpandClick = (section) => {
    setExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const orderColumns = [
    { field: 'id', headerName: 'Order ID', width: 120 },
    { field: 'user', headerName: 'Customer', width: 160 },
    { field: 'status', headerName: 'Status', width: 140 },
    { field: 'total', headerName: 'Total ($)', width: 140 },
  ];

  const StatCard = ({ icon, title, value }) => (
    <Card
      sx={{
        height: 120,
        borderRadius: 3,
        background: 'rgba(255,255,255,0.65)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.4)',
        boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 14px 32px rgba(0,0,0,0.12)',
        },
      }}
    >
      <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '12px',
            background: 'rgba(251,140,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FB8C00',
          }}
        >
          {icon}
        </Box>

        <Box>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
          <Typography variant="h5" fontWeight={600}>
            {value}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box
      sx={{
        minHeight: '100vh',
        p: 3,
        background:
          'linear-gradient(135deg, rgba(248,249,252,1), rgba(240,244,250,1))',
      }}
    >
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={600}>
          Admin Dashboard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Platform performance overview
        </Typography>
      </Box>

      {/* Stats */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <StatCard icon={<People />} title="Total Users" value={stats.users} />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatCard
            icon={<Inventory2 />}
            title="Products"
            value={stats.products}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatCard
            icon={<ShoppingCart />}
            title="Orders"
            value={stats.orders}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatCard
            icon={<AttachMoney />}
            title="Revenue"
            value={`$${stats.revenue}`}
          />
        </Grid>
      </Grid>

      {/* Analytics */}
      <Card
        sx={{
          mb: 4,
          borderRadius: 3,
          background: 'rgba(255,255,255,0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.4)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        }}
      >
        <CardContent>
          <Box display="flex" justifyContent="space-between" mb={2}>
            <Box display="flex" alignItems="center" gap={1}>
              <TrendingUp sx={{ color: '#FB8C00' }} />
              <Typography variant="h6">Sales Analytics</Typography>
            </Box>

            <IconButton onClick={() => handleExpandClick('analytics')}>
              {expanded.analytics ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Box>

          <Collapse in={expanded.analytics}>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.4} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#FB8C00"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Collapse>
        </CardContent>
      </Card>

      {/* Orders */}
      <Card
        sx={{
          borderRadius: 3,
          background: 'rgba(255,255,255,0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.4)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        }}
      >
        <CardContent>
          <Box display="flex" justifyContent="space-between" mb={2}>
            <Typography variant="h6">Recent Orders</Typography>
            <IconButton onClick={() => handleExpandClick('orders')}>
              {expanded.orders ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Box>

          <Collapse in={expanded.orders}>
            <AdminTable columns={orderColumns} rows={recentOrders} height={260} />
          </Collapse>
        </CardContent>
      </Card>

      <Divider sx={{ my: 4 }} />

      <Box display="flex" alignItems="center" gap={1}>
        <Chip label="System Health: OK" color="success" />
        <Typography variant="body2" color="text.secondary">
          All services operational
        </Typography>
      </Box>
    </Box>
  );
}

export default AdminDashboard;
