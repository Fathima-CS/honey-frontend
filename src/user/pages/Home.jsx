import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";

import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer"
import {getAllHoneyAPI} from "../../services/allAPI"
import serverURL from "../../services/serverURL";

function Home() {
  /* =========================
     STATE
  ========================= */
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(products);
  

  /* =========================
     FETCH HONEY PRODUCTS
  ========================= */
  useEffect(() => {
    fetchHoney();
    }, [])

  const fetchHoney = async () => {
      try {
        const response = await getAllHoneyAPI();
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching honey products:", error);
      } finally {
        setLoading(false);
      }
    }

  return (
    <Box>
      {/* NAVBAR */}
      <UserNavbar />

      {/* HERO SECTION */}
      <Box
        sx={{
          backgroundImage: "url('/public/banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Typography variant="h2" sx={{ color: "#E9AB17", fontWeight: "bold", mb: 2 }}>
            HoneyHub
          </Typography>

          <Typography variant="h5" sx={{ color: "#E9AB17", mb: 4, maxWidth: 600 }}>
            A trusted marketplace for pure, traceable, farm-fresh honey directly
            from verified beekeepers.
          </Typography>

          <Button component={Link} to="/products" variant="contained" size="large" sx={{ mr: 2 }}>
            Explore Honey
          </Button>

          <Button
            component={Link}
            to="/login"
            variant="outlined"
            size="large"
            sx={{ color: "#fff", borderColor: "#fff" }}
          >
            Login
          </Button>
        </Container>
      </Box>

      {/* SECTION TITLE */}
      <Box sx={{ textAlign: "center", py: 6, backgroundColor: "#FEEE91" }}>
        <Typography variant="h4" fontWeight="bold" sx={{ color: "#5A3E2B" }}>
          Explore Our Infused Honey Range
        </Typography>
      </Box>

      {/* PRODUCTS GRID (DYNAMIC) */}
      <Box sx={{ px: { xs: 2, md: 8 }, pb: 6, backgroundColor: "#FEEE91" }}>
        {loading ? (
          <Typography align="center">Loading products...</Typography>
        ) : products.length === 0 ? (
          <Typography align="center">No honey products available</Typography>
        ) : (
          <Grid container spacing={4} justifyContent="center">
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={2.4} key={product._id}>
                <Card elevation={0} sx={{ backgroundColor: "transparent", textAlign: "center" }}>
                  <CardMedia
                    component="img"
                    image={`${serverURL}/uploads/${product.image}`}
                    alt={product.name}
                    sx={{ height: 220, objectFit: "contain", mb: 2 }}
                  />

                  <CardContent>
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                      {product.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {product.description}
                    </Typography>

                    <Button
                      component={Link}
                      to={`/products/${product._id}`}
                      variant="contained"
                      sx={{
                        backgroundColor: "#5A3E2B",
                        "&:hover": { backgroundColor: "#4A3323" },
                        borderRadius: 0,
                        px: 3,
                      }}
                    >
                      VIEW PRODUCT
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      {/* CALL TO ACTION */}
      <Box sx={{ backgroundColor: "#EBD5AB", width: "100%" }}>
        <Container sx={{ py: 8, textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>
            Join HoneyHub Today
          </Typography>

          <Typography variant="body1" sx={{ mb: 3 }}>
            Whether you are a customer, seller, or admin – HoneyHub connects
            everyone on one trusted platform.
          </Typography>

          <Button component={Link} to="/register" variant="contained" size="large">
            Get Started
          </Button>
        </Container>
      </Box>

      {/* FOOTER */}
      <Footer
        links={[
          { text: "Home", path: "/" },
          { text: "Products", path: "/products" },
          { text: "Login", path: "/login" },
        ]}
      />
    </Box>
  );
}

export default Home;
