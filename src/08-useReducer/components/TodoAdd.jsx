import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {
	const { desc, onResetForm, onInputChange } = useForm({
		desc: '',
	});

	const onFormSubmit = (event) => {
		event.preventDefault();
		if (desc.trim().length <= 0) {
			return;
		}
		const newTodo = {
			id: new Date().getTime(),
			desc,
			done: false,
		};
		// si no existe la función no se ejecuta
		onNewTodo && onNewTodo(newTodo);
		onResetForm();
	};
	return (
		<form onSubmit={onFormSubmit}>
			<input
				type="text"
				name="desc"
				className="form-control"
				placeholder="Agregar al TODO"
				autoComplete="off"
				value={desc}
				onChange={onInputChange}
			/>
			<button type="submit" className="btn btn-success mt-3">
				Agregar
			</button>
		</form>
	);
};
