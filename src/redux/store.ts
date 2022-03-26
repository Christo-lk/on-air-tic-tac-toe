import { createStore } from 'redux';
import { squareReducer } from './reducers/squareReducer';

import  rootReducer  from './rootReducer';

export const store = createStore(
    squareReducer, 
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
