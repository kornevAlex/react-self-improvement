import { DeepPartial } from '@reduxjs/toolkit';
import { AuthSchema } from '../types/AuthSchema';
import { authActions, authReducer } from './loginSlice';

describe('loginSlice.test', () => {
	test('test set username', () => {
		const state: DeepPartial<AuthSchema> = {
			username: '',
		};
		expect(authReducer(state as AuthSchema, authActions.setUsername('test'))).toEqual({ username: 'test' });
	});
	test('test set password', () => {
		const state: DeepPartial<AuthSchema> = {
			password: '',
		};
		expect(authReducer(state as AuthSchema, authActions.setPassword('test'))).toEqual({ password: 'test' });
	});
	test('test set error', () => {
		const state: DeepPartial<AuthSchema> = {
			error: '',
		};
		expect(authReducer(state as AuthSchema, authActions.setError('test'))).toEqual({ error: 'test' });
	});
	test('test set loading', () => {
		const state: DeepPartial<AuthSchema> = {
			isLoading: false,
		};
		expect(authReducer(state as AuthSchema, authActions.setIsLoading(true))).toEqual({ isLoading: true });
	});
});
