import { Box, Flex, Heading, Text, Image, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionImage = motion(Image);

const slides = [
  {
    id: 1,
    image: "https://kalasakt.com/wp-content/uploads/2024/03/1.jpg",
    title: "Experience the Magic of Live Music",
    subtitle: "with Kalasakt Cultural Foundation.",
    description: "Immerse yourself in the rhythmic beats and soulful melodies of our live music events, celebrating India's rich cultural heritage."
  },
  {
    id: 2,
    image: "https://kalasakt.com/wp-content/uploads/2024/03/2.jpg",
    title: "Spreading the Soulful Sounds",
    subtitle: "of Indian Classical Music Worldwide.",
    description: "Journey with us as we promote and preserve the timeless beauty of Indian classical music, resonating across borders and cultures."
  },
  {
    id: 3,
    image: "https://kalasakt.com/wp-content/uploads/2024/03/3.jpg",
    title: "Join Us in Promoting and",
    subtitle: "Encouraging Emerging Artists.",
    description: "Discover the next generation of talent as we showcase cultural events that embrace tradition while fostering innovation."
  }
];

const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
  const slideInterval = 5000; // 5 seconds

  const headingSize = useBreakpointValue({ base: "2xl", md: "4xl", lg: "5xl" });
  const descriptionSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });

  // Auto slide functionality
  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setAnimationComplete(false);
      }, slideInterval);
    }
    return () => clearInterval(interval);
  }, [autoPlay, slides.length]);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setAnimationComplete(false);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), slideInterval * 2);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setAnimationComplete(false);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), slideInterval * 2);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setAnimationComplete(false);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), slideInterval * 2);
  };

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <Box position="relative" width="full" height={{ base: "400px", md: "500px", lg: "600px" }} overflow="hidden">
      {/* Slides */}
      <AnimatePresence initial={false}>
        <MotionBox
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          position="absolute"
          width="100%"
          height="100%"
        >
          {/* Background Image with Scale Animation */}
          <MotionImage
            src={slides[currentSlide].image}
            alt={`Slide ${currentSlide + 1}`}
            objectFit="cover"
            width="100%"
            height="100%"
            filter="brightness(0.7)"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ 
              duration: 10,
              ease: "linear"
            }}
          />
          
          {/* Overlay Content */}
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            color="white"
            textAlign="center"
            px={{ base: 4, md: 8, lg: 12 }}
            bg="rgba(0, 0, 0, 0.3)"
          >
            {/* Title Animation */}
            <MotionHeading
              as="h2" 
              fontSize={headingSize} 
              fontWeight="bold" 
              mb={2}
              lineHeight="1.2"
              textTransform="capitalize"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                delay: 0.3,
                duration: 0.8,
                ease: "easeOut"
              }}
              onAnimationComplete={handleAnimationComplete}
            >
              {slides[currentSlide].title} <br /> {slides[currentSlide].subtitle}
            </MotionHeading>
            
            {/* Divider Line */}
            <MotionBox 
              width="80px" 
              height="2px" 
              bg="white" 
              my={4}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ 
                delay: animationComplete ? 0 : 1.1,
                duration: 0.5
              }}
            />
            
            {/* Description Animation */}
            <MotionText
              fontSize={descriptionSize} 
              maxWidth="800px" 
              opacity="0.9"
              lineHeight="tall"
              initial={{ x: 200, opacity: 0 }}
              animate={{ 
                x: animationComplete ? 0 : 200, 
                opacity: animationComplete ? 1 : 0 
              }}
              transition={{ 
                delay: animationComplete ? 0.5 : 1.6,
                duration: 0.8,
                ease: "easeOut"
              }}
            >
              {slides[currentSlide].description}
            </MotionText>
          </Box>
        </MotionBox>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <IconButton
        aria-label="Previous slide"
        icon={<ChevronLeftIcon />}
        position="absolute"
        left="4"
        top="50%"
        transform="translateY(-50%)"
        zIndex="1"
        onClick={goToPrev}
        variant="ghost"
        colorScheme="whiteAlpha"
        size="lg"
        display={{ base: 'none', md: 'flex' }}
      />
      
      <IconButton
        aria-label="Next slide"
        icon={<ChevronRightIcon />}
        position="absolute"
        right="4"
        top="50%"
        transform="translateY(-50%)"
        zIndex="1"
        onClick={goToNext}
        variant="ghost"
        colorScheme="whiteAlpha"
        size="lg"
        display={{ base: 'none', md: 'flex' }}
      />

      {/* Dots Navigation */}
      <Flex
        position="absolute"
        bottom="6"
        left="50%"
        transform="translateX(-50%)"
        zIndex="1"
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            mx={1}
            width="10px"
            height="10px"
            borderRadius="full"
            bg={currentSlide === index ? "white" : "whiteAlpha.500"}
            cursor="pointer"
            onClick={() => goToSlide(index)}
            transition="background 0.3s ease"
          />
        ))}
      </Flex>
    </Box>
  );
};

export default SliderComponent;