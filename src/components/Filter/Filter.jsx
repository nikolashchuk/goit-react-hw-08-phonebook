import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/slice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  function handleChange(e) {
    dispatch(filterContacts(e.target.value));
  }
  return (
    <div>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={value}
          onChange={handleChange}
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Pavlo Nikolashchuk"
          required
        />
      </Label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};
