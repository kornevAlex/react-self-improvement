import { Dictionary, PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { CommentType } from 'entities/Comment';
import { ArticleDetailsCommentSchema } from '../types/ArticleDetailsCommentSchema';
import { fetchCommentArticleById } from '../services/fetchCommentArticleById';
  
  const commentAdapter = createEntityAdapter<CommentType>({
    selectId: (comment) => comment.id,
  });
  
export const getArticleComments = commentAdapter.getSelectors<StateSchema>(
  state => state.articleDetailsComments || commentAdapter.getInitialState()
);

const articleDetailsCommentSlice = createSlice({
  name: 'articleDetailsCommentSlice',
  initialState: commentAdapter.getInitialState<ArticleDetailsCommentSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {
    },
  }),
  reducers: {
    bookAdded: commentAdapter.addOne,
    booksReceived (state, action){
      commentAdapter.setAll(state, action.payload.books);
    },
  },
  extraReducers (builder){
    builder
    .addCase(fetchCommentArticleById.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    })
    .addCase(fetchCommentArticleById.fulfilled, (state, { payload }: PayloadAction<CommentType[]>) => {
      state.isLoading = false;

      commentAdapter.setAll(state, payload);
    })
    .addCase(fetchCommentArticleById.rejected, (state, { payload }) => {
      state.isLoading = false;
      
      state.error = payload;
    });
  }
});

export const { reducer: articleDetailsCommentReducer } = articleDetailsCommentSlice;
