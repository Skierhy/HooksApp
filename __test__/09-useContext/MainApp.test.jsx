import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../src/09-useContext/MainApp';

describe('Prueba de <MainApp/>', () => {
	test('debe de mostrar el homepage', () => {
		render(
			// MemoryRouter sirve para simular las rutas por el BrowserRouter no se puede usar en consola
			<MemoryRouter>
				<MainApp />
			</MemoryRouter>
		);
		expect(screen.getByText('HomePage')).toBeTruthy();
	});
	test('debe de mostrar el LoginPage', () => {
		render(
			// MemoryRouter sirve para simular las rutas por el BrowserRouter no se puede usar en consola
			// initialEntries sirve para simular la ruta
			<MemoryRouter initialEntries={['/login']}>
				<MainApp />
			</MemoryRouter>
		);
		expect(screen.getByText('LoginPage')).toBeTruthy();
	});
	test('debe de mostrar el AboutPage', () => {
		render(
			// MemoryRouter sirve para simular las rutas por el BrowserRouter no se puede usar en consola
			// initialEntries sirve para simular la ruta
			<MemoryRouter initialEntries={['/about']}>
				<MainApp />
			</MemoryRouter>
		);
		expect(screen.getByText('AboutPage')).toBeTruthy();
	});
});
