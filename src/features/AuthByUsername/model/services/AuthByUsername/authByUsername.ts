import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { UserType, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface authByUsernameProps {
    username: string;
    password: string;
}

export const authByUsername = createAsyncThunk<UserType, authByUsernameProps, ThunkConfig<string>>(
  'auth/authByUsername',
  async (authData, { rejectWithValue, dispatch, extra }) => {
    try {
			
      const resp = await extra.api.post<UserType>('/login', authData);
    
      if (!resp.data){
        throw new Error('Data has not received');
      }
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(resp.data));
      dispatch(userActions.setAuthData(resp.data));			

      return resp.data;
    } catch (error){
      const err = error as Error;
      return rejectWithValue(err.message);
    }
  }
);
