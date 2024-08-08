import React, { createContext, useState } from 'react';
import {
  ModelAPIContext,
  ModelAPIProvider,
  ModelProduct,
} from './modelAPIContext';

export const APIContext = createContext<ModelAPIContext | undefined>(undefined);

export const APIProvider: React.FC<ModelAPIProvider> = ({ children }) => {
  const [bestsellersData, setBestsellersData] = useState<ModelProduct[]>([]);
  const [promotionsData, setPromotionsData] = useState<ModelProduct[]>([]);
  const [upcomingReleasesData, setUpcomingReleasesData] = useState<
    ModelProduct[]
  >([]);
  const [newReleasesData, setNewReleasesData] = useState<ModelProduct[]>([]);
  const [productByIdData, setProductByIdData] = useState<ModelProduct[]>([]);

  return (
    <APIContext.Provider
      value={{
        bestsellersData,
        setBestsellersData,

        promotionsData,
        setPromotionsData,

        upcomingReleasesData,
        setUpcomingReleasesData,

        newReleasesData,
        setNewReleasesData,

        productByIdData,
        setProductByIdData,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};
