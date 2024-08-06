import { LabelType } from '../types/modelLabel';

const useProductCard = (
  releaseDate: string,
  discount: number,
  sold: number
) => {
  const labels: { type: LabelType; discount?: number; releaseDate?: string }[] =
    [];

  const releaseDateObject = new Date(releaseDate);
  const today = new Date();
  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  const conditions = [
    {
      condition: sold > 999,
      action: () => labels.push({ type: 'bestseller' }),
    },
    {
      condition: releaseDateObject > today,
      action: () => labels.push({ type: 'upcoming', releaseDate }),
    },
    {
      condition: discount > 0,
      action: () => labels.push({ type: 'discount', discount }),
    },
    {
      condition: releaseDateObject >= oneYearAgo && releaseDateObject <= today,
      action: () => labels.push({ type: 'new' }),
    },
  ];

  conditions.forEach(({ condition, action }) => {
    if (condition) {
      action();
    }
  });

  return { labels };
};

export default useProductCard;
