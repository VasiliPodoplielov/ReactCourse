import React from 'react';
import ContactItem from './ContactItem';

export default class ContactList extends React.Component {

  header() {
    return (
        <div className={'contact-list-header'}>
          <div className="first-name column">
            First Name
          </div>
          <div className="last-name column">
            Last Name
          </div>
          <div className="age column">
            Age
          </div>
          <div className="phone column">
            Phone
          </div>
        </div>
    );
  }

  getContacts(contacts) {
    return contacts.map((contact, index) => {
      return (
        <div key={index} className="contact-item">
          <ContactItem contact={contact} index={index} />
        </div>
      )
    });
  }

  render() {
    const {contacts} = this.props;

    return (
      <div className='wrapper-contacts'>
        <div>
          {this.header()}
        </div>
        {this.getContacts(contacts)}
      </div>
    );
  }
}

