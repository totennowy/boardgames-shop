import { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';

export const useThumbnailsCarousel = (
  images: string[],
  setSelectedImage: (image: string) => void,
  selectedImage: string
) => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

  useEffect(() => {
    const currentIndex = images.indexOf(selectedImage);
    setActiveIndex(currentIndex);

    if (sliderRef.current) {
      const totalSlides = images.length;
      const slidesToShow = Math.floor(
        sliderRef.current.props.slidesToShow as number
      );

      if (currentIndex >= totalSlides - slidesToShow) {
        sliderRef.current.slickGoTo(totalSlides - slidesToShow);
      } else if (currentIndex < slidesToShow) {
        sliderRef.current.slickGoTo(0);
      } else {
        sliderRef.current.slickGoTo(currentIndex);
      }
    }
  }, [selectedImage, images]);

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
