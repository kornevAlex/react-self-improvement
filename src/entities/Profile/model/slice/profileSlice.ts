import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProfileInt, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
	readonly: true,
	isLoading: false,
	error: '',
	data: undefined
};

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setProfileData: (state, action: PayloadAction<ProfileInt>) => {
			state.data = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;

export const { reducer: profileReducer } =  profileSlice;
