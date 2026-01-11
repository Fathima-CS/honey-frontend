// src/theme/muiTheme.js
import { createTheme } from "@mui/material/styles";

const honeyTheme = createTheme({
  palette: {
    primary: {
      main: "#F9A825", // Honey Gold
      dark: "#C17900",
      light: "#FFD95A",
    },
    secondary: {
      main: "#6D4C41", // Brown (wood/hive)
    },
    background: {
      default: "#FFFBEA",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Poppins, Roboto, sans-serif",
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
});

export default honeyTheme;
