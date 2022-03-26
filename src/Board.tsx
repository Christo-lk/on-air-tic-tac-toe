import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SquareType } from './redux/reducers/squareReducer';
import { RootState } from './redux/rootReducer';

// Components
import Square from "./Square"

// Actions
import { updateSquares } from './redux/actions/updateSquares';
import { updateIsX } from './redux/actions/updateIsX';
import { updateEmptySquares } from './redux/actions/updateEmptySquares';
import { updateGameStarted } from './redux/actions/updateGameStarted';


type Props = {
    winner: string | null;
    ai: boolean;
}

const Board: React.FC<Props> = ({ winner, ai }) => {
    const [isAiTurn, setIsAiTurn] = useState<boolean>(false);

    const dispatch = useDispatch()
    const squares = useSelector((state: RootState) => state.squares)
    const emptySquares = useSelector((state: RootState) => state.emptySquares)
    const isX = useSelector((state: RootState) => state.isX)
    const gridSize = useSelector((state: RootState) => state.gridSize)
    const gameStarted = useSelector((state: RootState) => state.gameStarted)

    useEffect(() => {
        if(!isX && emptySquares.length > 0 && ai && !winner) {
            setIsAiTurn(true);
            setTimeout(() => playAiTurn(), 500)
        }
    }, [squares])

    function playAiTurn(): void{ 
        const randomIndex = Math.floor(Math.random() * (emptySquares.length) + 0)

        const currentSquare = emptySquares[randomIndex]
        const otherSquares = squares.filter(s => s.id !== currentSquare.id);

        currentSquare.value = isX ? "X" : "O"
        const updatedSquares = [...otherSquares, currentSquare].sort((a,b) => a.id -b.id)

        playTurn(updatedSquares, isX)
        setEmptySquares(currentSquare.id)
        setIsAiTurn(false)
    }

    function clickHandler(id: number): void {
        !gameStarted && dispatch(updateGameStarted(true))

        const selectedSquare = squares.filter(s => s.id === id)[0]
        const otherSquares = squares.filter(s => s.id !== id);

        if (selectedSquare.value || winner !== null || isAiTurn ) {
            return
        }

        selectedSquare.value = isX ? "X" : "O"
        const updatedSquares = [...otherSquares, selectedSquare].sort((a,b) => a.id -b.id)

        playTurn(updatedSquares, isX)
        setEmptySquares(id)
    }

    function setEmptySquares(id: number): void { 
        const newArray = emptySquares.filter(square => id !== square.id)

        dispatch(updateEmptySquares(newArray))
    }

    function playTurn(squares: SquareType[], isX: boolean): void { 
        dispatch(updateIsX(!isX))

        dispatch(updateSquares(squares))
    }

    return (
        <div className={`board ${gridSize} ${ai ? "alien" : ""}`}>
            {squares.map((square, index) => {
                return <Square key={square.id} value={square.value} clickHandler={() => clickHandler(square.id)} />
            })}
        </div>
    )
}

export default Board;