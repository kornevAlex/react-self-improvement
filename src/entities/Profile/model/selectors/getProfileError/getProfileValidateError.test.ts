import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
  test('should return validateError false value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'test'
      }
    };
    expect(getProfileError(state as StateSchema)).toEqual('test');
  });
  test('should return empty', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {}
    };
    expect(getProfileError(state as StateSchema)).toEqual('');
  });
});
