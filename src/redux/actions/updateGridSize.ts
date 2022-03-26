import {Action} from "../reducers/gridSizeReducer"

export function updateGridSize(size: string): Action { 
    return {
        type: "UPDATE_GRID_SIZE",
        payload: size
    }
}