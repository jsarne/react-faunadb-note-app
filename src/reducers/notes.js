// useReducer hook very much like redux reducers
// useState uses useReducer behind the scenes
const notesReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_NOTES':
      console.log('reducer populate, returning', action.notes.map((note) => buildNote(note)));
      return action.notes.map((note) => buildNote(note));
    case 'ADD_NOTE': 
      console.log('reducer add, adding', action.note);
      return [...state, buildNote(action.note)];
    case 'EDIT_NOTE': 
      console.log('reducer edit, new note values', action.note);
      return state.map(note => note.id === action.id ? {...note, title: action.note.title, body: action.note.body} : note);
    case 'REMOVE_NOTE': 
      console.log('reducer remove, removing', action.id);
      return state.filter(note => note.id !== action.id);
    default: 
      console.log('reducer default, returning', state);
      return state;
  }
};

const buildNote = (note) => {
  return {
    id: note.ref.value.id, 
    title: note.data.title, 
    body: note.data.body
  };
};

export {notesReducer as default};