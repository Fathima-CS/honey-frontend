// src/components/NotFound.jsx
import { Box, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      height="80vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <ErrorOutlineIcon color="primary" sx={{ fontSize: 80 }} />
      <Typography variant="h3" fontWeight="bold" mt={2}>
        404
      </Typography>
      <Typography color="text.secondary" mt={1}>
        The page you are looking for does not exist.
      </Typography>

      <Button
        variant="contained"
        sx={{ mt: 3 }}
        onClick={() => navigate("/")}
      >
        Go Home
      </Button>
    </Box>
  );
};

export default NotFound;
