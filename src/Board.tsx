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
    const squares: SquareType[] = useSelector((state: RootState) => state.squares)
    const emptySquares: SquareType[] = useSelector((state: RootState) => state.emptySquares)
    const isX: boolean = useSelector((state: RootState) => state.isX)
    const gridSize: string = useSelector((state: RootState) => state.gridSize)
    const gameStarted: boolean = useSelector((state: RootState) => state.gameStarted)

    useEffect(() => {
        if(!isX && emptySquares.length > 0 && ai && !winner) {
            setIsAiTurn(true);
            setTimeout(() => playAiTurn(), 500)
        }
    }, [squares])

    function playAiTurn(): void{ 
        const randomIndex: number = Math.floor(Math.random() * (emptySquares.length) + 0)

        const currentSquare: SquareType = emptySquares[randomIndex]
        const otherSquares: SquareType[] = squares.filter(s => s.id !== currentSquare.id);

        currentSquare.value = isX ? "X" : "O"
        const updatedSquares: SquareType[] = [...otherSquares, currentSquare].sort((a,b) => a.id -b.id)

        playTurn(updatedSquares, isX)
        setEmptySquares(currentSquare.id)
        setIsAiTurn(false)
    }

    function clickHandler(id: number): void {
        !gameStarted && dispatch(updateGameStarted(true))

        const selectedSquare: SquareType = squares.filter(s => s.id === id)[0]
        const otherSquares: SquareType[] = squares.filter(s => s.id !== id);

        if (selectedSquare.value || winner !== null || isAiTurn ) {
            return
        }

        selectedSquare.value = isX ? "X" : "O"
        const updatedSquares: SquareType[] = [...otherSquares, selectedSquare].sort((a,b) => a.id -b.id)

        playTurn(updatedSquares, isX)
        setEmptySquares(id)
    }

    function setEmptySquares(id: number): void { 
        const newArray: SquareType[] = emptySquares.filter(square => id !== square.id)

        dispatch(updateEmptySquares(newArray))
    }

    function playTurn(squares: SquareType[], isX: boolean): void { 
        dispatch(updateIsX(!isX))
        dispatch(updateSquares(squares))
    }

    return (
        <div className={`board ${gridSize} ${ai ? "alien" : ""}`}>
            {squares.map((square) => {
                return <Square key={square.id} value={square.value} clickHandler={() => clickHandler(square.id)} />
            })}
        </div>
    )
}

export default Board;