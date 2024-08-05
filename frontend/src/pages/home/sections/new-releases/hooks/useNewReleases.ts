import { useAPIContext } from '@contexts/useAPIContext';
import { getNewReleases } from '@services/newReleasesServices';
import { useEffect, useState } from 'react';

export const useNewReleases = (limit: number, offset: number) => {
  const { setNewReleasesData } = useAPIContext();
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchNewReleasesData = async () => {
      try {
        const data = await getNewReleases(limit, offset);
        setNewReleasesData(data);
      } catch (error) {
        setFetchError(error as Error);
      } finally {
        setLoadingData(false);
      }
    };
    fetchNewReleasesData();
  }, [setNewReleasesData, limit, offset]);

  return {
    loadingData,
    fetchError,
  };
};
