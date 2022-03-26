import './App.scss';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/rootReducer';

// Components
import Board from "./Board"

// Actions
import { updateSquares } from './redux/actions/updateSquares';
import { updateIsX } from './redux/actions/updateIsX';
import { updateGridSize } from './redux/actions/updateGridSize';

function App() {
    const dispatch = useDispatch()

    const squares = useSelector((state: RootState) => state.squares.squares)
    const isX = useSelector((state: RootState) => state.isX)
    const gridSize = useSelector((state: RootState) => state.gridSize)

    const winner = calculateWinner()
    const noWinner = calculateNoWinner()
    const currentPlayer = isX ? "X" : "O"

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

    function calculateNoWinner(): boolean {
        return !squares.includes("") && !winner
    }

    function returnResult() {
        if (winner) {
            return `🔥🔥 Player ${winner} wins !! 🔥🔥`
        }

        if (noWinner) {
            return "Yikes! better play again 😏 "
        }
    }

    function cleanState() {
        dispatch(updateSquares(Array(9).fill("")))
        dispatch(updateIsX(true))
    }

    function gridSizeHandler(size: string) {
        dispatch(updateGridSize(size))
    }

    function returnBanter() {
        if (!winner || !noWinner) {
            switch (gridSize) {
                case "XXS":
                    return "Bonus points for playing left handed with one eye shut 😉 "
                case "XXL":
                    return "Mate you need some glasses! 👀 🤓 "
            }
        }
    }

  

    return (
        <div className="App">
            <h1>ON AIR</h1>
            <hr></hr>
            <div className="game-container">
                <h2>Current Player: {currentPlayer}</h2>
                <div className="grid-size-options-container">
                    <p>Grid size: </p>
                    <p className="grid-size-option" onClick={() => gridSizeHandler("XXS")}>XXS</p>
                    <p className="grid-size-option" onClick={() => gridSizeHandler("M")}>M</p>
                    <p className="grid-size-option" onClick={() => gridSizeHandler("L")}>L</p>
                    <p className="grid-size-option" onClick={() => gridSizeHandler("XXL")}>XXL</p>
                </div>
                <Board winner={winner} />
                <h3>{returnBanter()}</h3>
                <h2>{returnResult()}</h2>
                {(winner || noWinner) && <button className="button-primary" onClick={cleanState}>Play again!</button>}
            </div>
        </div >
    );
}

export default App;
