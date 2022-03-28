import { Action } from "../reducers/emptySquareReducer"
import { SquareType } from "../reducers/emptySquareReducer";

export const updateEmptySquares = (squares: SquareType[]): Action => {
    return {
        type: 'UPDATE_EMPTY_SQUARES',
        payload: squares,
    };
}