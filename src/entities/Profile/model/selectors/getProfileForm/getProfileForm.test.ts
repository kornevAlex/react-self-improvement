import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

describe('getProfileForm.test', () => {
  test('should return empty form', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {},
      }
    };
    expect(getProfileForm(state as StateSchema)).toEqual({});
  });
  test('should return isLoading true value', () => {
    const form = {
      age: 21,
      username: 'test',
      city: 'Moscow',
      country: Country.Russia,
      currency: Currency.EUR,
      firstname: 'test'
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form
      }
    };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });
  test('should return empty', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {}
    };
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
