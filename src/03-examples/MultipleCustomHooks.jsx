import { useCounter, useFetch } from '../hooks/';
import { LoadingQuote, Quote } from './';

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
			<br />
			<br />
			{isLoading ? (
				<LoadingQuote />
			) : (
				<Quote quote={quote} author={author} />
			)}
			<button
				className="btn btn-primary"
				disabled={isLoading}
				onClick={() => increment()}>
				Next quote
			</button>
		</>
	);
};
