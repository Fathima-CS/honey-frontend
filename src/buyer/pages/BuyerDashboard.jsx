import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  Stack,
} from "@mui/material";

import { getUserBoughtHoneyAPI } from "../../services/allAPI";

function BuyerDashboard() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBoughtHoney = async () => {
    try {
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
      console.error("Failed to fetch bought honey", error);
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
              <Box key={order._id} mb={3}>
                <Stack spacing={0.5}>
                  <Typography fontWeight={600}>
                    {order.name}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Price: ₹{order.price}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Purchased on:{" "}
                    {new Date(order.createdAt).toLocaleDateString()}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="success.main"
                    fontWeight={600}
                  >
                    Status: {order.status.toUpperCase()?'delivered':'pending'}
                  </Typography>
                </Stack>

                <Divider sx={{ my: 2 }} />
              </Box>
            ))
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default BuyerDashboard;
