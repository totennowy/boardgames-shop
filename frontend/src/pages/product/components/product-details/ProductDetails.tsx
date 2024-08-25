import React from 'react';
import { Box, Typography } from '@mui/material';
import { ModelProductDetails } from './types/modelProductDetails';

const ProductDetails: React.FC<ModelProductDetails> = ({ productByIdData }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}
    >
      <Box sx={{ display: 'flex', gap: '6px' }}>
        <Typography fontWeight={700}>Author:</Typography>
        <Typography fontWeight={300}>
          {productByIdData.author.join(', ')}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '6px',
          borderBottom: '1px solid #d3d3d3',
          paddingBottom: '16px',
        }}
      >
        <Typography fontWeight={600}>Illustration:</Typography>
        <Typography fontWeight={300}>
          {productByIdData.illustrations.join(', ')}
        </Typography>
      </Box>
      <Typography fontWeight={300}>{productByIdData.description}</Typography>
    </Box>
  );
};

export default ProductDetails;
