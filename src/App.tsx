import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/rootReducer';

// Components
import Board from "./Board"

function App() {
    const squares = useSelector((state: RootState) => state.squares.squares)
    const winner = calculateWinner()

    function calculateWinner(): string | null {
        const winningIndex: number[][] = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let i = 0; i < winningIndex.length; i++) {
            const [a, b, c] = winningIndex[i];

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }
        }

        return null
    }

    return (
        <div className="App">
            <h1>ON AIR</h1>
            <hr></hr>
            <Board winner={winner} />
        </div >
    );
}

export default App;
