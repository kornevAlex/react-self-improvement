import { StateSchema } from 'app/providers/StoreProvider';
import { getAuth } from './getAuth';

describe('getAuth.test', () => {
  test('should return auth error', () => {
    const state: DeepPartial<StateSchema> = {
      auth: { error: 'test', username: 'test', isLoading: true }
    };
    expect(getAuth(state as StateSchema)).toEqual({ error: 'test', username: 'test', isLoading: true });
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      auth: {}
    };
    expect(getAuth(state as StateSchema)).toEqual({});
  });
});
