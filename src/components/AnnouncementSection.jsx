import { Box, Heading, SimpleGrid, List, ListItem, ListIcon } from '@chakra-ui/react';
import { FaRegStar } from 'react-icons/fa';

const AnnouncementSection = () => {
  const finalistsColumn1 = [
    'Arnav Buva - Bhairav - Kolhapur',
    'Tanishk Arora - Bibhas - Pune',
    'Ruchi Fonseka - Bilaskhani Todi - Goregaon',
    'Mrinmayi Bhide - Multani - Kalyan',
    'Yash Kolhapure - Ahilya Bilawal - Satara',
    'Parth Ghasakdabhi - Kamod - Pune',
  ];

  const finalistsColumn2 = [
    'Sahil Bhogle - Miya Ki Todi - Mumbai',
    'Mayuri Aatre - Sarang - Pune',
    'Bhakti Pawar - Nat Bhairav - Pune',
    'Chaitanya Deshpande - Marwa - Mumbai',
    'Asim Gurav - Marwa - Goa',
    'Shrinidhi Deshpande - Bhagyashree - Pune',
  ];

  return (
    <Box py={10} >
      <Heading as="h2" size="xl" textAlign="center" mb={4}>
        Announcement
      </Heading>
      <Heading as="h3" size="lg" textAlign="center" mb={8}>
        Finalist for the competition
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} px={[4,8,24]}>
        {[finalistsColumn1, finalistsColumn2].map((column, index) => (
          <List spacing={3} key={index}>
            {column.map((name, i) => (
              <ListItem key={i} px={[4,8,16]}>
                <ListIcon as={FaRegStar} color="red.400" />
                {name}
              </ListItem>
            ))}
          </List>
        ))}
      </SimpleGrid>

      <Heading as="h3" size="lg" textAlign="center" mt={10}>
        Congratulations
      </Heading>
    </Box>
  );
};

export default AnnouncementSection;
