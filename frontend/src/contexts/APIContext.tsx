import React, { createContext, useState } from 'react';
import {
  ModelAPIContext,
  ModelAPIProvider,
  ModelProductShort,
  ModelProductFull,
} from './modelAPIContext';

export const APIContext = createContext<ModelAPIContext | undefined>(undefined);

export const APIProvider: React.FC<ModelAPIProvider> = ({ children }) => {
  const [bestsellersData, setBestsellersData] = useState<ModelProductShort[]>(
    []
  );
  const [promotionsData, setPromotionsData] = useState<ModelProductShort[]>([]);
  const [upcomingReleasesData, setUpcomingReleasesData] = useState<
    ModelProductShort[]
  >([]);
  const [newReleasesData, setNewReleasesData] = useState<ModelProductShort[]>(
    []
  );

  const [productByIdData, setProductByIdData] =
    useState<ModelProductFull | null>(null);
  const [selectedProduct, setSelectedProduct] =
    useState<ModelProductFull | null>(null);

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

        selectedProduct,
        setSelectedProduct,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};
