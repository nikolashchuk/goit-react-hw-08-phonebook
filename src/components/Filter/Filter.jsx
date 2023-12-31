import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { setQueryFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    dispatch(setQueryFilter(event.target.value));
  };

  return (
    <Box display="flex" alignItems="center" gap="10px" marginTop="20px">
      <TextField
        id="fullWidth"
        label="Find contacts by name"
        type="text"
        value={filter}
        onChange={onChange}
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="Павло Ніколащук"
        required
      />
    </Box>
  );
}
