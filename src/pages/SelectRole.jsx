import React from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function SelectRole() {
  const navigate = useNavigate();

  const chooseRole = (role) => {
    localStorage.setItem('userRole', role);

    if (role === 'seller') {
      navigate('/seller/dashboard');
    } else {
      navigate('/user/dashboard');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper sx={{ p: 4, textAlign: 'center', width: 300 }}>
        <Typography variant="h5" mb={3}>
          Select Your Role
        </Typography>

        <Button
          fullWidth
          sx={{ mb: 2 }}
          variant="contained"
          onClick={() => chooseRole('seller')}
        >
          Seller
        </Button>

        <Button
          fullWidth
          variant="outlined"
          onClick={() => chooseRole('user')}
        >
          User
        </Button>
      </Paper>
    </Box>
  );
}

export default SelectRole;
