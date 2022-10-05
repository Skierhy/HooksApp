import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../../src/08-useReducer/components/TodoItem';

describe('Prueba en <TodoItem/>', () => {
	const todo = {
		id: 1,
		desc: 'Aprender React',
		done: false,
	};
	const onToggleTodoMock = jest.fn();
	const onDeleteTodoMock = jest.fn();

	// si llamas mucho las funciones es recomendable usar el beforeEach
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('debe de mostrar el todo pendiente de completar', () => {
		// si recibes pro es fácil hacer un mock del componente
		render(
			<TodoItem
				todo={todo}
				onToggleTodoList={onToggleTodoMock}
				onDeleteTodo={onDeleteTodoMock}
			/>
		);
		const liElement = screen.getByRole('listitem');
		expect(liElement.className).toBe('list-group-item');
		const spanElement = screen.getByLabelText('span');
		expect(spanElement.className).toContain('lead');
	});
	test('debe de mostrar el todo completado', () => {
		todo.done = true;
		// si recibes pro es fácil hacer un mock del componente
		render(
			<TodoItem
				todo={todo}
				onToggleTodoList={onToggleTodoMock}
				onDeleteTodoList={onDeleteTodoMock}
			/>
		);
		const spanElement = screen.getByLabelText('span');
		expect(spanElement.className).toContain('text-decoration-line-through');
		screen.debug();
	});

	test('span debe de llamar el ToggleTodo cuando se hace click', () => {
		render(
			<TodoItem
				todo={todo}
				onToggleTodoList={onToggleTodoMock}
				onDeleteTodoList={onDeleteTodoMock}
			/>
		);
		// se debe que probar de manera local asi que las funciones solamente sera llamadas una vez
		const spanElement = screen.getByLabelText('span');
		fireEvent.click(spanElement);
		// toHaveBeenCalledWith espera que la función sea llamada con un argumento
		expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
	});

	test('button debe de llamar el deleteTodo', () => {
		render(
			<TodoItem
				todo={todo}
				onToggleTodoList={onToggleTodoMock}
				onDeleteTodoList={onDeleteTodoMock}
			/>
		);
		// se debe que probar de manera local asi que las funciones solamente sera llamadas una vez
		const buttonElement = screen.getByRole('button');
		fireEvent.click(buttonElement);
		// toHaveBeenCalledWith espera que la función sea llamada con un argumento
		expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
	});
});
