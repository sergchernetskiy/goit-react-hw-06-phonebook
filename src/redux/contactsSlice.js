import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContacts, deleteContacts } = contactsSlice.actions;
