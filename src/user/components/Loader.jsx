import React from 'react';
import { Box, CircularProgress, Skeleton, Typography } from '@mui/material';
import PropTypes from 'prop-types';

function Loader({ type = 'spinner', size = 40, text = 'Loading...', skeletonCount = 3 }) {
  if (type === 'skeleton') {
    return (
      <Box sx={{ width: '100%', p: 2 }}>
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            height={60}
            sx={{ mb: 2, borderRadius: 1, backgroundColor: 'primary.light' }}
          />
        ))}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 200,
        p: 3,
      }}
    >
      <CircularProgress
        size={size}
        sx={{ color: 'primary.main', mb: 2 }}
      />
      {text && (
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          {text}
        </Typography>
      )}
    </Box>
  );
}

Loader.propTypes = {
  type: PropTypes.oneOf(['spinner', 'skeleton']).isRequired,
  size: PropTypes.number,
  text: PropTypes.string,
  skeletonCount: PropTypes.number,
};

export default Loader;