import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
  Divider,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import UserNavbar from '../components/UserNavbar';
import Footer from '../components/Footer';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Clear previous data
    localStorage.removeItem('userRole');
    localStorage.setItem('userEmail', email);

    // 🔐 ADMIN LOGIN (fixed)
    if (email === 'admin@honeyhub.com' && password === 'admin123') {
      localStorage.setItem('userRole', 'admin');
      navigate('/admin/dashboard');
      return;
    }

    // If role already selected before
    const role = localStorage.getItem('userRole');

    if (role === 'seller') {
      navigate('/seller/dashboard');
    } else if (role === 'user') {
      navigate('/user/dashboard');
    } else {
      navigate('/select-role');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background:
          'linear-gradient(135deg, rgba(255,236,179,0.9), rgba(255,248,225,1))',
      }}
    >
      <UserNavbar />

      <Box
        sx={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper sx={{ p: 4, maxWidth: 420, width: '100%' }}>
          <Typography variant="h4" align="center" mb={1}>
            Login
          </Typography>

          {error && <Alert severity="error">{error}</Alert>}

          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              label="Email"
              sx={{ mb: 2 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              sx={{ mb: 3 }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" fullWidth variant="contained">
              Login
            </Button>
          </form>

          <Divider sx={{ my: 3 }}>OR</Divider>

          <Button fullWidth variant="outlined" startIcon={<GoogleIcon />}>
            Continue with Google
          </Button>

          <Typography align="center" mt={2}>
            Don’t have an account? <Link to="/register">Register</Link>
          </Typography>
        </Paper>
      </Box>

      <Footer />
    </Box>
  );
}

export default Login;
