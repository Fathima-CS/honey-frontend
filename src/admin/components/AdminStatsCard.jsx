import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import {
  People,
  Verified,
  ShoppingCart,
  TrendingUp,
  MonetizationOn,
  Campaign,
  Warning,
  PendingActions,
} from "@mui/icons-material";
import PropTypes from "prop-types";

/* =========================
   ICON CONFIG MAP
========================= */
const iconMap = {
  people: {
    icon: <People sx={{ fontSize: 26 }} />,
    gradient: "linear-gradient(135deg, #6366F1, #8B5CF6)",
  },
  verified: {
    icon: <Verified sx={{ fontSize: 26 }} />,
    gradient: "linear-gradient(135deg, #10B981, #22C55E)",
  },
  shopping_cart: {
    icon: <ShoppingCart sx={{ fontSize: 26 }} />,
    gradient: "linear-gradient(135deg, #FB8C00, #F59E0B)",
  },
  trending_up: {
    icon: <TrendingUp sx={{ fontSize: 26 }} />,
    gradient: "linear-gradient(135deg, #EC4899, #F43F5E)",
  },

  /* 🔥 SUPPORT YOUR DASHBOARD ICONS */
  money: {
    icon: <MonetizationOn sx={{ fontSize: 26 }} />,
    gradient: "linear-gradient(135deg, #F59E0B, #FBBF24)",
  },
  campaign: {
    icon: <Campaign sx={{ fontSize: 26 }} />,
    gradient: "linear-gradient(135deg, #3B82F6, #60A5FA)",
  },
  users: {
    icon: <People sx={{ fontSize: 26 }} />,
    gradient: "linear-gradient(135deg, #6366F1, #818CF8)",
  },
  success: {
    icon: <Verified sx={{ fontSize: 26 }} />,
    gradient: "linear-gradient(135deg, #22C55E, #4ADE80)",
  },
  fundraisers: {
    icon: <TrendingUp sx={{ fontSize: 26 }} />,
    gradient: "linear-gradient(135deg, #EC4899, #FB7185)",
  },
  pending: {
    icon: <PendingActions sx={{ fontSize: 26 }} />,
    gradient: "linear-gradient(135deg, #F97316, #FDBA74)",
  },
  withdraw: {
    icon: <ShoppingCart sx={{ fontSize: 26 }} />,
    gradient: "linear-gradient(135deg, #0EA5E9, #38BDF8)",
  },
  warning: {
    icon: <Warning sx={{ fontSize: 26 }} />,
    gradient: "linear-gradient(135deg, #EF4444, #F87171)",
  },
};

/* =========================
   COMPONENT
========================= */
function AdminStatsCard({ title, value, icon, subtitle }) {
  const iconConfig =
    iconMap[icon] || {
      icon: <TrendingUp sx={{ fontSize: 26 }} />,
      gradient: "linear-gradient(135deg, #9CA3AF, #6B7280)",
    };

  return (
    <Card
      sx={{
        borderRadius: 4,
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,255,255,1))",
        boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
        },
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center">
          {/* ICON */}
          <Box
            sx={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              background: iconConfig.gradient,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
            }}
          >
            {iconConfig.icon}
          </Box>

          {/* TEXT */}
          <Box ml={2}>
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{ color: "#111827", lineHeight: 1 }}
            >
              {value}
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "#6B7280", fontWeight: 500, mt: 0.5 }}
            >
              {title}
            </Typography>

            {subtitle && (
              <Typography variant="caption" sx={{ color: "#9CA3AF" }}>
                {subtitle}
              </Typography>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

/* =========================
   PROPS
========================= */
AdminStatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default AdminStatsCard;
