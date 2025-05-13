import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  ButtonGroup,
  useDisclosure,
  useBreakpointValue,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { SearchIcon } from '@chakra-ui/icons';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarPopup from '../components/CalendarPopup';
import Loader from './Loader';

const localizer = momentLocalizer(moment);

const EventsCalendar = () => {
  const [view, setView] = useState('list');
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [searchTerm, setSearchTerm] = useState('');

  const handleViewChange = (newView) => {
    setIsLoading(true);
    setView(newView);
    setTimeout(() => setIsLoading(false), 500);
  };

  const events = [
    {
      title: 'Board Meeting',
      start: new Date(2025, 4, 10, 10, 0),
      end: new Date(2025, 4, 10, 12, 0),
    },
    {
      title: 'Annual Conference',
      start: new Date(2025, 4, 12, 9, 0),
      end: new Date(2025, 4, 12, 17, 0),
    },
    {
      title: 'Team Outing',
      start: new Date(2025, 4, 15, 14, 0),
      end: new Date(2025, 4, 15, 18, 0),
    },
  ];

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxW="container.xl" bg='#faf7ed' py={10} px={[4,8,24]}>
      <VStack spacing={6} align="stretch">
        <Heading textAlign="center" size="xl" color="teal.600">
          Events Calendar
        </Heading>

        <Flex justify="center" gap={4}>
          <ButtonGroup isAttached variant="outline" colorScheme="teal">
            <Button
              onClick={() => handleViewChange('list')}
              variant={view === 'list' ? 'solid' : 'outline'}
            >
              List
            </Button>
            <Button
              onClick={() => handleViewChange('month')}
              variant={view === 'month' ? 'solid' : 'outline'}
            >
              Month
            </Button>
            <Button
              onClick={() => handleViewChange('day')}
              variant={view === 'day' ? 'solid' : 'outline'}
            >
              Day
            </Button>
          </ButtonGroup>
        </Flex>

        {/* Search Bar */}
        <Box>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.400" />} />
            <Input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              bg="white"
              shadow="sm"
              borderColor="gray.300"
              _placeholder={{ color: 'gray.500' }}
            />
          </InputGroup>
        </Box>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            {view === 'list' && (
              <Box bg="gray.50" p={6} rounded="md" shadow="sm">
                <Flex justify="space-between" align="center" mb={4}>
                  <Heading size="md" color="teal.700">
                    Today's Events
                  </Heading>
                  <Button size="sm" colorScheme="teal" variant="ghost" onClick={onOpen}>
                    {isMobile ? 'Calendar' : 'Show Calendar'}
                  </Button>
                </Flex>
                {filteredEvents.length === 0 ? (
                  <Text>No events found.</Text>
                ) : (
                  filteredEvents.map((event, index) => (
                    <Box key={index} p={4} bg="white" rounded="md" shadow="sm" mb={3}>
                      <Text fontWeight="bold">{event.title}</Text>
                      <Text fontSize="sm">
                        {moment(event.start).format('MMM D, YYYY h:mm A')} –{' '}
                        {moment(event.end).format('h:mm A')}
                      </Text>
                    </Box>
                  ))
                )}
              </Box>
            )}

            {view === 'month' && (
              <Box bg="white" p={4} rounded="md" shadow="md">
                <Calendar
                  localizer={localizer}
                  events={filteredEvents}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 500 }}
                />
              </Box>
            )}

            {view === 'day' && (
              <Box bg="gray.50" p={6} rounded="md" shadow="sm">
                <Heading size="md" mb={4} color="teal.700">
                  Events for May 10, 2025
                </Heading>
                {filteredEvents.length === 0 ? (
                  <Text>No events found for today.</Text>
                ) : (
                  filteredEvents
                    .filter(
                      (event) =>
                        moment(event.start).format('YYYY-MM-DD') === '2025-05-10'
                    )
                    .map((event, index) => (
                      <Box key={index} p={4} bg="white" rounded="md" shadow="sm" mb={3}>
                        <Text fontWeight="bold">{event.title}</Text>
                        <Text fontSize="sm">
                          {moment(event.start).format('h:mm A')} –{' '}
                          {moment(event.end).format('h:mm A')}
                        </Text>
                      </Box>
                    ))
                )}
              </Box>
            )}
          </>
        )}

        <CalendarPopup isOpen={isOpen} onClose={onClose} />
      </VStack>
    </Container>
  );
};

export default EventsCalendar;
