import { 
  Box, 
  Container, 
  Flex, 
  Grid, 
  Image, 
  Heading, 
  Text, 
  Button,
  VStack,
  useBreakpointValue,
  GridItem
} from '@chakra-ui/react';

const CulturalSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box 
      bg="white" 
      width="full"
      py={16}
      position="relative"
      overflow="hidden"
    >
      <Container maxW="container.xl" px={{ base: 6, md: 8 }}>
        <Flex 
          direction={{ base: 'column-reverse', md: 'row' }} 
          gap={{ base: 8, md: 16 }}
          align="center"
        >
          {/* Image Gallery - Left Side */}
          <Box 
            width={{ base: '100%', md: '50%' }}
            position="relative"
            minH={{ base: '300px', md: '500px' }}
          >
            <Grid
              templateColumns="repeat(12, 1fr)"
              templateRows="repeat(8, 1fr)"
              gap={4}
              height="100%"
            >
              {/* Main image */}
              <GridItem 
                colSpan={[12, 12, 7]} 
                rowSpan={[4, 4, 6]}
                borderRadius="xl"
                overflow="hidden"
                boxShadow="lg"
              >
                <Image
                  src="https://kalasakt.com/wp-content/uploads/2024/03/Untitled-design.jpg"
                  alt="Cultural performance"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  loading="lazy"
                />
              </GridItem>
              
              {/* Secondary image */}
              <GridItem 
                colSpan={[12, 12, 5]} 
                rowSpan={[3, 3, 4]}
                mt={[0, 0, 4]}
                borderRadius="xl"
                overflow="hidden"
                boxShadow="lg"
              >
                <Image
                  src="https://kalasakt.com/wp-content/uploads/2024/03/Untitled-design-1.jpg"
                  alt="Artistic event"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  loading="lazy"
                />
              </GridItem>
              
              {/* Small decorative image */}
              <GridItem 
                colSpan={[12, 12, 4]} 
                rowSpan={[2, 2, 2]}
                mt={[4, 4, 0]}
                borderRadius="xl"
                overflow="hidden"
                boxShadow="md"
              >
                <Image
                  src="https://kalasakt.com/wp-content/uploads/2024/02/Untitled-design-2.png"
                  alt="Cultural art"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  loading="lazy"
                />
              </GridItem>
            </Grid>
            
            {/* Decorative element */}
            {!isMobile && (
              <Box
                position="absolute"
                bottom="-40px"
                left="-40px"
                width="200px"
                height="200px"
                bg="teal.100"
                borderRadius="full"
                opacity="0.3"
                zIndex="-1"
              />
            )}
          </Box>

          {/* Content - Right Side */}
          <Box 
            width={{ base: '100%', md: '50%' }}
            pl={{ md: 8 }}
          >
            <VStack 
              align="flex-start" 
              spacing={6}
              maxW={{ base: '100%', md: '90%' }}
            >
              <Text 
                fontSize="lg" 
                fontWeight="semibold" 
                color="#805ad5"
                letterSpacing="wide"
              >
                WHO WE ARE
              </Text>
              
              <Heading 
                as="h2" 
                size="2xl" 
                fontWeight="bold"
                lineHeight="1.2"
              >
                Discover Kalasakt Cultural Foundation
              </Heading>
              
              <Text 
                fontSize="lg" 
                color="gray.600"
                lineHeight="1.7"
              >
                Kalasakt Cultural Foundation is a beacon of cultural enrichment, organizing live music events, cultural gatherings, and providing a platform to promote and encourage young and emerging artists. With a mission to spread the soulful sounds of Indian classical music worldwide, we are committed to celebrating our rich heritage while embracing innovative expressions.
              </Text>
              
              <Button 
                color='white'
                bg={'#805ad5'} 
                size="lg"
                px={8}
                borderRadius="full"
                variant="outline"
                borderWidth="2px"
                fontWeight="semibold"
                _hover={{
                  bg: 'teal.500',
                  color: 'white',
                  transform: 'translateY(-2px)'
                }}
                transition="all 0.2s"
              >
                Read More
              </Button>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CulturalSection;