import React from 'react';
import { Box, Modal, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from 'react-slick';
import { ModelImageModal } from '../types/modelImageModal';

const ImageModal: React.FC<ModelImageModal> = ({
  isOpen,
  onClose,
  images,
  selectedImage,
  setSelectedImage,
}) => {
  const sliderRef = React.useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: images.indexOf(selectedImage),
    afterChange: (index: number) => setSelectedImage(images[index]),
    appendDots: (dots: React.ReactNode) => (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '20px',
          marginTop: '10px',
        }}
      >
        <ul style={{ margin: '0px', padding: '0px', display: 'flex' }}>
          {dots}
        </ul>
      </Box>
    ),
    customPaging: (i: number) => (
      <Box
        sx={{
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          bgcolor:
            i === images.indexOf(selectedImage) ? '#614338' : '#6143387e',
          margin: '0 5px',
        }}
      />
    ),
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          height: '80%',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              top: '50%',
              left: '0',
              transform: 'translateY(-50%)',
              zIndex: 2,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
            }}
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <ArrowBackIosIcon sx={{ fontSize: '20px', marginLeft: '5px' }} />
          </IconButton>

          <Box sx={{ width: '100%' }}>
            <Slider {...settings} ref={sliderRef}>
              {images.map((image, index) => (
                <Box key={index}>
                  <img
                    src={image}
                    alt={`Modal image ${index}`}
                    style={{
                      width: '100%',
                      maxHeight: '600px',
                      objectFit: 'contain',
                    }}
                  />
                </Box>
              ))}
            </Slider>
          </Box>

          <IconButton
            sx={{
              position: 'absolute',
              top: '50%',
              right: '0',
              transform: 'translateY(-50%)',
              zIndex: 2,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
            }}
            onClick={() => sliderRef.current?.slickNext()}
          >
            <ArrowForwardIosIcon
              sx={{ fontSize: '20px', marginRight: '-2px' }}
            />
          </IconButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default ImageModal;
