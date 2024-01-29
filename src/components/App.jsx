// import { useState } from 'react';
// import { nanoid } from 'nanoid';
import { Toaster } from 'react-hot-toast';

// import useLocalStorage from '../hooks/useLocalStorage';
import { Box } from '../components/Box';
import Form from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactsList';
import { Title, TitleContacts } from './Title/Title.styled';
import { Container } from './Container/Container.styled';
// import { notifyWarn } from './Notification/Notification';

// const LS_KEY = 'contacts';

const App = () => {
  // const [contacts, setContacts] = useLocalStorage(LS_KEY, []);

  // const [filter, setFilter] = useState('');

  // const addContacts = ({ name, number }) => {
  //   const isNameAdded = contacts.find(
  //     contact => contact.name.toLowerCase() === name.toLowerCase()
  //   );
  //   const isNumberAdded = contacts.find(contact => contact.number === number);

  //   if (isNameAdded) {
  //     notifyWarn(`Name ${name} is already in contacts`);
  //     return false;
  //   }
  //   if (isNumberAdded) {
  //     notifyWarn(`Number ${number} is already in contacts`);
  //     return false;
  //   }

  //   setContacts(prevState => [...prevState, { id: nanoid(), name, number }]);
  //   return true;
  // };

  // const deleteContacts = id => {
  //   setContacts(prevState => prevState.filter(contact => contact.id !== id));
  // };

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const getFilterContact = () => {
  //   const normalizeFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizeFilter)
  //   );
  // };

  return (
    <Box p={[4]}>
      <Container>
        <Toaster />
        <Title>Phonebook</Title>
        <Form />

        <TitleContacts>Contacts</TitleContacts>
        <Filter />
        <ContactList />
      </Container>
    </Box>
  );
};

export default App;
