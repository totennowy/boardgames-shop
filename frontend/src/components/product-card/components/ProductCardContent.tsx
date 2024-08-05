import React from 'react';
import { Box, CardContent, Typography } from '@mui/material';
import { ModelProductCardContent } from '../types/modelProductCardContent';
import { useProductCardContent } from '../hooks/useProductCardContent';

const ProductCardContent: React.FC<ModelProductCardContent> = ({
  name,
  price,
  discount,
  isHovered,
}) => {
  const { currentPrice } = useProductCardContent(price, discount);

  return (
    <>
      <CardContent
        sx={{
          width: '100%',
          position: 'absolute',
          bottom: '-40px',
          background: '#6143387e',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          margin: 0,
          color: '#e7e7e7',
          transition: 'transform 0.3s ease-in-out',
          transform: isHovered ? 'translateY(-40px)' : 'translateY(0)',
        }}
      >
        <Typography fontSize={20} fontWeight={700} textAlign="center">
          {name}
        </Typography>

        {discount > 0 ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            <Typography
              fontSize={16}
              fontWeight={700}
              sx={{
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: '-4px',
                  right: '-4px',
                  top: '50%',
                  borderBottom: `2px solid white`,
                  transform: 'translateY(-50%)',
                  zIndex: 1,
                },
              }}
            >
              {price && `$ ${price}`}
            </Typography>
            <Typography fontSize={16} fontWeight={700} color="#A03D36">
              {price && `$ ${currentPrice}`}
            </Typography>
          </Box>
        ) : (
          <Typography fontSize={16} fontWeight={700}>
            {price && `$ ${currentPrice}`}
          </Typography>
        )}
      </CardContent>
    </>
  );
};

export default ProductCardContent;
