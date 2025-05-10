import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  Spacer as ChakraSpacer,
  Divider,
  Link,
  Button
} from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box>
      {/* First Section */}
      <Box bg="white" py={20}>
        <Container maxW="container.lg">
          <Flex direction={{ base: "column", md: "row" }} gap={12}>
            {/* Left Column - Image */}
            <Box flex={1}>
              <Image
                src="https://kalasakt.com/wp-content/uploads/2024/03/about-us.jpg"
                alt="about us"
                w="full"
                h="auto"
              />
              <Box position="relative" mt={-20} textAlign="center">
                <Heading as="h3" size="md" color="white" bg="black" px={4} py={2} display="inline-block">
                  Rhythms, Melodies, & Beyond
                </Heading>
              </Box>
            </Box>

            {/* Right Column - Content */}
            <Box flex={1}>
              <Box>
                <Text fontSize="sm" color="gray.500" mb={2}>About Us</Text>
                <Heading as="h1" size="xl" mb={6}>
                  Unveiling the Essence of Kalasakt Cultural Foundation
                </Heading>
              </Box>

              <ChakraSpacer h={8} />

              <Text mb={6}>
                Kalasakt Cultural Foundation, a non-profit company incorporated under the Companies Act 2013, is dedicated to the preservation, promotion, and celebration of India's rich cultural heritage. We recognize the importance of arts and cultural traditions that have shaped our society for millennia, and we are committed to fostering their continuation into the future.
              </Text>

              <ChakraSpacer h={8} />

              <Heading as="h5" size="sm" mb={2}>
                <Text as="span" fontWeight="normal" color="#270D0D" mr={4}>01.</Text> 
                Tradition Innovated
              </Heading>

              <Divider my={4} />

              <Heading as="h5" size="sm" mb={8}>
                <Text as="span" fontWeight="normal" color="#270D0D" mr={4}>02.</Text> 
                Global Artistry
              </Heading>

              <ChakraSpacer h={8} />

              <Button colorScheme="blue" size="lg">
                View events
              </Button>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* What We Do Section */}
      <Box bg="white" py={20}>
        <Container maxW="container.lg">
          <Flex direction={{ base: "column", md: "row" }} gap={12} align="center">
            {/* Left Column - Content */}
            <Box flex={1}>
              <Box>
                <Text fontSize="sm" color="gray.500" mb={2}>What We Do</Text>
                <Heading as="h2" size="lg" mb={4}>
                  The Impact of Kalasakt Cultural Foundation
                </Heading>
                <Text>
                  Through our diverse range of activities and initiatives, we strive to create opportunities for artists to showcase their talents, connect with audiences, and contribute to the cultural fabric of our society. From organizing live music events and cultural gatherings to promoting and encouraging emerging artists, we are committed to nurturing creativity and artistic expression.
                </Text>
              </Box>
            </Box>

            {/* Right Column - Image */}
            <Box flex={1}>
              <Image
                src="https://kalasakt.com/wp-content/uploads/2024/02/Untitled-design-2.png"
                alt="What we do"
                w="full"
                h="auto"
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Mission & Vision Section */}
      <Box bg="white" py={20}>
        <Container maxW="container.lg">
          <Flex direction={{ base: "column", md: "row" }} gap={12}>
            {/* Left Column - Mission */}
            <Box flex={1}>
              <Box position="relative" mb={12}>
                <Image
                  src="https://kalasakt.com/wp-content/uploads/2024/01/IMG_20150821_191253.jpg"
                  alt="Mission"
                  w="full"
                  h="auto"
                  borderRadius="md"
                />
                <Image
                  src="https://kalasakt.com/wp-content/uploads/2022/03/mandala.png"
                  alt="Mandala"
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  boxSize="100px"
                  animation="spin 10s linear infinite"
                />
              </Box>

              <Box>
                <Text fontSize="sm" color="gray.500" mb={2}>Our Mission</Text>
                <Heading as="h2" size="lg" mb={4}>
                  Nurturing Talents, Preserving Traditions
                </Heading>
                <Text>
                  Our mission is to promote and support the arts and cultural traditions in India, both ancient and contemporary. We believe that the creation and participation in art are essential components of community development and expression.
                </Text>
              </Box>
            </Box>

            {/* Right Column - Vision */}
            <Box flex={1}>
              <Box mb={12}>
                <Text fontSize="sm" color="gray.500" mb={2}>Our Vision</Text>
                <Heading as="h2" size="lg" mb={4}>
                  Unveiling Cultural Brilliance
                </Heading>
                <Text>
                  Our vision is to create a vibrant cultural landscape where the arts thrive, artists are valued and celebrated, and cultural traditions are preserved and passed down for generations to come.
                </Text>
              </Box>

              <ChakraSpacer h={8} />

              <Box display={{ base: "none", md: "block" }}>
                <ChakraSpacer h={20} />
              </Box>

              <Image
                src="https://kalasakt.com/wp-content/uploads/2024/01/DSC07609-scaled.jpg"
                alt="Vision"
                w="full"
                h="auto"
                borderRadius="md"
              />
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUs;