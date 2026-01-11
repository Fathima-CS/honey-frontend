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
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ImageIcon from "@mui/icons-material/Image";
import { useParams } from "react-router-dom";

import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";
import { CartContext } from "../../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  /* ✅ FRONTEND-ONLY PRODUCT DATA */
  const products = [
    {
    id: "1",
    name: 'Pure Organic Honey',
    price: 350,
    image: 'https://i.pinimg.com/736x/59/9c/73/599c73371b3b4f4ab08cbdbf60b038f7.jpg',
    description: 'Naturally sourced organic honey with no additives',
  },
  {
    id:"2",
    name: 'Sunflower Honey',
    price: 420,
    image: 'https://i.pinimg.com/736x/d2/ff/35/d2ff35b65f35f6cc584ab59e74a764d8.jpg',
    description: 'Light golden honey harvested from sunflower fields',
  },
  {
    id: "3",
    name: 'Forest Honey',
    price: 280,
    image: '/public/honeyhub.png',
    description: 'Wild forest honey collected from natural hives',
  },
  {
    id: "4",
    name: 'Acacia Honey',
    price: 500,
    image: '/public/acacia.jpg',
    description: 'Clear and mild honey with low sugar crystallization',
  },
  {
    id: "5",
    name: 'Sidr / Wild Berry Honey',
    price: 390,
    image: 'https://i.pinimg.com/1200x/88/36/9b/88369bdfe8321b14c966ebd7146c8617.jpg',
    description: 'Premium honey made from wild berry nectar',
  },
  {
    id: "6",
    name: 'Eucalyptus Honey',
    price: 450,
    image: 'https://i.pinimg.com/1200x/1e/1a/45/1e1a45112c03f72aa82792d2302e5055.jpg',
    description: 'Aromatic honey known for respiratory benefits',
  },
  {
    id: "7",
    name: 'Ajwain Honey',
    price: 450,
    image: '/public/ajwain.jpg',
    description: 'Medicinal honey supporting digestion and immunity',
  },
  {
    id: "8",
    name: 'Cotton Honey',
    price: 450,
    image: 'https://i.pinimg.com/1200x/21/03/ae/2103aed42730c2ef78aa59925dfee211.jpg',
    description: 'Mild-flavored honey collected from cotton blossoms',
  },
  ];

  useEffect(() => {
    const selectedProduct = products.find(
      (item) => item.id === id
    );
    setProduct(selectedProduct || null);
  }, [id]);

  if (!product) {
    return (
      <>
        <UserNavbar />
        <Box sx={{ py: 6 }}>
          <Typography align="center">Product not found</Typography>
        </Box>
        <Footer />
      </>
    );
  }

  const footerLinks = [
    { text: "Products", path: "/products" },
    { text: "Cart", path: "/cart" },
  ];

  return (
    <>
      <UserNavbar />

      {/* Page Background */}
      <Box
        sx={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #FFF7E6 0%, #FDEBC8 100%)",
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          <Card
            elevation={4}
            sx={{
              borderRadius: 3,
              p: { xs: 2, md: 4 },
            }}
          >
            <Grid container spacing={5}>
              {/* Image Section */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: 3,
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      maxHeight: 420,
                      objectFit: "cover",
                    }}
                  />
                </Box>

                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  mt={2}
                >
                  <ImageIcon color="action" />
                  <Typography variant="body2" color="text.secondary">
                    Product Image
                  </Typography>
                </Stack>
              </Grid>

              {/* Details Section */}
              <Grid size={{ xs: 12, md: 6 }}>
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="h4"
                    fontWeight={700}
                    gutterBottom
                  >
                    {product.name}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    mb={2}
                  >
                    <CurrencyRupeeIcon color="secondary" />
                    <Typography
                      variant="h5"
                      fontWeight={600}
                      color="secondary.main"
                    >
                      {product.price}
                    </Typography>
                  </Stack>

                  <Divider sx={{ my: 2 }} />

                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    mb={1}
                  >
                    <InfoOutlinedIcon color="action" />
                    <Typography variant="h6">
                      Product Description
                    </Typography>
                  </Stack>

                  <Typography variant="body1" sx={{ mb: 4 }}>
                    {product.description}
                  </Typography>

                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<ShoppingCartIcon />}
                    onClick={() => addToCart(product)}
                    sx={{
                      px: 4,
                      borderRadius: 2,
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>

      <Footer links={footerLinks} />
    </>
  );
}

export default ProductDetails;
