import { useEffect, useState } from 'react';
import { useAPIContext } from '@contexts/useAPIContext';
import { getProductById } from '@services/getProductByIdServices';

const useProductById = (id: string) => {
  const { setProductByIdData } = useAPIContext();
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProductByIdData = async (id: string) => {
      try {
        const data = await getProductById(id);
        setProductByIdData(data);
      } catch (error) {
        setFetchError(error as Error);
      } finally {
        setLoadingData(false);
      }
    };
    fetchProductByIdData(id);
  }, [setProductByIdData, id]);

  return {
    loadingData,
    fetchError,
  };
};

export default useProductById;
