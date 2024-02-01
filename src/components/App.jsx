import { Toaster } from 'react-hot-toast';

import { Box } from '../components/Box';
import Form from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactsList';
import { Title, TitleContacts } from './Title/Title.styled';
import { Container } from './Container/Container.styled';


const App = () => {
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
