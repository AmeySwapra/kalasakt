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

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navItems = [
    { label: 'Home', href: 'https://kalasakt.com/' },
    {
      label: 'About',
      href: '/about',
      subItems: [
        { label: 'Our Team', href: 'https://kalasakt.com/our-team/' }
      ]
    },
    { label: 'Events', href: 'https://kalasakt.com/event/' },
    { label: 'Gallery', href: 'https://kalasakt.com/gallery/' },
    { label: 'Announcement', href: 'https://kalasakt.com/announcement/' },
    { label: 'Blogs', href: 'https://kalasakt.com/blogs/' },
    { label: 'Contact', href: 'https://kalasakt.com/contacts/' },
  ];

  return (
    <>
      {/* Desktop / Tablet Navbar */}
      <Hide below="md">
        <Flex
          as="nav"
          position="absolute"
          top={0}
          left={0}
          right={0}
          zIndex={10}
          color="white"
          align="center"
          px={[8, 16, 32]}
          py={6}
          bg="transparent"
        >
          {/* Logo */}
          <Box flex="1">
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
                      <Link href={item.href}>{item.label}</Link>
                      <List
                        className="submenu"
                        display="none"
                        position="absolute"
                        bg="#402323"
                        p={2}
                        minW="150px"
                      >
                        {item.subItems.map((subItem) => (
                          <ListItem key={subItem.label} p={1}>
                            <Link href={subItem.href}>{subItem.label}</Link>
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  ) : (
                    <Link href={item.href}>{item.label}</Link>
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
          position="absolute"
          top={0}
          left={0}
          right={0}
          zIndex={10}
          color="white"
          align="center"
          justify="space-between"
          px={4}
          py={4}
          bg="transparent"
        >
          {/* Logo */}
          <Link href="#">
            <Image
              src="//kalasakt.com/wp-content/uploads/2024/01/kalasakt-main-logo.png"
              alt="Kalasakt Cultural Foundation"
              maxW="120px"
            />
          </Link>

          {/* Hamburger */}
          <IconButton
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            variant="outline"
            colorScheme="whiteAlpha"
            onClick={onOpen}
          />

          {/* Drawer */}
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent bg="transparent" zIndex={20}>
              <DrawerCloseButton color="white" />
              <DrawerHeader borderBottomWidth="1px" color="white">
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
                        color="white"
                        onClick={onClose}
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
                              color="white"
                              onClick={onClose}
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
