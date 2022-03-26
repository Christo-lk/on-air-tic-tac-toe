import {Action} from "../reducers/squareReducer" //TODO: Tidy this all up

export const updateSquares = (squares: string[]): Action => {
	return {
		type: 'UPDATE_SQUARES',
		payload: squares,
    };
}
