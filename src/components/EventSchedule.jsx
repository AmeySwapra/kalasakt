import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  Button,
  Divider,
  Grid,
  GridItem,
  Link,
  useColorModeValue
} from "@chakra-ui/react";
import pic from '../assets/banner/pic1.png';

const EventSchedule = () => {
  const events = [
    {
      date: "17 Mar, 2025",
      day: "17",
      month: "Mar, 2025",
      title: "kaushal-inamdari-an-evening-of-conversations-stories-and-songs",
      image: "https://kalasakt.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-20-at-4.17.04-PM-1-890x664.jpeg",
      link: "https://kalasakt.com/event/kaushal-inamdari-an-evening-of-conversations-stories-and-songs/"
    },
    {
      date: "8 January 2025",
      day: "08",
      month: "Jan, 2025",
      title: "कलासक्त आयोजित शास्त्रीय संगीत मैफिलीने रसिक मंत्रमुग्ध",
      image: "https://kalasakt.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-17-at-12.10.21-PM-890x664.jpeg",
      link: "https://kalasakt.com/event/a-classical-music-concert-organized-by-kalasakta-enthralls-the-audience/"
    },
    {
      date: "24 February 2024",
      day: "24",
      month: "Feb, 2024",
      title: "Youth Classical Singing Competition",
      image: "https://kalasakt.com/wp-content/uploads/2024/03/kalasaklt-event.png",
      link: "https://kalasakt.com/event/youth-classical-singing-competition/"
    }
  ];

  
  const bgColor = useColorModeValue("purple.50", "purple.900");
  const accentColor = "purple.500";
  const textColor = useColorModeValue("gray.700", "gray.200");
  const headingColor = useColorModeValue("gray.800", "white");
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorderColor = useColorModeValue("purple.100", "purple.700");

  return (
    <Box 
      position="relative" 
      bg={bgColor}
      py={16}
      px={[4, 8, 24]}
      overflow="hidden"
    >
      {/* Decorative background elements */}
      <Box
        position="absolute"
        top="10%"
        left="-5%"
        zIndex={0}
       
      >
        <Image
          src={pic}
          alt="decoration"
          boxSize="300px"
        />
      </Box>
      <Box
        position="absolute"
        bottom="10%"
        right="-5%"
        zIndex={0}
        opacity={0.1}
        transform="rotate(180deg)"
      >
        <Image
          src={pic}
          alt="decoration"
          boxSize="300px"
        />
      </Box>

      <Container maxW="container.xl" position="relative" zIndex={1}>
        {/* Header section */}
        <Flex
          direction={{ base: "column", md: "row" }}
          mb={12}
          align="center"
          textAlign={{ base: "center", md: "left" }}
        >
          <Box flex={1} mb={{ base: 6, md: 0 }}>
            <Text 
              fontSize="lg" 
              color={accentColor}
              fontWeight="bold"
              mb={2}
              letterSpacing="wide"
            >
              RECENT EVENTS
            </Text>
            <Heading 
              as="h2" 
              size="2xl" 
              color={headingColor}
              lineHeight="shorter"
              fontWeight="extrabold"
            >
              Event Schedule
            </Heading>
          </Box>

          <Box flex={1} mb={{ base: 6, md: 0 }} px={{ base: 0, md: 8 }}>
            <Text 
              fontSize="lg" 
              color={textColor}
              lineHeight="tall"
            >
              Dive into the mesmerizing world of Kalasakt Cultural Foundation, where every beat and step tells a story. Explore the rich heritage of Indian Performing Arts as we weave a tapestry of rhythm, melody, and tradition.
            </Text>
          </Box>

          <Box flex={1} textAlign={{ base: "center", md: "right" }}>
            <Button
              as={Link}
              href="/events"
              colorScheme="purple"
              size="lg"
              px={8}
              rounded="full"
              fontWeight="bold"
              _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
              boxShadow="md"
            >
              View All Events
            </Button>
          </Box>
        </Flex>

        <Divider 
          mb={12} 
          borderColor={cardBorderColor}
          borderWidth="1px"
          opacity={0.5}
        />

        {/* Events grid */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={8}
        >
          {events.map((event, index) => (
            <GridItem key={index}>
              <Box
                bg={cardBg}
                borderWidth="1px"
                borderColor={cardBorderColor}
                borderRadius="xl"
                overflow="hidden"
                boxShadow="sm"
                transition="all 0.3s ease"
                _hover={{ 
                  transform: "translateY(-8px)", 
                  boxShadow: "xl",
                  borderColor: accentColor
                }}
                h="100%"
                display="flex"
                flexDirection="column"
              >
                <Link 
                  href={event.link} 
                  _hover={{ textDecoration: "none" }}
                  flex="1"
                  display="flex"
                  flexDirection="column"
                >
                  <Box position="relative" flex="none">
                    <Image
                      src={event.image}
                      alt={event.title}
                      w="full"
                      h="250px"
                      objectFit="cover"
                    />
                    <Box
                      position="absolute"
                      top={4}
                      left={4}
                      bg={accentColor}
                      color="white"
                      p={3}
                      borderRadius="lg"
                      textAlign="center"
                      boxShadow="lg"
                      lineHeight="none"
                    >
                      <Text fontSize="xl" fontWeight="black">
                        {event.day}
                      </Text>
                      <Text fontSize="xs" fontWeight="bold" opacity={0.9}>
                        {event.month.split(",")[0]}
                      </Text>
                    </Box>
                  </Box>

                  <Box p={6} flex="1" display="flex" flexDirection="column">
                    <Heading 
                      as="h4" 
                      size="md" 
                      mb={2} 
                      color={headingColor}
                      flex="1"
                    >
                      {event.title}
                    </Heading>
                    <Flex align="center" mt={4}>
                      <Box 
                        bg={accentColor}
                        w={3}
                        h={3}
                        borderRadius="full"
                        mr={2}
                      />
                      <Text 
                        fontSize="sm" 
                        color={textColor}
                        fontWeight="medium"
                      >
                        {event.date}
                      </Text>
                    </Flex>
                  </Box>
                </Link>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default EventSchedule;