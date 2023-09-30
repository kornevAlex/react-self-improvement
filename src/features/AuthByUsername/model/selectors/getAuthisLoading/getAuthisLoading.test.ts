import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getAuthisLoading } from './getAuthisLoading';

describe('getAuthisLoading.test', () => {
	test('should return auth loading', () => {
		const state: DeepPartial<StateSchema> = {
			auth: { isLoading: true }
		};
		expect(getAuthisLoading(state as StateSchema)).toEqual(true);
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {
			auth: {}
		};
		expect(getAuthisLoading(state as StateSchema)).toEqual(false);
	});
	test('should work with false loading', () => {
		const state: DeepPartial<StateSchema> = {
			auth: { isLoading: false }
		};
		expect(getAuthisLoading(state as StateSchema)).toEqual(false);
	});
});
