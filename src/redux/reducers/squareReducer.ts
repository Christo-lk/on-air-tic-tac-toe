export type SquareType = {
    id: number;
    value: string; 
};

export const initalState = [
	{ id: 1, value: '' },
	{ id: 2, value: '' },
	{ id: 3, value: '' },
	{ id: 4, value: '' },
	{ id: 5, value: '' },
	{ id: 6, value: '' },
	{ id: 7, value: '' },
	{ id: 8, value: '' },
	{ id: 9, value: '' },
];

export type Action = {
	type: 'UPDATE_SQUARES';
	payload: SquareType[];
};

// he walks through the reduver logic at 5:42
export const squareReducer = (state: SquareType[] = initalState, action: Action) => {
	switch (action.type) {
		case 'UPDATE_SQUARES': {
			return [...action.payload];
		}

		default:
			return state;
	}
};
