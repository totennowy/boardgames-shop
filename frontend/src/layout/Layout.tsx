import React from 'react';
import LayoutHeader from './components/LayoutHeader';
import LayoutContent from './components/LayoutContent';
import LayoutFooter from './components/LayoutFooter';
import { Box } from '@mui/material';
import { ModelLayoutContent } from './types/layout';

const Layout: React.FC<ModelLayoutContent> = ({ children }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <LayoutHeader />
      <LayoutContent>{children}</LayoutContent>
      <LayoutFooter />
    </Box>
  );
};

export default Layout;
