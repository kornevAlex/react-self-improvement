import axios from 'axios';
import { authByUsername } from './authByUsername';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('authByUsername.test', () => {
	
	test('successful test', async () => {
		const mockUserData = { username: 'admin', id: '1', };
		mockedAxios.post.mockReturnValue(Promise.resolve({ data: mockUserData }));

		
		const thunk = new TestAsyncThunk(authByUsername);

		const action = await thunk.callThunk({ username: 'test', password: 'test' });

		expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(mockUserData));
		expect(thunk.dispatch).toHaveBeenCalledTimes(3);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(action.meta.requestStatus).toBe('fulfilled');
		expect(action.payload).toEqual(mockUserData);

        
	});

	test('rejected test', async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
		const thunk = new TestAsyncThunk(authByUsername);

		const action = await thunk.callThunk({ username: 'test', password: 'test' });

		expect(mockedAxios.post).toHaveBeenCalled();
		expect(action.meta.requestStatus).toBe('rejected');
		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(action.payload).toBe('Data has not received');
        
	});
});
