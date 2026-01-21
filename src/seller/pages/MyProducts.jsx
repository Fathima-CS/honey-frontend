// src/seller/pages/MyProducts.jsx
import React, { useEffect, useState } from "react";
import { Grid, Typography, CircularProgress } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { getUserSellHoneyProfileAPI } from "../../services/allAPI";

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
 console.log(products);
 
  useEffect(() => {
  
    fetchMyProducts();
  }, []);
const token = sessionStorage.getItem("token");

    const fetchMyProducts = async () => {
     const reqHeaders={
        Authorization: `Bearer ${token}`,
     }
      try {
        const response = await getUserSellHoneyProfileAPI(reqHeaders);
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch seller products:", error);
      } finally {
        setLoading(false);
      }
    };
  /* LOADING STATE */
  if (loading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        My Products
      </Typography>

      {products.length === 0 ? (
        <Typography>No products added yet</Typography>
      ) : (
        <Grid container spacing={3}>
          {products.map((p) => (
            <Grid item xs={12} md={4} key={p._id}>
              <ProductCard product={p} onEdit={() => {}} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default MyProducts;
