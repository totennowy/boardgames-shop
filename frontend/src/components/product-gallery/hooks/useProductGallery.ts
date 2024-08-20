import { useState } from 'react';

const useProductGallery = (images: string[]) => {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateCarouselIndex = (index: number) => {
    setActiveIndex(index);
    setSelectedImage(images[index]);
  };

  const handleImageSelection = (image: string) => {
    const index = images.indexOf(image);
    setActiveIndex(index);
    setSelectedImage(image);
  };

  return {
    selectedImage,
    activeIndex,
    updateCarouselIndex,
    handleImageSelection,
  };
};

export default useProductGallery;
