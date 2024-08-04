import { useAPIContext } from '@contexts/useAPIContext';
import { getUpcomingReleases } from '@services/upcomingReleasesServices';
import { useEffect, useState } from 'react';

export const useUpcomingReleases = (limit: number, offset: number) => {
  const { setUpcomingReleasesData } = useAPIContext();
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUpcomingReleasesData = async () => {
      try {
        const data = await getUpcomingReleases(limit, offset);
        setUpcomingReleasesData(data);
      } catch (error) {
        setFetchError(error as Error);
      } finally {
        setLoadingData(false);
      }
    };

    fetchUpcomingReleasesData();
  }, [setUpcomingReleasesData, limit, offset]);

  return {
    loadingData,
    fetchError,
  };
};
