import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectIsLoading } from 'redux/contacts/contactsSelectors';
import { Filter } from 'components/Filter/Filter';
import { Box } from 'components/Box';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box display="flex" justifyContent="space-evenly" p={4} gridGap={4}>
      <div>
        <ContactForm />
        <Filter />
      </div>
      <div>
        <Box color="white" fontSize={32}>
          {isLoading && 'Request in progress...'}
        </Box>
        <ContactList />
      </div>
    </Box>
  );
}
