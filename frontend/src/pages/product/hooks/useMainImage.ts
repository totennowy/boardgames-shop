import { useState } from 'react';

export const useMainImage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  return {
    isModalOpen,
    handleImageClick,
    setIsModalOpen,
  };
};
