import { GlobalStyle } from '../GlobalStyle';
import { Box } from './Box';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <Box width="600px" ml="auto" mr="auto" p={4}>
      <Box as="h1" mb={4}>
        Phonebook
      </Box>
      <ContactForm />
      <Box as="h2" mb={3}>
        Contacts
      </Box>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Box>
  );
};
