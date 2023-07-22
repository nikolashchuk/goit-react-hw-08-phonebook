import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

import PropTypes from 'prop-types';
import { Info, Item, List } from './ContactList.styled';

export const ContactList = ({ item }) => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {contacts.map(({ id, name, phone }) => {
        return (
          <Item key={id}>
            <Info>
              {name}: {phone}
            </Info>
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
