// src/components/Loader.jsx
import { Backdrop, CircularProgress, Typography, Box } from "@mui/material";

const Loader = ({ text = "Loading..." }) => {
  return (
    <Backdrop
      open
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 999,
      }}
    >
      <Box textAlign="center">
        <CircularProgress color="inherit" />
        <Typography mt={2}>{text}</Typography>
      </Box>
    </Backdrop>
  );
};

export default Loader;
