import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { CommentType } from 'entities/Comment';

export const fetchCommentArticleById = createAsyncThunk<CommentType[], string | undefined, ThunkConfig<string>>(
	'articleDetailsPage/fetchCommentArticleById',
	async (articleId, thunkApi) => {
		const { rejectWithValue, extra } = thunkApi;
        
        if (!articleId){
            return rejectWithValue('Method has not received id');
        }

		try {
			const resp = await extra.api.get<CommentType[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user',
                }
            });
    
			if (!resp.data){
				throw new Error('Comments has not received');
			}		

			return resp.data;
		} catch (error){
			const err = error as Error;
			return rejectWithValue(err.message);
		}
	}
);
