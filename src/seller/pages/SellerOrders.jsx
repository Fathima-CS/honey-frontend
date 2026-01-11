import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Stack,
  Divider,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

const SellerOrders = () => {
  /* FRONTEND-ONLY USER ORDERS */
  const orders = [
    {
      id: "ORD-501",
      customer: "Ayesha Rahman",
      date: "12 Sep 2025",
      status: "Delivered",
      total: 1098,
      items: [
        { name: "Wild Forest Honey", qty: 1 },
        { name: "Organic Raw Honey", qty: 1 },
      ],
    },
    {
      id: "ORD-502",
      customer: "Rahul Kumar",
      date: "15 Sep 2025",
      status: "Processing",
      total: 699,
      items: [{ name: "Tribal Honey", qty: 1 }],
    },
    {
      id: "ORD-503",
      customer: "Sneha Menon",
      date: "18 Sep 2025",
      status: "Shipped",
      total: 1198,
      items: [
        { name: "Organic Raw Honey", qty: 2 },
      ],
    },
  ];

  const statusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "success";
      case "Shipped":
        return "info";
      default:
        return "warning";
    }
  };

  const statusIcon = (status) => {
    switch (status) {
      case "Delivered":
        return <CheckCircleIcon />;
      case "Shipped":
        return <LocalShippingIcon />;
      default:
        return <HourglassBottomIcon />;
    }
  };

  return (
    <Box>
      {/* PAGE TITLE */}
      <Stack direction="row" spacing={1.5} alignItems="center" mb={4}>
        <ShoppingBagIcon color="primary" />
        <Typography variant="h4" fontWeight={700}>
          Customer Orders
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        {orders.map((order) => (
          <Grid size={{ xs: 12 }} key={order.id}>
            <Card elevation={4} sx={{ borderRadius: 3 }}>
              <CardContent>
                {/* HEADER */}
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  justifyContent="space-between"
                  alignItems={{ md: "center" }}
                  spacing={2}
                >
                  <Box>
                    <Typography fontWeight={700}>
                      Order #{order.id}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {order.date}
                    </Typography>
                  </Box>

                  <Chip
                    icon={statusIcon(order.status)}
                    label={order.status}
                    color={statusColor(order.status)}
                  />
                </Stack>

                <Divider sx={{ my: 2 }} />

                {/* CUSTOMER */}
                <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                  <PersonIcon color="action" />
                  <Typography fontWeight={600}>
                    {order.customer}
                  </Typography>
                </Stack>

                {/* ITEMS */}
                <Typography fontWeight={600} mb={1}>
                  Items
                </Typography>

                {order.items.map((item, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    color="text.secondary"
                  >
                    • {item.name} × {item.qty}
                  </Typography>
                ))}

                <Divider sx={{ my: 2 }} />

                {/* TOTAL */}
                <Typography
                  variant="h6"
                  fontWeight={700}
                  color="secondary.main"
                  align="right"
                >
                  Total: ₹{order.total}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SellerOrders;
