export const todoReducer = (initialState = [], action = {}) => {
	switch (action.type) {
		case 'add':
			throw new Error('Action.type = add no esta implementado');

		default:
			return initialState;
	}
};
