import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NoteItem extends Component {
  onChange = (e) => {
    this.props.onChangeNote(this.props.note.id, {[e.target.name]: e.target.value});
  }

  onDelete = () => {
    this.props.onDeleteNote(this.props.note.id);
  }

  render() {
    return (
        <div className='note-item'>
          <div className="note-item__title">
            <input
                name='title'
                type="text"
                value={this.props.note.title}
                onChange={this.onChange}
                placeholder='Название заметки'
            />
            <button onClick={this.onDelete}>Delete</button>
          </div>

          <div className="note-item__text">
            <textarea
                name="text"
                placeholder='Введите описание заметки'
                value={this.props.note.text}
                onChange={this.onChange}
            >
            </textarea>
          </div>
        </div>
    );
  }
}

NoteItem.propTypes = {
  onChangeNote: PropTypes.func,
  title: PropTypes.string,
  text: PropTypes.string,
  onDeleteNote: PropTypes.func,
};

export default NoteItem;
