import { useDispatch, useSelector } from 'react-redux';
import { SquaresState } from './redux/reducers/squareReducer';
import { RootState } from './redux/rootReducer';

// Components
import Square from "./Square"

// Actions
import { updateSquares } from './redux/actions/updateSquares';
import { updateIsX } from './redux/actions/updateIsX';

const Board: React.FC = () => {
    const dispatch = useDispatch()
    const squares = useSelector((state: RootState) => state.squares.squares)
    const isX = useSelector((state: RootState) => state.isX)

    console.log(squares);

    console.log('notX: ', !isX)

    function clickHandler(index: number): void {
        const newSquares = [...squares];

        if (!newSquares[index] /*|| winner */) {
            newSquares[index] = !isX ? "X" : "O"

            dispatch(updateIsX(!isX))
            dispatch(updateSquares(newSquares))
        }
    }

    return (
        <div className="board">
            {squares.map((square, index) => {
                return <Square key={index} value={square} clickHandler={() => clickHandler(index)} />
            })}
        </div>
    )
}

export default Board;