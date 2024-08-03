const useButtonBrown = (text: string, stock: number, releaseDate: string) => {
  const today = new Date();
  const convertedReleaseDateToDate = new Date(releaseDate);

  let buttonText = text;
  let isButtonDisabled = false;

  if (convertedReleaseDateToDate > today) {
    buttonText = 'COMING SOON';
    isButtonDisabled = true;
  } else if (stock === 0) {
    buttonText = 'OUT OF STOCK';
    isButtonDisabled = true;
  }

  const commonStyles = {
    height: '40px',
    width: '100%',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '0px 0px 4px 4px',
    transition: '0.2s ease-in-out',
  };

  const enabledStyles = {
    background: '#614338',
    color: '#e7e7e7',
    cursor: 'pointer',
    border: 'none',
    '&:hover': {
      backgroundColor: '#e7e7e7',
      color: '#614338',
      border: '2px solid #614338',
    },
  };

  const disabledStyles = {
    background: '#e7e7e7',
    color: '#614338',
    cursor: 'not-allowed',
    border: '2px solid #614338',
  };

  return {
    buttonText,
    isButtonDisabled,
    commonStyles,
    enabledStyles,
    disabledStyles,
  };
};

export default useButtonBrown;
