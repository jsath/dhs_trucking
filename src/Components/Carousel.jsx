import { useState } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <Box w="100vw" h="100vh" position="relative">
      {images.map((image, index) => (
        <Box
          key={index}
          w="100vw"
          h="100%"
          backgroundImage={`url(${image})`}
          backgroundSize="cover"
          backgroundPosition={image.height > image.width ? 'top' : 'center'}
          position="absolute"
          top="0"
          left="0"
          opacity={index === currentIndex ? 1 : 0}
          transition="opacity 0.5s ease-in-out"
          borderBottom="2px solid black"
        />
      ))}
      <IconButton
        icon={<FiChevronLeft />}
        aria-label="Previous"
        position="absolute"
        top="50%"
        left="2%"
        transform="translateY(-50%)"
        onClick={handlePrevClick}
      />
      <IconButton
        icon={<FiChevronRight />}
        aria-label="Next"
        position="absolute"
        top="50%"
        right="2%"
        transform="translateY(-50%)"
        onClick={handleNextClick}
      />
    </Box>
  );
}

export default ImageCarousel;
