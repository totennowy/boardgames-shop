import React from 'react';
import ProductCarousel from '@components/product-carousel/ProductCarousel';
import { Box, Typography } from '@mui/material';
import { ModelProductsSection } from './types/modelProductsSection';

const ProductsSection: React.FC<ModelProductsSection> = ({
  title,
  productsData,
  loading,
  error,
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ width: '100%', background: '#614338', padding: '4px 0' }}>
        <Typography
          fontSize={32}
          fontWeight={700}
          color="#e7e7e7"
          textAlign="center"
          textTransform="uppercase"
        >
          {title}
        </Typography>
      </Box>
      <ProductCarousel
        products={productsData}
        loading={loading}
        error={error}
      />
    </Box>
  );
};

export default ProductsSection;
