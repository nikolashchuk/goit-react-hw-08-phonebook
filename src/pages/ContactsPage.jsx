import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@mui/material/Container';

import { fetchContacts } from 'redux/operations';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

export default function ContactsPage() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1 style={{ marginTop: 20 }}>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />

      {isLoading && !error && <p style={{ textAlign: 'center' }}>Loading...</p>}

      {contacts.length === 0 && !isLoading ? (
        <p style={{ textAlign: 'center' }}>You don't have any contacts yet</p>
      ) : (
        <ContactList />
      )}
    </Container>
  );
}
