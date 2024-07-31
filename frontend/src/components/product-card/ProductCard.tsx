import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ButtonBrown from '@components/buttons/ButtonBrown';
import { ModelProductCard } from './types/modelProductCard';
import { useHover } from '@utils/useHover';
import Label from './components/Label';
import useProductCard from './hooks/useProductCard';

const ProductCard: React.FC<ModelProductCard> = ({
  name,
  price,
  iconImage,
  discount,
  releaseDate,
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
        <CardContent
          sx={{
            width: '100%',
            position: 'absolute',
            bottom: -40,
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
      </CardActionArea>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
          transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
        }}
      >
        <ButtonBrown
          icon={<ShoppingCartIcon />}
          onClick={() => console.log('button clicked')}
          text="ADD TO CART"
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '8px',
          left: '0px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {labels.map((label, index) => (
          <Label key={index} type={label.type} discount={label.discount} />
        ))}
      </Box>
    </Card>
  );
};

export default ProductCard;
