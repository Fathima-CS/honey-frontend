import React from 'react';
import { Card, CardContent, Typography, Box, Chip, List, ListItem, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';

function OrderCard({ order }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'warning';
      case 'shipped': return 'info';
      case 'delivered': return 'success';
      default: return 'default';
    }
  };

  return (
    <Card sx={{ mb: 2, backgroundColor: 'background.paper' }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ color: 'primary.main' }}>
            Order #{order.id}
          </Typography>
          <Chip label={order.status} color={getStatusColor(order.status)} />
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Date: {new Date(order.date).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Total: ${order.total}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'secondary.main' }}>
          Items:
        </Typography>
        <List dense>
          {order.items.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${item.name} (x${item.quantity})`} secondary={`$${item.price * item.quantity}`} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default OrderCard;