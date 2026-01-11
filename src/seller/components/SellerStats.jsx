// src/seller/components/SellerStats.jsx
import { Card, CardContent, Typography, Box } from "@mui/material";

const SellerStats = ({ title, value, icon }) => (
  <Card elevation={3}>
    <CardContent>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
          <Typography variant="h5">{value}</Typography>
        </Box>
        <Box color="primary.main">{icon}</Box>
      </Box>
    </CardContent>
  </Card>
);

export default SellerStats;
