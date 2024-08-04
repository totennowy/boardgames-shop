import { Box } from '@mui/material';
import Bestsellers from './sections/bestsellers/Bestsellers';
import SpecialOffers from './sections/special-offers/SpecialOffers';
import UpcomingReleases from './sections/upcoming-releases/UpcomingReleases';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '40px',
      }}
    >
      <UpcomingReleases />
      <Bestsellers />
      <SpecialOffers />
    </Box>
  );
};

export default Home;
