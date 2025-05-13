import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
} from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

const CalendarPopup = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">Select a Date</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Box display="flex" justifyContent="center">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              inline
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CalendarPopup;
