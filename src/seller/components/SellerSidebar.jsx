// src/seller/components/SellerSidebar.jsx
import React, { useEffect, useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";

import { NavLink } from "react-router-dom";

const drawerWidth = 260;

const SellerSidebar = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    console.log("Stored user:", storedUser);

    if (storedUser?._id) {
      setUserId(storedUser._id);
    }
  }, []);

  const menu = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/seller" },
    {
      text: "My Products",
      icon: <InventoryIcon />,
      path: "/seller/products",
    },
    {
      text: "Add Product",
      icon: <AddBoxIcon />,
      path: "/seller/add-product",
    },
    { text: "Orders", icon: <ShoppingBagIcon />, path: "/seller/orders" },
  ];

  // ✅ Add Profile link ONLY when userId exists
  if (userId) {
    menu.push({
      text: "Profile",
      icon: <PersonIcon />,
      path: `/seller/profile/${userId}`,
    });
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          background:
            "linear-gradient(180deg, #FFF8E1 0%, #F6D365 100%)",
          borderRight: "1px solid #f1c40f",
        },
      }}
    >
      {/* LOGO */}
      <Box
        sx={{
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <Typography
          variant="h6"
          fontWeight={800}
          sx={{ color: "#6D4C41", letterSpacing: 1 }}
        >
          🍯 HoneyHub
        </Typography>
      </Box>

      {/* MENU */}
      <List sx={{ px: 1, mt: 2 }}>
        {menu.map((item) => (
          <ListItemButton
            key={item.text}
            component={NavLink}
            to={item.path}
            sx={{
              borderRadius: 2,
              mb: 1,
              color: "#5D4037",
              transition: "all 0.25s ease",
              "& .MuiListItemIcon-root": {
                color: "#6D4C41",
              },
              "&.active": {
                background:
                  "linear-gradient(90deg, #FFD54F, #FFB300)",
                color: "#3E2723",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                "& .MuiListItemIcon-root": {
                  color: "#3E2723",
                },
              },
              "&:hover": {
                backgroundColor: "rgba(255, 193, 7, 0.35)",
                transform: "translateX(6px)",
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 42 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontWeight: 600,
                fontSize: 15,
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default SellerSidebar;
