import React, { createContext, useState, ReactNode } from 'react';

export type ModelProduct = {
  id: string;
  name: string;
  price: number;
  releaseDate: string;
  iconImage: string;
  stock: number;
  discount: number;
  sold: number;
};

type ModelAPIContext = {
  bestsellersData: ModelProduct[];
  setBestsellersData: React.Dispatch<React.SetStateAction<ModelProduct[]>>;
};

export const APIContext = createContext<ModelAPIContext | undefined>(undefined);

type ModelAPIProvider = {
  children: ReactNode;
};

export const APIProvider: React.FC<ModelAPIProvider> = ({ children }) => {
  const [bestsellersData, setBestsellersData] = useState<ModelProduct[]>([]);

  return (
    <APIContext.Provider
      value={{
        bestsellersData,
        setBestsellersData,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};
