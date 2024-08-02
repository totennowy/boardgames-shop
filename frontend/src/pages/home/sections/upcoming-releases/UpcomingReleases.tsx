import ProductCarousel from '@components/product-carousel/ProductCarousel';
import { useAPIContext } from '@contexts/useAPIContext';
import { Box, Typography } from '@mui/material';
import { useUpcomingReleases } from './hooks/useUpcomingReleases';

const UpcomingReleases = () => {
  const { upcomingReleasesData } = useAPIContext();
  const { loadingData, fetchError } = useUpcomingReleases(12, 0);

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
          Upcoming Releases
        </Typography>
      </Box>
      <ProductCarousel
        products={upcomingReleasesData}
        loading={loadingData}
        error={fetchError}
      />
    </Box>
  );
};

export default UpcomingReleases;
