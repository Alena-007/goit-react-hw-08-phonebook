import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectContacts, selectFilter, selectIsLoading } from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { ContactItem } from '../ContactItem/ContactItem';
import { ContactItems } from './ContactList.styled';
import { Loader } from '../Loader';
import { Box } from 'components/Box';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilterContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const filterContacts = contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
    return filterContacts;
  };
  const filteredContacts = getFilterContacts();

  return (
    <div>
      <Box mb={3}>{isLoading && <Loader />}</Box>
      {contacts.length > 0 && (
        <ul>
          {filteredContacts.map(contact => (
            <ContactItems key={contact.id}>
              <ContactItem name={contact.name} number={contact.number} id={contact.id} />
            </ContactItems>
          ))}
        </ul>
      )}
    </div>
  );
};
