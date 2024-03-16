import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article/model/selectors/getArticleDetails';
import { CommentType } from 'entities/Comment';
import { articleDetailsCommentActions } from '../slice/ArticleDetailsCommentSlice';

export const sendCommentForArticle = createAsyncThunk<CommentType, string, ThunkConfig<string>>(
  'article/sendCommentForArticle',
  async (text, thunkApi) => {
    const { rejectWithValue, extra, getState, dispatch,  } = thunkApi;
        
    try {
			
      const userData = getUserAuthData(getState()); 
      const article = getArticleDetailsData(getState());
			
      if (!userData?.id || !article?.id || !text) return rejectWithValue('Нет переданы необходимые данные');

      const resp = await extra.api.post<CommentType>('/add_comment', {
        articleId: article.id,
        userId: userData.id,
        text,
				
      });
			
      if (!resp.data){
        throw new Error('Comment hasnt been added');
      }		

      dispatch(articleDetailsCommentActions.addComment(resp.data));

      return resp.data;
    } catch (error){
      const err = error as Error;
      return rejectWithValue(err.message);
    }
  }
);
