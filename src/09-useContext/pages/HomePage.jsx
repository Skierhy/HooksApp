import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const HomePage = () => {
	const { user, hola } = useContext(UserContext);
	return (
		<>
			<h1>HomePage</h1>
			<pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
		</>
	);
};
