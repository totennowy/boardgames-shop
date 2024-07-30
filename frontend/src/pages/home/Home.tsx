import { Box } from '@mui/material';
import Bestsellers from './sections/bestsellers/Bestsellers';
import SpecialOffers from './sections/special-offers/SpecialOffers';

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
      <Bestsellers />
      <SpecialOffers />
    </Box>
  );
};

export default Home;
