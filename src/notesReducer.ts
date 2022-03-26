export interface NotesState {
    notes: string[]
}

const initialState = {
    notes: []
}

type Action = {
    type: "ADD_NOTE",
    payload: string
}

// he walks through the reduver logic at 5:42

export const notesReducer =(state: NotesState = initialState, action: Action ) => {
    switch(action.type) {
        case "ADD_NOTE": {
            return {...state, notes: [...state.notes, action.payload]}
        }

        default:
            return state

    }

}