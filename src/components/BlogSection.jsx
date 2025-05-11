import {
  Box,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaRegCommentDots } from "react-icons/fa";

const BlogSection = () => {
  return (
    <Box bg="gray.50" py={10} px={[4,8,24]}>
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            bg="white"
            _hover={{ boxShadow: "lg" }}
          >
            <VStack align="start" spacing={4}>
              {/* Meta Info */}
              <HStack spacing={4} fontSize="sm" color="gray.600">
                <Text as={Link} href="https://kalasakt.com/top-5-most-ancient-temple-complexes-in-india/">
                  14 May 2020
                </Text>
                <HStack as={Link} href="https://kalasakt.com/top-5-most-ancient-temple-complexes-in-india/#respond">
                  <Icon as={FaRegCommentDots} />
                  <Text>0 Comments</Text>
                </HStack>
              </HStack>

              {/* Post Title */}
              <Heading
                as={Link}
                href="https://kalasakt.com/top-5-most-ancient-temple-complexes-in-india/"
                size="md"
                color="red.600"
                _hover={{ textDecoration: "underline" }}
              >
                Top 5 Most ancient temple complexes in India
              </Heading>
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default BlogSection;
