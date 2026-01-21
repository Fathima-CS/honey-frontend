// src/seller/components/SellerStats.jsx
import { Card, CardContent, Typography, Box } from "@mui/material";

const SellerStats = ({ title, value, icon }) => {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        background:
          "linear-gradient(135deg, #FFF8E1 0%, #F6D365 100%)",
        boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
        transition: "all 0.35s ease",
        position: "relative",
        overflow: "hidden",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 18px 35px rgba(0,0,0,0.18)",
        },

        /* subtle glow circle */
        "&::after": {
          content: '""',
          position: "absolute",
          top: "-30%",
          right: "-30%",
          width: 140,
          height: 140,
          background: "rgba(255,193,7,0.35)",
          borderRadius: "50%",
        },
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {/* LEFT TEXT */}
          <Box>
            <Typography
              variant="body2"
              sx={{
                color: "#6D4C41",
                fontWeight: 600,
                letterSpacing: 0.5,
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="h4"
              fontWeight={800}
              sx={{ color: "#3E2723", mt: 0.5 }}
            >
              {value}
            </Typography>
          </Box>

          {/* RIGHT ICON */}
          <Box
            sx={{
              width: 54,
              height: 54,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(135deg, #FFB300, #FFD54F)",
              color: "#3E2723",
              fontSize: 28,
              boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
            }}
          >
            {icon}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SellerStats;
