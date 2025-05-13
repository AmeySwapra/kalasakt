import { Box, Flex, Heading, Text, Link, VStack, Tag } from "@chakra-ui/react";

const KalasaktCulturalFoundation = () => {
  return (
    <Box >
      {/* Event Section */}
      <Box maxW="1200px" bg='#faf7ed' mx="auto" py={10} px={[4,8,24]}>
        <Heading as="h2" fontSize="5xl" textAlign={'center'} mb={8} color="orange.600">
          Upcoming Events
        </Heading>
        
        <Box 
          bgImage="url('https://kalasakt.com/wp-content/uploads/2020/05/kalasakt.png')"
          bgSize="cover"
          bgPosition="center"
          borderRadius="md"
          overflow="hidden"
          position="relative"
          w="300px"
          h="400px"
          mb={8}
        >
          <Box 
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            bg="rgba(0,0,0,0.7)"
            color="white"
            p={6}
          >
            <Tag colorScheme="orange" mb={2}>Upcoming</Tag>
            <Heading as="h3" size="md" mb={2}>
              <Link href="https://kalasakt.com/event/kathak-nritya-spardha/" color="white" _hover={{ textDecoration: "none" }}>
                कथक नृत्य स्पर्धा २०२४-२०२५
              </Link>
            </Heading>
            <Text fontSize="sm" mb={3}>
              Started on <strong>8 December 2024</strong> to <strong>8 December 2024</strong>
            </Text>
            <Text fontSize="sm" mb={4}>
              कलासक्त सांस्कृतिक फाउंडेशन आयोजित कथक नृत्य स्पर्धा: २०२४-२०२५ We regret to inform you that we have postponed the competition due to an insufficient number of responses...
            </Text>
            <Link 
              href="https://kalasakt.com/event/kathak-nritya-spardha/" 
              color="orange.300"
              fontWeight="bold"
              display="inline-flex"
              alignItems="center"
              fontSize="sm"
            >
              Read more
              <Box as="span" ml={2}>&rarr;</Box>
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Welcome Section */}
      <Box bg="white"  py={10} px={[4,8,24]}>
        <Flex 
          maxW="1200px" 
          mx="auto" 
          px={4}
          direction={{ base: "column", md: "row" }}
          gap={8}
        >
          <Box flex={1}>
            <Text 
              color="orange.500" 
              fontWeight="bold" 
              mb={2}
              textTransform="uppercase"
            >
              Where Music and Dance Unite!
            </Text>
            <Heading as="h1" size="xl" mb={6}>
              Welcome to Kalasakt Cultural Foundation
            </Heading>
          </Box>
          
          <Box flex={1}>
            <Box h={8} />
            <Text mb={4}>
              At Kalasakt Cultural Foundation, we're more than just a company incorporated under the Companies Act 2013. We're a non-profit organization passionately dedicated to promoting and supporting the arts and millennia-long cultural traditions that define India's intricate past. Our commitment extends to fostering contemporary art practices that shape our future.
            </Text>
            <Link 
              href="https://kalasakt.com/about-us/" 
              color="orange.500"
              fontWeight="bold"
              position="relative"
              _after={{
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '2px',
                bottom: '-2px',
                left: 0,
                bg: 'orange.500',
                transform: 'scaleX(0)',
                transformOrigin: 'right',
                transition: 'transform 0.3s ease',
              }}
              _hover={{
                _after: {
                  transform: 'scaleX(1)',
                  transformOrigin: 'left',
                }
              }}
            >
              Read More
            </Link>
            <Box h={8} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default KalasaktCulturalFoundation;