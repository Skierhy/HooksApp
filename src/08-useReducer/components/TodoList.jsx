import { TodoItem } from './TodoItem';

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodoApp }) => {
	return (
		<ul className="list-group">
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					onDeleteTodoList={(event) => onDeleteTodo(event)}
					onToggleTodoList={(event) => onToggleTodoApp(event)}
				/>
			))}
		</ul>
	);
};
