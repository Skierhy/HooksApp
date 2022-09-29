export const TodoItem = ({ todo }) => {
	return (
		<>
			<li className="list-group-item">
				<span className="lead">{todo.desc}</span>
				<button className="btn btn-danger btn-sm float-end mx-2">
					Borrar
				</button>
			</li>
		</>
	);
};
