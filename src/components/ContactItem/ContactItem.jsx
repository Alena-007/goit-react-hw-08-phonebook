import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/contactsSelectors';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { ListButton } from '../ContactList/ContactList.styled';
import { Box } from '../Box';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [deletingItem, setDeletingItem] = useState('');

  const handleDelete = () => {
    dispatch(deleteContact(id));
    setDeletingItem(id);
  };

  useEffect(() => {
    if (!isLoading) {
      setDeletingItem('');
    }
  }, [isLoading]);

  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" justifyContent="space-between" width="100%">
        <Box as="span" width="300px">
          {name}
        </Box>
        <span>{number}</span>
      </Box>
      <ListButton type="button" onClick={handleDelete}>
        {deletingItem === id ? (
          <Box as="span" color="#4B0082" fontWeight="bold">
            Deleting...
          </Box>
        ) : (
          <span>Delete</span>
        )}
      </ListButton>
    </Box>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
