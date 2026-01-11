import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Stack,
  Divider,
  Button,
  Chip,
} from "@mui/material";

import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

import SellerStats from "../components/SellerStats";
import SellerNavbar from "../components/SellerNavbar";
import Footer from "../../user/components/Footer";

const SellerDashboard = () => {
  /* FRONTEND-ONLY DATA */

  const products = [
    {
      id: 1,
      name: "Wild Forest Honey",
      price: 499,
      stock: 32,
      status: "Active",
      image:
        "https://i.pinimg.com/1200x/66/dc/c0/66dcc0093fe0779e7425287534908ad7.jpg",
    },
    {
      id: 2,
      name: "Organic Raw Honey",
      price: 599,
      stock: 18,
      status: "Low Stock",
      image:
        "https://i.pinimg.com/1200x/28/fc/6a/28fc6a30e8c8e3ddf9f7a63b1f6a6a2f.jpg",
    },
    {
      id: 3,
      name: "Tribal Honey",
      price: 699,
      stock: 0,
      status: "Out of Stock",
      image:
        "https://i.pinimg.com/1200x/91/1f/0e/911f0efb70b9f87d3baf0d8c47d6a7f1.jpg",
    },
  ];

  const recentOrders = [
    { id: "ORD-201", product: "Wild Forest Honey", qty: 2, status: "Shipped" },
    { id: "ORD-202", product: "Organic Raw Honey", qty: 1, status: "Processing" },
    { id: "ORD-203", product: "Tribal Honey", qty: 3, status: "Delivered" },
  ];

  return (
    <>
      

      {/* PAGE BACKGROUND */}
      <Box
        sx={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #FFF8E1 0%, #F3E5AB 100%)",
          p: 4,
        }}
      >
        {/* TITLE */}
        <Typography variant="h4" fontWeight={700} mb={4}>
          Seller Dashboard
        </Typography>

        {/* STATS */}
        <Grid container spacing={3} mb={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <SellerStats title="Products" value="24" icon={<InventoryIcon />} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <SellerStats title="Orders" value="68" icon={<ShoppingCartIcon />} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <SellerStats
              title="Revenue"
              value="₹48,200"
              icon={<MonetizationOnIcon />}
            />
          </Grid>
        </Grid>

        {/* PERFORMANCE + TOP PRODUCT */}
        <Grid container spacing={3} mb={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={4} sx={{ borderRadius: 3 }}>
              <CardContent>
                <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                  <TrendingUpIcon color="success" />
                  <Typography variant="h6">Business Performance</Typography>
                </Stack>

                <Typography color="text.secondary">
                  Your honey sales are growing steadily this month.
                </Typography>

                <Stack spacing={1} mt={2}>
                  <Typography>✔ 18% increase in sales</Typography>
                  <Typography>✔ 12 new customers</Typography>
                  <Typography>✔ Faster order fulfillment</Typography>
                </Stack>

                <Button
                  variant="outlined"
                  startIcon={<AddIcon />}
                  sx={{ mt: 3 }}
                >
                  Add New Product
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={4} sx={{ borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6" mb={2}>
                  Top Selling Product
                </Typography>

                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar
                    variant="rounded"
                    src={products[0].image}
                    sx={{ width: 80, height: 80 }}
                  />
                  <Box>
                    <Typography fontWeight={600}>
                      {products[0].name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      120 units sold
                    </Typography>
                    <Typography color="secondary.main" fontWeight={600}>
                      ₹18,000 Revenue
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* RECENT ORDERS */}
        <Card elevation={4} sx={{ borderRadius: 3, mb: 4 }}>
          <CardContent>
            <Stack direction="row" spacing={1} alignItems="center" mb={2}>
              <LocalShippingIcon color="primary" />
              <Typography variant="h6">Recent Orders</Typography>
            </Stack>

            <Divider sx={{ mb: 2 }} />

            {recentOrders.map((order) => (
              <Box
                key={order.id}
                display="flex"
                justifyContent="space-between"
                mb={1.5}
              >
                <Box>
                  <Typography fontWeight={500}>{order.product}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {order.id} | Qty: {order.qty}
                  </Typography>
                </Box>
                <Typography
                  fontWeight={600}
                  color={
                    order.status === "Delivered"
                      ? "success.main"
                      : "warning.main"
                  }
                >
                  {order.status}
                </Typography>
              </Box>
            ))}
          </CardContent>
        </Card>

        {/* ALL PRODUCTS */}
        <Typography variant="h5" fontWeight={600} mb={3}>
          My Products
        </Typography>

        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
              <Card
                elevation={4}
                sx={{
                  borderRadius: 4,
                  background:
                    "linear-gradient(180deg, #FFFDF6 0%, #FBE7B2 100%)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 8,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={product.image}
                  alt={product.name}
                />

                <CardContent>
                  <Typography fontWeight={700}>
                    {product.name}
                  </Typography>

                  <Typography color="secondary.main" fontWeight={600}>
                    ₹{product.price}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Stock: {product.stock}
                  </Typography>

                  <Chip
                    label={product.status}
                    size="small"
                    sx={{ my: 1 }}
                    color={
                      product.status === "Active"
                        ? "success"
                        : product.status === "Low Stock"
                        ? "warning"
                        : "error"
                    }
                  />

                  <Stack direction="row" spacing={1}>
                    <Button
                      size="small"
                      variant="outlined"
                      startIcon={<VisibilityIcon />}
                      fullWidth
                    >
                      View
                    </Button>
                    <Button
                      size="small"
                      variant="contained"
                      startIcon={<EditIcon />}
                      fullWidth
                    >
                      Edit
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Footer
        links={[
          { text: "Dashboard", path: "/seller" },
          { text: "Add Product", path: "/seller/add-product" },
          { text: "Orders", path: "/seller/orders" },
        ]}
      />
    </>
  );
};

export default SellerDashboard;
