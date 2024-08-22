import React from 'react';
import { Box, Typography } from '@mui/material';
import { ModelProductDetails } from './types/modelProductDetails';

const ProductDetails: React.FC<ModelProductDetails> = ({ productByIdData }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Box sx={{ display: 'flex', gap: '6px' }}>
        <Typography>Author:</Typography>
        <Typography fontWeight={300}>
          {productByIdData.author.join(', ')}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: '6px' }}>
        <Typography>Illustration:</Typography>
        <Typography fontWeight={300}>
          {productByIdData.illustrations.join(', ')}
        </Typography>
      </Box>
      <Typography>{productByIdData.description}</Typography>
    </Box>
  );
};

export default ProductDetails;
