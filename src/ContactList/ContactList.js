import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    return (
      <div>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}
export default ContactList;
