import { useRef, useState } from 'react';
import Slider from 'react-slick';

const useProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const sliderRef = useRef<Slider | null>(null);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 1200,
    slidesToShow: 6,
    slidesToScroll: 6,
    afterChange: (current: number) => {
      setCurrentSlide(current);
    },
  };

  return {
    currentSlide,
    sliderRef,
    handleNext,
    handlePrev,
    settings,
  };
};

export default useProductCarousel;
