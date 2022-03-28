import { combineReducers } from 'redux';

// Reducers
import { squareReducer } from './reducers/squareReducer';
import { playerReducer } from './reducers/playerReducer';
import { gridSizeReducer } from './reducers/gridSizeReducer';
import { emptySquareReducer } from './reducers/emptySquareReducer';
import { gameStartedReducer } from './reducers/gameStartedReducer';

const rootReducer = combineReducers({
	squares: squareReducer,
	emptySquares: emptySquareReducer,
	isX: playerReducer,
	gridSize: gridSizeReducer,
	gameStarted: gameStartedReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;