import React from 'react';

export default class ContactItem extends React.Component {
  getContact(contacts) {


    return contacts.map((contact, i) => {
      let index = i;

      return (
        <div key={index} className={'contact-item'}>
          <div className="first-name column">
            {contact.fName}
          </div>
          <div className="last-name column">
            {contact.lName}
          </div>
          <div className="age column">
            {contact.age}
          </div>
          <div className="phone column">
            {contact.phone}
          </div>
        </div>
      )
    });
  }


  render() {
    const {contacts} = this.props;

    return (
      <React.Fragment>
        {this.getContact(contacts)}
      </React.Fragment>
    );
  }
}