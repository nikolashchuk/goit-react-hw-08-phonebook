import { Layout } from './Layout/Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export function App() {
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Layout>
  );
}
