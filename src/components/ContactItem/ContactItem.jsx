import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { ListButton } from '../ContactList/ContactList.styled';
import { Box } from '../Box';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" justifyContent="space-between" width="100%">
        <Box as="span" width="300px">
          {name}
        </Box>
        <span>{number}</span>
      </Box>
      <ListButton type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </ListButton>
    </Box>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
