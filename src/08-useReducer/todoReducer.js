export const todoReducer = (initialState = [], action = {}) => {
	switch (action.type) {
		case '[TODO] Add':
			return [...initialState, action.payload];
		case '[TODO] Delete':
			return initialState.filter((todo) => todo.id !== action.payload);
		case '[TODO] Toggle':
			return initialState.map((todo) => {
				if (todo.id === action.payload) {
					return {
						...todo,
						done: !todo.done,
					};
				}
				return todo;
			});
		default:
			return initialState;
	}
};
