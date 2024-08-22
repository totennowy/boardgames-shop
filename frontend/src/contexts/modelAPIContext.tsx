import { ReactNode } from 'react';

export type ModelProductShort = {
  id: string;
  name: string;
  price: number;
  releaseDate: string;
  iconImage: string;
  stock: number;
  discount: number;
  sold: number;
};

export type ModelProductFull = ModelProductShort & {
  teaser: string;
  description: string;
  author: string[];
  illustrations: string[];
  themes: string[];
  mechanics: string[];
  era: string[];
  players: string;
  bestPlayers: number | null;
  age: number;
  difficulty: number | null;
  rating: number | null;
  galleryImages: string[];
};

export type ModelAPIContext = {
  bestsellersData: ModelProductShort[];
  setBestsellersData: React.Dispatch<React.SetStateAction<ModelProductShort[]>>;

  promotionsData: ModelProductShort[];
  setPromotionsData: React.Dispatch<React.SetStateAction<ModelProductShort[]>>;

  upcomingReleasesData: ModelProductShort[];
  setUpcomingReleasesData: React.Dispatch<
    React.SetStateAction<ModelProductShort[]>
  >;

  newReleasesData: ModelProductShort[];
  setNewReleasesData: React.Dispatch<React.SetStateAction<ModelProductShort[]>>;

  productByIdData: ModelProductFull | null;
  setProductByIdData: React.Dispatch<
    React.SetStateAction<ModelProductFull | null>
  >;

  selectedProduct: ModelProductFull | null;
  setSelectedProduct: (product: ModelProductFull) => void;
};

export type ModelAPIProvider = {
  children: ReactNode;
};
