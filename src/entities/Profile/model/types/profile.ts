import { Country, Currency } from 'shared/const/common';

export interface ProfileInt {
    'firstname': string,
    'lastname': string,
    'age': number,
    'currency': Currency,
    'country': Country,
    'city': string,
    'username': string,
    'avatar': string
}

export interface ProfileSchema {
    data?: ProfileInt;
    error?: string;
    isLoading: boolean;
    readonly: boolean;
}
