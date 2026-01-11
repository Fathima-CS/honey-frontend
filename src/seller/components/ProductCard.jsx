// src/seller/components/ProductCard.jsx
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";

const ProductCard = ({ product, onEdit }) => (
  <Card elevation={3}>
    <CardMedia
      component="img"
      height="160"
      image={product.image}
      alt={product.name}
    />
    <CardContent>
      <Typography fontWeight="bold">{product.name}</Typography>
      <Typography color="text.secondary">₹{product.price}</Typography>
      <Box mt={2}>
        <Button variant="outlined" onClick={onEdit}>
          Edit
        </Button>
      </Box>
    </CardContent>
  </Card>
);

export default ProductCard;
