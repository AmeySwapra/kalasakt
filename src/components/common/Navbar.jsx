import {
  Box,
  Flex,
  Image,
  Link,
  List,
  ListItem,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Stack,
  Show,
  Hide
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from '../../assets/logo/logo.webp';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'About',
      href: '/about',
      subItems: [
        { label: 'Our Team', href: '/our-team' }
      ]
    },
    { label: 'Events', href: '/events' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Announcement', href: '/announcement' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Desktop / Tablet Navbar */}
      <Hide below="md">
        <Flex
          as="nav"
          position={isHomePage ? 'absolute' : 'static'}
          top={0}
          left={0}
          right={0}
          zIndex={10}
          color={isHomePage ? 'white' : 'black'}
          align="center"
          px={[8, 16, 32]}
          py={6}
          bg={isHomePage ? 'transparent' : 'white'}
          boxShadow={isHomePage ? 'none' : 'sm'}
        >
          {/* Logo */}
          <Box flex="1" mr={20}>
            <Link href="#">
              <Image
                src={logo}
                alt="Kalasakt Cultural Foundation"
                maxW="160px"
                
              />
            </Link>
          </Box>

          {/* Main Menu */}
          <Box flex="2">
            <List display="flex" justifyContent="center" gap={8}>
              {navItems.map((item) => (
                <ListItem key={item.label} position="relative" p={2}>
                  {item.subItems ? (
                    <Box _hover={{ '.submenu': { display: 'block' } }}>
                      <Link 
                        href={item.href}
                        _hover={{ textDecoration: 'none', opacity: 0.8 }}
                      >
                        {item.label}
                      </Link>
                      <List
                        className="submenu"
                        display="none"
                        position="absolute"
                        bg={isHomePage ? '#402323' : 'gray.50'}
                        p={2}
                        minW="150px"
                        borderRadius="md"
                        boxShadow="md"
                      >
                        {item.subItems.map((subItem) => (
                          <ListItem key={subItem.label} p={1}>
                            <Link 
                              href={subItem.href}
                              _hover={{ textDecoration: 'none', color: isHomePage ? 'gray.300' : 'gray.600' }}
                            >
                              {subItem.label}
                            </Link>
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  ) : (
                    <Link 
                      href={item.href}
                      _hover={{ textDecoration: 'none', opacity: 0.8 }}
                    >
                      {item.label}
                    </Link>
                  )}
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Spacer */}
          <Box flex="1" />
        </Flex>
      </Hide>

      {/* Mobile Navbar */}
      <Show below="md">
        <Flex
          as="nav"
          position={isHomePage ? 'absolute' : 'static'}
          top={0}
          left={0}
          right={0}
          zIndex={10}
          color={isHomePage ? 'white' : 'black'}
          align="center"
          justify="space-between"
          px={4}
          py={4}
          bg={isHomePage ? 'transparent' : 'white'}
          boxShadow={isHomePage ? 'none' : 'sm'}
        >
          {/* Logo */}
          <Link href="#">
            <Image
              src={logo}
              alt="Kalasakt Cultural Foundation"
              maxW="120px"
              filter={isHomePage ? 'none' : 'brightness(0)'}
            />
          </Link>

          {/* Hamburger */}
          <IconButton
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            variant="outline"
            colorScheme={isHomePage ? 'whiteAlpha' : 'blackAlpha'}
            onClick={onOpen}
          />

          {/* Drawer */}
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent bg={isHomePage ? 'rgba(0, 0, 0, 0.8)' : 'white'} zIndex={20}>
              <DrawerCloseButton color={isHomePage ? 'white' : 'black'} />
              <DrawerHeader 
                borderBottomWidth="1px" 
                color={isHomePage ? 'white' : 'black'}
              >
                Menu
              </DrawerHeader>
              <DrawerBody>
                <Stack spacing={4}>
                  {navItems.map((item) => (
                    <Box key={item.label} p={1}>
                      <Link
                        href={item.href}
                        display="block"
                        py={2}
                        fontSize="lg"
                        color={isHomePage ? 'white' : 'black'}
                        onClick={onClose}
                        _hover={{ textDecoration: 'none', opacity: 0.8 }}
                      >
                        {item.label}
                      </Link>
                      {item.subItems && (
                        <Stack pl={4} spacing={2} mt={2}>
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              display="block"
                              py={1}
                              color={isHomePage ? 'white' : 'black'}
                              onClick={onClose}
                              _hover={{ textDecoration: 'none', opacity: 0.8 }}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </Stack>
                      )}
                    </Box>
                  ))}
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Show>
    </>
  );
};

export default Navbar;