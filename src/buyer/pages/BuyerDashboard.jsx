import React, { useEffect, useState } from "react";

import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
} from "@mui/material";

/* API */
import { getUserBoughtHoneyAPI } from "../../services/allAPI";

function BuyerDashboard() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(orders);
  
  const fetchBoughtHoney = async () => {
    try {
      // 🔐 Get token correctly
      const user = JSON.parse(sessionStorage.getItem("user"));
      const token = sessionStorage.getItem("token");

      if (!token) {
        console.error("Token not found");
        return;
      }

      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const result = await getUserBoughtHoneyAPI(reqHeader);
      setOrders(result?.data || []);
    } catch (error) {
      console.error("Failed to fetch bought items", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBoughtHoney();
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #FFF8E1 0%, #F3E5AB 100%)",
        p: 4,
      }}
    >
      <Typography variant="h4" fontWeight={700} mb={3}>
        My Purchased Honey 🍯
      </Typography>

      <Card elevation={4} sx={{ borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h6" mb={2}>
            Purchase History
          </Typography>

          <Divider sx={{ mb: 2 }} />

          {loading ? (
            <Typography>Loading...</Typography>
          ) : orders.length === 0 ? (
            <Typography color="text.secondary">
              You haven’t purchased anything yet.
            </Typography>
          ) : (
            orders.map((order) => (
              <Box key={order._id} mb={2}>
                <Typography fontWeight={600}>
                  {order.productId?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Quantity: {order.quantity}
                </Typography>
                <Typography
                  variant="body2"
                  color={
                    order.status === "Delivered"
                      ? "success.main"
                      : order.status === "Shipped"
                      ? "info.main"
                      : "warning.main"
                  }
                >
                  Status: {order.status}
                </Typography>

                <Divider sx={{ my: 1 }} />
              </Box>
            ))
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default BuyerDashboard;
