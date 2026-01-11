import React, { useContext } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CartContext } from '../../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card sx={{ maxWidth: 345, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image || '/assets/images/honey.jpg'}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: 'primary.main' }}>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {product.description}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" sx={{ color: 'secondary.main' }}>
            ${product.price}
          </Typography>
          <Button
            variant="contained"
            startIcon={<ShoppingCart />}
            onClick={handleAddToCart}
            sx={{ backgroundColor: 'accent.main', '&:hover': { backgroundColor: 'primary.main' } }}
          >
            Add to Cart
          </Button>
        </Box>
        <Button component={Link} to={`/products/${product.id}`} size="small" sx={{ mt: 1 }}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default ProductCard;