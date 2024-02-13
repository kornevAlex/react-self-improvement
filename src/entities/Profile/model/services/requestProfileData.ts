import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../types/profile';

export const requestProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
	'profile/requestProfileData',
	async (_, thunkApi) => {
		const { rejectWithValue, extra } = thunkApi;
        
		try {
			const resp = await extra.api.get<Profile>('/profile');
    
			if (!resp.data){
				throw new Error('Data has not received');
			}		

			return resp.data;
		} catch (error){
			const err = error as Error;
			return rejectWithValue(err.message);
		}
	}
);
