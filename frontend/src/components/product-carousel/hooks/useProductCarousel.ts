import { ModelProduct } from '@contexts/modelAPIContext';
import { useRef, useState } from 'react';
import Slider from 'react-slick';

const useProductCarousel = (products: ModelProduct[]) => {
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
    rows: 1,
    dots: false,
    infinite: false,
    speed: 1200,
    slidesToShow: Math.min(products.length, 5),
    slidesToScroll: Math.min(products.length, 5),
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
