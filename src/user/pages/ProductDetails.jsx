import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Card,
  CardContent,
  Divider,
  Stack,
  CircularProgress,
} from "@mui/material";


import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ImageIcon from "@mui/icons-material/Image";

import { useParams } from "react-router-dom";

import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";
import { CartContext } from "../../context/CartContext";
import { viewHoneyAPI } from "../../services/allAPI";
import serverURL from "../../services/serverURL";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
 console.log(product);
 
  /* =========================
     FETCH PRODUCT FROM BACKEND
  ========================= */
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await viewHoneyAPI(id);
        setProduct(response.data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  /* LOADING STATE */
  if (loading) {
    return (
      <>
        <UserNavbar />
        <Box sx={{ py: 10, textAlign: "center" }}>
          <CircularProgress />
        </Box>
        <Footer />
      </>
    );
  }

  /* PRODUCT NOT FOUND */
  if (!product) {
    return (
      <>
        <UserNavbar />
        <Box sx={{ py: 8 }}>
          <Typography align="center" variant="h6">
            Product not found
          </Typography>
        </Box>
        <Footer />
      </>
    );
  }

  return (
    <>
      <UserNavbar />

      {/* PAGE BACKGROUND */}
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #FFF7E6 0%, #FDEBC8 100%)",
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          <Card elevation={4} sx={{ borderRadius: 3, p: 4 }}>
            <Grid container spacing={5}>
              {/* IMAGE */}
              <Grid item xs={12} md={6}>
                <Box sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 3 }}>
                  <img
                    src={`${serverURL}/uploads/${product.image}`}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: 420,
                      objectFit: "cover",
                    }}
                  />
                </Box>

                <Stack direction="row" spacing={1} mt={2}>
                  <ImageIcon color="action" />
                  <Typography variant="body2" color="text.secondary">
                    Product Image
                  </Typography>
                </Stack>
              </Grid>

              {/* DETAILS */}
              <Grid item xs={12} md={6}>
                <CardContent sx={{ p: 0 }}>
                  <Typography variant="h4" fontWeight={700} gutterBottom>
                    {product.name}
                  </Typography>

                  <Stack direction="row" spacing={1} alignItems="center">
                    <CurrencyRupeeIcon color="secondary" />
                    <Typography
                      variant="h5"
                      fontWeight={600}
                      color="secondary.main"
                    >
                      {product.price}
                    </Typography>
                  </Stack>

                  <Divider sx={{ my: 3 }} />

                  <Stack direction="row" spacing={1} mb={1}>
                    <InfoOutlinedIcon color="action" />
                    <Typography variant="h6">
                      Product Description
                    </Typography>
                  </Stack>

                  <Typography variant="body1" mb={4}>
                    {product.description}
                  </Typography>

                  {/* OPTIONAL SELLER INFO */}
                  {product.sellerId && (
                    <Typography variant="body2" color="text.secondary" mb={2}>
                      Sold by: <strong>{product.sellerId.
username
}</strong>
                    </Typography>
                  )}

                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<ShoppingCartIcon />}
                    onClick={() => addToCart(product)}
                    sx={{ px: 4, borderRadius: 2 }}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>

      <Footer
        links={[
          { text: "Products", path: "/products" },
          { text: "Cart", path: "/cart" },
        ]}
      />
    </>
  );
}

export default ProductDetails;
