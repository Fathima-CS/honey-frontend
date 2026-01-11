import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Box } from '@mui/material';
import { Dashboard, People, Verified, ShoppingCart, AccountCircle } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const drawerWidth = 240;

function AdminSidebar({ mobileOpen, handleDrawerToggle }) {
  const location = useLocation();

  const menuItems = [
    { text: 'Dashboard', icon: <Dashboard sx={{ color: 'primary.main' }} />, path: '/admin' },
    { text: 'Manage Users', icon: <People sx={{ color: 'secondary.main' }} />, path: '/admin/manage-users' },
    { text: 'Verify Products', icon: <Verified sx={{ color: 'accent.main' }} />, path: '/admin/verify-products' },
    { text: 'Orders', icon: <ShoppingCart sx={{ color: 'primary.main' }} />, path: '/admin/orders' },
    { text: 'Profile', icon: <AccountCircle sx={{ color: 'secondary.main' }} />, path: '/admin/profile' },
  ];

  const drawerContent = (
    <Box>
      <Toolbar>
        <img src="https://i.pinimg.com/1200x/45/98/95/459895aab2a452a6333c4b32bd8454d8.jpg" alt="HoneyHub" style={{ height: 40 }} />
      </Toolbar>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              '&.Mui-selected': {
                backgroundColor: 'primary.light',
                '&:hover': { backgroundColor: 'primary.light' },
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'background.paper' },
        }}
      >
        {drawerContent}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'background.paper' },
        }}
        open
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