export const Nav = ({ counter, increment, decrement }) => {
	return (
		<>
			<div className=" d-flex flex-row justify-content-center alig-items-center m-4">
				<button
					className="btn btn-primary"
					onClick={() => {
						decrement();
					}}
					disabled={counter === 1 && true}>
					{'<--'}
				</button>
				<button
					className="btn btn-primary"
					onClick={() => {
						increment();
					}}
					disabled={counter === 3 && true}>
					{'-->'}
				</button>
			</div>
		</>
	);
};
