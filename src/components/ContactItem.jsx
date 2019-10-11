import React from 'react';

export default class ContactItem extends React.Component {

  render() {
    const {contact} = this.props;

    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}
