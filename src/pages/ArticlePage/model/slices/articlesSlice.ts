import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ArticlesSchema } from '../types/articlesSchema';
import { requestArticles } from '../services/requestArticles';
import { Article } from 'entities/Article';

const initialState: ArticlesSchema = {
  isLoading: false,
  data: undefined,
  error: '',
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers (builder){
    builder
      .addCase(requestArticles.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(requestArticles.fulfilled, (state, { payload }: PayloadAction<Article[]>) => {
        state.isLoading = false;
        state.data = payload;
      })
      .addCase(requestArticles.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  }
});

// Action creators are generated for each case reducer function
export const { actions: articlesActions, reducer: articlesReducer } = articlesSlice;
