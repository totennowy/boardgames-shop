import { ModelProduct } from '@contexts/modelAPIContext';

export type ModelProductCarousel = {
  products: ModelProduct[];
  loading: boolean;
  error: Error | null;
};
