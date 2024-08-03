import React from 'react';
import { Button } from '@mui/material';
import { ModelButtonBrown } from './types/modelButtonBrown';
import useButtonBrown from './hooks/useButtonBrown';

const ButtonBrown: React.FC<ModelButtonBrown> = ({
  icon,
  onClick,
  text,
  stock,
  releaseDate,
}) => {
  const {
    buttonText,
    isButtonDisabled,
    commonStyles,
    enabledStyles,
    disabledStyles,
  } = useButtonBrown(text, stock, releaseDate);

  return (
    <Button
      startIcon={icon}
      onClick={isButtonDisabled ? undefined : onClick}
      sx={{
        ...commonStyles,
        ...(isButtonDisabled ? disabledStyles : enabledStyles),
      }}
    >
      {buttonText}
    </Button>
  );
};

export default ButtonBrown;
