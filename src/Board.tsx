import { useDispatch, useSelector } from 'react-redux';
import { SquaresState } from './squareReducer';

import Square from "./Square"



const Board: React.FC = () => {
    const dispatch = useDispatch()
    const squares = useSelector<SquaresState, SquaresState["squares"]>((state) => state.squares)

    const updateSquares = (note: string[]) => {
        dispatch({
            type: "UPDATE_SQUARES",
            payload: note
        })
    }


    function clickHandler(){ 
        
    }

    return (
        <div className="board">
            {squares.map((square, index) => {
                return <Square key={index} value={square }clickHandler={clickHandler}/>
            })}
        </div>
    )
}

export default Board;