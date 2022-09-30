import { useTodos } from '../hooks/08-useReducer/useTodos';
import { TodoAdd, TodoList } from './components/';

export const TodoApp = () => {
	const {
		todos,
		todosCount,
		pendingTodosCount,
		handleNewTodo,
		handleDeleteTodo,
		handleToggleTodo,
	} = useTodos();
	return (
		<>
			<hr />
			<h1 className="m-5">
				TodoApp({todosCount}),{' '}
				<small>Pendientes: ({pendingTodosCount})</small>
			</h1>
			<div className="row">
				<div className="col-7">
					<TodoList
						todos={todos}
						onDeleteTodo={(event) => {
							handleDeleteTodo(event);
						}}
						onToggleTodoApp={(event) => handleToggleTodo(event)}
					/>
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
