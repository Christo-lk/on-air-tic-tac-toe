import './App.scss';
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/rootReducer';

// Components
import Board from "./Board"

// Actions
import { updateSquares } from './redux/actions/updateSquares';
import { updateIsX } from './redux/actions/updateIsX';
import { updateGridSize } from './redux/actions/updateGridSize';
import { updateEmptySquares } from './redux/actions/updateEmptySquares';
import { updateGameStarted } from './redux/actions/updateGameStarted';

function App() {
    const [ai, setAi] = useState<boolean>(false);
    const dispatch = useDispatch()

    const squares = useSelector((state: RootState) => state.squares)
    const isX = useSelector((state: RootState) => state.isX)
    const gridSize = useSelector((state: RootState) => state.gridSize)
    const gameStarted = useSelector((state: RootState) => state.gameStarted)

    const winner = calculateWinner()
    const noWinner = calculateNoWinner()
    const currentPlayer = calculateCurrentPlayer()

    function calculateCurrentPlayer() {
        if (ai) {
            return isX ? "X" : "👽"
        }

        return isX ? "X" : "O"
    }

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

            if (squares[a].value && squares[a].value === squares[b].value && squares[a].value === squares[c].value) {
                dispatch(updateGameStarted(false))
                return squares[a].value
            }
        }

        return null
    }

    function calculateNoWinner(): boolean {
        return !squares.map(s => s.value).includes("") && !winner
    }

    function returnResult() {
        if (winner) {



            if(ai && winner === "O") { 
                return `🔥🔥 👽 wins !! 🔥🔥`
            }
            return `🔥🔥 Player ${ winner} wins !! 🔥🔥`


            return `🔥🔥  ${ai ? "👽" : "Player " + winner} wins !! 🔥🔥`




        }

        if (noWinner) {
            return "Yikes! better play again 😏 "
        }
    }

    function cleanState(): void {
        const initialSquaresState = [
            { id: 1, value: '' },
            { id: 2, value: '' },
            { id: 3, value: '' },
            { id: 4, value: '' },
            { id: 5, value: '' },
            { id: 6, value: '' },
            { id: 7, value: '' },
            { id: 8, value: '' },
            { id: 9, value: '' },
        ];

        dispatch(updateSquares(initialSquaresState))
        dispatch(updateEmptySquares(initialSquaresState))
        dispatch(updateIsX(true))
        dispatch(updateGameStarted(false))
        setAi(false);
    }

    function gridSizeHandler(size: string): void {
        dispatch(updateGridSize(size))
    }

    function returnBanter(): string | null {
        if (!winner || !noWinner) {
            switch (gridSize) {
                case "XXS":
                    return "Bonus points for playing left handed with one eye shut 😉 "
                case "XXL":
                    return "Mate you need some glasses! 👀 🤓 "
            }
        }

        return null
    }

    function aiHandler(): void {
        cleanState()
        setAi(true)
    }

    return (
        <div className="App">
            <div className="logo-container">
                <h1>ON AIR</h1>
            </div>
            <div className="border-bottom"/>
            <div className="game-container">
                <h2 className="current-player">Current Player: {currentPlayer}</h2>
                <div className="grid-size-options-container">
                    <p>Grid size: </p>
                    <p className="grid-size-option" onClick={() => gridSizeHandler("XXS")}>XXS</p>
                    <p className="grid-size-option" onClick={() => gridSizeHandler("M")}>M</p>
                    <p className="grid-size-option" onClick={() => gridSizeHandler("L")}>L</p>
                    <p className="grid-size-option" onClick={() => gridSizeHandler("XXL")}>XXL</p>
                </div>
                <Board winner={winner} ai={ai} />
                {!gameStarted && !ai && <p className="alien-text" onClick={aiHandler}>Click here to play against a real life Alien 👽</p>}
                <h3>{ !winner && returnBanter()}</h3>
                <h2>{returnResult()}</h2>
                {(winner || noWinner) && <button className="button-primary" onClick={cleanState}>Play again!</button>}
            </div>
        </div >
    );
}

export default App;
