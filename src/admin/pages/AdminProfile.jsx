import React, { useState, useContext } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Grid,
  Paper,
  Divider,
  InputAdornment,
} from '@mui/material';
import {
  Save,
  PhotoCamera,
  Person,
  Email,
  Phone,
  LocationOn,
  Home,
} from '@mui/icons-material';
import { AuthContext } from '../../context/AuthContext';

function AdminProfile() {
  const { user, setUser } = useContext(AuthContext);

  const [profile, setProfile] = useState(
    user || {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      bio: '',
      avatar: '',
    }
  );

  const handleSave = () => {
    // Mock update
    setUser(profile);
    alert('Profile updated successfully');
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () =>
        setProfile({ ...profile, avatar: reader.result });
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        p: 3,
        background:
          'linear-gradient(135deg, rgba(248,249,252,1), rgba(240,244,250,1))',
      }}
    >
      <Typography
        variant="h4"
        fontWeight={600}
        align="center"
        sx={{ mb: 3 }}
      >
        Admin Profile
      </Typography>

      <Paper
        sx={{
          maxWidth: 900,
          mx: 'auto',
          p: 4,
          borderRadius: 3,
          background: 'rgba(255,255,255,0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.4)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        }}
      >
        <Grid container spacing={4}>
          {/* Avatar Section */}
          <Grid item xs={12} md={4} textAlign="center">
            <Avatar
              src={profile.avatar || '/assets/images/logo.png'}
              sx={{
                width: 140,
                height: 140,
                mx: 'auto',
                mb: 2,
                bgcolor: '#FB8C00',
                fontSize: 48,
              }}
            >
              {profile.name?.charAt(0)}
            </Avatar>

            <Button
              variant="outlined"
              component="label"
              startIcon={<PhotoCamera />}
              sx={{
                borderColor: '#FB8C00',
                color: '#FB8C00',
                '&:hover': {
                  borderColor: '#EF6C00',
                  backgroundColor: 'rgba(251,140,0,0.08)',
                },
              }}
            >
              Upload Photo
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleAvatarChange}
              />
            </Button>
          </Grid>

          {/* Profile Form */}
          <Grid item xs={12} md={8}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Personal Information
            </Typography>

            <TextField
              fullWidth
              label="Full Name"
              value={profile.name}
              onChange={(e) =>
                setProfile({ ...profile, name: e.target.value })
              }
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              label="Email Address"
              type="email"
              value={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              label="Phone Number"
              value={profile.phone}
              onChange={(e) =>
                setProfile({ ...profile, phone: e.target.value })
              }
              sx={{ mb: 3 }}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone />
                  </InputAdornment>
                ),
              }}
            />

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" sx={{ mb: 2 }}>
              Shipping Address
            </Typography>

            <TextField
              fullWidth
              label="Address"
              value={profile.address}
              onChange={(e) =>
                setProfile({ ...profile, address: e.target.value })
              }
              sx={{ mb: 2 }}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Home />
                  </InputAdornment>
                ),
              }}
            />

            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="City"
                  value={profile.city}
                  onChange={(e) =>
                    setProfile({ ...profile, city: e.target.value })
                  }
                  required
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="State"
                  value={profile.state}
                  onChange={(e) =>
                    setProfile({ ...profile, state: e.target.value })
                  }
                  required
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Pincode"
                  value={profile.pincode}
                  onChange={(e) =>
                    setProfile({ ...profile, pincode: e.target.value })
                  }
                  required
                />
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" sx={{ mb: 2 }}>
              About
            </Typography>

            <TextField
              fullWidth
              label="Bio"
              value={profile.bio}
              onChange={(e) =>
                setProfile({ ...profile, bio: e.target.value })
              }
              multiline
              rows={4}
              placeholder="Tell us about yourself..."
              sx={{ mb: 3 }}
            />

            <Button
              variant="contained"
              startIcon={<Save />}
              onClick={handleSave}
              sx={{
                backgroundColor: '#FB8C00',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#EF6C00',
                },
              }}
            >
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default AdminProfile;
