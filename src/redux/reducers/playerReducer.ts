export type Action = {
	type: 'UPDATE_IS_X';
	payload: boolean;
};

export const playerReducer = (state: boolean = true, action: Action) => {
	switch (action.type) {
		case 'UPDATE_IS_X': {
			return action.payload;
		}

		default:
			return state;
	}
};
