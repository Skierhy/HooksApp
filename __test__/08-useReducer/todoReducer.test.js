import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('Prueba en todoReducer', () => {
	// cuando se prueba un reducer, se debe de pasar el estado inicial y la acción
	// recomendable crear el estado inicial y la acción en variables
	const initialState = [
		{
			id: 1,
			desc: 'Aprender React',
			done: false,
		},
	];
	test('debe que regresar el estado inicial', () => {
		const newState = todoReducer(initialState, {});
		// se usara el toBe para que saber si es el mismo objeto
		// como se paso por referencia
		expect(newState).toBe(initialState);
	});

	test('debe de agregar un TODO', () => {
		const action = {
			type: '[TODO] Add',
			payload: {
				id: 2,
				desc: 'Aprender Mongo',
				done: false,
			},
		};
		const newState = todoReducer(initialState, action);
		expect(newState.length).toBe(2);
		expect(newState).toContain(action.payload);
	});

	test('debe de eliminar un TODO', () => {
		const action = {
			type: '[TODO] Delete',
			payload: 1,
		};
		const newState = todoReducer(initialState, action);
		expect(newState.length).toBe(0);
		expect(newState).toEqual([]);
	});

	test('debe de Toggle un TODO', () => {
		const action = {
			type: '[TODO] Toggle',
			payload: 1,
		};
		const newState = todoReducer(initialState, action);
		expect(newState.length).toBe(1);
		expect(newState).toEqual([
			{
				id: 1,
				desc: 'Aprender React',
				done: true,
			},
		]);
		expect(newState[0].done).toBe(true);
	});
});
