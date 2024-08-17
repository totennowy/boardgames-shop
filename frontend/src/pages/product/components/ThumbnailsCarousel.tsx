import React from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useThumbnailsCarousel } from '../hooks/useThumbnailsCarousel';
import { ModelThumbnailsCarousel } from '../types/modelThumbnailsCarousel';
import Slider from 'react-slick';

const ThumbnailsCarousel: React.FC<ModelThumbnailsCarousel> = ({ images, setSelectedImage }) => {
  const { isHovered, setIsHovered, activeIndex, sliderRef, settings, handlePrev, handleNext, handleImageClick } = useThumbnailsCarousel(setSelectedImage);

  return (
    <Box sx={{ mt: 2, position: 'relative' }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              p: 1,
              mx: 0.5,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: activeIndex === index ? '2px solid blue' : '1px solid #d3d3d3',
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
          <IconButton sx={{ position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)', zIndex: 1 }} onClick={handlePrev}>
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton sx={{ position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)', zIndex: 1 }} onClick={handleNext}>
            <ArrowForwardIosIcon />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default ThumbnailsCarousel;
