import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";

import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { getUserproductAPI } from "../../services/allAPI";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(products)
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        console.error("Token not found");
        return;
      }

      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const result = await getUserproductAPI(reqHeader);
      setProducts(result.data || []);
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <UserNavbar />

      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom color="primary">
          Our Products
        </Typography>

        {loading && <Typography>Loading products...</Typography>}

        {!loading && products.length === 0 && (
          <Typography>No products available</Typography>
        )}

        {!loading && products.length > 0 && (
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product._id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      <Footer
        links={[
          { text: "Home", path: "/" },
          { text: "Cart", path: "/cart" },
        ]}
      />
    </Box>
  );
}

export default Products;
