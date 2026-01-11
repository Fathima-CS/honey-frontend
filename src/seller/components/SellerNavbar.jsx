import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { Link, useNavigate } from "react-router-dom";

const SellerNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // frontend-only logout
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <AppBar
      position="sticky"
      elevation={2}
      sx={{
        background:
          "linear-gradient(90deg, #5B3A1C 0%, #8D6E3F 100%)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* LOGO / TITLE */}
        <Typography
          variant="h6"
          fontWeight={700}
          component={Link}
          to="/seller"
          sx={{
            textDecoration: "none",
            color: "#FFF8E1",
          }}
        >
          HoneyHub Seller
        </Typography>

        {/* NAV LINKS */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <Button
            color="inherit"
            startIcon={<DashboardIcon />}
            component={Link}
            to="/seller"
          >
            Dashboard
          </Button>

          <Button
            color="inherit"
            startIcon={<InventoryIcon />}
            component={Link}
            to="/seller/products"
          >
            Products
          </Button>

          <Button
            color="inherit"
            startIcon={<ShoppingCartIcon />}
            component={Link}
            to="/seller/orders"
          >
            Orders
          </Button>

          <Button
            color="inherit"
            startIcon={<AddCircleOutlineIcon />}
            component={Link}
            to="/seller/add-product"
          >
            Add Product
          </Button>
        </Box>

        {/* PROFILE MENU */}
        <Box>
          <IconButton onClick={handleMenuOpen}>
            <Avatar
              sx={{
                bgcolor: "#FBE7B2",
                color: "#5B3A1C",
                fontWeight: 700,
              }}
            >
              S
            </Avatar>
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <PersonIcon fontSize="small" sx={{ mr: 1 }} />
              Profile
            </MenuItem>

            <MenuItem onClick={handleLogout}>
              <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SellerNavbar;
