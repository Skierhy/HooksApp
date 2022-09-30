import { useEffect, useReducer } from 'react';
import { todoReducer } from '../../08-useReducer/todoReducer';

const initialState = [];

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = () => {
	const [todos, dispatchTodoAction] = useReducer(
		todoReducer,
		initialState,
		init
	);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleNewTodo = (todo) => {
		const action = {
			type: '[TODO] Add',
			payload: todo,
		};
		dispatchTodoAction(action);
	};

	const handleDeleteTodo = (todoId) => {
		const action = {
			type: '[TODO] Delete',
			payload: todoId,
		};
		dispatchTodoAction(action);
	};

	const handleToggleTodo = (todoId) => {
		const action = {
			type: '[TODO] Toggle',
			payload: todoId,
		};
		dispatchTodoAction(action);
	};
	return {
		todos,
		todosCount: todos.length,
		pendingTodosCount: todos.filter((todo) => todo.done === false).length,
		handleNewTodo,
		handleDeleteTodo,
		handleToggleTodo,
	};
};
