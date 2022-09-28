import { useForm } from '../hooks/useForm';
import { Message } from './Message';

export const FormWithCustomHook = () => {
	const { onInputChange, username, email, password, onResetForm } = useForm({
		username: '',
		email: '',
		password: '',
	});

	// const { name, email, password } = formState;

	return (
		<>
			<h2>Formulario con custom Hook</h2>
			{username === 'skierhy1' && <Message />}
			<input
				type="text"
				className="form-control"
				placeholder="Username"
				name="username"
				value={username}
				onChange={onInputChange}
			/>
			<input
				type="email"
				className="form-control mt-2"
				placeholder="skierhy@correo.com"
				name="email"
				value={email}
				onChange={onInputChange}
			/>
			<input
				type="password"
				className="form-control mt-2"
				placeholder="password"
				name="password"
				value={password}
				onChange={onInputChange}
			/>
			<button className="btn btn-primary mt-3" onClick={onResetForm}>
				Borrar
			</button>
		</>
	);
};
