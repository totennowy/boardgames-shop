import { useState } from 'react';

export const useMainImage = (
  images: string[],
  selectedImage: string,
  setSelectedImage: (image: string) => void,
  updateCarouselIndex?: (index: number) => void
) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleNext = () => {
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    if (updateCarouselIndex) {
      updateCarouselIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    const currentIndex = images.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    if (updateCarouselIndex) {
      updateCarouselIndex(prevIndex);
    }
  };

  return {
    isModalOpen,
    handleImageClick,
    setIsModalOpen,
    handleNext,
    handlePrev,
    isHovered,
    setIsHovered,
  };
};
