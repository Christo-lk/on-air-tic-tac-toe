import { combineReducers } from 'redux';

// Reducers
import { squareReducer } from './reducers/squareReducer';
import { playerReducer } from './reducers/playerReducer';
import { gridSizeReducer } from './reducers/gridSizeReducer';
import { emptySquareReducer } from './reducers/emptySquareReducer';

  const rootReducer = combineReducers({
	squares: squareReducer,
    emptySquares: emptySquareReducer,
    isX: playerReducer,
    gridSize: gridSizeReducer,

});

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>;