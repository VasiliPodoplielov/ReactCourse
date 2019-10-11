import React from 'react';
import ContactList from './components/ContactList';
import './css/common.css';

class App extends React.Component {
  state = {
    contacts: [
      {
        id: 1,
        fName: 'name1',
        lName: 'second1',
        age: '20',
        phone: '0668888888',
      },
      {
        id: 2,
        fName: 'name1',
        lName: 'second1',
        age: '20',
        phone: '0668888888',
      },
      {
        id: 3,
        fName: 'name1',
        lName: 'second1',
        age: '20',
        phone: '0668888888',
      },

    ]
  };



  render() {
    return (
      <div>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
