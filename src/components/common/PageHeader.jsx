import {
  Box,
  Container,
  Heading,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import bgImage from "../../assets/slider/banner.webp";

const PageHeader = ({ title }) => {
  const params = useParams();

  
  const formatTitle = (str) => {
    if (!str) return "Page";
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const rawTitle = title || params.title;
  const derivedTitle = formatTitle(rawTitle);

  return (
    <Box
      width="100%"
      height="200px"
      position="relative"
      bgImage={`url(${bgImage})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      {/* Black overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.6)"
        zIndex={1}
      />

      <Container
        maxW="container.xl"
        px={[4, 8, 24]}
        position="relative"
        zIndex={2}
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        color="white"
      >
        
        <Heading as="h3" size="2xl">
          {derivedTitle}
        </Heading>
      </Container>
    </Box>
  );
};

export default PageHeader;