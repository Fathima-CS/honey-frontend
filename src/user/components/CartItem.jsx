import React, { useContext } from 'react';
import { Box, Typography, IconButton, TextField } from '@mui/material';
import { Delete } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { CartContext } from '../../context/CartContext';
import serverURL from '../../services/serverURL'
function CartItem({ item }) {
  const { removeFromCart } = useContext(CartContext);
  const [quantity, setQuantity] = React.useState(item.quantity || 1);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity > 0) setQuantity(newQuantity);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', p: 2, borderBottom: '1px solid #ddd' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ color: 'primary.main' }}>
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${item.price} each
        </Typography>
      </Box>
      <TextField
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        size="small"
        sx={{ width: 80, mr: 2 }}
        inputProps={{ min: 1 }}
      />
      <Typography variant="h6" sx={{ mr: 2, color: 'secondary.main' }}>
        ${(item.price * quantity).toFixed(2)}
      </Typography>
      <IconButton onClick={() => removeFromCart(item.id)} sx={{ color: 'error.main' }}>
        <Delete />
      </IconButton>
    </Box>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};

export default CartItem;