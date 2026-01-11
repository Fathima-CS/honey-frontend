// src/user/pages/Profile.jsx
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  // ✅ Correct key
  const user = JSON.parse(localStorage.getItem("currentUser"));

  // ✅ Guard: if not logged in
  if (!user) {
    return (
      <Box textAlign="center" mt={5}>
        <Typography variant="h6">
          Please login to view your profile
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => navigate("/login")}
        >
          Go to Login
        </Button>
      </Box>
    );
  }

  return (
    <Box maxWidth="md" mx="auto" sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        My Profile
      </Typography>

      <Card elevation={4}>
        <CardContent>
          <Grid container spacing={3} alignItems="center">
            {/* Avatar Section */}
            <Grid item xs={12} md={4} textAlign="center">
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  bgcolor: "primary.main",
                  margin: "0 auto",
                }}
              >
                <PersonIcon fontSize="large" />
              </Avatar>

              <Typography variant="h6" mt={2}>
                {user.name}
              </Typography>

              <Typography color="text.secondary">
                {user.role ? user.role.toUpperCase() : "USER"}
              </Typography>
            </Grid>

            {/* Details Section */}
            <Grid item xs={12} md={8}>
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Email
                </Typography>
                <Box display="flex" alignItems="center" gap={1}>
                  <EmailIcon color="primary" />
                  <Typography>{user.email}</Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Phone
                </Typography>
                <Box display="flex" alignItems="center" gap={1}>
                  <PhoneIcon color="primary" />
                  <Typography>
                    {user.phone || "Not provided"}
                  </Typography>
                </Box>
              </Box>

              <Button variant="contained" sx={{ mt: 3 }}>
                Edit Profile
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
