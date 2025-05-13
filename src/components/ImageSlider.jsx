import { 
  Box,
  Container,
  Flex,
  useBreakpointValue,
  Heading,
  Text
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ImageSlider = () => {
  const slidesPerView = useBreakpointValue({ base: 1, md: 3 });
  const spaceBetween = useBreakpointValue({ base: 20, md: 60 });

  const slides = [
    {
      src: "//kalasakt.com/wp-content/uploads/2024/01/Dhumale-Malhars-and-jhinjhoti-thumri.jpg",
      alt: "Dhumale Malhars and jhinjhoti thumri",
      width: 1080,
      height: 810
    },
    {
      src: "//kalasakt.com/wp-content/uploads/2024/01/Ravindra-concert-Nov-2014-2.jpg",
      alt: "Ravindra concert",
      width: 960,
      height: 720
    },
    {
      src: "//kalasakt.com/wp-content/uploads/2024/01/IMG_20160823_193952.jpg",
      alt: "Cultural performance",
      width: 2448,
      height: 2448
    },
    {
      src: "//kalasakt.com/wp-content/uploads/2024/01/20140807_180535-Ghazal-Prog.-Pune.jpg",
      alt: "Ghazal Program",
      width: 2048,
      height: 1536
    },
    {
      src: "//kalasakt.com/wp-content/uploads/2024/01/DSC_4782-scaled.jpg",
      alt: "Performance image",
      width: 2560,
      height: 1707
    }
  ];

  return (
    <Box as="section" py={16} bg="white">
      <Container maxW="container.xl" px={{ base: 4, md: 8, lg: 24 }}>
        {/* Spacer - equivalent to the elementor spacer */}
        <Box height={{ base: '40px', md: '80px' }} />

        {/* Slider Section */}
        <Box width="full" overflow="hidden">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={600}
            grabCursor={true}
            centeredSlides={false}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              }
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <Box 
                  position="relative"
                  width="full"
                  height={{ base: '300px', md: '400px' }}
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="md"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: 'scale(1.02)',
                    boxShadow: 'lg'
                  }}
                >
                  <Box
                    as="img"
                    src={slide.src}
                    alt={slide.alt}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    loading="lazy"
                    decoding="async"
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default ImageSlider;