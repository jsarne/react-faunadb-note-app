import React, {useContext} from 'react';
import NoteListItem from './NoteListItem';
import NotesContext from '../context/notes-context';
import {deleteNote} from '../api';


const NoteList = () => {
  // useContext returns context's value, destructure to get what we want
  const {notes, dispatch} = useContext(NotesContext);

  const handleRemove = (e, id) => {
    e.preventDefault();
    deleteNote(id).then(res => dispatch({type: 'REMOVE_NOTE', id}));
  };

  return notes.map((note) => <NoteListItem key={note.id} note={note} onRemove={handleRemove} />)
};

export {NoteList as default};