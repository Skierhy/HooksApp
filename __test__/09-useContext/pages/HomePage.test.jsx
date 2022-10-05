import { render, screen } from '@testing-library/react';
import { UserContext } from '../../../src/09-useContext/context/UserContext';
import { HomePage } from '../../../src/09-useContext/pages/HomePage';

describe('Prueba en <HomePage/>', () => {
	const user = {
		name: 'Skierhy',
	};
	test('debe de que mostrar el componente sin el usuario', () => {
		render(
			// se le pasa el contexto para que se pueda usar en el componente
			// el null aparece solamente en consola
			<UserContext.Provider value={{ user: null }}>
				<HomePage />
			</UserContext.Provider>
		);
		const preTag = screen.getByLabelText('pre');
		expect(preTag.innerHTML).toBe('null');
	});

	test('debe de que mostrar el componente CON el usuario', () => {
		render(
			// se le pasa el contexto para que se pueda usar en el componente
			// el null aparece solamente en consola
			<UserContext.Provider value={{ user }}>
				<HomePage />
			</UserContext.Provider>
		);
		const preTag = screen.getByLabelText('pre');
		expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3));
	});
});
