import React from 'react';
import { Box, Card, CardActionArea, CardMedia } from '@mui/material';
import { ModelProductCard } from './types/modelProductCard';
import { useHover } from '@utils/useHover';
import CardLabels from './components/CardLabels';
import useProductCard from './hooks/useProductCard';
import ProductCardContent from './components/ProductCardContent';
import ButtonBrown from '@components/buttons/ButtonBrown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ProductCard: React.FC<ModelProductCard> = ({
  name,
  price,
  iconImage,
  discount,
  releaseDate,
  stock,
  sold,
}) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
  const { labels } = useProductCard(releaseDate, discount, sold);

  return (
    <Card
      elevation={0}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        height: '340px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <CardActionArea
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: 'auto',
            height: '268px',
            objectFit: 'contain',
          }}
          image={iconImage}
          alt={name}
        />
        <ProductCardContent name={name} price={price} discount={discount} isHovered={isHovered} />
      </CardActionArea>
      <Box
        sx={{
          position: 'absolute',
          bottom: '0',
          width: '100%',
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateY(0px)' : 'translateY(100%)',
          transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
        }}
      >
        <ButtonBrown
          icon={<ShoppingCartIcon />}
          onClick={() => console.log('button clicked')}
          text="ADD TO CART"
          stock={stock}
          releaseDate={releaseDate}
        />
      </Box>
      <CardLabels labels={labels} />
    </Card>
  );
};

export default ProductCard;
