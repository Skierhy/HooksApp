import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const HomePage = () => {
	const { user, hola } = useContext(UserContext);
	return (
		<>
			<h1>HomePage {hola}</h1>
			<pre>{JSON.stringify(user, null, 3)}</pre>
		</>
	);
};
