import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { ListButton } from '../ContactList/ContactList.styled';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <span>{name}: </span>
      <span>{number}</span>
      <ListButton type="button" onClick={() => dispatch(removeContact(id))}>
        Delete
      </ListButton>
    </div>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
