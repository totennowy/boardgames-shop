import { useBestsellers } from './hooks/useBestsellers';
import { useAPIContext } from '@contexts/useAPIContext';
import ProductsSection from '@components/products-section/ProductsSection';

const Bestsellers = () => {
  const { bestsellersData } = useAPIContext();
  const { loadingData, fetchError } = useBestsellers(18, 0);

  return (
    <ProductsSection
      title="Bestsellers"
      productsData={bestsellersData}
      loading={loadingData}
      error={fetchError}
    />
  );
};

export default Bestsellers;
