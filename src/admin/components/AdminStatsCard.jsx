import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { People, Verified, ShoppingCart, TrendingUp } from '@mui/icons-material';
import PropTypes from 'prop-types';

const iconMap = {
  people: <People sx={{ fontSize: 40, color: 'primary.main' }} />,
  verified: <Verified sx={{ fontSize: 40, color: 'secondary.main' }} />,
  shopping_cart: <ShoppingCart sx={{ fontSize: 40, color: 'accent.main' }} />,
  trending_up: <TrendingUp sx={{ fontSize: 40, color: 'primary.main' }} />,
};

function AdminStatsCard({ title, value, icon, subtitle }) {
  return (
    <Card
      sx={{
        transition: 'transform 0.2s',
        '&:hover': { transform: 'scale(1.05)', boxShadow: 4 },
        backgroundColor: 'background.paper',
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center">
          {iconMap[icon]}
          <Box ml={2}>
            <Typography variant="h4" sx={{ color: 'primary.main' }}>
              {value}
            </Typography>
            <Typography variant="body1" color="text.primary">
              {title}
            </Typography>
            {subtitle && (
              <Typography variant="body2" color="text.secondary">
                {subtitle}
              </Typography>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

AdminStatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.oneOf(['people', 'verified', 'shopping_cart', 'trending_up']).isRequired,
  subtitle: PropTypes.string,
};

export default AdminStatsCard;