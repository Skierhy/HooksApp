import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {
	const { counter, increment } = useCounter(1);
	const { data, error, isLoading } = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${counter}`
	);

	// if(isLoading) {
	//     return (<h1>Loading...</h1>)
	// }

	/* Destrucción del objeto de datos. */
	// si la data tiene un valor entonces toma el primer elemento del array
	const { author, quote } = !!data && data[0];
	return (
		<>
			<hr />
			<h1>BreakingBad Quotes</h1>
			<hr />

			{isLoading ? (
				<div className="alert alert-info text-center">Loading...</div>
			) : (
				<>
					<blockquote className="blockquote text-end">
						<p className="mb-1">{quote}</p>
						<footer className="blockquote-footer">{author}</footer>
					</blockquote>
					<button
						className="btn btn-primary"
						onClick={() => increment()}>
						Next quote
					</button>
				</>
			)}
		</>
	);
};
