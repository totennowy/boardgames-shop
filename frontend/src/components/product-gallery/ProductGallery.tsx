import React from 'react';
import { Box } from '@mui/material';
import MainImage from './components/MainImage';
import ThumbnailsCarousel from './components/ThumbnailsCarousel';
import useProductGallery from './hooks/useProductGallery';

const ProductGallery: React.FC<{ images: string[] }> = ({ images }) => {
  const {
    selectedImage,
    activeIndex,
    updateCarouselIndex,
    handleImageSelection,
  } = useProductGallery(images);

  return (
    <Box
      sx={{
        width: '100%',
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <Box sx={{ width: '100%', maxWidth: '600px' }}>
        <MainImage
          images={images}
          selectedImage={selectedImage}
          setSelectedImage={handleImageSelection}
          updateCarouselIndex={updateCarouselIndex}
        />
        <ThumbnailsCarousel
          images={images}
          setSelectedImage={handleImageSelection}
          selectedImage={selectedImage}
          activeIndex={activeIndex}
        />
      </Box>
    </Box>
  );
};

export default ProductGallery;
