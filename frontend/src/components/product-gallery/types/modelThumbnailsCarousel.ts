export type ModelThumbnailsCarousel = {
  images: string[];
  setSelectedImage: (image: string) => void;
  selectedImage: string;
  activeIndex: number;
};
