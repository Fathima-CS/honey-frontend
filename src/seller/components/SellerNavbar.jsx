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
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <>
      {/* 🔔 MARQUEE ANNOUNCEMENT */}
      <Box
        sx={{
          width: "100%",
          background:
            "linear-gradient(90deg, #FFD54F, #FFB300)",
          color: "#3E2723",
          overflow: "hidden",
          whiteSpace: "nowrap",
          py: 0.5,
        }}
      >
        <Typography
          component="div"
          sx={{
            display: "inline-block",
            px: 2,
            animation: "marquee 18s linear infinite",
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          🍯 Welcome Seller! New orders are waiting • Keep stock updated •
          Faster delivery = more sales • HoneyHub Seller Dashboard 🍯
        </Typography>

        {/* Marquee animation */}
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
          `}
        </style>
      </Box>

      {/* 🔥 MAIN NAVBAR */}
      <AppBar
        position="sticky"
        elevation={4}
        sx={{
          backdropFilter: "blur(10px)",
          background:
            "linear-gradient(90deg, #5B3A1C 0%, #8D6E3F 100%)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* LOGO / TITLE */}
          <Typography
            variant="h6"
            fontWeight={800}
            component={Link}
            to="/seller"
            sx={{
              textDecoration: "none",
              color: "#FFF8E1",
              letterSpacing: 1,
            }}
          >
            🍯 HoneyHub Seller
          </Typography>

          {/* NAV LINKS */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {[
              {
                text: "Dashboard",
                icon: <DashboardIcon />,
                path: "/seller",
              },
              {
                text: "Products",
                icon: <InventoryIcon />,
                path: "/seller/products",
              },
              {
                text: "Orders",
                icon: <ShoppingCartIcon />,
                path: "/seller/orders",
              },
              {
                text: "Add Product",
                icon: <AddCircleOutlineIcon />,
                path: "/seller/add-product",
              },
            ].map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                startIcon={item.icon}
                sx={{
                  color: "#FFF8E1",
                  fontWeight: 600,
                  borderRadius: 3,
                  px: 2,
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.15)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* PROFILE MENU */}
          <Box>
            <IconButton onClick={handleMenuOpen}>
              <Avatar
                sx={{
                  bgcolor: "#FBE7B2",
                  color: "#5B3A1C",
                  fontWeight: 800,
                  border: "2px solid #FFD54F",
                }}
              >
                S
              </Avatar>
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  borderRadius: 3,
                  mt: 1,
                  minWidth: 160,
                },
              }}
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
    </>
  );
};

export default SellerNavbar;
