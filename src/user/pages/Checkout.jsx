import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Divider,
  Stack,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";

import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";
import { CartContext } from "../../context/CartContext";
import { buyHoneyAPI } from "../../services/allAPI";

function Checkout() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const token = sessionStorage.getItem("token");

  // 🔐 Redirect if not logged in
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  // 🛒 Redirect if cart empty
  useEffect(() => {
    if (cart.length === 0) {
      navigate("/cart");
    }
  }, [cart, navigate]);

  // ⛔ stop rendering until redirects happen
  if (!token || cart.length === 0) {
    return null;
  }

  // ✅ Honey ID from cart (single-product checkout)
  const honeyId = cart[0].id;

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const makePayment = async () => {
    try {
      setLoading(true);

      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const res = await buyHoneyAPI( reqHeader);

      // 🔁 Redirect to Stripe Checkout
      window.location.href = res.data.checkoutURL;
    } catch (err) {
      console.error("Payment failed", err);
      alert(err.response?.data || "Payment failed");
      setLoading(false);
    }
  };

  return (
    <>
      <UserNavbar />

      <Box
        sx={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #FFF7E6 0%, #FDEBC8 100%)",
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          <Stack direction="row" spacing={1.5} alignItems="center" mb={4}>
            <ShoppingBagIcon color="primary" />
            <Typography variant="h4" fontWeight={700}>
              Checkout
            </Typography>
          </Stack>

          <Grid container spacing={4}>
            {/* LEFT */}
            <Grid item xs={12} md={6}>
              <Card elevation={4} sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                    <LocationOnIcon color="secondary" />
                    <Typography variant="h6">
                      Shipping Address
                    </Typography>
                  </Stack>

                  <Typography color="text.secondary">
                    Address will be collected after payment.
                  </Typography>

                  <Divider sx={{ my: 3 }} />

                  <Stack direction="row" spacing={1} alignItems="center">
                    <LockIcon fontSize="small" />
                    <Typography variant="body2" color="text.secondary">
                      Secure payment handled by Stripe
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            {/* RIGHT */}
            <Grid item xs={12} md={6}>
              <Card elevation={4} sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Typography variant="h6" mb={2}>
                    Order Summary
                  </Typography>

                  {cart.map((item) => (
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
                        ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                      </Typography>
                    </Box>
                  ))}

                  <Divider sx={{ my: 2 }} />

                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="h6">Total</Typography>
                    <Typography variant="h5" fontWeight={700}>
                      ₹{total.toFixed(2)}
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{ mt: 3 }}
                    onClick={makePayment}
                    disabled={loading}
                  >
                    {loading ? "Redirecting..." : "Pay with Stripe"}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  );
}

export default Checkout;
