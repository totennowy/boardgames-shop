import { useAPIContext } from '@contexts/useAPIContext';
import { useUpcomingReleases } from './hooks/useUpcomingReleases';
import ProductsSection from '@components/products-section/ProductsSection';

const UpcomingReleases = () => {
  const { upcomingReleasesData } = useAPIContext();
  const { loadingData, fetchError } = useUpcomingReleases(12, 0);

  return (
    <ProductsSection
      title="Upcoming Releases"
      productsData={upcomingReleasesData}
      loading={loadingData}
      error={fetchError}
    />
  );
};

export default UpcomingReleases;
