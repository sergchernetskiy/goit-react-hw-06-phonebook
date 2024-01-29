import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { FormField, Label, Input, Button } from './Form.styled';
import { notifyWarn } from 'components/Notification/Notification';
import { getContacts } from '../../redux/selectors';
import { addContacts } from '../../redux/contactsSlice';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts).initialContacts;
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        throw new Error("There isn't such option");
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    const searchedContact = contacts.find(contact => contact.name === name);

    if (searchedContact) {
      notifyWarn(`Name ${name} is already in contacts`);
      return;
    }

    dispatch(addContacts({ id: nanoid(), name, number }));

    reset();
  };

  return (
    <FormField onSubmit={handleSubmit}>
      <Label htmlFor="nameId">
        Name
        <Input
          id="nameId"
          type="text"
          name="name"
          value={name}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          onChange={handleChange}
          placeholder="Enter contact name"
        />
      </Label>

      <Label htmlFor="telId">
        Number
        <Input
          id="telId"
          type="tel"
          name="number"
          value={number}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          placeholder="Enter phone number"
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </FormField>
  );
};

export default Form;
