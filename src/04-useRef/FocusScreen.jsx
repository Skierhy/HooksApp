import { useRef } from 'react';

export const FocusScreen = () => {
	const inputRef = useRef();
	const onClick = () => {
		inputRef.current.select();
	};
	return (
		<>
			<h2>Focus Screen</h2>
			<input
				ref={inputRef}
				type="text"
				placeholder="Ingrese su nombre"
				className="form-control"
			/>
			<button className="btn btn-primary mt-5" onClick={onClick}>
				Focus
			</button>
		</>
	);
};
