import ProductCarousel from '@components/product-carousel/ProductCarousel';
import { useAPIContext } from '@contexts/useAPIContext';
import { Box, Typography } from '@mui/material';
import { useSpecialOffers } from './hooks/useSpecialOffers';

const SpecialOffers = () => {
  const { promotionsData } = useAPIContext();
  const { loadingData, fetchError } = useSpecialOffers(18, 0);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ width: '100%', background: '#614338', padding: '4px 0' }}>
        <Typography
          fontSize={32}
          fontWeight={700}
          color="#e7e7e7"
          textAlign="center"
          textTransform="uppercase"
        >
          Special offers
        </Typography>
      </Box>
      <ProductCarousel
        products={promotionsData}
        loading={loadingData}
        error={fetchError}
      />
    </Box>
  );
};

export default SpecialOffers;
