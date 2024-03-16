import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateError } from './getProfileValidateError';
import { ValidateProfileError } from '../../types/profile';

describe('getProfileValidateError.test', () => {
  test('should return validateError false value', () => {
    const errors = [ValidateProfileError.INCORRECT_AGE];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: errors,

      }
    };
    expect(getProfileValidateError(state as StateSchema)).toEqual(errors);
  });
  test('should return validateError true value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [],
      }
    };
    expect(getProfileValidateError(state as StateSchema)).toEqual([]);
  });
  test('should return empty', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {}
    };
    expect(getProfileValidateError(state as StateSchema)).toEqual(undefined);
  });
});
