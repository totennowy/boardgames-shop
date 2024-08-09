import { Box, Typography } from '@mui/material';

const PageNotFound = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography fontSize={40} fontWeight="bold">
        404 PAGE NOT FOUND
      </Typography>
    </Box>
  );
};

export default PageNotFound;
