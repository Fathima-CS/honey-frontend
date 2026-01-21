import React, { useState, useEffect, use } from "react";
import { Box, Typography, TextField, Grid } from "@mui/material";

import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

/* API */
import { getUserAllHoneyAPI } from "../../services/allAPI";

function Products() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({
    varieties: [],
    delicacies: [],
    skin: [],
    medicine: [],
  });

  const filterProducts = (products) =>
    products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
   
    const token = localStorage.getItem("userToken");    
   
  /* FETCH ALL HONEY FROM BACKEND */
  const fetchAllHoney = async () => {
    try {
     
      if (!token) {
        console.error("Token not found");
        return;
      }

      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const result = await getUserAllHoneyAPI(reqHeader);

      // ✅ expected backend response
      setData({
        varieties: result.data.varieties || [],
        delicacies: result.data.delicacies || [],
        skin: result.data.skin || [],
        medicine: result.data.medicine || [],
      });
    } catch (error) {
      console.error("Failed to fetch honey products", error);
    }
  };

  useEffect(() => {
    fetchAllHoney();
  }, []);

  const footerLinks = [
    { text: "Home", path: "/" },
    { text: "Cart", path: "/cart" },
  ];

  return (
    <Box>
      <UserNavbar />

      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom color="primary">
          Our Products
        </Typography>

        <TextField
          fullWidth
          label="Search Products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mb: 4 }}
        />

        {/* HONEY VARIETIES */}
        <Typography variant="h5" gutterBottom>
          Honey Varieties
        </Typography>
        <Grid container spacing={3}>
          {filterProducts(data.varieties).map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product._id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>

        {/* DELICACIES */}
        <Typography variant="h5" sx={{ mt: 6 }} gutterBottom>
          Honey Delicacies
        </Typography>
        <Grid container spacing={3}>
          {filterProducts(data.delicacies).map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product._id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>

        {/* SKIN CARE */}
        <Typography variant="h5" sx={{ mt: 6 }} gutterBottom>
          Skin Care
        </Typography>
        <Grid container spacing={3}>
          {filterProducts(data.skin).map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product._id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>

        {/* MEDICINES */}
        <Typography variant="h5" sx={{ mt: 6 }} gutterBottom>
          Honey Medicines
        </Typography>
        <Grid container spacing={3}>
          {filterProducts(data.medicine).map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product._id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Footer links={footerLinks} />
    </Box>
  );
}

export default Products;
