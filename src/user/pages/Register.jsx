import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";
import { registerAPI } from "../../services/allAPI";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // submit with API
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password } = form;

    if (!username || !email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await registerAPI(form);
      console.log(res.data);

      setError("");
      setSuccess("Registration successful 🎉");

      setTimeout(() => navigate("/login"), 1200);
    } catch (err) {
      console.error(err);
      setSuccess("");
      setError(
        err?.response?.data || "Registration failed ❌"
      );
    }
  };

  const footerLinks = [
    { text: "Home", path: "/" },
    { text: "Login", path: "/login" },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, rgba(255,236,179,0.9), rgba(255,248,225,1))",
      }}
    >
      <UserNavbar />

      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        <Paper
          elevation={8}
          sx={{
            p: 4,
            width: "100%",
            maxWidth: 420,
            borderRadius: 3,
            background: "rgba(255,193,7,0.18)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,193,7,0.35)",
            transition: "all 0.35s ease",
            "&:hover": {
              transform: "translateY(-6px)",
              boxShadow: "0 18px 45px rgba(255,193,7,0.35)",
              background: "rgba(255,193,7,0.22)",
            },
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: 600, color: "#5D4037", mb: 1 }}
          >
            Join HoneyHub 🍯
          </Typography>

          <Typography
            align="center"
            sx={{ color: "#6D4C41", mb: 3, fontSize: "0.95rem" }}
          >
            Create your account and explore pure honey
          </Typography>

          {error && <Alert severity="error">{error}</Alert>}
          {success && <Alert severity="success">{success}</Alert>}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Username"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
              sx={{ mb: 3 }}
            />

            <Button
              type="submit"
              fullWidth
              size="large"
              sx={{
                backgroundColor: "rgba(249,168,37,0.9)",
                color: "#3E2723",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "rgba(249,168,37,1)",
                },
              }}
            >
              Create Account
            </Button>
          </form>

          <Typography align="center" sx={{ mt: 3 }}>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                color: "#F57F17",
                fontWeight: 600,
                textDecoration: "none",
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
