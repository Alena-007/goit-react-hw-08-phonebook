import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import { getVisibleContacts } from 'redux/contacts/filterSlice';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    if (e.target.name === 'filter') {
      dispatch(getVisibleContacts(e.target.value));
    }
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" name="filter" id="filter" value={filter} onChange={handleChange} />
    </FilterLabel>
  );
};
