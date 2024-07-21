import { useEffect, useState } from 'react';
import { getBestsellers } from '../services/bestsellersServices';

export const useBestsellers = () => {
  const [bestsellersData, setBestsellersData] = useState([]);
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchBestsellersData = async () => {
      try {
        const data = await getBestsellers(limit, offset);
        setBestsellersData(data);
      } catch (error) {
        setFetchError(error);
      } finally {
        setLoadingData(false)
      }
    };
  });
};
