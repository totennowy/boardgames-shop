import { useState } from 'react';

export const useMainImage = (images: string[]) => {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  return {
    selectedImage,
    isModalOpen,
    handleImageClick,
    setIsModalOpen,
    setSelectedImage,
  };
};
