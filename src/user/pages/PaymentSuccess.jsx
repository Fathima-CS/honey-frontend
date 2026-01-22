import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <Typography variant="h4" color="success.main" fontWeight={700}>
        Payment Successful 
      </Typography>

      <Typography color="text.secondary">
        Thank you for your purchase.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/")}
      >
        Go to Home
      </Button>
    </Box>
  );
}

export default PaymentSuccess;
