import { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';

export const useThumbnailsCarousel = (
  images: string[],
  setSelectedImage: (image: string) => void,
  selectedImage: string
) => {
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handleImageClick = (index: number, image: string) => {
    setSelectedImage(image);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  useEffect(() => {
    const currentIndex = images.indexOf(selectedImage);

    if (sliderRef.current) {
      sliderRef.current.slickGoTo(currentIndex);
    }
  }, [selectedImage, images]);

  return {
    isHovered,
    setIsHovered,
    sliderRef,
    settings,
    handlePrev,
    handleNext,
    handleImageClick,
  };
};
