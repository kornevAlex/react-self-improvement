import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthSchema } from '../types/AuthSchema';
import { authByUsername } from '../services/AuthByUsername/authByUsername';

const initialState: AuthSchema = {
	isLoading: false,
	username: '',
	password: ''
};

export const LoginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setUsername: (state, action: PayloadAction<string>) => {
			state.username = action.payload;
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload;
		}, 
		setError: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
		}, 
		setIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
	},
	extraReducers (builder){
		builder
			.addCase(authByUsername.pending, (state) => {
				state.error = undefined;
				console.log('pending');
				
				state.isLoading = true;
			})
			.addCase(authByUsername.fulfilled, (state) => {
				state.isLoading = false;
				console.log('ful');
			})
			.addCase(authByUsername.rejected, (state, action) => {
				state.isLoading = false;
				console.log('rej');
				state.error = action.payload;
			});
	},
});

// Action creators are generated for each case reducer function
export const { actions: authActions } = LoginSlice;

export const { reducer: authReducer } =  LoginSlice;
