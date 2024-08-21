export type ModelMainImage = {
  images: string[];
  selectedImage: string;
  setSelectedImage: (image: string) => void;
  updateCarouselIndex: (index: number) => void;
};
