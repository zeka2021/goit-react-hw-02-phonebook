import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Contact from './ContactList/Contact';
import Filter from './Filter';

import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    const { contacts } = this.state;
    const { name } = data;
    const contactId = uuidv4();
    const newContact = { ...data, id: contactId };
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;

    return [...contacts].filter(({ name }) =>
      name.toLowerCase().includes(filter),
    );
  };

  render() {
    const {
      filterContacts,
      formSubmitHandler,
      changeFilter,
      deleteContact,
      state: { filter },
    } = this;
    const filteredContacts = filterContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter onChange={changeFilter} filter={filter} />
        <div>
          <label>
            Find contact by name
            <input type="text" name="filter" />
          </label>
        </div>
        <ContactList deleteContact={deleteContact}>
          {filteredContacts.map(contact => {
            const contactId = uuidv4();

            return (
              <Contact
                key={contactId}
                contact={contact}
                deleteContact={deleteContact}
              />
            );
          })}
        </ContactList>
      </div>
    );
  }
}
export default App;
