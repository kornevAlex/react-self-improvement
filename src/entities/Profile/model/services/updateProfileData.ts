import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../types/profile';
import { getProfileForm } from '../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
	'profile/updateProfileData',
	async (_, thunkApi) => {
		const { rejectWithValue, extra, getState } = thunkApi;

		const formData = getProfileForm(getState());
        
		try {
			const resp = await extra.api.put<Profile>('/profile', formData);
    
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
