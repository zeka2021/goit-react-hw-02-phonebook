import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  render() {
    const {
      contact: { name, number, id },
      deleteContact,
    } = this.props;

    return (
      <li>
        <span>{name}</span>
        <span>{number}</span>
        <button onClick={() => deleteContact(id)}>Delet contact</button>
      </li>
    );
  }
}

Contact.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contact: PropTypes.objectOf(PropTypes.string.isRequired),
};
export default Contact;
