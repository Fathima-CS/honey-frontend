import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Stack,
  Divider,
  Chip,
  CircularProgress,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { getSellerOrdersAPI } from "../../services/allAPI";

const SellerOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSellerOrders = async () => {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) return;

      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const result = await getSellerOrdersAPI(reqHeader);
      setOrders(result?.data || []);
    } catch (error) {
      console.error("Failed to fetch seller orders", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSellerOrders();
  }, []);

  return (
    <Box p={2}>
      {/* PAGE HEADER */}
      <Stack direction="row" spacing={1.5} alignItems="center" mb={4}>
        <ShoppingBagIcon color="primary" />
        <Typography variant="h4" fontWeight={700}>
          Customer Orders
        </Typography>
      </Stack>

      {/* LOADING */}
      {loading && (
        <Stack alignItems="center" mt={5}>
          <CircularProgress />
          <Typography mt={2}>Loading orders...</Typography>
        </Stack>
      )}

      {/* EMPTY STATE */}
      {!loading && orders.length === 0 && (
        <Typography color="text.secondary">
          No orders received yet.
        </Typography>
      )}

      {/* ORDERS LIST */}
      {!loading && orders.length > 0 && (
        <Grid container spacing={3}>
          {orders.map((order) => (
            <Grid item xs={12} key={order._id}>
              <Card elevation={4} sx={{ borderRadius: 3 }}>
                <CardContent>
                  {/* HEADER */}
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    justifyContent="space-between"
                    alignItems={{ sm: "center" }}
                    spacing={2}
                  >
                    <Box>
                      <Typography fontWeight={700}>
                        Order #{order._id.slice(-6).toUpperCase()}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </Typography>
                    </Box>

                    <Chip
                      icon={<CheckCircleIcon />}
                      label={order.status.toUpperCase()}
                      color="success"
                      variant="outlined"
                    />
                  </Stack>

                  <Divider sx={{ my: 2 }} />

                  {/* BUYER */}
                  <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                    <PersonIcon color="action" />
                    <Typography fontWeight={600}>
                      Buyer: #{order.buyerId}
                    </Typography>
                  </Stack>

                  {/* PRODUCT */}
                  <Typography fontWeight={600} mb={0.5}>
                    Item
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {order.name} × 1
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  {/* TOTAL */}
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    color="secondary.main"
                    align="right"
                  >
                    Total: ₹{order.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default SellerOrders;
