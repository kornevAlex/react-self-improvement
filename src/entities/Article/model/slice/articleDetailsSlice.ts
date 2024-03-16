import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { requestArticleById } from '../services/requestArticleById';
import { Article } from '../types/article';

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: '',
  data: undefined
};

export const articleDetailsSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers (builder){
    builder
      .addCase(requestArticleById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(requestArticleById.fulfilled, (state, { payload }: PayloadAction<Article>) => {
        state.isLoading = false;
        state.data = payload;
      })
      .addCase(requestArticleById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  }
});

// Action creators are generated for each case reducer function
export const { actions: articleDetailsActions } = articleDetailsSlice;

export const { reducer: articleDetailsReducer } =  articleDetailsSlice;
