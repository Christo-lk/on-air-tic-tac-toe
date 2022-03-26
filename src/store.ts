import { createStore } from 'redux';
import { notesReducer } from './notesReducer';

export const store = createStore(
notesReducer, 
(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
(window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
