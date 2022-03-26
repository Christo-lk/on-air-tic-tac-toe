import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SquareType } from './redux/reducers/squareReducer';
import { RootState } from './redux/rootReducer';

// Components
import Square from "./Square"

// Actions
import { updateSquares } from './redux/actions/updateSquares';
import { updateIsX } from './redux/actions/updateIsX';

type Props = {
    winner: string | null;
}

const Board: React.FC<Props> = ({ winner }) => {
    const dispatch = useDispatch()
    const squares = useSelector((state: RootState) => state.squares)
    const isX = useSelector((state: RootState) => state.isX)
    const gridSize = useSelector((state: RootState) => state.gridSize)

    const [emptySquares, setEmptySquares] = useState<SquareType[]>(squares)

    useEffect(() => {
        let array = []
        if(!isX) {

            for(let i = 0; i< squares.length; i++) { 
                array.push(squares.indexOf(squares[i]))
            }

        }

    }, [squares])

    function clickHandler(id: number): void {
        // debugger;
        const selectedSquare = squares.filter(s => s.id === id)[0]
        let otherSquares = squares.filter(s => s.id !== id);

        if (selectedSquare.value || winner !== null ) {
            return
        }

        selectedSquare.value = isX ? "X" : "O"

        const updatedSquares = [...otherSquares, selectedSquare].sort((a,b) => a.id -b.id)

        playTurn(updatedSquares, isX)
        updateEmptySquares(id)
    }

    function updateEmptySquares(index: number) { 
        const newArray = [...emptySquares]

        setEmptySquares(newArray.filter(square => square))
    }

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