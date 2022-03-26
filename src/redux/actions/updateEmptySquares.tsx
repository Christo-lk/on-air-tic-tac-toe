import {Action} from "../reducers/emptySquareReducer" //TODO: Tidy this all up
import { SquareType } from "../reducers/emptySquareReducer";

export const updateEmptySquares = (squares: SquareType[]): Action => {
	return {
		type: 'UPDATE_EMPTY_SQUARES',
		payload: squares,
    };
}