import React, { useState, useContext } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Divider,
  Stack,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";

import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";
import { CartContext } from "../../context/CartContext";

function Checkout() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    address: "",
    card: "",
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-only success
    navigate("/orders");
  };

  const footerLinks = [
    { text: "Cart", path: "/cart" },
    { text: "Orders", path: "/orders" },
  ];

  return (
    <>
      <UserNavbar />

      {/* Background */}
      <Box
        sx={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #FFF7E6 0%, #FDEBC8 100%)",
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          {/* Page Title */}
          <Stack direction="row" spacing={1.5} alignItems="center" mb={4}>
            <ShoppingBagIcon color="primary" />
            <Typography variant="h4" fontWeight={700}>
              Checkout
            </Typography>
          </Stack>

          <Grid container spacing={4}>
            {/* LEFT – Shipping & Payment */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card elevation={4} sx={{ borderRadius: 3 }}>
                <CardContent>
                  {/* Shipping */}
                  <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                    <LocationOnIcon color="secondary" />
                    <Typography variant="h6">
                      Shipping Address
                    </Typography>
                  </Stack>

                  <TextField
                    fullWidth
                    label="Full Address"
                    placeholder="House no, Street, City, Pincode"
                    value={form.address}
                    onChange={(e) =>
                      setForm({ ...form, address: e.target.value })
                    }
                    sx={{ mb: 3 }}
                    required
                  />

                  <Divider sx={{ my: 3 }} />

                  {/* Payment */}
                  <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                    <CreditCardIcon color="secondary" />
                    <Typography variant="h6">
                      Payment Information
                    </Typography>
                  </Stack>

                  <TextField
                    fullWidth
                    label="Card Number"
                    placeholder="XXXX XXXX XXXX XXXX"
                    value={form.card}
                    onChange={(e) =>
                      setForm({ ...form, card: e.target.value })
                    }
                    required
                  />

                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    mt={2}
                  >
                    <LockIcon fontSize="small" color="action" />
                    <Typography variant="body2" color="text.secondary">
                      Your payment details are securely encrypted.
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            {/* RIGHT – Order Summary */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card elevation={4} sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                    <ShoppingBagIcon color="secondary" />
                    <Typography variant="h6">
                      Order Summary
                    </Typography>
                  </Stack>

                  {cart.length === 0 ? (
                    <Typography>No items in cart.</Typography>
                  ) : (
                    cart.map((item) => (
                      <Box
                        key={item.id}
                        display="flex"
                        justifyContent="space-between"
                        mb={1}
                      >
                        <Typography>
                          {item.name} × {item.quantity || 1}
                        </Typography>
                        <Typography>
                          ₹
                          {(item.price * (item.quantity || 1)).toFixed(2)}
                        </Typography>
                      </Box>
                    ))
                  )}

                  <Divider sx={{ my: 2 }} />

                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="h6" fontWeight={600}>
                      Total
                    </Typography>
                    <Typography
                      variant="h5"
                      fontWeight={700}
                      color="secondary.main"
                    >
                      ₹{total.toFixed(2)}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    Estimated delivery: 3–5 business days
                  </Typography>

                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    onClick={handleSubmit}
                    sx={{
                      mt: 3,
                      borderRadius: 2,
                    }}
                  >
                    Place Order
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer links={footerLinks} />
    </>
  );
}

export default Checkout;
