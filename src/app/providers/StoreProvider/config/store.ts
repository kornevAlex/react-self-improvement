import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateScheme';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';

export function createReduxStore (initialState?: StateSchema, asyncReducers?:  ReducersMapObject<StateSchema>){
	const rootRedusers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		user: userReducer,
	};

	const reducerManager = createReducerManager(rootRedusers);

	const store = configureStore<StateSchema>({
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
	// eslint-disable-next-line
	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
}
