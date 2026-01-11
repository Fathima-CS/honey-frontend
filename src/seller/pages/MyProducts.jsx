// src/seller/pages/MyProducts.jsx
import { Grid, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";

const MyProducts = () => {
  const products = [
    {
      id: 1,
      name: "Wild Forest Honey",
      price: 550,
      image: "/assets/images/honey.jpg",
    },
  ];

  return (
    <>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        My Products
      </Typography>

      <Grid container spacing={3}>
        {products.map((p) => (
          <Grid item xs={12} md={4} key={p.id}>
            <ProductCard product={p} onEdit={() => {}} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MyProducts;
