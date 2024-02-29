import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
	test('should return isLoading false value', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				isLoading: false
			}
		};
		expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
	});
	test('should return isLoading true value', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				isLoading: true
			}
		};
		expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
	});
	test('should return empty', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {}
		};
		expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
	});
});
