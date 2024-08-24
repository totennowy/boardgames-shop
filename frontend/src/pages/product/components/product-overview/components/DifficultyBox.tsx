import React from 'react';
import SpeedIcon from '@mui/icons-material/Speed';
import useDifficultyBox from '../hooks/useDifficultyBox';
import { Box, Typography } from '@mui/material';
import { ModelDifficultyBox } from '../types/modelDifficultyBox';

const DifficultyBox: React.FC<ModelDifficultyBox> = ({ difficulty }) => {
  const { getRatingColor } = useDifficultyBox();

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        padding: '6px',
      }}
    >
      <SpeedIcon sx={{ width: 'auto', height: '60px' }} />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography
          textTransform={'capitalize'}
          fontSize={16}
          fontWeight={500}
          color={getRatingColor(difficulty)}
        >
          {difficulty ? difficulty + ' / 5' : '? / 5'}
        </Typography>
        <Typography fontSize={14} fontWeight={400}>
          Difficulty
        </Typography>
      </Box>
    </Box>
  );
};

export default DifficultyBox;
