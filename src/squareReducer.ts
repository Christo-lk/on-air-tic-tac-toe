export interface SquaresState {
    squares: string[]
}

const initialState = {
    squares: Array(9).fill("")
}

type Action = {
    type: "UPDATE_SQUARES",
    payload: string[]
}

// he walks through the reduver logic at 5:42
export const squareReducer =(state: SquaresState = initialState, action: Action ) => {
    switch(action.type) {
        case "UPDATE_SQUARES": {
            return {...state, squares: [... action.payload]}
        }

        default:
            return state

    }

}