import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserType, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface authByUsernameProps {
    username: string;
    password: string;
}

export const authByUsername = createAsyncThunk<UserType, authByUsernameProps, {rejectValue: string}>(
	'auth/authByUsername',
	async (authData, { rejectWithValue, dispatch }) => {
		try {
			
			const resp = await axios.post<UserType>('http://localhost:8000/login', authData);
    
			if (!resp.data){
				throw new Error('Data has not received');
			}
			localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(resp.data));
			dispatch(userActions.setAuthData(resp.data));			

			return resp.data;
		} catch (error){
			return rejectWithValue(error.message);
		}
	}
);
