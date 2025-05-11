import {
  Box,
  Button,
  Flex,
  Image,
  SimpleGrid,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import { useState } from 'react';

const ImageGridWithTabs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);
  
  const columns = useBreakpointValue({ base: 2, md: 3, lg: 4 });
  const spacing = useBreakpointValue({ base: 2, md: 4 });

  const filters = [
    { id: '*', label: 'All' },
    { id: '__fltr-1', label: 'August 2016' },
    { id: '__fltr-2', label: 'April 2015' },
    { id: '__fltr-3', label: 'August 2014' },
    { id: '__fltr-4', label: 'November 2015' },
    { id: '__fltr-5', label: 'September 2017' }
  ];

  const [activeFilter, setActiveFilter] = useState('*');

  const galleryItems = [
    {
      id: 1,
      filter: '__fltr-1',
      src: 'https://kalasakt.com/wp-content/uploads/2024/03/IMG_20160823_193939-768x768.jpg',
      alt: 'IMG 20160823 193939',
      width: 768,
      height: 768
    },
    {
      id: 2,
      filter: '__fltr-1',
      src: 'https://kalasakt.com/wp-content/uploads/2024/03/IMG_20160823_193947-768x768.jpg',
      alt: 'IMG 20160823 193947',
      width: 768,
      height: 768
    },
    {
      id: 3,
      filter: '__fltr-1',
      src: 'https://kalasakt.com/wp-content/uploads/2024/03/IMG_20160823_193956-768x768.jpg',
      alt: 'IMG 20160823 193956',
      width: 768,
      height: 768
    },
    {
      id: 4,
      filter: '__fltr-1',
      src: 'https://kalasakt.com/wp-content/uploads/2024/03/IMG-20180903-WA0020-768x731.jpg',
      alt: 'IMG 20180903 WA0020',
      width: 768,
      height: 731
    },
    {
      id: 5,
      filter: '__fltr-2',
      src: 'https://kalasakt.com/wp-content/uploads/2024/03/IMG-20150330-WA0025-768x576.jpg',
      alt: 'IMG 20150330 WA0025',
      width: 768,
      height: 576
    },
    {
      id: 6,
      filter: '__fltr-2',
      src: 'https://kalasakt.com/wp-content/uploads/2024/03/IMG-20150407-WA0025-768x476.jpg',
      alt: 'IMG 20150407 WA0025',
      width: 768,
      height: 476
    },
    {
      id: 7,
      filter: '__fltr-3',
      src: 'https://kalasakt.com/wp-content/uploads/2024/03/20140807_180535-Ghazal-Prog.-Pune-768x576.jpg',
      alt: '20140807 180535 Ghazal Prog. Pune',
      width: 768,
      height: 576
    },
    {
      id: 8,
      filter: '__fltr-3',
      src: 'https://kalasakt.com/wp-content/uploads/2024/03/20140807_193323-768x576.jpg',
      alt: '20140807 193323',
      width: 768,
      height: 576
    },
    {
      id: 9,
      filter: '__fltr-3',
      src: 'https://kalasakt.com/wp-content/uploads/2024/03/20140807_203909-Ghazal-Prog.-Pune-768x576.jpg',
      alt: '20140807 203909 Ghazal Prog. Pune',
      width: 768,
      height: 576
    },
    {
      id: 10,
      filter: '__fltr-3',
      src: 'https://kalasakt.com/wp-content/uploads/2024/03/20140807_204412-Ghazal-Prog.-Pune-768x576.jpg',
      alt: '20140807 204412 Ghazal Prog. Pune',
      width: 768,
      height: 576
    },
    {
      id: 11,
      filter: '__fltr-4',
      src: 'https://kalasakt.com/wp-content/uploads/2024/03/IMG-20151118-WA0041.jpg',
      alt: 'IMG 20151118 WA0041',
      width: 454,
      height: 648
    },
    {
      id: 12,
      filter: '__fltr-4',
      src: 'https://kalasakt.com/wp-content/uploads/2024/03/IMG-20151123-WA0011-768x432.jpg',
      alt: 'IMG 20151123 WA0011',
      width: 768,
      height: 432
    },
    {
      id: 13,
      filter: '__fltr-4',
      src: 'https://kalasakt.com/wp-content/uploads/2024/03/IMG-20151123-WA0013-768x432.jpg',
      alt: 'IMG 20151123 WA0013',
      width: 768,
      height: 432
    },
    {
      id: 14,
      filter: '__fltr-4',
      src: 'https://kalasakt.com/wp-content/uploads/2024/03/IMG-20151124-WA0023-768x432.jpg',
      alt: 'IMG 20151124 WA0023',
      width: 768,
      height: 432
    },
    {
      id: 15,
      filter: '__fltr-5',
      src: 'https://kalasakt.com/wp-content/uploads/2024/03/IMG_20170929_182830-768x576.jpg',
      alt: 'IMG 20170929 182830 scaled',
      width: 768,
      height: 576
    },
    {
      id: 16,
      filter: '__fltr-5',
      src: 'https://kalasakt.com/wp-content/uploads/2024/03/IMG_20170929_182834-768x576.jpg',
      alt: 'IMG 20170929 182834 scaled',
      width: 768,
      height: 576
    },
    {
      id: 17,
      filter: '__fltr-5',
      src: 'https://kalasakt.com/wp-content/uploads/2024/03/IMG_20170929_190214-768x576.jpg',
      alt: 'IMG 20170929 190214 scaled',
      width: 768,
      height: 576
    }
  ];

  const filteredItems = activeFilter === '*' 
    ? galleryItems 
    : galleryItems.filter(item => item.filter === activeFilter);

  const handleImageClick = (item) => {
    setSelectedImage(item);
    onOpen();
  };

  return (
    <Box as="section" py={10} px={{ base: 4, md: 8, lg: 16 }}>
      {/* Filter Buttons */}
      <Flex 
        wrap="wrap" 
        gap={2} 
        mb={8} 
        justify="center"
        role="navigation" 
        aria-label="Gallery filter"
      >
        {filters.map(filter => (
          <Button
            key={filter.id}
            size="sm"
            variant={activeFilter === filter.id ? 'solid' : 'outline'}
            colorScheme={activeFilter === filter.id ? 'blue' : 'gray'}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </Button>
        ))}
      </Flex>

      {/* Gallery Grid */}
      <SimpleGrid columns={columns} spacing={spacing}>
        {filteredItems.map(item => (
          <Box 
            key={item.id}
            position="relative"
            overflow="hidden"
            borderRadius="md"
            _hover={{ 
              transform: 'scale(1.02)',
              transition: 'transform 0.2s'
            }}
            cursor="pointer"
            onClick={() => handleImageClick(item)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width="100%"
              height="auto"
              objectFit="cover"
              aspectRatio={`${item.width} / ${item.height}`}
              loading="lazy"
            />
          </Box>
        ))}
      </SimpleGrid>

      {/* Image Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          {selectedImage && (
            <Image
              src={selectedImage.src.replace('-768x', '-1024x')}
              alt={selectedImage.alt}
              width="100%"
              height="auto"
            />
          )}
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ImageGridWithTabs;