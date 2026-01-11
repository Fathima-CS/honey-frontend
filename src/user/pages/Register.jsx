import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import UserNavbar from '../components/UserNavbar';
import Footer from '../components/Footer';

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = form;

    if (!name || !email || !password) {
      setError('All fields are required');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      setError('Email already registered');
      return;
    }

    users.push({ name, email, password, role: 'user' });
    localStorage.setItem('users', JSON.stringify(users));

    setError('');
    setSuccess('Registration successful');

    setTimeout(() => navigate('/login'), 1200);
  };

  const footerLinks = [
    { text: 'Home', path: '/' },
    { text: 'Login', path: '/login' },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background:
          'linear-gradient(135deg, rgba(255,236,179,0.9), rgba(255,248,225,1))',
      }}
    >
      <UserNavbar />

      {/* Register Section */}
      <Box
        sx={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
        }}
      >
        <Paper
          elevation={8}
          sx={{
            p: 4,
            width: '100%',
            maxWidth: 420,
            borderRadius: 3,
            background: 'rgba(255,193,7,0.18)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,193,7,0.35)',
            transition: 'all 0.35s ease',
            '&:hover': {
              transform: 'translateY(-6px)',
              boxShadow: '0 18px 45px rgba(255,193,7,0.35)',
              background: 'rgba(255,193,7,0.22)',
            },
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: 600, color: '#5D4037', mb: 1 }}
          >
            Join HoneyHub 🍯
          </Typography>

          <Typography
            align="center"
            sx={{ color: '#6D4C41', mb: 3, fontSize: '0.95rem' }}
          >
            Create your account and explore pure honey
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {success}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <TextField
              fullWidth
              label="Full Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              required
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  transition: 'all 0.3s ease',
                  '&:hover fieldset': {
                    borderColor: '#F9A825',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#F9A825',
                    boxShadow: '0 0 0 2px rgba(249,168,37,0.25)',
                  },
                },
              }}
            />

            {/* Email */}
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              required
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  transition: 'all 0.3s ease',
                  '&:hover fieldset': {
                    borderColor: '#F9A825',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#F9A825',
                    boxShadow: '0 0 0 2px rgba(249,168,37,0.25)',
                  },
                },
              }}
            />

            {/* Password */}
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              required
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  transition: 'all 0.3s ease',
                  '&:hover fieldset': {
                    borderColor: '#F9A825',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#F9A825',
                    boxShadow: '0 0 0 2px rgba(249,168,37,0.25)',
                  },
                },
              }}
            />

            {/* Register Button */}
            <Button
              type="submit"
              fullWidth
              size="large"
              sx={{
                backgroundColor: 'rgba(249,168,37,0.9)',
                color: '#3E2723',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(249,168,37,1)',
                  boxShadow: '0 8px 20px rgba(249,168,37,0.5)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Create Account
            </Button>
          </form>

          <Typography align="center" sx={{ mt: 3, fontSize: '0.9rem' }}>
            Already have an account?{' '}
            <Link
              to="/login"
              style={{
                color: '#F57F17',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Login here
            </Link>
          </Typography>
        </Paper>
      </Box>

      <Footer links={footerLinks} />
    </Box>
  );
}

export default Register;
