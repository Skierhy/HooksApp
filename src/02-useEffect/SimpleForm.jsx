import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: 'skierhy',
		email: 'skierhy@correo.com',
	});

	const { username, email } = formState;

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({ ...formState, [name]: value });
	};

	useEffect(() => {
		// console.log('useEffect called');
	}, []);

	useEffect(() => {
		// console.log('formState changed');
	}, [formState]);

	useEffect(() => {
		// console.log('username changed');
	}, [username]);

	return (
		<>
			<h2>useEffect - simple Form</h2>
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
		</>
	);
};
