import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthSchema } from '../types/AuthSchema';
import { loginByUsername } from '../services/AuthByUsername/authByUsername';

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
	},
	extraReducers (builder){
		builder
			.addCase(loginByUsername.pending, (state) => {
				state.error = undefined;
				console.log('pending');
				
				state.isLoading = true;
			})
			.addCase(loginByUsername.fulfilled, (state) => {
				state.isLoading = false;
				console.log('ful');
			})
			.addCase(loginByUsername.rejected, (state, action) => {
				state.isLoading = false;
				console.log('rej');
				state.error = action.payload;
			});
	},
});

// Action creators are generated for each case reducer function
export const { actions: authActions } = LoginSlice;

export const { reducer: authReducer } =  LoginSlice;
