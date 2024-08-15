import React from 'react';
import { Box } from '@mui/material';
import { useMainImage } from '../hooks/useMainImage';
import { ModelMainImage } from '../types/modelModelMainImage';
import ImageModal from './ImageModal';

const MainImage: React.FC<ModelMainImage> = ({ images }) => {
  const {
    selectedImage,
    isModalOpen,
    handleImageClick,
    setIsModalOpen,
    setSelectedImage,
  } = useMainImage(images);

  return (
    <Box>
      <img
        src={selectedImage}
        alt="Main product"
        style={{ width: '100%', cursor: 'pointer' }}
        onClick={handleImageClick}
      />
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={images}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </Box>
  );
};

export default MainImage;
