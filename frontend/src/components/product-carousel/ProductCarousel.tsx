import React from 'react';
import Slider from 'react-slick';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIos';
import ProductCard from '@components/product-card/ProductCard';
import { Box, IconButton, Typography } from '@mui/material';
import { ModelProductCarousel } from './types/modelProductCarousel';
import useProductCarousel from './hooks/useProductCarousel';

const ProductCarousel: React.FC<ModelProductCarousel> = ({ products }) => {
  const { currentSlide, sliderRef, handleNext, handlePrev, settings } =
    useProductCarousel();

  if (!products || products.length === 0) {
    return <Typography>No products available</Typography>;
  }

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <Slider ref={sliderRef} {...settings}>
        {products.map((product) => (
          <Box key={product.id} sx={{ padding: '0 8px' }}>
            <ProductCard {...product} />
          </Box>
        ))}
      </Slider>

      {currentSlide > 0 && (
        <IconButton
          sx={{
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
          }}
          onClick={handlePrev}
        >
          <ArrowBackIcon />
        </IconButton>
      )}

      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
        }}
        onClick={handleNext}
      >
        <ArrowForwardIcon />
      </IconButton>
    </Box>
  );
};

export default ProductCarousel;
