// src/seller/pages/SellerProfile.jsx
import { Card, CardContent, Typography, Avatar } from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";

const SellerProfile = () => {
  const seller = JSON.parse(localStorage.getItem("user"));

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent sx={{ textAlign: "center" }}>
        <Avatar sx={{ bgcolor: "primary.main", margin: "0 auto", mb: 2 }}>
          <StoreIcon />
        </Avatar>
        <Typography variant="h6">{seller?.name}</Typography>
        <Typography color="text.secondary">{seller?.email}</Typography>
      </CardContent>
    </Card>
  );
};

export default SellerProfile;
