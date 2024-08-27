import React from 'react';
import { Box, Typography } from '@mui/material';
import useProductById from './hooks/useProductById';
import ProductGallery from '../../components/product-gallery/ProductGallery';
import ProductDetails from './components/product-details/ProductDetails';
import ProductOverview from './components/product-overview/ProductOverview';

const PageProduct: React.FC = () => {
  const { productByIdData, loadingData, fetchError } = useProductById();

  if (loadingData) {
    return <Typography>Loading...</Typography>;
  }

  if (fetchError) {
    return <Typography>Error loading product data.</Typography>;
  }

  if (!productByIdData) {
    return <Typography>Product not found.</Typography>;
  }

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
          maxWidth: '1600px',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '60px;',
        }}
      >
        <Box
          sx={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            paddingTop: '60px',
          }}
        >
          <ProductGallery images={productByIdData.galleryImages} />
        </Box>
        <Box
          sx={{
            flex: '2',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <ProductOverview productByIdData={productByIdData} />
          <ProductDetails productByIdData={productByIdData} />
        </Box>
      </Box>
    </Box>
  );
};

export default PageProduct;
