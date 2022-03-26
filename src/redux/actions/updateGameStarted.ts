import { Action } from '../reducers/gameStartedReducer';

export function updateGameStarted(status: boolean): Action {
	return {
		type: 'SET_GAME_STARTED',
		payload: status,
	};
}
