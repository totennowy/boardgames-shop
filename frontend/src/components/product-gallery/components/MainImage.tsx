import React from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useMainImage } from '../hooks/useMainImage';
import { ModelMainImage } from '../types/modelMainImage';
import ImageModal from './ImageModal';

const MainImage: React.FC<ModelMainImage> = ({
  images,
  selectedImage,
  setSelectedImage,
  updateCarouselIndex,
}) => {
  const {
    isModalOpen,
    handleImageClick,
    setIsModalOpen,
    handleNext,
    handlePrev,
    isHovered,
    setIsHovered,
  } = useMainImage(
    images,
    selectedImage,
    setSelectedImage,
    updateCarouselIndex
  );

  return (
    <Box
      sx={{ position: 'relative', width: '600px', height: '400px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={selectedImage}
        alt="Main product"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
          cursor: 'pointer',
          objectFit: 'contain',
        }}
        onClick={handleImageClick}
      />
      {isHovered && (
        <>
          <IconButton
            sx={{
              position: 'absolute',
              top: '50%',
              left: '0',
              transform: 'translateY(-50%)',
              zIndex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
              borderRadius: '50%',
              width: '40px',
              height: '40px',
            }}
            onClick={handlePrev}
          >
            <ArrowBackIosIcon
              sx={{
                color: 'white',
                fontSize: '20px',
                marginLeft: '5px',
              }}
            />
          </IconButton>
          <IconButton
            sx={{
              position: 'absolute',
              top: '50%',
              right: '0',
              transform: 'translateY(-50%)',
              zIndex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
              borderRadius: '50%',
              width: '40px',
              height: '40px',
            }}
            onClick={handleNext}
          >
            <ArrowForwardIosIcon
              sx={{
                color: 'white',
                fontSize: '20px',
                marginRight: '0px',
              }}
            />
          </IconButton>
        </>
      )}
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
