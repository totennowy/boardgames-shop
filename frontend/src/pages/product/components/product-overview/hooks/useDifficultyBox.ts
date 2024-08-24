const useDifficultyBox = () => {
  const getRatingColor = (difficult?: number | null) => {
    if (!difficult) {
      return '#666e75';
    }

    switch (true) {
      case difficult < 2:
        return '#0A7029';
      case difficult < 3:
        return '#FDDA0D';
      case difficult < 4:
        return '#FFA500';
      case difficult < 5:
        return '#D10000';
    }
  };

  return {
    getRatingColor,
  };
};

export default useDifficultyBox;
