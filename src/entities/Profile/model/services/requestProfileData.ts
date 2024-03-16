import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../types/profile';

export const requestProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
	'profile/requestProfileData',
	async (profileId, thunkApi) => {
		const { rejectWithValue, extra } = thunkApi;
        
		try {
			const resp = await extra.api.get<Profile>(`/profile/${profileId}`);
    
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
