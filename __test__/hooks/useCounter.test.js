import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useCounter } from '../../src/hooks/useCounter';

describe('Prueba en useCounter', () => {
	test('debe que retornar los valores por defecto', () => {
		// renderHook es una función de testing-library que nos permite renderizar un hook
		const { result } = renderHook(() => useCounter());
		const { counter, increment, decrement, reset } = result.current;
		expect(counter).toBe(1);
		// esperamos que decrement,increment y reset  sea una función
		expect(decrement).toEqual(expect.any(Function));
		expect(increment).toEqual(expect.any(Function));
		expect(reset).toEqual(expect.any(Function));
	});

	test('debe que tener el counter en 100', () => {
		const { result } = renderHook(() => useCounter(100));
		const { counter } = result.current;
		expect(counter).toBe(100);
	});

	test('debe que incrementar el counter en 1', () => {
		const { result } = renderHook(() => useCounter());
		const { decrement } = result.current;
		// act es una función de react-dom/test-utils que nos permite ejecutar acciones
		act(() => {
			decrement();
			decrement(2);
		});
		// result.current es el valor actual del hook en el momento de la ejecución
		// debe hacer asi por que counter es primitivo y no se puede pasar por referencia
		expect(result.current.counter).toBe(-2);
	});

	test('debe que decremental el counter en 1', () => {
		const { result } = renderHook(() => useCounter());
		const { increment } = result.current;
		// act es una función de react-dom/test-utils que nos permite ejecutar acciones
		act(() => {
			increment();
			increment(2);
		});
		// result.current es el valor actual del hook en el momento de la ejecución
		// debe hacer asi por que counter es primitivo y no se puede pasar por referencia
		expect(result.current.counter).toBe(4);
	});

	test('debe que reset el counter en 1', () => {
		const { result } = renderHook(() => useCounter());
		const { increment, reset } = result.current;
		// act es una función de react-dom/test-utils que nos permite ejecutar acciones
		act(() => {
			increment();
			increment(2);
			reset();
		});
		// result.current es el valor actual del hook en el momento de la ejecución
		// debe hacer asi por que counter es primitivo y no se puede pasar por referencia
		expect(result.current.counter).toBe(1);
	});
});
