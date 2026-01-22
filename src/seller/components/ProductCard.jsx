// src/seller/components/ProductCard.jsx
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
} from "@mui/material";

const ProductCard = ({ product, onEdit }) => {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        background:
          "linear-gradient(180deg, #FFFDF6 0%, #FBE7B2 100%)",
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        transition: "all 0.35s ease",
        position: "relative",

        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 18px 35px rgba(0,0,0,0.25)",
        },
      }}
    >
      {/* PRODUCT IMAGE */}
      <CardMedia
        component="img"
        height="170"
        image={`${serverURL}/uploads/${product.image}`}
        alt={product.name}
        sx={{
          transition: "0.4s",
          "&:hover": { transform: "scale(1.05)" },
        }}
      />

      <CardContent>
        {/* PRODUCT NAME */}
        <Typography
          fontWeight={700}
          fontSize={16}
          sx={{ color: "#3E2723" }}
        >
          {product.name}
        </Typography>

        {/* PRICE */}
        <Typography
          sx={{
            color: "#6D4C41",
            fontWeight: 600,
            mt: 0.5,
          }}
        >
          ₹{product.price}
        </Typography>

        {/* STATUS BADGE (optional safe usage) */}
        {product.status && (
          <Chip
            label={product.status}
            size="small"
            sx={{
              mt: 1,
              background:
                product.status === "Active"
                  ? "linear-gradient(135deg,#81C784,#4CAF50)"
                  : product.status === "Low Stock"
                  ? "linear-gradient(135deg,#FFD54F,#FFB300)"
                  : "linear-gradient(135deg,#E57373,#D32F2F)",
              color: "#fff",
              fontWeight: 600,
            }}
          />
        )}

        {/* ACTION */}
        <Box mt={2}>
          {/* <Button
            fullWidth
            variant="contained"
            onClick={onEdit}
            sx={{
              borderRadius: 3,
              fontWeight: 700,
              background:
                "linear-gradient(135deg, #FFB300, #FFD54F)",
              color: "#3E2723",
              boxShadow: "0 6px 14px rgba(0,0,0,0.25)",
              transition: "0.3s",

              "&:hover": {
                background:
                  "linear-gradient(135deg, #FFA000, #FFCA28)",
                transform: "translateY(-2px)",
                boxShadow: "0 10px 20px rgba(0,0,0,0.35)",
              },
            }}
          >
            Edit
          </Button> */}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
