import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/hooks/08-useReducer/useTodos';
jest.mock('../../src/hooks/08-useReducer/useTodos');

describe('Prueba en <TodoApp/>', () => {
	test('debe de mostrar el componente correctamente', () => {
		useTodos.mockReturnValue({
			// estado que se va a retornar
			todos: [
				{
					id: 1,
					desc: 'Aprender React',
					done: false,
				},
				{
					id: 2,
					desc: 'Aprender Mongo',
					done: true,
				},
			],
			// funciones que se van a retornar
			todosCount: 2,
			pendingTodosCount: 1,
			handleNewTodo: jest.fn(),
			handleDeleteTodo: jest.fn(),
			handleToggleTodo: jest.fn(),
		});
		render(<TodoApp />);
		screen.debug();
		expect(screen.getByText('Aprender React')).toBeTruthy();
		expect(screen.getByText('Aprender Mongo')).toBeTruthy();
		expect(screen.getByRole('textbox')).toBeTruthy();
	});
});
