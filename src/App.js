import React, {useEffect, useReducer} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import {getAllNotes} from './api';
import AddNote from './components/AddNote';
import EditNote from './components/EditNote';
import NoteList from './components/NoteList';
import NotesContext from './context/notes-context';
import notesReducer from './reducers/notes';


const App = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    getAllNotes.then(res => dispatch({type: 'POPULATE_NOTES', notes: res}));
  }, []);

  return (
    <NotesContext.Provider value={{notes, dispatch}}>
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/create">Add Note</Link></li>
          </ul>
          <Switch>
            <Route exact path="/"><NoteList /></Route>
            <Route path="/create"><AddNote /></Route>
            <Route path="/edit/:id"><EditNote /></Route>
          </Switch>
        </div>
      </Router>
    </NotesContext.Provider>
  );

}

export default App;
