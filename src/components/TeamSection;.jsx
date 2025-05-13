import { Box, Container, Flex, Heading, Text, Image, VStack, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const accentColors = [
  'teal.400',
  'purple.400',
  'orange.400',
  'pink.400'
];

const TeamSection = () => {
  const bgSection = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.300');

  const teamMembers = [
    {
      name: "Shrirang Kulkarni",
      position: "Chairman and Founder",
      image: "https://kalasakt.com/wp-content/uploads/2024/03/3-1.jpg",
      bio: "With over 40 years of global experience as a Chartered Accountant, Shrirang Kulkarni brings a wealth of financial expertise to Kalasakt Cultural Foundation. Beyond his professional accomplishments, he is a devoted connoisseur of Indian classical music, having been an avid listener for over five decades. His dedication to music extends to his active involvement with Sur Hindol, a Dubai-based music organization, where he has been a valued member for nearly two decades."
    },
    {
      name: "Dr. Vinitaa Apte",
      position: "Managing Trustee",
      image: "https://kalasakt.com/wp-content/uploads/2024/03/1-1.jpg",
      bio: "Dr. Vinitaa Apte's extensive banking career spanning over three decades is complemented by her passion for cultural programs, particularly in the realm of Marathi literature and entertainment. As a seasoned actress, innovative writer, and acclaimed TV anchor, she has curated numerous Marathi programs that have garnered widespread popularity. With a repertoire of over 5000 hosted programs globally, Dr. Apte brings invaluable communication skills and artistic flair to Kalasakt Cultural Foundation."
    },
    {
      name: "Mr. Ravindra Sahastrabuddhe",
      position: "Treasurer",
      image: "https://kalasakt.com/wp-content/uploads/2024/03/4.jpg",
      bio: "As a seasoned financial consultant with four decades of experience, Mr. Ravindra Sahastrabuddhe brings a wealth of expertise in financial management and advisory services. His extensive background includes advisory roles with both local and multinational corporations, providing invaluable insights into finance, accounting, internal controls, and compliance matters. Mr. Sahastrabuddhe's guidance and acumen strengthen the financial integrity of Kalasakt Cultural Foundation."
    },
    {
      name: "Madhuri Vaidya",
      position: "Executive Trustee",
      image: "https://kalasakt.com/wp-content/uploads/2024/03/2-1.jpg",
      bio: "Madhuri Vaidya's illustrious career as the Editor of the esteemed Marathi magazine 'Vipulshree' spans over 25 years, showcasing her profound passion for Marathi literature and culture. Currently serving as the head of the Maharashtra Sahitya Parishad, Varje Kothrud Chapter, she brings a wealth of knowledge and enthusiasm for promoting Marathi literature and cultural heritage to Kalasakt Cultural Foundation."
    }
  ];

  return (
    <Box as="section" py={20} px={[4,8,24]} bg={bgSection}>
      <Container maxW="container.xl">
        <VStack spacing={2} mb={12} textAlign="center">
          <Text fontSize="lg" fontWeight="semibold" color="purple.500">
            Kalasakt Cultural Foundation
          </Text>
          <Heading as="h1" size="2xl" color={useColorModeValue('gray.800', 'white')}>Our Team</Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {teamMembers.map((member, idx) => (
            <MotionBox
              key={idx}
              bg={useColorModeValue('white', 'gray.700')}
              borderLeftWidth={6}
              borderLeftColor={accentColors[idx % accentColors.length]}
              borderRadius="md"
              boxShadow="md"
              overflow="hidden"
              p={6}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Flex direction={{ base: 'column', md: 'row' }} align="start" gap={6}>
                <Box flexShrink={0}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    w={{ base: '100%', md: '180px' }}
                    h={{ base: '260px', md: '180px' }}
                    objectFit="cover"
                    borderRadius="md"
                  />
                </Box>

                <VStack align="stretch" spacing={3} color={textColor}>
                  <Heading as="h2" size="lg">
                    {member.name}
                  </Heading>
                  <Text fontWeight="bold" color={accentColors[idx % accentColors.length]}>
                    {member.position}
                  </Text>
                  <Text fontSize="md" lineHeight="tall">
                    {member.bio}
                  </Text>
                </VStack>
              </Flex>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default TeamSection;
