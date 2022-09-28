import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ quote, author }) => {
	const blockquoteRef = useRef();
	const [boxSize, setBoxSize] = useState({
		height: 0,
		width: 0,
	});
	useLayoutEffect(() => {
		const { height, width } = blockquoteRef.current.getBoundingClientRect();
		setBoxSize({ height, width });
	}, [quote]);
	return (
		<>
			<blockquote
				className="blockquote text-end"
				style={{
					display: 'flex',
				}}>
				<p ref={blockquoteRef} className="mb-1">
					{quote}
				</p>
				<footer className="blockquote-footer">{author}</footer>
			</blockquote>

			<code>{JSON.stringify(boxSize)}</code>
		</>
	);
};
