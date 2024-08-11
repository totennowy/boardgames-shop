import { ReactNode } from 'react';

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

export type ModelAPIContext = {
  bestsellersData: ModelProduct[];
  setBestsellersData: React.Dispatch<React.SetStateAction<ModelProduct[]>>;

  promotionsData: ModelProduct[];
  setPromotionsData: React.Dispatch<React.SetStateAction<ModelProduct[]>>;

  upcomingReleasesData: ModelProduct[];
  setUpcomingReleasesData: React.Dispatch<React.SetStateAction<ModelProduct[]>>;

  newReleasesData: ModelProduct[];
  setNewReleasesData: React.Dispatch<React.SetStateAction<ModelProduct[]>>;

  productByIdData: ModelProduct[];
  setProductByIdData: React.Dispatch<React.SetStateAction<ModelProduct[]>>;

  selectedProduct: ModelProduct | null;
  setSelectedProduct: (product: ModelProduct) => void;
};

export type ModelAPIProvider = {
  children: ReactNode;
};
