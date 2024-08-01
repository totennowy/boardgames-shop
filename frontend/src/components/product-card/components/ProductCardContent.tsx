import React from 'react';
import { CardContent, Typography } from '@mui/material';
import { ModelProductCardContent } from '../types/modelProductCardContent';

const ProductCardContent: React.FC<ModelProductCardContent> = ({
  name,
  price,
  isHovered,
}) => {
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
        <Typography fontSize={16} fontWeight={700}>
          {price && `$ ${price}`}
        </Typography>
      </CardContent>
    </>
  );
};

export default ProductCardContent;
