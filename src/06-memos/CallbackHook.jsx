import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
	const [counter, setcounter] = useState(1);
	const incrementFather = useCallback((argumento) => {
		setcounter((c) => c + argumento);
	}, []);

	// const incrementFather = () => {
	// 	setcounter(counter + 1);
	// };
	return (
		<>
			<h1>useCallback Hook: {counter}</h1>
			<ShowIncrement increment={incrementFather} />
		</>
	);
};
