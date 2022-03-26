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

type Props = {
    winner: string | null;
}

const Board: React.FC<Props> = ({ winner }) => {
    const dispatch = useDispatch()
    const squares = useSelector((state: RootState) => state.squares)
    const emptySquares = useSelector((state: RootState) => state.emptySquares)
    const isX = useSelector((state: RootState) => state.isX)
    const gridSize = useSelector((state: RootState) => state.gridSize)

    // const [emptySquares, setEmptySquares] = useState<SquareType[]>(squares)

    useEffect(() => {
        if((!isX && emptySquares.length > 0) && !winner) {
            setTimeout(() => playAiTurn(), 500)
        }
    }, [squares])

    function playAiTurn(){ 
        const randomIndex = Math.floor(Math.random() * (emptySquares.length) + 0)

        const currentSquare = emptySquares[randomIndex]
        const otherSquares = squares.filter(s => s.id !== currentSquare.id);

        currentSquare.value = isX ? "X" : "O"
        const updatedSquares = [...otherSquares, currentSquare].sort((a,b) => a.id -b.id)

        playTurn(updatedSquares, isX)
        setEmptySquares(currentSquare.id)

        return  
    }

    function clickHandler(id: number): void {
        const selectedSquare = squares.filter(s => s.id === id)[0]
        const otherSquares = squares.filter(s => s.id !== id);

        if (selectedSquare.value || winner !== null ) {
            return
        }

        selectedSquare.value = isX ? "X" : "O"
        const updatedSquares = [...otherSquares, selectedSquare].sort((a,b) => a.id -b.id)

        playTurn(updatedSquares, isX)
        setEmptySquares(id)
    }

    function setEmptySquares(id: number) { 
        const newArray = emptySquares.filter(square => id !== square.id)

        dispatch(updateEmptySquares(newArray))
        // setEmptySquares(newArray)
    }

    console.log("empty: ", emptySquares)

    function playTurn(squares: SquareType[], isX: boolean){ 
        dispatch(updateIsX(!isX))

        dispatch(updateSquares(squares))
    }

    return (
        <div className={`board ${gridSize}`}>
            {squares.map((square, index) => {
                return <Square key={square.id} value={square.value} clickHandler={() => clickHandler(square.id)} />
            })}
        </div>
    )
}

export default Board;