import { ModelProduct } from '@contexts/modelAPIContext';

export type ModelProductsSection = {
  title: string;
  productsData: ModelProduct[];
  loading: boolean;
  error: Error | null;
};
