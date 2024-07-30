import { useEffect, useState } from 'react';
import { useAPIContext } from '@contexts/useAPIContext';
import { getPromotions } from '@services/promotionsService';

export const useSpecialOffers = (limit: number, offset: number) => {
  const { setPromotionsData } = useAPIContext();
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPromotionsData = async () => {
      try {
        const data = await getPromotions(limit, offset);
        setPromotionsData(data);
      } catch (error) {
        setFetchError(error as Error);
      } finally {
        setLoadingData(false);
      }
    };

    fetchPromotionsData();
  }, [setPromotionsData, limit, offset]);

  return {
    loadingData,
    fetchError,
  };
};
