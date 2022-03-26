export interface isXstate {
    isX: boolean
}

const initialState = {
    isX: true
}

export type Action = {
    type: "CHANGE_PLAYER",
    payload: boolean
}

// he walks through the reduver logic at 5:42
export const playerReducer =(state: isXstate = initialState, action: Action ) => {
    switch(action.type) {
        case "CHANGE_PLAYER": {
            return { isX: action.payload}
        }

        default:
            return state

    }
}