import { useDispatch, useSelector } from 'react-redux';
import { SquaresState } from './redux/reducers/squareReducer';
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
    const squares = useSelector((state: RootState) => state.squares.squares)
    const isX = useSelector((state: RootState) => state.isX)
    const gridSize = useSelector((state: RootState) => state.gridSize)

    function clickHandler(index: number): void {
        const newSquares = [...squares];

        if (newSquares[index] || winner !== null ) {
            return
        }

        newSquares[index] = isX ? "X" : "O"

        dispatch(updateIsX(!isX))
        dispatch(updateSquares(newSquares))
    }

    return (
        <div className={`board ${gridSize}`}>
            {squares.map((square, index) => {
                return <Square key={index} value={square} clickHandler={() => clickHandler(index)} />
            })}
        </div>
    )
}

export default Board;