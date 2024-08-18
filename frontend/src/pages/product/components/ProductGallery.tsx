import React, { useState } from 'react';
import { Box } from '@mui/material';
import MainImage from './MainImage';
import ThumbnailsCarousel from './ThumbnailsCarousel';

const ProductGallery: React.FC<{ images: string[] }> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);

  return (
    <Box sx={{ width: '100%', maxWidth: '600px' }}>
      <MainImage
        images={images}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      <ThumbnailsCarousel images={images} setSelectedImage={setSelectedImage} />
    </Box>
  );
};

export default ProductGallery;
