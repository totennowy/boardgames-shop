import React from 'react';
import { useAPIContext } from '@contexts/useAPIContext';
import { Box } from '@mui/material';
import RatingHexagon from './components/RatingHexagon';

const PageProduct: React.FC = () => {
  const { selectedProduct } = useAPIContext();

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px;',
        }}
      >
        <Box sx={{ flex: '1', border: '1px solid blue' }}>images</Box>
        <Box sx={{ flex: '2', border: '1px solid green' }}>
          <Box>
            <RatingHexagon rating={8.2} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PageProduct;
