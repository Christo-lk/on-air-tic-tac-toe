export type Action = {
	type: 'UPDATE_GRID_SIZE';
	payload: string;
};

export const gridSizeReducer = (state: string = 'M', action: Action) => {
	switch (action.type) {
		case 'UPDATE_GRID_SIZE': {
			return action.payload;
		}

		default:
			return state;
	}
};
