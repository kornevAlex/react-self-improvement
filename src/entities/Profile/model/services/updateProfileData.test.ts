import { Country } from 'entities/Country';
import { updateProfileData } from './updateProfileData';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../types/profile';
jest.mock('axios');

const mockUserData = {
	age: 21,
	username: 'test',
	city: 'Moscow',
	country: Country.Russia,
	currency: Currency.EUR,
	firstname: 'test',
	lastname: 'test'
};
describe('updateProfileData.test', () => {
	
	test('successful test', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: mockUserData
			}
		});

		thunk.api.put.mockReturnValue(Promise.resolve({ data: mockUserData }));

		const action = await thunk.callThunk();

		expect(thunk.api.put).toHaveBeenCalled();
		expect(action.meta.requestStatus).toBe('fulfilled');
		expect(action.payload).toEqual(mockUserData);
	});

	test('validate error', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: { ...mockUserData, lastname: '' }
			}
		});
		thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

		const action = await thunk.callThunk();

		expect(action.meta.requestStatus).toBe('rejected');
		expect(action.payload).toEqual([ValidateProfileError.INCORRECT_LASTNAME]);
        
	});

	test('rejected test', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: mockUserData
			}
		});
		thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

		const action = await thunk.callThunk();

		expect(thunk.api.put).toHaveBeenCalled();
		expect(action.meta.requestStatus).toBe('rejected');
		expect(action.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
        
	});
});
