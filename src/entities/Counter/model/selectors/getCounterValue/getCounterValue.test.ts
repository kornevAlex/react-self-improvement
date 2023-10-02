import { getCounterValue } from './getCounterValue';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getCounterValue.test', () => {
	test('return counter value', () => {
		const state: DeepPartial<StateSchema> = {
			counter: { value: 1 }
		};
		expect(getCounterValue(state as StateSchema)).toEqual(1);
	});
});
