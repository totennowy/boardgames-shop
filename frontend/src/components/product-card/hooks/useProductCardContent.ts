export const useProductCardContent = (price: number, discount: number) => {
  let currentPrice = price;

  if (discount > 0) {
    currentPrice = Math.round(((100 - discount) / 100) * price * 100) / 100;
  }

  return {
    currentPrice,
  };
};
