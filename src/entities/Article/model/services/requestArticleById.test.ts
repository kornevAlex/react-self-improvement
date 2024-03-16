import { requestArticleById } from './requestArticleById';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Article } from '../types/article';
jest.mock('axios');

const mockArticleData: Article = {
  id: '',
  title: '',
  subtitle: '',
  img: '',
  views: 1,
  createdAt: '',
  type: [],
  blocks: []
};

const mockUseriD = '1';

describe('requestArticleById.test', () => {
	
  test('successful test', async () => {
    const thunk = new TestAsyncThunk(requestArticleById);

    thunk.api.get.mockReturnValue(Promise.resolve({ data: mockArticleData }));

    const action = await thunk.callThunk(mockUseriD);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(action.meta.requestStatus).toBe('fulfilled');
    expect(action.payload).toEqual(mockArticleData);
  });

  test('rejected test', async () => {
    const thunk = new TestAsyncThunk(requestArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const action = await thunk.callThunk(mockUseriD);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(action.meta.requestStatus).toBe('rejected');
    expect(action.payload).toBe('Article has not received');
        
  });
});
