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
  CircularProgress,
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";
// ⬇️ this API will be added later when backend is ready
// import { getUserOrdersAPI } from "../../services/allAPI";

const Orders = () => {
  const navigate = useNavigate();

  // ✅ CONSISTENT AUTH
  const user = JSON.parse(sessionStorage.getItem("existingUser"));
  const token = sessionStorage.getItem("token");

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔐 Block access if not logged in
  if (!user || !token) {
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

  // 🚧 TEMP: simulate paid order (until backend orders API is ready)
  useEffect(() => {
    setTimeout(() => {
      setOrders([
        {
          _id: "ORD-1001",
          createdAt: new Date(),
          status: "processing",
          totalAmount: 1250,
          items: [
            { name: "Wild Forest Honey", quantity: 1 },
            { name: "Organic Raw Honey", quantity: 2 },
          ],
        },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  const statusConfig = {
    delivered: {
      color: "success",
      icon: <CheckCircleIcon />,
    },
    processing: {
      color: "warning",
      icon: <HourglassBottomIcon />,
    },
    pending: {
      color: "info",
      icon: <HourglassBottomIcon />,
    },
  };

  return (
    <>
      <UserNavbar />

      <Box
        sx={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #FFF7E6 0%, #FDF1D6 100%)",
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          {/* Header */}
          <Stack direction="row" alignItems="center" spacing={1.5} mb={4}>
            <ReceiptLongIcon color="primary" />
            <Typography variant="h4" fontWeight={700}>
              My Orders
            </Typography>
          </Stack>

          {/* Loading */}
          {loading && (
            <Box display="flex" justifyContent="center" mt={6}>
              <CircularProgress />
            </Box>
          )}

          {/* No orders */}
          {!loading && orders.length === 0 && (
            <Typography textAlign="center" mt={6}>
              No orders found 🐝
            </Typography>
          )}

          <Grid container spacing={4}>
            {orders.map((order) => (
              <Grid item xs={12} key={order._id}>
                <Card elevation={4} sx={{ borderRadius: 3 }}>
                  <CardContent>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography variant="h6" fontWeight={600}>
                        Order #{order._id}
                      </Typography>

                      <Chip
                        icon={statusConfig[order.status]?.icon}
                        label={order.status}
                        color={statusConfig[order.status]?.color}
                        sx={{ fontWeight: 500 }}
                      />
                    </Box>

                    <Typography color="text.secondary" mt={0.5}>
                      Order Date:{" "}
                      {new Date(order.createdAt).toLocaleDateString()}
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    <Typography fontWeight={600} mb={1}>
                      Items
                    </Typography>

                    <Box component="ul" sx={{ pl: 2 }}>
                      {order.items.map((item, index) => (
                        <li key={index}>
                          <Typography variant="body2">
                            {item.name} × {item.quantity}
                          </Typography>
                        </li>
                      ))}
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography variant="h6" fontWeight={700}>
                        ₹{order.totalAmount}
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
