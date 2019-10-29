import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NoteItem from "./NoteItem";

class NoteList extends Component {
  createNoteList(notes) {
    return notes.map((note, index) => {
      return (
        <NoteItem key={index}
                  onChangeNote={this.props.onChangeNote}
                  note={note}
                  onDeleteNote={this.props.deleteNote}
        />
      );
    });
  }

  render() {
    return (
        <div className="wrapper-notes">
          {this.createNoteList(this.props.notes)}
        </div>
    );
  }
}

NoteList.propTypes = {
  onChangeNote: PropTypes.func,
  notes: PropTypes.array,
};

export default NoteList;
