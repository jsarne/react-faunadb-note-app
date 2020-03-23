import React from 'react'; 
import {Link} from 'react-router-dom';

const NoteListItem = ({note, onRemove}) => {
  return (
    <div>
      <h3><Link to={`/edit/${note.id}`}>{note.title}</Link></h3>
      <p>{note.body}</p>
      <button onClick={(e) => onRemove(e, note.id)}>X</button>
    </div>
  );
};

export {NoteListItem as default};