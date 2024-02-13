import { CombinedState, Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateScheme';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { $api } from 'shared/api/api';
import { NavigateFunction } from 'react-router-dom';

export function createReduxStore (initialState?: StateSchema, asyncReducers?:  ReducersMapObject<StateSchema>, navigate?: NavigateFunction){
	const rootRedusers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		user: userReducer,
	};

	const reducerManager = createReducerManager(rootRedusers);

	const extraArgs = {
		api: $api,
		navigate
	};

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: getDefaultMiddleware => getDefaultMiddleware({
			thunk: {
				extraArgument: extraArgs
			}
		})
	});
	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
}
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
