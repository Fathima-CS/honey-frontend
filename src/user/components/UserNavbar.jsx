import React, { useContext, useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Popper,
  Paper,
  Grid,
} from '@mui/material';

import {
  ShoppingCart,
  AccountCircle,
  Menu as MenuIcon,
} from '@mui/icons-material';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { CartContext } from '../../context/CartContext';

function UserNavbar() {
  const { logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  // ✅ keep state (UI unchanged)
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [shopAnchor, setShopAnchor] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // ✅ keep token in sync (logout aware)
  useEffect(() => {
    const syncToken = () => {
      setToken(sessionStorage.getItem("token"));
    };

    window.addEventListener("storage", syncToken);
    syncToken();

    return () => {
      window.removeEventListener("storage", syncToken);
    };
  }, []);

  /* PROFILE MENU */
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();                 // clears sessionStorage
    setToken(null);           // 🔥 force re-render
    handleMenuClose();
    navigate('/');
  };

  /* MOBILE DRAWER */
  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  /* SHOP HOVER */
  const handleShopOpen = (event) => {
    setShopAnchor(event.currentTarget);
  };

  const handleShopClose = () => {
    setShopAnchor(null);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Products', path: '/products' },
    { text: 'Cart', path: '/cart' },
    { text: 'Orders', path: '/orders' },
  ];

  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
          >
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <AppBar position="static" sx={{ backgroundColor: '#E9AB17' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img
              src="https://i.pinimg.com/1200x/45/98/95/459895aab2a452a6333c4b32bd8454d8.jpg"
              alt="HoneyHub"
              style={{ height: 40, marginRight: 12 }}
            />
            <Typography variant="h6" fontWeight={600}>
              HoneyHub
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button
              color="inherit"
              component={Link}
              to="/products"
              onMouseEnter={handleShopOpen}
            >
              Products
            </Button>
            <Button color="inherit" component={Link} to="/orders">Orders</Button>
            <Button color="inherit" component={Link} to="/process">Process</Button>
          </Box>

          <IconButton color="inherit" component={Link} to="/cart">
            <Badge badgeContent={cart?.length || 0} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>

          {/* ✅ LOGIN / PROFILE SWITCH */}
          {token ? (
            <>
              <IconButton color="inherit" onClick={handleProfileMenuOpen}>
                <AccountCircle sx={{ fontSize: 32 }} />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                <MenuItem component={Link} to="/seller" onClick={handleMenuClose}>
                  I want to be a Seller
                </MenuItem>
                <MenuItem component={Link} to="/buyer/dashboard" onClick={handleMenuClose}>
                  My Orders
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>

      {/* ================= SHOP MEGA MENU ================= */}
      <Popper
        open={Boolean(shopAnchor)}
        anchorEl={shopAnchor}
        placement="bottom-start"
        sx={{ zIndex: 1300 }}
        onMouseLeave={handleShopClose}
      >
        <Paper sx={{ width: '100vw', p: 4 }}>
          <Grid container spacing={6}>
            <MegaColumn title="Honey Varieties" items={[
              'Sunflower Honey','Forest Honey','Acacia Honey',
              'Sidr / Wild Berry Honey','Eucalyptus Honey','Ajwain Honey','Cotton Honey'
            ]}/>
            <MegaColumn title="Honey Delicacies" items={[
              'Honey & Nuts','Honey Ginger Tea','Honey Lemon Jelly',
              'Honey Peanut Butter','Honey Fruit Spreads'
            ]}/>
            <MegaColumn title="Skin Care" items={[
              'Honey Lemongrass Soap','Honey Charcoal Soap','Honey Milk & Rose Soap'
            ]}/>
            <MegaColumn title="Honey Medicines" items={[
              'Honey Tonic','Honey Brain Tonic','Bee Pollens'
            ]}/>
          </Grid>
        </Paper>
      </Popper>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

/* ================= MEGA MENU COLUMN ================= */
const MegaColumn = ({ title, items }) => (
  <Grid item xs={12} md={3}>
    <Typography fontWeight={600} mb={2}>{title}</Typography>
    {items.map((item) => (
      <Typography
        key={item}
        sx={{
          fontSize: '0.9rem',
          mb: 1,
          cursor: 'pointer',
          '&:hover': { color: '#7cb342' },
        }}
      >
        {item}
      </Typography>
    ))}
  </Grid>
);

export default UserNavbar;
