import { combineReducers } from 'redux';

import { squareReducer } from './reducers/squareReducer';
// import shopReducer from './..';

  const rootReducer = combineReducers({
	squareReducer: squareReducer,
	// shop: shopReducer
});

export default rootReducer

// export type RootState = ReturnType<typeof rootReducer>;
