import React from 'react';
import { Box, Typography } from '@mui/material';
import RatingHexagon from './components/RatingHexagon';
import useProductById from './hooks/useProductById';
import GroupIcon from '@mui/icons-material/Group';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Face4Icon from '@mui/icons-material/Face4';
import DifficultyBox from './components/DifficultyBox';
import ProductAttributeBox from './components/ProductAttributeBox';
import ProductGallery from '../../components/product-gallery/ProductGallery';

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
          gap: '40px;',
        }}
      >
        <Box
          sx={{
            width: '100%',
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
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
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            {productByIdData.rating && (
              <RatingHexagon rating={productByIdData.rating} />
            )}
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography fontSize={26} fontWeight={500}>
                {productByIdData.name}
              </Typography>
              <Typography fontSize={16} fontWeight={300}>
                {productByIdData.teaser}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              gap: '10px',
              borderTop: '1px solid #d3d3d3',
              borderBottom: '1px solid #d3d3d3',
            }}
          >
            <ProductAttributeBox
              icon={<GroupIcon sx={{ width: 'auto', height: '60px' }} />}
              upperLabel={productByIdData.players}
              lowerLabel={` Best for: ${productByIdData.bestPlayers} players`}
            />

            <ProductAttributeBox
              icon={<AccessTimeIcon sx={{ width: 'auto', height: '60px' }} />}
              upperLabel="60 - 120 min"
              lowerLabel="Playing Time"
            />

            <ProductAttributeBox
              icon={<Face4Icon sx={{ width: 'auto', height: '60px' }} />}
              upperLabel={`${productByIdData.age} +`}
              lowerLabel="Playing Time"
            />
            <DifficultyBox difficulty={productByIdData.difficulty} />
          </Box>

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
          </Box>

          <Typography>{productByIdData.description}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PageProduct;
