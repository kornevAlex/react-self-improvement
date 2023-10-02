import { StateSchema } from 'app/providers/StoreProvider';
import { getAuthError } from './getAuthError';

describe('getAuthError.test', () => {
	test('should return auth error', () => {
		const state: DeepPartial<StateSchema> = {
			auth: { error: 'test' }
		};
		expect(getAuthError(state as StateSchema)).toEqual('test');
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {
			auth: {}
		};
		expect(getAuthError(state as StateSchema)).toEqual(undefined);
	});
});
