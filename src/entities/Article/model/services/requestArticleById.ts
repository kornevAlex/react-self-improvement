import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../types/article';
import { AxiosError } from 'axios';

export const requestArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
	'article/requestArticleById',
	async (articleId, thunkApi) => {
		const { rejectWithValue, extra } = thunkApi;
        
		try {
			const resp = await extra.api.get<Article>(`/articles/${articleId}`);
    
			if (!resp.data){
				throw new Error('Article has not received');
			}		

			return resp.data;
		} catch (error){
			const err = error as AxiosError;
			return rejectWithValue(err.message);
		}
	}
);
