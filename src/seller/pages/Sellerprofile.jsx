import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import { useParams } from "react-router-dom";

import { updateUserProfileAPI } from "../../services/allAPI";

const SellerProfile = () => {
  const params = useParams();
  const storedUser = JSON.parse(sessionStorage.getItem("user"));

  // ✅ SAFELY GET USER ID
  const userId = params.id || storedUser?._id;

  const [username, setUsername] = useState(storedUser?.username || "");
  const [bio, setBio] = useState(storedUser?.bio || "");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState(null);

  if (!storedUser || !userId) {
    return <Typography>User not found</Typography>;
  }

  const handleUpdate = async () => {
    try {
      const token = sessionStorage.getItem("token");

      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const formData = new FormData();
      formData.append("username", username);
      formData.append("bio", bio);

      if (password) {
        formData.append("password", password);
      }

      // ✅ CORRECT FIELD
      if (picture) {
        formData.append("picture", picture);
      } else {
        formData.append("picture", storedUser.profilePic || "");
      }

      const response = await updateUserProfileAPI(
        userId,
        formData,
        reqHeader
      );

      // ✅ UPDATE SESSION STORAGE
      sessionStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert("Profile updated successfully");
    } catch (error) {
      console.error("Profile update failed:", error);
      alert("Failed to update profile");
    }
  };

  return (
    <Card sx={{ maxWidth: 420 }}>
      <CardContent sx={{ textAlign: "center" }}>
        <Avatar
          src={storedUser.profilePic || ""}
          sx={{
            bgcolor: "primary.main",
            margin: "0 auto",
            mb: 2,
            width: 72,
            height: 72,
          }}
        >
          {!storedUser.profilePic && <StoreIcon />}
        </Avatar>

        <Stack spacing={2}>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            label="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            multiline
            rows={2}
          />

          <TextField
            label="New Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            helperText="Leave empty to keep old password"
          />

          <Button variant="outlined" component="label">
            Upload Profile Picture
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={(e) => setPicture(e.target.files[0])}
            />
          </Button>

          <Button variant="contained" onClick={handleUpdate}>
            Update Profile
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SellerProfile;
