import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import NewNoteInput  from "./NewNoteInput"
import { NotesState } from './notesReducer';
import { useEffect } from 'react';

function App() {
    //6:29
    // use selector return type at 7:16
    const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes)
    const dispatch = useDispatch()

    console.log("notes: ", notes)

    const addNote = (note: string) => {
        dispatch({
            type: "ADD_NOTE",
            payload: note
        })
    }

    return (
        <div className="App">
            <h1>test on air</h1>
            <NewNoteInput addNote={addNote}/>
            
            <hr></hr>

            {notes.map((note, index) => {
                 return <div className="square" />
                })}
            <ul>
            </ul>
        </div>
    );
}

export default App;
