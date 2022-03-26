import { combineReducers } from 'redux';

// Reducers
import { squareReducer } from './reducers/squareReducer';
import { playerReducer } from './reducers/playerReducer';
import { gridSizeReducer } from './reducers/gridSizeReducer';


  const rootReducer = combineReducers({
	squares: squareReducer,
    isX: playerReducer,
    gridSize: gridSizeReducer
});

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>;
