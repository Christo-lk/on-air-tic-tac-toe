export type Action = {
    type: "SET_GAME_STARTED",
    payload: boolean
}

export const gameStartedReducer =(state: boolean = false, action: Action ) => {
    switch(action.type) {
        case "SET_GAME_STARTED": {
            return action.payload
        }

        default:
            return state

    }
}