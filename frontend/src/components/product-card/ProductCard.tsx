import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ButtonBrown from '@components/buttons/ButtonBrown';
import { ModelProductCard } from './types/modelProductCard';

const ProductCard: React.FC<ModelProductCard> = ({
  name,
  price,
  iconImage,
}) => {
  return (
    <Card
      elevation={0}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        height: '340px',
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
            position: ' absolute',
            bottom: 0,
            background: '#6143387e',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            margin: 0,
            color: '#e7e7e7',
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
      <ButtonBrown
        icon={<ShoppingCartIcon />}
        onClick={() => console.log('button clicked')}
        text="ADD TO CART"
      />
    </Card>
  );
};

export default ProductCard;
