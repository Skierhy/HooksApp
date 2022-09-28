import { useEffect, useState } from 'react';

export const useFetch = (url) => {
	const [state, setState] = useState({
		data: null,
		isLoading: true,
		error: null,
	});

	const getFetch = async () => {
		setState({ ...state, isLoading: true });
		const respuesta = await fetch(url);
		const data = await respuesta.json();
		setState({
			data,
			isLoading: false,
			error: null,
		});
	};

	useEffect(() => {
		getFetch();
	}, [url]);

	/* Devolver el objeto de estado con las propiedades de datos, carga y error. */
	return {
		data: state.data,
		isLoading: state.isLoading,
		error: state.error,
	};
};
