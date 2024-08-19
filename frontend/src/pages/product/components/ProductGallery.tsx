import React, { useState } from 'react';
import { Box } from '@mui/material';
import MainImage from './MainImage';
import ThumbnailsCarousel from './ThumbnailsCarousel';

const ProductGallery: React.FC<{ images: string[] }> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateCarouselIndex = (index: number) => {
    setActiveIndex(index);
    setSelectedImage(images[index]);
  };

  const handleImageSelection = (image: string) => {
    const index = images.indexOf(image);
    setActiveIndex(index);
    setSelectedImage(image);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '600px' }}>
      <MainImage
        images={images}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        updateCarouselIndex={updateCarouselIndex}
      />
      <ThumbnailsCarousel
        images={images}
        setSelectedImage={handleImageSelection}
        selectedImage={selectedImage}
        activeIndex={activeIndex}
      />
    </Box>
  );
};

export default ProductGallery;
