import React from 'react';
import { Button } from '@mui/material';
import { ModelButtonBrown } from './modelButtonBrown';

const ButtonBrown: React.FC<ModelButtonBrown> = ({ icon, onClick, text }) => {
  return (
    <Button
      startIcon={icon}
      onClick={onClick}
      sx={{
        height: '40px',
        width: '100%',
        fontSize: '14px',
        fontWeight: '600',
        background: '#614338',
        color: '#e7e7e7',
        borderRadius: '0px 0px 4px 4px',
        transition: '0.2s ease-in-out',
        '&:hover': {
          backgroundColor: '#e7e7e7',
          color: '#614338',
          border: '2px solid #614338',
        },
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonBrown;
