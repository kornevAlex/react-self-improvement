import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/profile';
import { requestProfileData } from '../services/requestProfileData';
import { updateProfileData } from '../services/updateProfileData';

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
    setProfileData: (state, { payload }: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...payload,
      };
      state.readonly = false;
    },
    setReadonly: (state, { payload }: PayloadAction<boolean>) => {
      state.readonly = payload;
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data;
      state.validateErrors = undefined;
    },
  },
  extraReducers (builder){
    builder
      .addCase(requestProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(requestProfileData.fulfilled, (state, { payload }: PayloadAction<Profile>) => {
        state.isLoading = false;
        state.data = payload;
        state.form = payload;
      })
      .addCase(requestProfileData.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (payload === 'canceled') return;
				
        state.error = payload;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.validateErrors = undefined;
        state.isLoading = true;
      })
      .addCase(updateProfileData.fulfilled, (state, { payload }: PayloadAction<Profile>) => {
        state.isLoading = false;
        state.data = payload;
        state.form = payload;
        state.validateErrors = undefined;
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;
				
        state.validateErrors = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;

export const { reducer: profileReducer } =  profileSlice;
