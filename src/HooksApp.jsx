import { useCounter } from './hooks/useCounter';
import { Nav } from './util/Nav';
import { Footer } from './util/Footer';
import { PageOne } from './pages/PageOne';
import { PageTwo } from './pages/PageTwo';
import { TodoApp } from './08-useReducer/TodoApp';

export const HooksApp = () => {
	const { counter, increment, decrement } = useCounter(1);
	return (
		<>
			<h1>HooksApp</h1>
			<hr />
			<div className="container">
				{counter === 1 && (
					<>
						<TodoApp />
					</>
				)}

				{counter === 2 && (
					<>
						<h1>Page One</h1>
						<hr />
						<hr />
						<PageOne />
					</>
				)}
				{counter === 3 && (
					<>
						<h1>Page Two</h1>
						<hr />
						<hr />
						<PageTwo />
					</>
				)}
				<hr />
				<Nav
					increment={increment}
					decrement={decrement}
					counter={counter}
				/>
			</div>
			<Footer />
		</>
	);
};
