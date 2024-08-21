export type ModelImageModal = {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  selectedImage: string;
  setSelectedImage: (image: string) => void;
};
