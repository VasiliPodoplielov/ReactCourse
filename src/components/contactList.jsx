import React from 'react';
import ContactItem from './contactItem';

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

  render() {
    const {contacts} = this.props;

    return (
      <div className={'wrapper-contacts'}>
        <div>
          {this.header()}
        </div>
        <ContactItem contacts={contacts} />
      </div>
    );
  }
}

