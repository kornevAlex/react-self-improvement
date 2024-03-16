import { Country } from 'entities/Country';
import { requestProfileData } from './requestProfileData';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
jest.mock('axios');

const mockUserData = {
	age: 21,
	username: 'test',
	city: 'Moscow',
	country: Country.Russia,
	currency: Currency.EUR,
	firstname: 'test'
};
describe('requestProfileData.test', () => {
	
	test('successful test', async () => {
		const thunk = new TestAsyncThunk(requestProfileData);

		thunk.api.get.mockReturnValue(Promise.resolve({ data: mockUserData }));

		const action = await thunk.callThunk('1');

		expect(thunk.api.get).toHaveBeenCalled();
		expect(action.meta.requestStatus).toBe('fulfilled');
		expect(action.payload).toEqual(mockUserData);
	});

	test('rejected test', async () => {
		const thunk = new TestAsyncThunk(requestProfileData);
		thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

		const action = await thunk.callThunk('1');

		expect(thunk.api.get).toHaveBeenCalled();
		expect(action.meta.requestStatus).toBe('rejected');
		expect(action.payload).toBe('Data has not received');
        
	});
});
