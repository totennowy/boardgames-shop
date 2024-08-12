const useRatingHexagon = () => {
  const getRatingBackground = (rating: number) => {
    switch (true) {
      case rating < 2:
        return '#660000';
      case rating < 4:
        return '#CC5500';
      case rating < 6:
        return '#CCAA00';
      case rating < 8:
        return '#556B2F';
      default:
        return '#2E8B57';
    }
  };

  return {
    getRatingBackground,
  };
};

export default useRatingHexagon;
