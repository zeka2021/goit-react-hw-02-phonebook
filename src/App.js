import React, { Component } from 'react';

// import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label>
            number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <div>
          <label>
            Find contact by name
            <input type="text" name="filter" />
          </label>
        </div>
        <ul>
          <li>
            <span>Name:</span>
            <span>Number</span>
          </li>
        </ul>
      </div>
    );
  }
}
export default App;
