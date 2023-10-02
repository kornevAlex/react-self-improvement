import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { AuthSchema } from 'features/AuthByUsername';
import { NavigateFunction } from 'react-router-dom';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    auth?: AuthSchema,
    profile?: ProfileSchema
}

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface thunkExtraArg {
    api: AxiosInstance;
    navigate?: NavigateFunction;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: thunkExtraArg;
}
