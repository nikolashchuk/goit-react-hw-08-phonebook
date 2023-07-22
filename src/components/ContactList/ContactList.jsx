import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import ContactListItem from 'components/ContactListItem/ContactListItem';
import { selectVisibleContacts } from 'redux/selectors';

export default function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li key={id} style={{ paddingBottom: 12 }}>
            <ContactListItem id={id} name={name} number={number} />
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
