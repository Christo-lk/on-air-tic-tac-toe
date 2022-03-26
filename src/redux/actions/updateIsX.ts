import { Action } from '../reducers/playerReducer';

export function updateIsX(isX: boolean): Action {
	return {
		type: 'UPDATE_IS_X',
		payload: isX,
	};
}
