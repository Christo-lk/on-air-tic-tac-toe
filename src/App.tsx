import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import NewNoteInput  from "./NewNoteInput"
import { SquaresState } from './squareReducer';
import { useEffect } from 'react';

function App() {
    //6:29
    // use selector return type at 7:16
    const notes = useSelector<SquaresState, SquaresState["squares"]>((state) => state.squares)
    const dispatch = useDispatch()

    const updateSquares = (note: string[]) => {
        dispatch({
            type: "UPDATE_SQUARES",
            payload: note
        })
    }

    return (
        <div className="App">
            <h1>test on air</h1>
            {/* <NewNoteInput addNote={addNote}/> */}

            <button onClick={() => updateSquares(["a","b","v"])}>CLICKME</button>
            
            <hr></hr>

            {notes.map((square, index) => {
                 return <div className="square" />
                })}
            <ul>
            </ul>
        </div>
    );
}

export default App;
