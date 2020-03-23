import React, {useState, useContext} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import NotesContext from '../context/notes-context';
import NoteForm from './NoteForm';
import {editNote} from '../api';

const EditNote = () => {
  const {id} = useParams();
  const history = useHistory();
  const {notes, dispatch} = useContext(NotesContext);
  const [note] = useState(notes.find(note => note.id === id));


  const handleEdit = (e, title, body) => {
    e.preventDefault();
    console.log('edit note ', id, title, body);
    if (title && body) {
      editNote(id, title, body).then(res => dispatch({type: 'EDIT_NOTE', id, note: {title, body}}));
      history.push("/");
    }
  };

  return (
    <div>
      <p>Edit Note</p>
      <NoteForm note={note} onSubmit={handleEdit} />
    </div>
  )
}

export {EditNote as default};