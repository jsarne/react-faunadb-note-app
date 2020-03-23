import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import NotesContext from '../context/notes-context';
import NoteForm from './NoteForm';
import {createNote} from '../api';

const AddNote = () => {
  const history = useHistory();
  const {dispatch} = useContext(NotesContext);

  const handleAdd = (e, title, body) => {
    e.preventDefault();
    if (title && body) {
      createNote(title, body).then(res => dispatch({type: 'ADD_NOTE', note: res}));
      history.push("/");
    }
  };

  return (
    <div>
      <p>Add Note</p>
      <NoteForm onSubmit={handleAdd} />
    </div>
  )
}

export {AddNote as default};