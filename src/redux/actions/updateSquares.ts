import { Action } from '../reducers/squareReducer'; //TODO: Tidy this all up
import { SquareType } from '../reducers/squareReducer';

export const updateSquares = (squares: SquareType[]): Action => {
	return {
		type: 'UPDATE_SQUARES',
		payload: squares,
	};
};
