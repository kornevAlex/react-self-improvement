import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProfileInt, ProfileSchema } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData';

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
		setProfileData: (state, { payload }: PayloadAction<ProfileInt>) => {
			state.form = {
				...state.data,
				...payload,
			};
		},
		setReadonly: (state, { payload }: PayloadAction<boolean>) => {
			state.readonly = payload;
		},
		cancelEdit: (state) => {
			state.readonly = true;
			state.form = state.data;
		}
	},
	extraReducers (builder){
		builder
			.addCase(fetchProfileData.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchProfileData.fulfilled, (state, { payload }: PayloadAction<ProfileInt>) => {
				state.isLoading = false;
				state.data = payload;
				state.form = payload;
			})
			.addCase(fetchProfileData.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			});
	},
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;

export const { reducer: profileReducer } =  profileSlice;
