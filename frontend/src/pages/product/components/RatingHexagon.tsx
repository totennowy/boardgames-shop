import React from 'react';
import { Box, Typography } from '@mui/material';
import { ModelRatingHexagon } from '../types/modelRatingHexagon';

const RatingHexagon: React.FC<ModelRatingHexagon> = ({ rating }) => {
  const getBackgroundColor = (rating: number) => {
    switch (true) {
      case rating < 2:
        return '#660000';
      case rating < 4:
        return '#CC5500';
      case rating < 6:
        return '#CCAA00';
      case rating < 8:
        return '#556B2F';
      default:
        return '#2E8B57';
    }
  };

  return (
    <Box
      sx={{
        width: '50px',
        height: '50px',
        backgroundColor: getBackgroundColor(rating),
        clipPath:
          'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
      }}
    >
      <Typography variant="h6" component="span">
        {rating}
      </Typography>
    </Box>
  );
};

export default RatingHexagon;
