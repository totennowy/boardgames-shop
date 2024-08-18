import React from 'react';
import { Box, Modal } from '@mui/material';
import Slider from 'react-slick';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  selectedImage: string;
  setSelectedImage: (image: string) => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, images, selectedImage, setSelectedImage }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: images.indexOf(selectedImage),
    afterChange: (index: number) => setSelectedImage(images[index]),
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <Box key={index}>
              <img
                src={image}
                alt={`Modal image ${index}`}
                style={{ width: '100%' }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Modal>
  );
};

export default ImageModal;
