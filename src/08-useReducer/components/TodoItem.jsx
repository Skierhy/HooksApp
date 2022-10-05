export const TodoItem = ({ todo, onDeleteTodoList, onToggleTodoList }) => {
	return (
		<>
			<li className="list-group-item">
				<span
					aria-label="span"
					className={`lead ${
						todo.done ? 'text-decoration-line-through' : ''
					}`}
					onClick={() => onToggleTodoList(todo.id)}>
					{todo.desc}
				</span>
				<button
					className="btn btn-danger btn-sm float-end mx-2"
					onClick={() => onDeleteTodoList(todo.id)}>
					Borrar
				</button>
			</li>
		</>
	);
};
