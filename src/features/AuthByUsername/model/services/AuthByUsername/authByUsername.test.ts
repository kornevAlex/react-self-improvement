import { authByUsername } from './authByUsername';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
jest.mock('axios');

describe('authByUsername.test', () => {
	
	test('successful test', async () => {
		const mockUserData = { username: 'admin', id: '1', };
		const thunk = new TestAsyncThunk(authByUsername);

		thunk.api.post.mockReturnValue(Promise.resolve({ data: mockUserData }));

		const action = await thunk.callThunk({ username: 'test', password: 'test' });

		expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(mockUserData));
		expect(thunk.dispatch).toHaveBeenCalledTimes(3);
		expect(thunk.api.post).toHaveBeenCalled();
		expect(action.meta.requestStatus).toBe('fulfilled');
		expect(action.payload).toEqual(mockUserData);

        
	});

	test('rejected test', async () => {
		const thunk = new TestAsyncThunk(authByUsername);
		thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

		const action = await thunk.callThunk({ username: 'test', password: 'test' });

		expect(thunk.api.post).toHaveBeenCalled();
		expect(action.meta.requestStatus).toBe('rejected');
		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(action.payload).toBe('Data has not received');
        
	});
});
