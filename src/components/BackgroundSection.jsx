import React from 'react';
import { Box } from '@chakra-ui/react';

const BackgroundSection = ({ bgImage, children }) => {
  return (
    <Box
      height="500px"
      width="100%"
      backgroundImage={`url(${bgImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      {children}
    </Box>
  );
};

export default BackgroundSection;
