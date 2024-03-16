import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/AddCommentForm';
import { sendCommentForArticle } from 'pages/ArticleDetailsPage';

const initialState: AddCommentFormSchema = {
	text: '',
	isLoading: false,
};

export const addCommentFormSlice = createSlice({
	name: 'addCommentForm',
	initialState,
	reducers: {
        setText (state, { payload }: PayloadAction<string>){
            state.text = payload;
        },
	},
	extraReducers (builder){
		builder
			.addCase(sendCommentForArticle.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(sendCommentForArticle.fulfilled, (state) => {
				state.isLoading = false;
			})
			.addCase(sendCommentForArticle.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			});
	},
});

// Action creators are generated for each case reducer function
export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
