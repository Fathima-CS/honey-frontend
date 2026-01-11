import React, { useState, useEffect } from 'react';
import { Box, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import AdminTable from '../components/AdminTable';


function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    api.get('/admin/orders').then(setOrders);
  }, []);

  const handleStatusChange = (id, status) => {
    api.put(`/admin/orders/${id}`, { status }).then(() => {
      setOrders(orders.map((o) => (o.id === id ? { ...o, status } : o)));
    });
  };

  const filteredOrders = filter === 'all' ? orders : orders.filter((o) => o.status === filter);

  const columns = [
    { field: 'id', headerName: 'Order ID', width: 120 },
    { field: 'user', headerName: 'User', width: 150 },
    { field: 'total', headerName: 'Total ($)', width: 100 },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: (params) => (
        <Select
          value={params.value}
          onChange={(e) => handleStatusChange(params.row.id, e.target.value)}
          size="small"
        >
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="shipped">Shipped</MenuItem>
          <MenuItem value="delivered">Delivered</MenuItem>
        </Select>
      ),
    },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
        Manage Orders
      </Typography>
      <FormControl sx={{ mb: 3, minWidth: 200 }}>
        <InputLabel>Filter by Status</InputLabel>
        <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="shipped">Shipped</MenuItem>
          <MenuItem value="delivered">Delivered</MenuItem>
        </Select>
      </FormControl>
      <AdminTable columns={columns} rows={filteredOrders} title="Order List" />
    </Box>
  );
}

export default AdminOrders;