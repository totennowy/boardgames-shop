import { useAPIContext } from '@contexts/useAPIContext';
import { LabelType } from '../types/modelLabel';
import { ModelProductCard } from '../types/modelProductCard';
import { useNavigate } from 'react-router-dom';
import { generateSlug } from '@utils/generateSlug';

const useProductCard = (product: ModelProductCard['product']) => {
  const { setSelectedProduct } = useAPIContext();
  const navigate = useNavigate();

  const labels: { type: LabelType; discount?: number; releaseDate?: string }[] =
    [];
  const releaseDateObject = new Date(product.releaseDate);
  const today = new Date();
  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  const conditions = [
    {
      condition: product.sold > 999,
      action: () => labels.push({ type: 'bestseller' }),
    },
    {
      condition: releaseDateObject > today,
      action: () =>
        labels.push({ type: 'upcoming', releaseDate: product.releaseDate }),
    },
    {
      condition: product.discount > 0,
      action: () =>
        labels.push({ type: 'discount', discount: product.discount }),
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

  const selectAndNavigateToProduct = () => {
    const slugifiedName = generateSlug(product.name);
    setSelectedProduct(product);
    navigate(`/product/${slugifiedName}`);
  };

  return { labels, selectAndNavigateToProduct };
};

export default useProductCard;
