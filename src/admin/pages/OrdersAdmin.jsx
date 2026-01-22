import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { getAllOrdersAdminAPI } from "../../services/allAPI";

function OrdersAdmin() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const result = await getAllOrdersAdminAPI(reqHeader);
      setOrders(result.data || []);
    } catch (error) {
      console.error("Failed to fetch admin orders", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom color="primary">
        Admin Order History
      </Typography>

      {loading && <Typography>Loading orders...</Typography>}

      {!loading && orders.length === 0 && (
        <Typography>No orders found.</Typography>
      )}

      {!loading &&
        orders.map((order) => (
          <Box
            key={order._id}
            sx={{
              border: "1px solid #ddd",
              borderRadius: 2,
              p: 2,
              mb: 2,
            }}
          >
            <Typography fontWeight={600}>
              Order #{order._id.slice(-6).toUpperCase()}
            </Typography>

            <Typography>
              Product: {order.name}
            </Typography>

            <Typography>
              Amount: ₹{order.price}
            </Typography>

            {/* BUYER */}
            <Typography>
              Buyer: {order.buyerId?.username}
            </Typography>

            {/* SELLER */}
            <Typography>
              Seller: {order.sellerId?.username} ({order.sellerId?.email})
            </Typography>

            <Typography>
              Status: {order.status}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Date: {new Date(order.createdAt).toLocaleDateString()}
            </Typography>
          </Box>
        ))}
    </Box>
  );
}

export default OrdersAdmin;
