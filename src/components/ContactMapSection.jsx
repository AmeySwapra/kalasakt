import {
  Box,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
} from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const ContactMapSection = () => {
  return (
    <Box id="anchor" bg="#faf7ed" py={12}>
      <Flex
        maxW="1200px"
        mx="auto"
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap={8}
      >
        {/* Left: Google Map */}
        <Box flex="1" w={{ base: "100%", md: "50%" }} h="400px">
          <Box
            as="iframe"
            src="https://maps.google.com/maps?t=m&output=embed&iwloc=near&z=16&q=51.50343%2C-0.12048"
            loading="lazy"
            width="100%"
            height="100%"
            border="0"
            borderRadius="md"
            title="Location map"
          />
        </Box>

        {/* Right: Title + Contact Form */}
        <Box flex="1" w={{ base: "100%", md: "50%" }}>
          <VStack spacing={6} align="stretch">
            {/* Spacer (you can adjust height via mt) */}
            <Box h={{ base: 0, md: 8 }} />

            {/* Title */}
            <Box textAlign={{ base: "center", md: "left" }}>
              <Text
                fontSize="sm"
                fontWeight="bold"
                textTransform="uppercase"
                color="gray.600"
              >
                Contact Us
              </Text>
              <Heading as="h1" size="2xl" mt={2}>
                Have Questions? <br />
                Get in Touch!
              </Heading>
            </Box>

            {/* Spacer */}
            <Box h={4} />

            {/* Contact Form */}
            <Box as="form">
              <Flex wrap="wrap" gap={4}>
                <FormControl flex="1" minW="45%">
                  <FormLabel srOnly htmlFor="first-name">
                    First Name
                  </FormLabel>
                  <Input id="first-name" placeholder="Name" isRequired />
                </FormControl>
                <FormControl flex="1" minW="45%">
                  <FormLabel srOnly htmlFor="last-name">
                    Last Name
                  </FormLabel>
                  <Input id="last-name" placeholder="Last Name" isRequired />
                </FormControl>
              </Flex>

              <Flex wrap="wrap" gap={4} mt={4}>
                <FormControl flex="1" minW="45%">
                  <FormLabel srOnly htmlFor="email">
                    Email
                  </FormLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    isRequired
                  />
                </FormControl>
                <FormControl flex="1" minW="45%">
                  <FormLabel srOnly htmlFor="phone">
                    Phone
                  </FormLabel>
                  <Input id="phone" type="tel" placeholder="Phone" isRequired />
                </FormControl>
              </Flex>

              <FormControl mt={4}>
                <FormLabel srOnly htmlFor="message">
                  Message
                </FormLabel>
                <Textarea
                  id="message"
                  placeholder="Message"
                  rows={6}
                  isRequired
                />
              </FormControl>

              <Button
                leftIcon={<FaPaperPlane />}
                type="submit"
                mt={6}
                color='white'
                bg='#bc2122'
              >
                Get In Touch
              </Button>
            </Box>

            {/* Bottom Spacer */}
            <Box h={{ base: 0, md: 8 }} />
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactMapSection;
