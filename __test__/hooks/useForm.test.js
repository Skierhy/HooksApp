import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useForm } from '../../src/hooks/useForm';

describe('Pruebas en useForm', () => {
	const initialForm = {
		name: 'Skierhy',
		email: 'skierhy@correo.com',
	};
	test('debe que regresar los valores por defecto', () => {
		const { result } = renderHook(() => useForm(initialForm));
		expect(result.current).toEqual({
			formState: initialForm,
			name: initialForm.name,
			email: initialForm.email,
			onResetForm: expect.any(Function),
			onInputChange: expect.any(Function),
		});
	});

	test('debe de cambiar el valor del formulario (cambiar name)', () => {
		const { result } = renderHook(() => useForm(initialForm));
		const { onInputChange } = result.current;
		const name = 'juan';
		act(() => {
			onInputChange({ target: { name: 'name', value: name } });
		});
		expect(result.current.name).toBe(name);
		expect(result.current.formState.name).toBe(name);
	});

	test('debe de reset del formulario', () => {
		const { result } = renderHook(() => useForm(initialForm));
		const { onInputChange, onResetForm } = result.current;
		const name = 'juan';
		act(() => {
			onInputChange({ target: { name: 'name', value: name } });
			onResetForm();
		});
		expect(result.current.formState).toEqual(initialForm);
	});
});
