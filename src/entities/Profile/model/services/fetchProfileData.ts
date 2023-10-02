import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ProfileInt } from '../types/profile';

export const fetchProfileData = createAsyncThunk<ProfileInt, void, ThunkConfig<string>>(
	'profile/fetchProfileData',
	async (_, thunkApi) => {
		const { rejectWithValue, extra } = thunkApi;
        
		try {
			const resp = await extra.api.get<ProfileInt>('/profile');
    
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
