import { useSelector } from 'react-redux';
import { useMemo } from 'react';

import { getContacts, getFilterValue } from '../../redux/selectors';
import { ElementListContacts } from '../ElementList/ElementList';
import { List } from './ContactsList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts).initialContacts;
  const filterValue = useSelector(getFilterValue);

  const visibleContacts = useMemo(() => {
    const normalizeFilter = filterValue.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  }, [contacts, filterValue]);

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (

        <ElementListContacts key={id} name={name} number={number} id={id} />

      ))}
    </List>
  );
};
