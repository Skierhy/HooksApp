import { useReducer } from 'react';
import { TodoAdd, TodoList } from './components/';
import { todoReducer } from './todoReducer';

const initialState = [
	{
		id: new Date().getTime(),
		desc: 'Aprender React',
		done: false,
	},
	{
		id: new Date().getTime() * 2,
		desc: 'Aprender Mongo',
		done: false,
	},
];

export const TodoApp = () => {
	const [todos, dispatchTodoAction] = useReducer(todoReducer, initialState);
	const handleNewTodo = (todo) => {
		console.log({ todo });
	};
	return (
		<>
			<hr />
			<h1 className="m-5">
				TodoApp(10) <small>Pendientes: (2)</small>
			</h1>
			<div className="row">
				<div className="col-7">
					<TodoList todos={todos} />
				</div>
				<div className="col-5">
					<h4>Agregar TODO</h4>
					<hr />
					<TodoAdd onNewTodo={(event) => handleNewTodo(event)} />
				</div>
			</div>
		</>
	);
};
