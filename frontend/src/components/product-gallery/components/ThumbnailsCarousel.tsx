import React from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useThumbnailsCarousel } from '../hooks/useThumbnailsCarousel';
import { ModelThumbnailsCarousel } from '../types/modelThumbnailsCarousel';
import Slider from 'react-slick';

const ThumbnailsCarousel: React.FC<ModelThumbnailsCarousel> = ({
  images,
  setSelectedImage,
  selectedImage,
  activeIndex,
}) => {
  const {
    isHovered,
    setIsHovered,
    sliderRef,
    settings,
    handlePrev,
    handleNext,
    handleImageClick,
  } = useThumbnailsCarousel(images, setSelectedImage, selectedImage);

  return (
    <Box
      sx={{ mt: 2, position: 'relative', marginTop: '40px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border:
                activeIndex === index
                  ? '2px solid #614338'
                  : '1px solid #d3d3d3',
            }}
          >
            <img
              src={image}
              alt={`Thumbnail ${index}`}
              style={{
                width: '80px',
                height: '80px',
                objectFit: 'cover',
                cursor: 'pointer',
                display: 'block',
                margin: 'auto',
              }}
              onClick={() => handleImageClick(index, image)}
            />
          </Box>
        ))}
      </Slider>

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
              sx={{ color: 'white', fontSize: '20px', marginLeft: '5px' }}
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
              sx={{ color: 'white', fontSize: '20px', marginRight: '0px' }}
            />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default ThumbnailsCarousel;
