import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
	const { counter, increment, decrement, reset } = useCounter(1);
	return (
		<>
			<h2>useCounter - CustomHook</h2>
			<h1>Counter with Hook: {counter}</h1>
			<button className="btn btn-primary" onClick={() => increment(2)}>
				+1
			</button>
			<button className="btn btn-primary" onClick={reset}>
				Reset
			</button>
			<button className="btn btn-primary" onClick={() => decrement(2)}>
				-1
			</button>
		</>
	);
};
