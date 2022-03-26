import { combineReducers } from 'redux';

// Reducers
import { squareReducer } from './reducers/squareReducer';
import { playerReducer } from './reducers/playerReducer';

  const rootReducer = combineReducers({
	squares: squareReducer,
    isX: playerReducer
});

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>;
