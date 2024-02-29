import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly.test', () => {
	test('should return readonly false value', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				readonly: false
			}
		};
		expect(getProfileReadonly(state as StateSchema)).toEqual(false);
	});
	test('should return readonly true value', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				readonly: true
			}
		};
		expect(getProfileReadonly(state as StateSchema)).toEqual(true);
	});
	test('should return empty', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {}
		};
		expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
	});
});
