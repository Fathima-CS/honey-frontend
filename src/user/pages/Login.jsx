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
import GoogleIcon from "@mui/icons-material/Google";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../../services/allAPI";
import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { email, password } = form;

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      const res = await loginAPI(form);

      const token = res.data?.token;
      const user = res.data?.user;

      if (!token || !user) {
        setError("Login failed");
        setLoading(false);
        return;
      }

      sessionStorage.setItem("token", token);
      sessionStorage.setItem("user", JSON.stringify(user));

      if (user.role === "admin") navigate("/admin/dashboard");
      else if (user.role === "seller") navigate("/seller");
      else navigate("/");

    } catch (err) {
      setError(err?.response?.data || "Invalid email or password ❌");
    } finally {
      setLoading(false);
    }
  };

  const footerLinks = [
    { text: "Home", path: "/" },
    { text: "Register", path: "/register" },
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
            maxWidth: 400,
            borderRadius: 3,
            background: "rgba(255,193,7,0.18)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,193,7,0.35)",
            transition: "all 0.35s ease",
            "&:hover": {
              transform: "translateY(-6px)",
              boxShadow: "0 18px 45px rgba(255,193,7,0.35)",
            },
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: 600, color: "#5D4037", mb: 1 }}
          >
            Welcome Back 🍯
          </Typography>

          <Typography
            align="center"
            sx={{ color: "#6D4C41", mb: 3, fontSize: "0.95rem" }}
          >
            Login to continue exploring HoneyHub
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              sx={{ mb: 3 }}
            />

            <Button
              type="submit"
              fullWidth
              size="large"
              disabled={loading}
              sx={{
                backgroundColor: "rgba(249,168,37,0.9)",
                color: "#3E2723",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "rgba(249,168,37,1)",
                },
              }}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>

          {/* Divider */}
          <Box sx={{ my: 3, display: "flex", alignItems: "center" }}>
            <Divider sx={{ flex: 1 }} />
            <Typography
              sx={{ mx: 2, fontSize: "0.85rem", color: "#795548" }}
            >
              OR
            </Typography>
            <Divider sx={{ flex: 1 }} />
          </Box>

          {/* Google Login */}
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              borderColor: "#E0E0E0",
              color: "#424242",
              backgroundColor: "#fff",
              "&:hover": {
                backgroundColor: "#f5f5f5",
                borderColor: "#BDBDBD",
              },
            }}
            onClick={() =>
              (window.location.href = "http://localhost:5000/auth/google")
            }
          >
            Continue with Google
          </Button>

          <Typography align="center" sx={{ mt: 3 }}>
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              style={{
                color: "#F57F17",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Register here
            </Link>
          </Typography>
        </Paper>
      </Box>

      <Footer links={footerLinks} />
    </Box>
  );
}

export default Login;
