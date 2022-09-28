import { useState } from 'react';

export const CounterApp = () => {
	const [state, setCounter] = useState({
		counter1: 10,
		counter2: 20,
		counter3: 30,
	});
	const { counter1, counter2, counter3 } = state;
	return (
		<>
			<h2>useState</h2>
			<h3>Counter1: {counter1}</h3>
			<h3>Counter2: {counter2}</h3>
			<h3>Counter3: {counter3}</h3>
			<button
				className="btn btn-primary"
				key={counter1}
				onClick={() => {
					const counter = counter1 + 1;
					setCounter({
						...state,
						counter1: counter1 + 1,
					});
				}}>
				+1
			</button>
		</>
	);
};
