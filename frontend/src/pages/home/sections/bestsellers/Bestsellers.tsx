import ProductCarousel from '@components/product-carousel/ProductCarousel';
import { Box, Typography } from '@mui/material';
import { useBestsellers } from './hooks/useBestsellers';
import { useAPIContext } from '@contexts/useAPIContext';

const Bestsellers = () => {
  const { bestsellersData } = useAPIContext();
  const { loadingData, fetchError } = useBestsellers(18, 0);

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
          Bestsellers
        </Typography>
      </Box>
      <ProductCarousel
        products={bestsellersData}
        loading={loadingData}
        error={fetchError}
      />
    </Box>
  );
};

export default Bestsellers;
