import { useState, useEffect } from 'react';
import { useAPIContext } from '@contexts/useAPIContext';
import { getProductById } from '@services/getProductByIdServices';
import { useParams } from 'react-router-dom';

const useProductById = () => {
  const { productByIdData, setProductByIdData } = useAPIContext();
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<Error | null>(null);
  const { productId } = useParams<{ productId: string }>();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const data = await getProductById(productId!);
        setProductByIdData(data);
      } catch (error) {
        setFetchError(error as Error);
      } finally {
        setLoadingData(false);
      }
    };

    fetchProductData();
  }, [productId, setProductByIdData]);

  return {
    loadingData,
    fetchError,
    productByIdData,
  };
};

export default useProductById;
