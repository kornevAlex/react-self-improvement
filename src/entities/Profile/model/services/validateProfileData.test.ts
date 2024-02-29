import { Country } from 'entities/Country';
import { validateProfileData } from './validateProfileData';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../types/profile';
jest.mock('axios');
describe('requestProfileData.test', () => {
	
	test('successful test', async () => {
		const profile = {
			age: 21,
			username: 'test',
			city: 'Moscow',
			country: Country.Russia,
			currency: Currency.EUR,
			firstname: 'test',
			lastname: 'test'
		};
		const result = validateProfileData(profile);

		expect(result).toEqual([]);

	});

	test('rejected test, incorrect lastname', async () => {
        
		const profile = {
			age: 21,
			username: 'test',
			city: 'Moscow',
			country: Country.Russia,
			currency: Currency.EUR,
			firstname: 'test'
		};

        
		const result = validateProfileData(profile);

		expect(result).toEqual([ValidateProfileError.INCORRECT_LASTNAME]);
	});

	test('rejected test, incorrect all', async () => {
        
		const profile = {};
        
		const result = validateProfileData(profile);

		expect(result).toEqual([
			ValidateProfileError.INCORRECT_FIRSTNAME,
			ValidateProfileError.INCORRECT_LASTNAME,
			ValidateProfileError.INCORRECT_AGE,
			ValidateProfileError.INCORRECT_COUNTRY,
		]);
	});
});
