import React from 'react';
import NoteItem from './Components/NoteItem';
import NoteList from "./Components/NoteList";

import './common.css';

const LOCAL_STORAGE_KEYS = {
  NOTES: 'notes',
};

class App extends React.Component {
  state = {
    notes: [],
    isNotes: false,
  };

  componentWillMount() {
    this.getData();
  }

  getData() {
    const str = localStorage.getItem(LOCAL_STORAGE_KEYS.NOTES);
    let data = str ? JSON.parse(str) : [];

    this.setState({
      notes: data
    });
  }

  setData(notes) {
    const str = JSON.stringify(notes);
    localStorage.setItem(LOCAL_STORAGE_KEYS.NOTES, str);
  }

  deleteNote = (id) => {
    const notes = this.state.notes.filter(note => {
      return note.id !== id;
    });

    notes.splice(id, 1);
    this.setData(notes);
    this.getData();
  }

  onAddNote = () => {
    const notes = [...this.state.notes,
      {
        id: Date.now(),
        title: '',
        text: '',
      }
    ];


    this.setState({
      notes: notes,
    });

    this.setData(notes);
    this.getData();
  }

  onChangeNote = (id, noteData) => {
    let note = this.state.notes.find(item => item.id === id);

    note = {
      ...note,
      ...noteData,
    };

    const notes = this.state.notes.map(item => {
      return item.id === note.id ? note : item;
    });

    this.setState({
      notes: [notes],
    });

    this.setData(notes);
    this.getData();
  }

  render() {
    return (
        <div className='wrapper-content'>
          <div className="wrapper-action-bar">
            <h1>Notes app</h1>
            <button className="add-note" onClick={this.onAddNote}>Add note</button>
          </div>
            <NoteList onChangeNote={this.onChangeNote}
                      notes={this.state.notes}
                      deleteNote={this.deleteNote}
            />
        </div>
    );
  }

}

export default App;
