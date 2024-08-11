import { Box } from '@mui/material';
import Bestsellers from './sections/bestsellers/Bestsellers';
import SpecialOffers from './sections/special-offers/SpecialOffers';
import UpcomingReleases from './sections/upcoming-releases/UpcomingReleases';
import NewReleases from './sections/new-releases/NewReleases';

const PageHome = () => {
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
      <NewReleases />
      <UpcomingReleases />
      <Bestsellers />
      <SpecialOffers />
    </Box>
  );
};

export default PageHome;
