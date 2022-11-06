import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { ContactItem } from '../ContactItem/ContactItem';
import { ContactItems } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
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
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {contacts.length > 0 && (
        <ul>
          {filteredContacts.map(contact => (
            <ContactItems key={contact.id}>
              <ContactItem name={contact.name} number={contact.phone} id={contact.id} />
            </ContactItems>
          ))}
        </ul>
      )}
    </div>
  );
};
