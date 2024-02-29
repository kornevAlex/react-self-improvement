import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

describe('getProfileData.test', () => {
	test('should return empty form', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				data: {},
			}
		};
		expect(getProfileData(state as StateSchema)).toEqual({});
	});
	test('should return isLoading true value', () => {
		const data = {
			age: 21,
			username: 'test',
			city: 'Moscow',
			country: Country.Russia,
			currency: Currency.EUR,
			firstname: 'test'
		};
		const state: DeepPartial<StateSchema> = {
			profile: {
				data
			}
		};
		expect(getProfileData(state as StateSchema)).toEqual(data);
	});
	test('should return empty', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {}
		};
		expect(getProfileData(state as StateSchema)).toEqual(undefined);
	});
});
