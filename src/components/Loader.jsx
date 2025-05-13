import { Box, Grid, GridItem, Center } from '@chakra-ui/react';

const Loader = () => (
  <Center h="200px">
    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
      {[...Array(4)].map((_, i) => (
        <GridItem key={i}>
          <Box
            w="50px"
            h="50px"
            bg="blue.500"
            borderRadius="md"
            animation="pulse 2s infinite"
            sx={{
              '@keyframes pulse': {
                '0%': { opacity: 0.6, transform: 'scale(0.9)' },
                '50%': { opacity: 1, transform: 'scale(1.1)' },
                '100%': { opacity: 0.6, transform: 'scale(0.9)' },
              },
            }}
          />
        </GridItem>
      ))}
    </Grid>
  </Center>
);


export default Loader;