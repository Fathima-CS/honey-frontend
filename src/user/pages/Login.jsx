import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
  Divider,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import { loginAPI,googleLoginAPI} from "../../services/allAPI";
import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";


function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  /* =========================
     INPUT CHANGE
  ========================= */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* =========================
     NORMAL LOGIN
  ========================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const res = await loginAPI(form);
      const token = res?.data?.token;
      const user = res?.data?.user;

      if (!token || !user) {
        setError("Login failed");
        return;
      }

      sessionStorage.setItem("token", token);
      sessionStorage.setItem("role", user.role);
      sessionStorage.setItem("user", JSON.stringify(user));

      if (user.role === "admin") navigate("/admin/dashboard");
      else if (user.role === "seller") navigate("/seller");
      else navigate("/");

    } catch (err) {
      setError(err?.response?.data || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  /* =========================
     GOOGLE LOGIN
  ========================= */
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);

      const result = await googleLoginAPI({
        username: decoded.name,
        email: decoded.email,
        profilePic: decoded.picture,
      });

      sessionStorage.setItem("token", result.data.token);
      sessionStorage.setItem("role", result.data.user.role);
      sessionStorage.setItem("user", JSON.stringify(result.data.user));

      if (result.data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      setError("Google login failed");
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", background: "#FFF8E1" }}>
      <UserNavbar />

      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={8}
          sx={{
            p: 4,
            width: "100%",
            maxWidth: 400,
            borderRadius: 3, // ✅ FIXED
          }}
        >
          <Typography variant="h4" align="center" mb={2}>
            Login
          </Typography>

          {error && <Alert severity="error">{error}</Alert>}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />

            <Button
              fullWidth
              type="submit"
              disabled={loading}
              variant="contained"
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>

          <Divider sx={{ my: 3 }}>OR</Divider>

          {/* ✅ PROPER GOOGLE LOGIN */}
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => setError("Google login failed")}
          />

          <Typography align="center" mt={2}>
            Don&apos;t have an account?{" "}
            <Link to="/register">Register</Link>
          </Typography>
        </Paper>
      </Box>

      <Footer />
    </Box>
  );
}

export default Login;
