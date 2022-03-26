import { createStore } from 'redux';
import { squareReducer } from './squareReducer';

export const store = createStore(
    squareReducer, 
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
