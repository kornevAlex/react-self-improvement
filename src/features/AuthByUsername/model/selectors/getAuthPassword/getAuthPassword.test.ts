import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getAuthPassword } from './getAuthPassword';

describe('getAuthPassword.test', () => {
	test('should return auth password', () => {
		const state: DeepPartial<StateSchema> = {
			auth: { password: 'test' }
		};
		expect(getAuthPassword(state as StateSchema)).toEqual('test');
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {
			auth: {}
		};
		expect(getAuthPassword(state as StateSchema)).toEqual('');
	});
});
