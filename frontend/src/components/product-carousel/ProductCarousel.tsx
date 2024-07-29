import React from 'react';
import Slider from 'react-slick';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIos';
import ProductCard from '@components/product-card/ProductCard';
import { Box, CircularProgress, IconButton } from '@mui/material';
import { ModelProductCarousel } from './types/modelProductCarousel';
import useProductCarousel from './hooks/useProductCarousel';

const ProductCarousel: React.FC<ModelProductCarousel> = ({
  products,
  loading,
  error,
}) => {
  const { currentSlide, sliderRef, handleNext, handlePrev, settings } =
    useProductCarousel();

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '400px',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error || !products || products.length === 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '400px',
        }}
      >
        Something went wrong. Please try again later.
      </Box>
    );
  }

  if (products.length === 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '400px',
        }}
      >
        No products in this category. Sorry!
      </Box>
    );
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
