import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box, Avatar } from '@mui/material';
import { Notifications, AccountCircle, Logout } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { AuthContext } from '../../context/AuthContext';

function AdminNavbar({ onMenuClick }) {
  const { user, logout } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'primary.main', boxShadow: 2 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <Menu />
        </IconButton>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img src="https://i.pinimg.com/1200x/45/98/95/459895aab2a452a6333c4b32bd8454d8.jpg" alt="HoneyHub Logo" style={{ height: 40, marginRight: 16 }} />
          <Typography variant="h6" noWrap>
            HoneyHub Admin
          </Typography>
        </Box>
        <IconButton color="inherit">
          <Notifications />
        </IconButton>
        <IconButton color="inherit" onClick={handleProfileMenuOpen}>
          <Avatar sx={{ bgcolor: 'secondary.main' }}>
            {user?.name?.charAt(0).toUpperCase() || 'A'}
          </Avatar>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>
            <Logout sx={{ mr: 1 }} />
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

AdminNavbar.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
};

export default AdminNavbar;