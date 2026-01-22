import React, { useState, useEffect } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
  Typography,
} from "@mui/material";
import {
  Dashboard,
  People,
  Verified,
  ShoppingCart,
  AccountCircle,
  Logout,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const drawerWidth = 260;

function AdminSidebar({ mobileOpen, handleDrawerToggle }) {
  const location = useLocation();
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(
      sessionStorage.getItem("user") // ✅ use correct key
    );

    if (storedUser?._id) {
      setUserId(storedUser._id);
    }
  }, []);

  const menuItems = [
    {
      text: "Dashboard",
      icon: <Dashboard />,
      path: "/admin",
    },
    {
      text: "Manage Users",
      icon: <People />,
      path: "/manage-users",
    },
    {
      text: "Verify Products",
      icon: <Verified />,
      path: "/verify-products",
    },
    {
      text: "Orders",
      icon: <ShoppingCart />,
      path: "/admin/orders",
    },
    {
      text: "Profile",
      icon: <AccountCircle />,
      path: `/profile/${userId}` 
    },
    
  ];

  const drawerContent = (
    <Box>
      {/* BRAND HEADER */}
      <Toolbar
        sx={{
          height: 72,
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          px: 2,
          background:
            "linear-gradient(135deg, #FB8C00, #F59E0B)",
        }}
      >
        <img
          src="https://i.pinimg.com/1200x/45/98/95/459895aab2a452a6333c4b32bd8454d8.jpg"
          alt="HoneyHub"
          style={{ height: 40, borderRadius: 8 }}
        />
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{ color: "#fff", letterSpacing: 0.5 }}
        >
          HoneyHub
        </Typography>
      </Toolbar>

      {/* MENU */}
      <List sx={{ mt: 2, px: 1 }}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <ListItem
              key={item.text}
              component={Link}
              to={item.path}
              sx={{
                mb: 1,
                px: 2,
                py: 1.2,
                borderRadius: 2,
                color: isActive ? "#FB8C00" : "#374151",
                backgroundColor: isActive
                  ? "rgba(251,140,0,0.12)"
                  : "transparent",
                transition: "all 0.25s ease",
                "&:hover": {
                  backgroundColor: "rgba(251,140,0,0.15)",
                  transform: "translateX(6px)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: isActive ? "#FB8C00" : "#6B7280",
                }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: isActive ? 600 : 500,
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: 0 }}>
      {/* MOBILE */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#fff",
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* DESKTOP */}
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#fff",
            boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
            borderRight: "1px solid #f1f5f9",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}

AdminSidebar.propTypes = {
  mobileOpen: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default AdminSidebar;
