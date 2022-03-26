import './App.scss';
import NewNoteInput from "./NewNoteInput"
import { useEffect } from 'react';

// Components
import Board from "./Board"

function App() {

    return (
        <div className="App">
            <h1>ON AIR</h1>
            <hr></hr>
            <Board />
        </div >
    );
}

export default App;
