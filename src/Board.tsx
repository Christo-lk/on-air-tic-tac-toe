import { useDispatch, useSelector } from 'react-redux';
import { SquaresState } from './redux/reducers/squareReducer';

// Components
import Square from "./Square"

// Actions
import { updateSquares } from './redux/actions/updateSquares';
import { RootState } from './redux/rootReducer';

const Board: React.FC = () => {
    const dispatch = useDispatch()
    const squares = useSelector((state: RootState) => state.squares.squares)

    console.log(squares);

    function clickHandler(index: number): void {
        const newSquares = [...squares];

        if (!newSquares[index] /*|| winner */) {
            // newSquares[index] = isX ? "X" : "O"
            newSquares[index] = "X"

            // setIsX(!isX)
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