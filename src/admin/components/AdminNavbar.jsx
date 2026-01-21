import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Avatar,
  Divider,
} from "@mui/material";
import {
  Notifications,
  AccountCircle,
  Logout,
  Menu as MenuIcon,
} from "@mui/icons-material";
import PropTypes from "prop-types";
import { AuthContext } from "../../context/AuthContext";

function AdminNavbar({ onMenuClick }) {
  const { user, logout } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => setAnchorEl(null);

  const handleLogout = () => {
    logout();
    handleMenuClose();
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "linear-gradient(135deg, #FB8C00, #F59E0B)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
      }}
    >
      <Toolbar sx={{ minHeight: 72, px: 3 }}>
        {/* MOBILE MENU */}
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* LOGO */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <img
            src="https://i.pinimg.com/1200x/45/98/95/459895aab2a452a6333c4b32bd8454d8.jpg"
            alt="HoneyHub"
            style={{ height: 40, borderRadius: 8 }}
          />
          <Typography variant="h6" fontWeight={700}>
            HoneyHub Admin
          </Typography>
        </Box>

        {/* MARQUEE TEXT */}
        <Box
          sx={{
            flexGrow: 1,
            mx: 4,
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          <Typography
            sx={{
              display: "inline-block",
              paddingLeft: "100%",
              animation: "marquee 15s linear infinite",
              fontWeight: 500,
            }}
          >
            🚀 Welcome to HoneyHub Admin Dashboard — Monitor campaigns, users,
            donations & platform activities in real time!
          </Typography>
        </Box>

        {/* ACTIONS */}
        <IconButton color="inherit" sx={{ mr: 1 }}>
          <Notifications />
        </IconButton>

        <IconButton onClick={handleProfileMenuOpen}>
          <Avatar
            sx={{
              bgcolor: "#111827",
              color: "#FBBF24",
              fontWeight: 700,
            }}
          >
            {user?.name?.charAt(0).toUpperCase() || "A"}
          </Avatar>
        </IconButton>

        {/* PROFILE MENU */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          PaperProps={{
            sx: {
              mt: 1.5,
              borderRadius: 3,
              minWidth: 180,
            },
          }}
        >
          <MenuItem onClick={handleMenuClose}>
            <AccountCircle sx={{ mr: 1 }} /> Profile
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleLogout} sx={{ color: "#EF4444" }}>
            <Logout sx={{ mr: 1 }} /> Logout
          </MenuItem>
        </Menu>
      </Toolbar>

      {/* MARQUEE KEYFRAMES */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </AppBar>
  );
}

AdminNavbar.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
};

export default AdminNavbar;
