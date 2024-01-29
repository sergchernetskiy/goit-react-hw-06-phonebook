import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    initialContacts: [
      { id: 0, name: 'Ion', number: 123 },
      { id: 1, name: 'Meg', number: 321 },
    ],
  },
  reducers: {
    addContacts(state, action) {
      state.initialContacts.push(action.payload);
    },
    deleteContacts(state, action) {
      state.initialContacts = state.initialContacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
