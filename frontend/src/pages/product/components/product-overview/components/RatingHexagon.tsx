import React from 'react';
import { Box, Typography } from '@mui/material';
import { ModelRatingHexagon } from '../types/modelRatingHexagon';
import useRatingHexagon from '../hooks/useRatingHexagon';

const RatingHexagon: React.FC<ModelRatingHexagon> = ({ rating }) => {
  const { getRatingBackground } = useRatingHexagon();

  return (
    <Box
      sx={{
        width: '56px',
        height: '56px',
        backgroundColor: getRatingBackground(rating),
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
        {rating ? rating : '-'}
      </Typography>
    </Box>
  );
};

export default RatingHexagon;
