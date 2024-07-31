import React from 'react';
import { Box } from '@mui/material';
import { ModelLabel } from '../types/modelLabel';
import useLabel from '../hooks/useLabel';

const Label: React.FC<ModelLabel> = ({ type, discount }) => {
  const { text, color } = useLabel(type, discount);

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: color,
        color: '#fff',
        padding: '0 11.1px 0 6.4px',
        lineHeight: '28px',
        height: '28px',
        zIndex: 2,
        '&::before': {
          content: '""',
          width: 0,
          height: 0,
          position: 'absolute',
          top: 0,
          right: '-10px',
          borderStyle: 'solid',
          borderWidth: `14px 0 14px 10px`,
          borderColor: `transparent transparent transparent ${color}`,
        },
      }}
    >
      {text}
    </Box>
  );
};

export default Label;
