import { Box } from '@mui/material';
import Bestsellers from './sections/bestsellers/Bestsellers';

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
    </Box>
  );
};

export default Home;
