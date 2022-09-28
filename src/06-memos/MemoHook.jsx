import { useMemo, useState } from 'react';
import { useCounter } from '../hooks/';

const heavyStuff = (iterations = 100) => {
	for (let i = 0; i < iterations; i++) {
		console.log('ahi vamos...');
	}
	return `${iterations} iteraciones realizadas.`;
};
export const MemoHook = () => {
	const { counter, increment } = useCounter(1);
	const [show, setShow] = useState(true);
	const memoHeavyStuff = useMemo(() => heavyStuff(counter), [counter]);
	return (
		<>
			<h1>
				Counter: <small>{counter}</small>
			</h1>
			<h4>{memoHeavyStuff}</h4>
			<button className="btn btn-primary" onClick={() => increment()}>
				+1
			</button>
			<button
				className="btn btn-outline-primary ml-3"
				onClick={() => setShow(!show)}>
				Show/Hide {JSON.stringify(show)}
			</button>
		</>
	);
};
