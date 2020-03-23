import React, {useState} from 'react';

const NoteForm = ({note, onSubmit}) => {
  const [title, setTitle] = useState(note ? note.title : '');
  const [body, setBody] = useState(note ? note.body : '');

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e, title, body)}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        <button>Save Note</button>
      </form>
    </div>
  )
}

export {NoteForm as default};