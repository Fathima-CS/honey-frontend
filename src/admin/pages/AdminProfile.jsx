import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Avatar,
  Paper,
  Stack,
} from "@mui/material";
import { updateUserProfileAPI } from "../../services/allAPI";
import serverURL from "../../services/serverURL";

function EditProfile() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(false);

  /* =========================
     LOAD LOGGED-IN USER
  ========================= */
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setUsername(parsedUser.username || "");
      setBio(parsedUser.bio || "");
    }
  }, []);

  /* =========================
     UPDATE PROFILE
  ========================= */
  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const token = sessionStorage.getItem("token");
    if (!token || !user) return;

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    const data = new FormData();
    data.append("username", username);
    data.append("bio", bio);

    if (password) data.append("password", password);
    if (picture) data.append("picture", picture);

    try {
      setLoading(true);

      const res = await updateUserProfileAPI(
        user._id,
        data,
        reqHeader
      );

      // update stored user
      sessionStorage.setItem(
        "existingUser",
        JSON.stringify(res.data.user)
      );

      setUser(res.data.user);
      setPassword("");
      setPicture(null);

      alert("Profile updated successfully ✅");
    } catch (error) {
      console.error(
        "Update failed:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  if (!user) return <Typography>Loading...</Typography>;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 6,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 480,
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          Edit Profile
        </Typography>

        {/* PROFILE IMAGE */}
        <Stack alignItems="center" spacing={2} sx={{ mb: 3 }}>
          <Avatar
            src={
              picture
                ? URL.createObjectURL(picture)
                : user.picture
                ? `${serverURL}/uploads/${user.picture}`
                : ""
            }
            sx={{ width: 96, height: 96 }}
          />
          <Button variant="outlined" component="label">
            Change Photo
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={(e) =>
                setPicture(e.target.files[0])
              }
            />
          </Button>
        </Stack>

        {/* FORM */}
        <Box
          component="form"
          onSubmit={handleUpdateProfile}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />

          <TextField
            label="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            multiline
            rows={3}
            fullWidth
          />

          <TextField
            label="New Password (optional)"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{
              mt: 2,
              py: 1.2,
              borderRadius: 2,
              fontWeight: "bold",
            }}
          >
            {loading ? "Updating..." : "Update Profile"}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default EditProfile;
