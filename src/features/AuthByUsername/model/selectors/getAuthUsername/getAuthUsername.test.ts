import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getAuthUsername } from './getAuthUsername';

describe('getAuthUsername.test', () => {
	test('should return auth username', () => {
		const state: DeepPartial<StateSchema> = {
			auth: { username: 'test' }
		};
		expect(getAuthUsername(state as StateSchema)).toEqual('test');
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {
			auth: {}
		};
		expect(getAuthUsername(state as StateSchema)).toEqual('');
	});
});
