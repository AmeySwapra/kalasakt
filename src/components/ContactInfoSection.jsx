import { Box, Flex, Heading, Text, Link, VStack, Icon } from "@chakra-ui/react";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactInfoSection = () => {
  return (
    <Box bg="#f9f9f9" py={10} px={4}>
      <Flex
        maxW="1200px"
        mx="auto"
        wrap="wrap"
        justify="space-between"
        gap={8}
      >
        {/* Open Hours */}
        <Box flex="1" minW="250px" textAlign="center">
          <VStack spacing={3}>
            <Icon as={FaClock} boxSize={8} color="#BC2122" />
            <Heading as="h4" size="md">
              Open Hours
            </Heading>
            <Text>Mon-Fri: 9 AM – 6 PM</Text>
            <Text>Saturday: 9 AM – 4 PM</Text>
            <Text>Sunday: Closed</Text>
          </VStack>
        </Box>

        {/* Address */}
        <Box flex="1" minW="250px" textAlign="center">
          <VStack spacing={3}>
            <Icon as={FaMapMarkerAlt} boxSize={8} color="#BC2122" />
            <Heading as="h4" size="md">
              <Link href="#anchor">Address</Link>
            </Heading>
            <Text>
              Flat 1, A Building, Madhuraj Nagar, near Jai Bhavani nagar Paud
              Road, Kothrud, Pune 411038.
            </Text>
            <Link href="#anchor" color="red.600" fontWeight="bold">
              Check Location
            </Link>
          </VStack>
        </Box>

        {/* Get In Touch */}
        <Box flex="1" minW="250px" textAlign="center">
          <VStack spacing={3}>
            <Icon as={FaPhoneAlt} boxSize={8} color="#BC2122" />
            <Heading as="h4" size="md">
              <Link href="#anchor">Get In Touch</Link>
            </Heading>
            <Text>
              Whatsapp:{" "}
              <Link href="tel:+919850850725" color="blue.600">
                +91 985 085 0725
              </Link>
            </Text>
            <Text>
              Email:{" "}
              <Link href="mailto:kalasakt.cultural@gmail.com" color="blue.600">
                kalasakt.cultural@gmail.com
              </Link>
              <br />
              <Link href="mailto:contact@kalasakt.com" color="blue.600">
                contact@kalasakt.com
              </Link>
            </Text>
            <Link href="#anchor" color="red.600" fontWeight="bold">
              Contact Form
            </Link>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactInfoSection;
