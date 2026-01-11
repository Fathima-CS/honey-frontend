import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Grid,
  Divider,
  Button,
  Container,
  Stack,
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { useNavigate } from "react-router-dom";

import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";

const Orders = () => {
  const navigate = useNavigate();

  // Logged-in user
  const user = JSON.parse(localStorage.getItem("currentUser"));

  // Block access if not logged in
  if (!user) {
    return (
      <>
        <UserNavbar />
        <Box
          minHeight="70vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Typography variant="h6" mb={2}>
            Please login to view your orders
          </Typography>
          <Button variant="contained" onClick={() => navigate("/login")}>
            Go to Login
          </Button>
        </Box>
        <Footer />
      </>
    );
  }

  // Dummy orders (frontend-only)
  const orders = [
    {
      id: "ORD-1001",
      date: "12 Sep 2025",
      status: "Delivered",
      total: 1250,
      items: ["Wild Forest Honey", "Organic Raw Honey"],
    },
    {
      id: "ORD-1002",
      date: "28 Sep 2025",
      status: "Processing",
      total: 780,
      items: ["Hill Blossom Honey"],
    },
  ];

  const statusConfig = {
    Delivered: {
      color: "success",
      icon: <CheckCircleIcon />,
    },
    Processing: {
      color: "warning",
      icon: <HourglassBottomIcon />,
    },
  };

  return (
    <>
      <UserNavbar />

      {/* Page Background */}
      <Box
        sx={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #FFF7E6 0%, #FDF1D6 100%)",
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          {/* Page Header */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            mb={4}
          >
            <ReceiptLongIcon color="primary" />
            <Typography variant="h4" fontWeight={700}>
              My Orders
            </Typography>
          </Stack>

          <Grid container spacing={4}>
            {orders.map((order) => (
              <Grid item xs={12} key={order.id}>
                <Card
                  elevation={4}
                  sx={{
                    borderRadius: 3,
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent>
                    {/* Order Header */}
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography variant="h6" fontWeight={600}>
                        Order #{order.id}
                      </Typography>

                      <Chip
                        icon={statusConfig[order.status].icon}
                        label={order.status}
                        color={statusConfig[order.status].color}
                        sx={{ fontWeight: 500 }}
                      />
                    </Box>

                    <Typography
                      color="text.secondary"
                      fontSize="0.9rem"
                      mt={0.5}
                    >
                      Order Date: {order.date}
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    {/* Items */}
                    <Typography fontWeight={600} mb={1}>
                      Items
                    </Typography>

                    <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                      {order.items.map((item, index) => (
                        <li key={index}>
                          <Typography variant="body2">
                            {item}
                          </Typography>
                        </li>
                      ))}
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    {/* Footer */}
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography variant="h6" fontWeight={700}>
                        ₹{order.total}
                      </Typography>

                      <Button
                        variant="outlined"
                        startIcon={<LocalShippingIcon />}
                        size="small"
                      >
                        Track Order
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default Orders;
