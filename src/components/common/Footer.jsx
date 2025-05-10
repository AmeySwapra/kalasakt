import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  Link,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.900" color="white" >
      <Container maxW="container.xl" py={20} px={[4,8,24]}>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={10}
          justify="space-between"
          wrap="wrap"
        >
          {/* Logo & Description */}
          <Box flex="1">
            <Image
              src="https://kalasakt.com/wp-content/uploads/2024/01/kalasakt-main-logo.png"
              alt="Kalasakt Logo"
              maxW="180px"
              mb={4}
            />
            <Heading as="h5" size="sm" mb={2}>
              Connect with the Rhythms
            </Heading>
            <Text fontSize="sm">
              Explore, Experience, Engage with Kalasakt Cultural Foundation.
            </Text>
          </Box>

          {/* Quick Links */}
          <Box flex="1">
            <Heading as="h6" size="sm" mb={3} textTransform="uppercase">
              Quick Links
            </Heading>
            <VStack align="start" spacing={2}>
              <Link href="/about-us">About Us</Link>
              <Link href="/announcement">Announcement</Link>
              <Link href="/events/category/upcoming">Events</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/contacts">Contact Us</Link>
            </VStack>
          </Box>

          {/* Address */}
          <Box flex="1">
            <Heading as="h6" size="sm" mb={3} textTransform="uppercase">
              Address
            </Heading>
            <Text fontSize="sm" mb={4}>
              Flat 1, A Building, Madhuraj Nagar, near Jai Bhavani Nagar,
              Paud Road, Kothrud, Pune 411038.
            </Text>
            <HStack spacing={4}>
              <Link
                href="https://www.facebook.com/kalasaktculturalfoundation"
                isExternal
              >
                <Icon as={FaFacebook} boxSize={5} />
              </Link>
              <Link
                href="https://www.instagram.com/kalasakt_cultural_foundation/"
                isExternal
              >
                <Icon as={FaInstagram} boxSize={5} />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCDQ8FcVg-YHjABnG1alr9hg"
                isExternal
              >
                <Icon as={FaYoutube} boxSize={5} />
              </Link>
            </HStack>
          </Box>

          {/* Contact Info */}
          <Box flex="1">
            <Heading as="h6" size="sm" mb={3} textTransform="uppercase">
              Say Hello
            </Heading>
            <VStack align="start" spacing={2}>
              <Link href="mailto:kalasakt.cultural@gmail.com" fontSize="sm">
                kalasakt.cultural@gmail.com
              </Link>
              <Link href="mailto:contact@kalasakt.com" fontSize="sm">
                contact@kalasakt.com
              </Link>
              <Box>
                <Link href="tel:+91-9850850725" fontSize="sm">
                  +91 985 085 0725
                </Link>
                <Text fontSize="xs">(Whatsapp only)</Text>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Container>

      {/* Bottom Bar */}
      <Box bg="gray.800" py={4} px={[4,8,20]}>
        <Container maxW="container.xl">
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            gap={2}
          >
            <Text fontSize="sm" textAlign="center">
              © {new Date().getFullYear()}{" "}
              <Link href="https://kalasakt.com">Kalasakt Cultural Foundation</Link>. All Rights Reserved.
            </Text>
            <Text fontSize="sm" textAlign="center">
              Developed by{" "}
              <Link href="https://www.craftycode.in" isExternal>
                craftycode Web Studio
              </Link>
            </Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
