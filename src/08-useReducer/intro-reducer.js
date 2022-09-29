const initialState = [{ id: 1, todo: 'Comprar pan', done: false }];

const todoReducer = (state = initialState, action = {}) => {
	if (action?.type === '[TODO] Add todo') {
		return [...state, action.payload];
	}
	return state;
};

let todos = todoReducer();

console.log(todos);

const newTodo = {
	id: 2,
	todo: 'Comprar leche',
	done: false,
};

// action
const addToDoAction = {
	// el type es obligatorio para que el reducer sepa que hacer
	type: '[TODO] Add todo',
	// el payload es: la información que se va a enviar al reducer (opcional)
	payload: newTodo,
};

todos = todoReducer(todos, addToDoAction);
console.log(todos);
