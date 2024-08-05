import React from 'react';
import Label from './Label';
import { Box } from '@mui/material';
import { ModelCardLabels } from '../types/modelCardLabels';

const CardLabels: React.FC<ModelCardLabels> = ({ labels }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '8px',
        left: '0px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      {labels.map((label, index) => (
        <Label key={index} {...label} />
      ))}
    </Box>
  );
};

export default CardLabels;
