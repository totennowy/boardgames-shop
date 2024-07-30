import { useEffect, useState } from 'react';
import { getBestsellers } from '@services/bestsellersServices';
import { useAPIContext } from '@contexts/useAPIContext';

export const useBestsellers = (limit: number, offset: number) => {
  const { setBestsellersData } = useAPIContext();
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchBestsellersData = async () => {
      try {
        const data = await getBestsellers(limit, offset);
        setBestsellersData(data);
      } catch (error) {
        setFetchError(error as Error);
      } finally {
        setLoadingData(false);
      }
    };

    fetchBestsellersData();
  }, [setBestsellersData, limit, offset]);

  return {
    loadingData,
    fetchError,
  };
};
