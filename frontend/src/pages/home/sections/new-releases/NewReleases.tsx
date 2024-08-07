import { useAPIContext } from '@contexts/useAPIContext';
import { useNewReleases } from './hooks/useNewReleases';
import ProductsSection from '@components/products-section/ProductsSection';

const NewReleases = () => {
  const { newReleasesData } = useAPIContext();
  const { loadingData, fetchError } = useNewReleases(18, 0);

  return (
    <ProductsSection
      title="New Releases"
      productsData={newReleasesData}
      loading={loadingData}
      error={fetchError}
    />
  );
};

export default NewReleases;
