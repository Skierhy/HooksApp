import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useCounter } from '../../src/hooks';
import { useFetch } from '../../src/hooks/useFetch';
jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks/>', () => {
	const increment = jest.fn();
	useCounter.mockReturnValue({
		counter: 1,
		increment,
	});
	// quieres hacer que todas las funciones de que use el increment este reset
	beforeEach(() => {
		jest.clearAllMocks();
	});
	test('', () => {
		useFetch.mockReturnValue({
			data: null,
			isLoading: true,
			error: null,
		});
		render(<MultipleCustomHooks />);
		const button = screen.getByRole('button', { name: 'Next quote' });
		expect(screen.getByText('Loading...')).toBeTruthy();
		expect(screen.getByText('BreakingBad Quotes')).toBeTruthy();
		expect(screen.getByText('Next quote')).toBeTruthy();
		expect(screen.getByRole('button')).toBeTruthy();
		expect(button.innerHTML).toContain('Next quote');
		expect(button.disabled).toBe(true);
		// screen.debug();
	});

	test('Debe de mostrar la información', () => {
		// mockReturnValue es una función que se ejecuta cuando se llama a useFetch
		// dentro tiene un objeto con los valores que se retornan
		useFetch.mockReturnValue({
			data: [{ author: 'Skierhy', quote: 'Hola Mundo' }],
			isLoading: false,
			error: null,
		});
		render(<MultipleCustomHooks />);
		expect(screen.getByText('Skierhy')).toBeTruthy();
		expect(screen.getByText('Hola Mundo')).toBeTruthy();
		const button = screen.getByRole('button', { name: 'Next quote' });
		expect(button.disabled).toBeFalsy();
		screen.debug();
	});

	test('debe que llamar la función incrementar', () => {
		useFetch.mockReturnValue({
			data: [{ author: 'Skierhy', quote: 'Hola Mundo' }],
			isLoading: false,
			error: null,
		});
		render(<MultipleCustomHooks />);
		const nextButton = screen.getByRole('button', { name: 'Next quote' });
		fireEvent.click(nextButton);
		expect(increment).toHaveBeenCalled();
	});
});
