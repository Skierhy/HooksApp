import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../../src/09-useContext/pages/LoginPage';

describe('Prueba de <LoginPage/>', () => {
	const user = {
		name: 'Skierhy',
	};

	const setUserMock = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('debe de mostrar el componente sin el usuario', () => {
		render(
			<UserContext.Provider value={{ user: null }}>
				<LoginPage />
			</UserContext.Provider>
		);
		screen.debug();
		const preTag = screen.getByLabelText('Login');
		expect(preTag.innerHTML).toBe('null');
	});

	test('debe de llamar el setUser cuando se hac click en el botón', () => {
		render(
			<UserContext.Provider
				value={{ hola: 'mundo', user, setUser: setUserMock }}>
				<LoginPage />
			</UserContext.Provider>
		);
		const Button = screen.getByRole('button');
		fireEvent.click(Button);
		expect(setUserMock).toHaveBeenCalledWith({
			id: 123,
			name: 'Skierhy',
			email: 'XD',
		});
	});
});
