import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AxiosError } from 'axios';
import { Article } from 'entities/Article';

export const requestArticles = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'article/requestArticles',
  async (_, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;
        
    try {
      const resp = await extra.api.get<Article[]>('/articles');
    
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
