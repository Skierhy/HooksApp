import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const LoginPage = () => {
	const { user, setUser } = useContext(UserContext);
	return (
		<>
			<h1>LoginPage</h1>
			<pre aria-label="Login">{JSON.stringify(user, null, 3)}</pre>
			<button
				className="btn btn-primary"
				onClick={() =>
					setUser({
						id: 123,
						name: 'Skierhy',
						email: 'XD',
					})
				}>
				Establecer usuario
			</button>
		</>
	);
};
