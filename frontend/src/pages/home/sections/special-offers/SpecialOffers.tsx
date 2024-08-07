import { useAPIContext } from '@contexts/useAPIContext';
import { useSpecialOffers } from './hooks/useSpecialOffers';
import ProductsSection from '@components/products-section/ProductsSection';

const SpecialOffers = () => {
  const { promotionsData } = useAPIContext();
  const { loadingData, fetchError } = useSpecialOffers(18, 0);

  return (
    <ProductsSection
      title="Special Offers"
      productsData={promotionsData}
      loading={loadingData}
      error={fetchError}
    />
  );
};

export default SpecialOffers;
