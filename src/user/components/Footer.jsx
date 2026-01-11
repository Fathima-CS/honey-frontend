import React from "react";
import {
  Box,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";

function Footer({ links = [] }) {
  // ✅ Default links if nothing is passed
  const footerLinks =
    links.length > 0
      ? links
      : [
          { text: "Home", path: "/" },
          { text: "Products", path: "/products" },
          { text: "Orders", path: "/orders" },
          { text: "Profile", path: "/profile" },
        ];

  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        color: "white",
        p: 3,
        mt: 4,
      }}
    >
      <Grid container spacing={3}>
        {/* Logo & Description */}
        <Grid size={{ xs: 12, md: 4 }}>
          <img
            src="https://i.pinimg.com/1200x/45/98/95/459895aab2a452a6333c4b32bd8454d8.jpg"
            alt="HoneyHub Logo"
            style={{ height: 40, marginBottom: 16 }}
          />
          <Typography variant="body2">
            Connecting honey producers and consumers with authentic,
            traceable products.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>

          {footerLinks.map((link) => (
            <Typography key={link.text} sx={{ mb: 1 }}>
              <RouterLink
                to={link.path}
                style={{
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                {link.text}
              </RouterLink>
            </Typography>
          ))}
        </Grid>

        {/* Social & Contact */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>

          <Box>
            <IconButton
              color="inherit"
              component="a"
              href="https://facebook.com"
              target="_blank"
            >
              <Facebook />
            </IconButton>

            <IconButton
              color="inherit"
              component="a"
              href="https://twitter.com"
              target="_blank"
            >
              <Twitter />
            </IconButton>

            <IconButton
              color="inherit"
              component="a"
              href="https://instagram.com"
              target="_blank"
            >
              <Instagram />
            </IconButton>
          </Box>

          <Typography variant="body2" sx={{ mt: 2 }}>
            Contact: info@honeyhub.com | +1 (123) 456-7890
          </Typography>
        </Grid>
      </Grid>

      <Typography
        variant="body2"
        align="center"
        sx={{ mt: 3, opacity: 0.7 }}
      >
        © {new Date().getFullYear()} HoneyHub. All rights reserved.
      </Typography>
    </Box>
  );
}

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
};

export default Footer;
