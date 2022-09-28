import React, { useEffect } from 'react';

export const Message = () => {
	useEffect(() => {
		const onMouseMove = ({ x, y }) => {
			const coords = { x, y };
			console.log(coords);
		};
		// se debe que hacer asi por que usamos () => {} crea un espacio de memoria
		// debe que pasar por referencia
		window.addEventListener('mousemove', onMouseMove);
		return () => {
			window.removeEventListener('mousemove', onMouseMove);
		};
	}, []);

	return (
		<>
			<h3>Usuario ya existe!!!</h3>
		</>
	);
};
