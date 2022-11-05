import { GlobalStyle } from '../GlobalStyle';
import { Box } from './Box';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <Box width="600px" ml="auto" mr="auto" p={4}>
      <Box as="h1" fontSize={48} mb={4} display="flex" justifyContent="center">
        Phonebook
      </Box>
      <ContactForm />
      <Box as="h2" mb={3} fontSize={24} display="flex" justifyContent="center">
        Contacts
      </Box>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Box>
  );
};
