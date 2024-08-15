import { useRef, useState } from 'react';
import Slider from 'react-slick';

export const useThumbnailsCarousel = (
  setSelectedImage: (image: string) => void
) => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
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
    setActiveIndex(index);
    setSelectedImage(image);
  };

  return {
    isHovered,
    setIsHovered,
    activeIndex,
    sliderRef,
    settings,
    handlePrev,
    handleNext,
    handleImageClick,
  };
};
