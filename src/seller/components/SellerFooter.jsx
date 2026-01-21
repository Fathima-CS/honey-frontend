// src/seller/components/SellerFooter.jsx
import { Box, Typography, Stack, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";

const SellerFooter = () => {
  return (
    <Box
      sx={{
        mt: 6,
        px: 3,
        py: 3,
        background:
          "linear-gradient(90deg, #5B3A1C 0%, #8D6E3F 100%)",
        color: "#FFF8E1",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
    >
      {/* TOP SECTION */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        spacing={2}
      >
        {/* BRAND */}
        <Box>
          <Typography fontWeight={800} fontSize={18}>
            🍯 HoneyHub Seller
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            Manage products • Track orders • Grow sales
          </Typography>
        </Box>

        {/* LINKS */}
        <Stack direction="row" spacing={3}>
          {[
            { label: "Dashboard", path: "/seller" },
            { label: "Products", path: "/seller/products" },
            { label: "Orders", path: "/seller/orders" },
            { label: "Profile", path: "/seller/profile" },
          ].map((item) => (
            <MuiLink
              key={item.label}
              component={Link}
              to={item.path}
              underline="none"
              sx={{
                color: "#FFF8E1",
                fontWeight: 600,
                transition: "0.3s",
                "&:hover": {
                  color: "#FFD54F",
                  textDecoration: "underline",
                },
              }}
            >
              {item.label}
            </MuiLink>
          ))}
        </Stack>
      </Stack>

      {/* DIVIDER */}
      <Box
        sx={{
          my: 2,
          height: 1,
          backgroundColor: "rgba(255,255,255,0.25)",
        }}
      />

      {/* BOTTOM SECTION */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        <Typography variant="body2" sx={{ opacity: 0.85 }}>
          © {new Date().getFullYear()} HoneyHub. All rights reserved.
        </Typography>

        <Typography
          variant="body2"
          sx={{
            opacity: 0.85,
            fontWeight: 600,
          }}
        >
          Made with 🍯 for sellers
        </Typography>
      </Stack>
    </Box>
  );
};

export default SellerFooter;
