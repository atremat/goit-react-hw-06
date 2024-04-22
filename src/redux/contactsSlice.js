import { createSlice } from "@reduxjs/toolkit";
import defaultContacts from "../data/contactList.json"; //default contactList
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer } from "redux-persist";

const contactsInitialState = { items: defaultContacts };
// const contactsInitialState = { items: [] };

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      const filtered = state.items.filter(
        (contact) => contact.id !== action.payload
      );
      return { items: filtered };
    },
    //edit contact
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

const persistContactsConfig = {
  key: "contacts",
  storage,
};

export const contactsReducer = persistReducer(
  persistContactsConfig,
  contactsSlice.reducer
);

// export const contactsReducer = contactsSlice.reducer;
