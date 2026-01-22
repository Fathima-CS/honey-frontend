import React, { useContext } from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  Container,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import { CartContext } from "../../context/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const footerLinks = [
    { text: "Products", path: "/products" },
    { text: "Checkout", path: "/checkout" },
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
        <Container maxWidth="md">
          {/* Page Header */}
          <Stack direction="row" spacing={1.5} alignItems="center" mb={4}>
            <ShoppingCartIcon color="primary" />
            <Typography variant="h4" fontWeight={700}>
              Your Cart
            </Typography>
          </Stack>

          {/* Cart Card */}
          <Card elevation={4} sx={{ borderRadius: 3, p: 2 }}>
            <CardContent>
              {cart.length === 0 ? (
                <Typography textAlign="center">
                  Your cart is empty.
                </Typography>
              ) : (
                <>
                  {cart.map((item) => (
                    <CartItem key={item._id || item.id} item={item} />
                  ))}

                  <Divider sx={{ my: 3 }} />

                  {/* Total */}
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <PaymentsIcon color="secondary" />
                      <Typography variant="h6" fontWeight={600}>
                        Total
                      </Typography>
                    </Stack>

                    <Typography
                      variant="h5"
                      fontWeight={700}
                      color="secondary.main"
                    >
                      ₹{total.toFixed(2)}
                    </Typography>
                  </Box>

                  {/* Checkout Button */}
                  <Box display="flex" justifyContent="flex-end" mt={3}>
                    <Button
                      variant="contained"
                      size="large"
                      component={Link}
                      to="/checkout"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        px: 4,
                        borderRadius: 2,
                      }}
                    >
                      Proceed to Checkout
                    </Button>
                  </Box>
                </>
              )}
            </CardContent>
          </Card>
        </Container>
      </Box>

      <Footer links={footerLinks} />
    </>
  );
}

export default Cart;
