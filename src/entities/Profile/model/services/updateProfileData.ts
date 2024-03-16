import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, ValidateProfileError } from '../types/profile';
import { getProfileForm } from '../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from './validateProfileData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
	'profile/updateProfileData',
	async (_, thunkApi) => {
		const { rejectWithValue, extra, getState } = thunkApi;

		const formData = getProfileForm(getState());
		
		const errors = validateProfileData(formData);
        
		if (errors.length){
			return rejectWithValue(errors);
		}

		try {
			const resp = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);
    
			if (!resp.data){
				throw new Error('Data has not received');
			}		

			return resp.data;
		} catch (error){
			return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
		}
	}
);
