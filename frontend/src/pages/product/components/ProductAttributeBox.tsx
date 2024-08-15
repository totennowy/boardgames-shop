import React from 'react';
import { Box, Typography } from '@mui/material';
import { ModelProductAttributeBox } from '../types/modelProductAttributeBox';

const ProductAttributeBox: React.FC<ModelProductAttributeBox> = ({
  icon,
  upperLabel,
  lowerLabel,
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        padding: '6px',
        borderRight: '1px solid #d3d3d3',
      }}
    >
      {icon}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography textTransform={'capitalize'} fontSize={16} fontWeight={500}>
          {upperLabel}
        </Typography>
        <Typography fontSize={14} fontWeight={400}>
          {lowerLabel}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductAttributeBox;
